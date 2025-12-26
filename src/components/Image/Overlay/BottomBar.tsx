import React, { FC } from 'react';

import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

interface BottomBarProps {
  onClick: (e: React.MouseEvent) => void;
  isCopied: boolean;
  className?: string;
  transparent?: boolean;
  children: React.ReactNode;
}

export const BottomBar: FC<BottomBarProps> = ({
    onClick,
    isCopied,
    className = '',
    transparent = false,
    children
}) => {
  const classes = [
    styles['banner-bottom'],
    transparent ? styles['banner-bottom--transparent'] : '',
    className
  ].join(' ');
  return (
    <div className={classes}>
      <div className={styles['banner-bottom-wrapper']} onClick={onClick}>
        {children}
      </div>
      {isCopied && (
        <span className={styles['copy-feedback']}>
          <Translate id="theme.common.copyFeedback">Text copied to clipboard</Translate>!
        </span>
      )}
    </div>
  );
};
