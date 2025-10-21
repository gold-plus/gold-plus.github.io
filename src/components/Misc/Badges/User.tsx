import React, { useId }  from 'react';
import clsx from 'clsx';
import { Tooltip } from 'react-tooltip';
import styles from './styles.module.css';

interface UserBadgeProps {
  name: string;
  url: string;
  imageUrl: string;
  title: string;
}

export const UserBadge: React.FC<UserBadgeProps> = ({ name, url, imageUrl, title }) => {
  const tooltipId = `tooltip:${useId()}`;
  return (
    <>
      <a
        href={url || undefined}
        target={url ? '_blank' : undefined}
        rel={url ? 'noopener noreferrer' : undefined}
        className={clsx(styles['link'], !url && styles['no-link'], !imageUrl && styles['badge--avatar--default'])}
        data-tooltip-id={tooltipId}
        data-tooltip-content={name}
      >
        <div className={styles['badge--avatar--wrap']}>
        <img
            src={imageUrl || "/img/icons/avatar.svg"}
            alt={title}
            className={styles['badge--avatar']}
        />
        </div>
      </a>
      <Tooltip
        id={tooltipId}
        place="top"
        opacity={1.0}
        className={styles['badge--tooltip']}
      />
    </>
  );
}
