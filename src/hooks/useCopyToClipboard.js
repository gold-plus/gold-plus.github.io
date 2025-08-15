import { useState, useCallback } from 'react';

export const useCopyToClipboard = (timeout = 2000) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback((text) => {
    if (!navigator?.clipboard) {
      return;
    }
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
    }).catch(err => {
      setIsCopied(false);
    });
  }, [timeout]);

  return { isCopied, copy };
};
