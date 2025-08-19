import { useEffect, useRef } from 'react';

export function useRandomInterval(callback, minDelay, maxDelay, immediate = false) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (minDelay === null || maxDelay === null) {
      return;
    }

    let timeoutId;

    const tick = () => {
      savedCallback.current();
      scheduleNextTick();
    };

    const scheduleNextTick = () => {
      const delay = minDelay + Math.random() * (maxDelay - minDelay);
      timeoutId = setTimeout(tick, delay);
    };

    if (immediate) {
      savedCallback.current();
    }

    scheduleNextTick();

    return () => clearTimeout(timeoutId);

  }, [minDelay, maxDelay]);
}