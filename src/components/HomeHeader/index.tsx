import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Translate, { translate } from '@docusaurus/Translate';
import DownloadButton from '@site/src/components/DownloadButton';
import HomeHeaderHeroSlider from '@site/src/components/HomeHeaderHeroSlider';

import styles from './styles.module.css';

function ShineFrame({ children }) {
  const [shineTrigger, setShineTrigger] = useState(false);

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const startShine = () => {
      setShineTrigger(true);
      setTimeout(() => setShineTrigger(false), 2000);
    };

    const getRandomDelay = () => 10000 + Math.random() * 20000;

    const tick = () => {
      startShine();
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(tick, getRandomDelay());
    };

    startShine();

    timeoutId = setTimeout(tick, getRandomDelay());

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`${styles.heroHeader} ${shineTrigger ? styles.shine : ''}`}>
      {children}
    </div>
  );
}

export default function HomepageHeader() {
  const features = [
    translate({
      id: 'theme.home.feature.addons',
      message: 'Enhanced security, modern visual add-ons like radar, killfeed and customizable crosshairs.',
    }),
    translate({
      id: 'theme.home.feature.play_offline',
      message: 'Up-to-date ReHLDS and ReGameDLL builds with full offline bot support.',
    }),
    translate({
      id: 'theme.home.feature.bugfixes',
      message: 'Tons of bug fixes, QoL improvements, and performance tweaks.',
    }),
  ];
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
            <div className={styles.heroLeft}>
              <div className={styles.heroContainerTitle}>
                  <ShineFrame>
                      <div className={`${styles.heroTitle}`}>
                        <Translate id="theme.home.title">GoldClient</Translate>
                      </div>
                      <div className={styles.heroSubtitle}>
                        <Translate id="theme.home.tagline">Alternative CS 1.6 client with improvements and enhanced stability</Translate>
                      </div>
                  </ShineFrame>
                  <div className={styles.heroDescription}>
                      <ul>
                        {features.map((text, idx) => (
                          <li key={idx}>{text}</li>
                        ))}
                      </ul>
                  </div>
                  <DownloadButton />
              </div>
            </div>
            <div className={styles.heroRight}>
              <HomeHeaderHeroSlider />
            </div>
        </div>
      </div>
    </header>
  );
}
