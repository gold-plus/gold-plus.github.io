import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import DownloadButton from '@site/src/components/Home/DownloadButton';
import Preview from '@site/src/components/Home/Header/Preview';

import styles from './styles.module.css';

function Gold({ children }) {
  const [shineTrigger, setShineTrigger] = useState(false);

  useEffect(() => {
    let intervalId;
    let timeoutId;

    const startShine = () => {
      setShineTrigger(true);
      setTimeout(() => setShineTrigger(false), 2000);
    };

    const getRandomDelay = () => 5000 + Math.random() * 10000;

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
    <div className={`${styles['hero-header']} ${shineTrigger ? styles['shine'] : ''}`}>
      {children}
    </div>
  );
}

export default function Header() {
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
    translate({
      id: 'theme.home.feature.steam',
      message: 'Full Steam compatibility - automatic account sync when Steam is running.',
    }),
    translate({
      id: 'theme.home.feature.updates',
      message: 'Regular updates with improvements and fixes.',
    }),
  ];
  return (
    <header className={clsx('hero hero--primary', styles['hero-banner'])}>
      <div className={clsx('container', styles['container'])}>
        <div className={styles['hero-content']}>
          <div className={styles['hero-left']}>
            <div className={styles['hero-container-title']}>
                <Gold>
                    <div className={`${styles['hero-title']}`}>
                      <Translate id="theme.home.title">GoldClient</Translate>
                    </div>
                    <div className={styles['hero-subtitle']}>
                      <Translate id="theme.home.tagline">Alternative CS 1.6 client with improvements and enhanced stability</Translate>
                    </div>
                </Gold>
                <div className={styles['hero-description']}>
                    <ul>
                      {features.map((text, idx) => (
                        <li key={idx}>{text}</li>
                      ))}
                    </ul>
                </div>
                <DownloadButton />
            </div>
          </div>
          <div className={styles['hero-right']}>
            <Preview />
          </div>
        </div>
      </div>
    </header>
  );
}
