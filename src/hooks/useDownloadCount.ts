import { useEffect, useState } from 'react';
import { doc, getDoc, setDoc, increment } from 'firebase/firestore';
import { firestore } from '@site/src/integrations/firebase';

const DOWNLOAD_COOLDOWN_MS = 24 * 60 * 60 * 1000;

export function useDownloadCount(productId: string) {
  const [count, setCount] = useState<number | null>(null);
  const collectionName = 'download-counts';
  const STORAGE_KEY = 'download_tracker';

  useEffect(() => {
    const fetchCount = async () => {
      const docRef = doc(firestore, collectionName, productId);
      try {
        const docSnap = await getDoc(docRef);
        setCount(docSnap.exists() ? docSnap.data().count : 0);
      } catch (e) {
        console.error("Error fetching download count:", e);
        setCount(0);
      }
    };
    fetchCount();
  }, [productId]);

  const incrementCount = () => {
    let tracker: Record<string, number> = {};
    try {
      tracker = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {}

    const lastClickTimestamp = tracker[productId] || 0;
    const now = Date.now();

    if (now - lastClickTimestamp < DOWNLOAD_COOLDOWN_MS) {
      return;
    }

    setCount(prev => (prev === null ? 1 : prev + 1));

    tracker[productId] = now;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tracker));

    const docRef = doc(firestore, collectionName, productId);
    setDoc(docRef, {
      count: increment(1)
    }, { merge: true });
  };

  return { count, incrementCount };
}
