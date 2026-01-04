// src/hooks/usePageFeedback.ts
import { useState, useEffect } from 'react';
import { doc, setDoc, increment, arrayUnion } from 'firebase/firestore';
import { firestore } from '@site/src/integrations/firebase';
import { useVisitorId } from './useVisitorId';

// Defines possible vote states
export type FeedbackVote = 'rating-yes' | 'rating-no' | null;

export type SubmitFeedbackArgs = {
  choice: 'rating-yes' | 'rating-no';
  reason?: string;
  comment?: string;
};

export type SubmitFeedbackFn = (
  args: SubmitFeedbackArgs
) => Promise<void>;

// Manages all feedback logic for a given page
export function usePageFeedback(pageId: string) {
  const { visitorId } = useVisitorId();

  // Stores the user's vote and timestamp from localStorage
  const [vote, setVote] = useState<{ choice: FeedbackVote; timestamp: number } | null>(null);

  // Tracks initial loading state
  const [loading, setLoading] = useState(true);

  const collectionName = 'page-feedback';
  const storageKey = `feedback_${pageId}`;

  // Checks localStorage on mount
  useEffect(() => {
    try {
      const storedVote = localStorage.getItem(storageKey);
      if (storedVote) {
        setVote(JSON.parse(storedVote));
      }
    } catch {} // Silently fail if JSON parsing fails
    setLoading(false);
  }, [pageId]);

  // Submits feedback to Firestore
  const submitFeedback: SubmitFeedbackFn = async ({ choice, reason, comment }) => {
    // Abort if no visitor ID
    if (!visitorId) return;

    const newVote = { choice, timestamp: Date.now() };
    setVote(newVote);
    localStorage.setItem(storageKey, JSON.stringify(newVote));

    const docId = pageId.replace(/^\/|\/$/g, '').replace(/\//g, '-');

    // Prepare data object for Firestore
    const docRef = doc(firestore, collectionName, docId);
    const dataToSend = {
      [choice]: increment(1),
    };

    if (comment || reason) {
      dataToSend.comments = arrayUnion({
        visitorId,
        choice,
        reason: reason || 'N/A',
        comment: comment || '',
        timestamp: new Date().toISOString(),
      });
    }

    await setDoc(docRef, dataToSend, { merge: true });
  };

  // Resets the vote state completely
  const resetVote = () => {
    localStorage.removeItem(storageKey);
    setVote(null);
  }

  return {
    vote: vote?.choice ?? null,
    isVoted: vote !== null,
    loading,
    submitFeedback,
    resetVote
  };
}
