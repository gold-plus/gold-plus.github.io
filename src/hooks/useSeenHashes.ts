import { useRef, useCallback } from 'react';

const STORAGE_KEY = 'seenCommitHashes';
const HIGHLIGHT_DURATION_MS = 1440 * 60 * 1000; // 1 day time to live highlight
const MAX_HASHES_TO_STORE = 30;
const FORCE_HIGHLIGHT_FOR_NEW_USERS = true;

interface SeenInfo {
  sha: string;
  timestamp: number;
}
type SeenHashes = SeenInfo[];

const getSeenHashes = (): SeenHashes => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error(`[getSeenHashes] CRITICAL: Failed to parse localStorage`, e);
    return [];
  }
};

export function useSeenHashes() {
  const seenHashesRef = useRef<SeenHashes>(getSeenHashes());
  const isFirstVisitRef = useRef<boolean>(seenHashesRef.current.length === 0);
  const isNew = useCallback((sha: string): boolean => {
    if (!sha) return false;
    if (FORCE_HIGHLIGHT_FOR_NEW_USERS && isFirstVisitRef.current) return true;
    if (!FORCE_HIGHLIGHT_FOR_NEW_USERS && isFirstVisitRef.current) return false;
    const hashesInRef = seenHashesRef.current;
    const seenInfo = hashesInRef.find(item => item.sha === sha);
    if (!seenInfo) return true;
    if (seenInfo.timestamp === -1) return false;
    const timeSinceSeen = Date.now() - seenInfo.timestamp;
    const shouldHighlight = timeSinceSeen < HIGHLIGHT_DURATION_MS;
    return shouldHighlight;
  }, []);

  const markAsSeen = useCallback((sha: string) => {
    const currentHashes = getSeenHashes();
    const isAlreadySeen = currentHashes.some(item => item.sha === sha);
    if (isAlreadySeen) {
      return;
    }
    let timestamp;
    if (FORCE_HIGHLIGHT_FOR_NEW_USERS && isFirstVisitRef.current) {
      timestamp = Date.now();
    } else {
      timestamp = isFirstVisitRef.current ? -1 : Date.now();
    }
    let newHashes = [...currentHashes, { sha, timestamp }];
    if (newHashes.length > MAX_HASHES_TO_STORE) {
      newHashes = newHashes.slice(newHashes.length - MAX_HASHES_TO_STORE);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newHashes));
    seenHashesRef.current = newHashes;
  }, []);

  return { isNew, markAsSeen };
}
