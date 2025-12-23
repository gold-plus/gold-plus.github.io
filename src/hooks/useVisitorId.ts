import { useEffect, useState } from 'react';

import FingerprintJS from '@fingerprintjs/fingerprintjs';

const STORAGE_KEY = 'visitor_id';

function generateHex32() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, b =>
    b.toString(16).padStart(2, '0')
  ).join('');
}

export function useVisitorId() {
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getVisitorId = async () => {
      try {
        const storedId = localStorage.getItem(STORAGE_KEY);
        if (storedId) {
          setVisitorId(storedId);
          return;
        }

        const fp = await FingerprintJS.load();
        const result = await fp.get();
        const newId = result.visitorId;

        localStorage.setItem(STORAGE_KEY, newId);
        setVisitorId(newId);
      } catch (e) {
        console.error('Fingerprint error, using fallback:', e);
        const randomId = generateHex32();
        localStorage.setItem(STORAGE_KEY, randomId);
        setVisitorId(randomId);
      } finally {
        setIsLoading(false);
      }
    };

    getVisitorId();
  }, []);

  return { visitorId, isLoading };
}
