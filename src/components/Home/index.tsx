import React, { useState, useRef, useEffect, useCallback, Suspense } from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageHeader from '@site/src/components/HomepageHeader';
import RecentReleases from '@site/src/components/RecentReleases';
import styles from './index.module.css';

export default function HomePage({ releases }) {
  const { siteConfig } = useDocusaurusContext();
  //console.log(`releases = `, releases);
  const releaseInitialOnLoad = 3;
  const releasesPerPage = 1;
  const [page, setPage] = useState(1);
  const [loadedReleases, setLoadedReleases] = useState(releases.slice(0, releaseInitialOnLoad));
  const isLoadingRef = useRef(false);
  const lastDocHeightRef = useRef(null);
//  console.log(`releases = `, releases);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      const scrolledPercent = (scrollTop + windowHeight) / docHeight;
      if ((!isLoadingRef.current && scrolledPercent > 0.95)){// && lastDocHeightRef.current != docHeight) {
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
    if (page === 1) return;

    const start = releaseInitialOnLoad + (page - 2) * releasesPerPage;
    const end = Math.min(start + releasesPerPage, releases.length);
    const nextBatch = releases.slice(start, end);
    if (nextBatch.length === 0)
    {
      console.log('No more releases to load');
      isLoadingRef.current = false;
      return;
    }

    setLoadedReleases((prev) => {
      const prevPermalinks = new Set(prev.map((r) => r.metadata.permalink));
      const filteredNext = nextBatch.filter((r) => !prevPermalinks.has(r.metadata.permalink));
      if (filteredNext.length > 0) {
        console.log(`Appending ${filteredNext.length} new releases`, filteredNext);
      }
      return [...prev, ...filteredNext];
    });

    setTimeout(() => {
      isLoadingRef.current = false;
    }, 0);

  }, [page, releases]);

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.main}>
        <RecentReleases versions={loadedReleases} />
      </main>
    </Layout>
  );
}
