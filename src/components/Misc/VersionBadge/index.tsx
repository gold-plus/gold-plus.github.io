// src/components/Misc/VersionBadge/index.tsx
import React, { useId }   from 'react';
import { translate } from '@docusaurus/Translate';
import { Tooltip } from 'react-tooltip';

import styles from './styles.module.css';

interface VersionBadgeProps {
  type: 'added' | 'changed' | 'removed' | 'deprecated';
  since?: string;
}

export const VersionBadge: React.FC<VersionBadgeProps> = ({ type, since }) => {
  const statusText = translate({
    id: `theme.docs.versionBadge.${type}`,
    message: type.charAt(0).toUpperCase() + type.slice(1),
  });

  const tooltipText = `${statusText} ${since}`;
  const tooltipId = `tooltip:${useId()}`;

  return (
    <>
      <div data-tooltip-id={tooltipId} data-tooltip-content={tooltipText} className={`${styles['badge']} ${styles[`badge--${type}`]}`} />
      <Tooltip
        id={tooltipId}
        place='top'
        opacity={0.9}
        className={`${styles['badge--tooltip']}`}
      />
    </>
  );
};
