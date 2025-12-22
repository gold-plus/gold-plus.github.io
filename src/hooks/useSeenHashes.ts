import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'seen_changelog';
const HIGHLIGHT_DURATION_MS = 1440 * 60 * 1000; // 1 day time to live highlight
const MAX_HASHES_TO_STORE = 30;
const FORCE_HIGHLIGHT_FOR_NEW_USERS = true;

interface SeenInfo {
  timestamp: number;
}

interface StoredData {
  version: string;
  hashes: Record<string, SeenInfo>;
}

const getStoredData = (version: string): StoredData | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const parsed: StoredData = JSON.parse(stored);
    if (parsed.version !== version) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch (e) {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

export function useSeenHashes(version : string) {
  const [storedData, setStoredData] = useState<'loading' | StoredData | null>('loading');
  useEffect(() => {
    setStoredData(getStoredData(version));
  }, [version]);

  const isFirstVisit = storedData === null;
  const seenHashes = (storedData && storedData !== 'loading') ? storedData.hashes : {};
  const isNew = useCallback((sha: string): boolean => {
    if (storedData === 'loading') return false;
    if (FORCE_HIGHLIGHT_FOR_NEW_USERS && isFirstVisit) return true;
    if (!FORCE_HIGHLIGHT_FOR_NEW_USERS && isFirstVisit) return false;
    const seenInfo = seenHashes[sha];
    if (!seenInfo) return true;
    if (seenInfo.timestamp === -1) return false;
    const timeSinceSeen = Date.now() - seenInfo.timestamp;
    return timeSinceSeen < HIGHLIGHT_DURATION_MS;

  }, [storedData, isFirstVisit, seenHashes]);

  const markAsSeen = useCallback((sha: string) => {
    setTimeout(() => {
      let currentData = getStoredData(version) || { version, hashes: {} };
      if (currentData.hashes[sha]) return;
      const wasFirstVisit = !localStorage.getItem(STORAGE_KEY);
      const timestamp = wasFirstVisit ?
        (FORCE_HIGHLIGHT_FOR_NEW_USERS ? Date.now() : -1)
        : Date.now();

      currentData.hashes[sha] = { timestamp };
      const hashKeys = Object.keys(currentData.hashes);
      if (hashKeys.length > MAX_HASHES_TO_STORE) {
        const oldestKey = Object.entries(currentData.hashes).sort((a, b) => a[1].timestamp - b[1].timestamp)[0][0];
        delete currentData.hashes[oldestKey];
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
    }, 0);
  }, [version]);

  return { isNew, markAsSeen };
}
