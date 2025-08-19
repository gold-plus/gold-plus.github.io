import React, { useState, useEffect, useRef } from 'react';

export function useInfiniteScroll(
  allItems,
  initialCount,
  perPageCount,
) {
  const [page, setPage] = useState(1);
  const [loadedItems, setLoadedItems] = useState(allItems.slice(0, initialCount));

  const isLoadingRef = useRef(false);

  // follow scroll
  useEffect(() => {
    if (loadedItems.length >= allItems.length) return;
    const handleScroll = () => {
      const scrolledPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (!isLoadingRef.current && scrolledPercent > 0.9) {
        isLoadingRef.current = true;
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allItems.length, loadedItems.length]);

  // reacts to the 'page' change
  useEffect(() => {
    if (page === 1) return;
    const start = initialCount + (page - 2) * perPageCount;
    const end = Math.min(start + perPageCount, allItems.length);
    const nextBatch = allItems.slice(start, end);

    if (nextBatch.length === 0) {
      isLoadingRef.current = false;
      return;
    }

    setLoadedItems((prev) => {
      const prevPermalinks = new Set(prev.map((r) => r.metadata.permalink));
      const filteredNext = nextBatch.filter((r) => !prevPermalinks.has(r.metadata.permalink));
      return [...prev, ...filteredNext];
    });

    setTimeout(() => {
      isLoadingRef.current = false;
    }, 0);

  }, [page, allItems, initialCount, perPageCount]);

  useEffect(() => {
    setPage(1);
    setLoadedItems(allItems.slice(0, initialCount));
  }, [allItems, initialCount]);

  return loadedItems;
}
