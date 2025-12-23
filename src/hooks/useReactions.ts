import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, increment, arrayUnion, arrayRemove } from 'firebase/firestore';
import { translate } from '@docusaurus/Translate';
import { firestore } from '@site/src/integrations/firebase';
import { useVisitorId } from './useVisitorId';

import FingerprintJS from '@fingerprintjs/fingerprintjs';

export const ReactionTypes = [
  { label: 'thumbs_up', emoji: '👍' },
  { label: 'smile',     emoji: '😄' },
  { label: 'tada',      emoji: '🎉' },
  { label: 'heart',     emoji: '❤️' },
  { label: 'rocket',    emoji: '🚀' },
  { label: 'eyes',      emoji: '👀' },
  { label: 'bug',       emoji: '🐛' },
];

interface UseReactionsProps {
  docId: string;
  collection: string;
}

export function useReactions({ docId, collection }: UseReactionsProps) {
  const { visitorId, isLoading: isVisitorIdLoading } = useVisitorId();

  const [counts, setCounts] = useState<Record<string, number>>({});
  const [myVotes, setMyVotes] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  // fetch data
  useEffect(() => {
    if (!visitorId) return;

    const fetchData = async () => {
      const docRef = doc(firestore, collection, docId);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const newCounts: Record<string, number> = {};
          const newMyVotes: Record<string, boolean> = {};

          ReactionTypes.forEach(r => {
            newCounts[r.label] = data[`count_${r.label}`] || 0;
            const votersList = data[`voters_${r.label}`] || [];
            if (votersList.includes(visitorId)) {
              newMyVotes[r.label] = true;
            }
          });

          setCounts(newCounts);
          setMyVotes(newMyVotes);
        }
      } catch (e) {
        console.error("Error fetching reactions:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [docId, visitorId, collection]);

  const toggleReaction = async (type: string, closeMenuCallback?: () => void) => {
    if (!visitorId || isProcessing) return;
    setIsProcessing(true);

    if (closeMenuCallback) closeMenuCallback();

    const isRemoving = myVotes[type];
    setMyVotes(prev => ({ ...prev, [type]: !isRemoving }));
    setCounts(prev => ({
      ...prev,
      [type]: Math.max(0, (prev[type] || 0) + (isRemoving ? -1 : 1))
    }));

    const docRef = doc(firestore, collection, docId);
    const updateData = {
      [`count_${type}`]: increment(isRemoving ? -1 : 1),
      [`voters_${type}`]: isRemoving ? arrayRemove(visitorId) : arrayUnion(visitorId)
    };

    try {
      await setDoc(docRef, updateData, { merge: true });
    } catch (e) {
      console.error("Error saving reaction:", e);
    } finally {
      setTimeout(() => { setIsProcessing(false); }, 1000);
    }
  };

  const getSummaryText = () => {
    if (loading || !visitorId) return '';

    const totalReactions = Object.values(counts).reduce((sum, val) => sum + val, 0);
    const myReactionCount = Object.values(myVotes).filter(v => v).length;

    if (totalReactions <= 0) return '';

    if (myReactionCount > 0) {
      const othersCount = totalReactions - myReactionCount;
      if (othersCount <= 0) {
        return translate({ id: 'theme.reactions.summary.youOnly', message: 'You reacted' });
      } else if (othersCount === 1) {
        return translate({ id: 'theme.reactions.summary.youAndOne', message: 'You and 1 other reacted' });
      } else {
        return translate({ id: 'theme.reactions.summary.youAndMany', message: 'You and {count} others reacted' }, { count: othersCount });
      }
    } else if (totalReactions === 1) {
      return translate({ id: 'theme.reactions.summary.onePerson', message: '1 person reacted' });
    } else {
      return translate({ id: 'theme.reactions.summary.manyPeople', message: '{count} people reacted' }, { count: totalReactions });
    }
  };

  return {
    counts,
    myVotes,
    loading: isVisitorIdLoading || !visitorId,
    toggleReaction,
    summaryText: getSummaryText(),
    isProcessing,
  };
}
