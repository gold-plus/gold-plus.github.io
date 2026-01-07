import clsx from 'clsx';
import React, { useState, useCallback } from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import DownloadButton from '@site/src/components/Home/DownloadButton';
import HomePreview from '@site/src/components/Home/Header/Preview';

import { useRandomInterval } from '@site/src/hooks/useRandomInterval';

import styles from './styles.module.css';

function GoldEffect({ children, tmMin, tmMax }) {
  const [shine, setShine] = useState(false)
  useRandomInterval(
    useCallback(() => {
      setShine(true);
      setTimeout(() => setShine(false), 2000);
    }, []), tmMin, tmMax, true);

  return (
    <div className={`${styles['hero-header']} ${shine ? styles['shine'] : ''}`}>
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
      <div className='container'>
        <div className={styles['hero-content']}>
          <div className={styles['hero-left']}>
            <div className={styles['hero-container-title']}>
              <GoldEffect tmMin={5000} tmMax={10000}>
                  <h1 className={`${styles['hero-title']}`}>
                    <Translate id="theme.home.title">GoldClient</Translate>
                  </h1>
                  <h2 className={styles['hero-subtitle']}>
                    <Translate id="theme.home.tagline">Alternative CS 1.6 client with improvements and enhanced stability</Translate>
                  </h2>
              </GoldEffect>
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
            <HomePreview />
          </div>
        </div>
      </div>
    </header>
  );
}
