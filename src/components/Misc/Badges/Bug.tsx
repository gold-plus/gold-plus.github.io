// src/components/Misc/Badges/Bug.tsx
import React, { useId } from 'react';
import { Tooltip } from 'react-tooltip';
import { translate } from '@docusaurus/Translate';

import styles from './styles.module.css';

interface BugBadgeProps {
  tooltipText?: string;
}

export const BugBadge: React.FC<BugBadgeProps> = ({ tooltipText }) => {
  const tooltipId = `tooltip:${useId()}`;

  const text = tooltipText || translate({
    id: 'theme.changelog.bug.origin.hint',
    message: 'Bug from original build of the game',
  });

  return (
    <div className={styles['badge--bug']}>
      <img
        src="/img/icons/bug.svg"
        alt="Origin Bug Icon"
        className={styles['bug--icon']}
        data-tooltip-id={tooltipId}
        data-tooltip-content={text}
      />
      <Tooltip
        id={tooltipId}
        place="top"
        opacity={1.0}
        className={styles['badge--tooltip']}
      />
    </div>
  );
}
