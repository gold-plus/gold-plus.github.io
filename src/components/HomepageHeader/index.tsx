import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import DownloadButton from '@site/src/components/DownloadButton';

function GoldShinyText({ children }) {
  const [shineTrigger, setShineTrigger] = useState(false);

  useEffect(() => {
    const startShine = () => {
      setShineTrigger(true);
      setTimeout(() => setShineTrigger(false), 2000); // длительность shine анимации
    };

    // Старт при первом рендере
    startShine();

    // Рандомный интервал для повторов
    const interval = setInterval(() => {
      startShine();
    }, getRandomDelay());

    // Каждую итерацию пересоздаём интервал
    function getRandomDelay() {
      return 10000 + Math.random() * 20000;
    }

    const tick = () => {
      startShine();
      clearInterval(interval);
      const newInterval = setInterval(tick, getRandomDelay());
    };

    const firstTimeout = setTimeout(tick, getRandomDelay());

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, []);

  return (
    <div className={`${styles.heroFrameTitle} ${shineTrigger ? styles.shine : ''}`}>
      {children}
    </div>
  );
}

export default function HomepageHeader() {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const version = `${customFields.currentVersion}`;
  return (

    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>

            <div className={styles.heroContainerTitle}>
                <GoldShinyText>
                    <h1 className={`${styles.heroTitle}`}>GoldClient</h1>
                    <p className={styles.heroSubtitle}>alternative client for CS 1.6</p>
                </GoldShinyText>
                <div className={styles.heroDescription}>
                    <p>GoldClient provides up-to-date ReHLDS and ReGameDLL builds for offline bot play.</p>
                    <p>Includes various bug fixes, improvements, and more.</p>
                </div>
            </div>

            <DownloadButton />

          </div>
          <div className={styles.heroRight}>
            <div className={styles.gamePreview}>
              <img
                src="/img/preview-1.jpg"
                alt="CS 1.6 Screenshot"
                className={styles.gameScreenshot}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
