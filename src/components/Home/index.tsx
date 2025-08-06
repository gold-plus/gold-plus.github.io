import React, { useState, useRef, useEffect, useCallback, Suspense } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '@site/src/components/Home/Header/Hero';
import Changelog from '@site/src/components/Home/Changelog';

import styles from './styles.module.css';

export default function Home({ releases }) {
  const { siteConfig } = useDocusaurusContext();
  const releaseInitialOnLoad = 5;
  const releasesPerPage = 3;
  const [page, setPage] = useState(1);
  const [loadedReleases, setLoadedReleases] = useState(releases.slice(0, releaseInitialOnLoad));
  const isLoadingRef = useRef(false);
  const lastDocHeightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrolledPercent = (scrollTop + windowHeight) / docHeight;
      if ((!isLoadingRef.current && scrolledPercent > 0.90)) {
        const maxPages = Math.ceil((releases.length - releaseInitialOnLoad) / releasesPerPage) + 1;
        setPage((prevPage) => {
          if (prevPage < maxPages) {
            isLoadingRef.current = true;
            lastDocHeightRef.current = docHeight;
            return prevPage + 1;
          }
          return prevPage;
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [releasesPerPage, releases]);

  useEffect(() => {
    if (releaseInitialOnLoad > 0 && page === 1) return;
    const start = releaseInitialOnLoad + (page - 2) * releasesPerPage;
    const end = Math.min(start + releasesPerPage, releases.length);
    const nextBatch = releases.slice(start, end);
    if (nextBatch.length === 0) {
      isLoadingRef.current = false;
      return;
    }

    setLoadedReleases((prev) => {
      const prevPermalinks = new Set(prev.map((r) => r.metadata.permalink));
      const filteredNext = nextBatch.filter((r) => !prevPermalinks.has(r.metadata.permalink));
      return [...prev, ...filteredNext];
    });

    setTimeout(() => {
      isLoadingRef.current = false;
    }, 0);

  }, [page, releases]);

  return (
    <Layout title={`${siteConfig.title}`} description={`${siteConfig.customFields.description}`}>
      <Header />
      <main className={styles['main']}>
        <Changelog versions={loadedReleases} />
      </main>
    </Layout>
  );
}
