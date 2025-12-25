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
  const [uniqueVoters, setUniqueVoters] = useState<Set<string>>(new Set());

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
          const allVoters = new Set<string>();

          ReactionTypes.forEach(r => {
            newCounts[r.label] = data[`count_${r.label}`] || 0;
            const votersList: string[] = data[`voters_${r.label}`] || [];
            votersList.forEach(voter => allVoters.add(voter));

            if (votersList.includes(visitorId)) {
              newMyVotes[r.label] = true;
            }
          });

          setCounts(newCounts);
          setMyVotes(newMyVotes);
          setUniqueVoters(allVoters);
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

    const newMyVotes = { ...myVotes, [type]: !isRemoving };
    setMyVotes(newMyVotes);
    setCounts(prev => ({
      ...prev,
      [type]: Math.max(0, (prev[type] || 0) + (isRemoving ? -1 : 1))
    }));

    setUniqueVoters(prev => {
      const newSet = new Set(prev);
      if (isRemoving) {
        const hasOtherVotes = Object.values(newMyVotes).some(v => v === true);
        if (!hasOtherVotes) {
          newSet.delete(visitorId);
        }
      } else {
        newSet.add(visitorId);
      }
      return newSet;
    });

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

    const totalUniquePeople = uniqueVoters.size;
    const iVoted = Array.from(uniqueVoters).includes(visitorId);

    if (totalUniquePeople <= 0) return '';

    if (iVoted) {
      const othersCount = totalUniquePeople - 1;
      if (othersCount <= 0) {
        return translate({ id: 'theme.reactions.summary.youOnly', message: 'You reacted' });
      } else if (othersCount === 1) {
        return translate({ id: 'theme.reactions.summary.youAndOne', message: 'You and 1 other reacted' });
      } else {
        return translate({ id: 'theme.reactions.summary.youAndMany', message: 'You and {count} others reacted' }, { count: othersCount });
      }
    } else if (totalUniquePeople === 1) {
      return translate({ id: 'theme.reactions.summary.onePerson', message: '1 person reacted' });
    } else {
      return translate({ id: 'theme.reactions.summary.manyPeople', message: '{count} people reacted' }, { count: totalUniquePeople });
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
