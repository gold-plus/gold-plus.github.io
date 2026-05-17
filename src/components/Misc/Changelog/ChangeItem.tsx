import React from 'react';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

interface ChangeItemProps {
  type: 'new' | 'improve' | 'fix' | 'remove';
  children: React.ReactNode;
}

const labels = {
  new:     <Translate id="theme.changelog.badge.new">New</Translate>,
  improve: <Translate id="theme.changelog.badge.improve">Improve</Translate>,
  fix:     <Translate id="theme.changelog.badge.fix">Fix</Translate>,
  remove:  <Translate id="theme.changelog.badge.remove">Remove</Translate>
};

export function ChangeItem({ type, children }: ChangeItemProps) {
  return (
    <div className={styles['change-item']}>
      <div className={`${styles['badge']} ${styles[type]}`}>
        {labels[type]}
      </div>
      <div className={styles['change-text']}>
        {children}
      </div>
    </div>
  );
}
