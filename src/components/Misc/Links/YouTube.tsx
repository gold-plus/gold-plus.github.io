import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { translate } from '@docusaurus/Translate';

interface YouTubeLinkProps {
  videoId: string;
  time?: string | number;
}

export const YouTubeLink: React.FC<YouTubeLinkProps> = ({ videoId, time }) => {
  let href = `https://www.youtube.com/watch?v=${videoId}`;
  if (time) {
    href += `&t=${time}s`;
  }

  const watchOn = time ?
      translate({
        id: `theme.home.link.youtube.time`,
        message: 'Watch on YouTube (at {time}s)',
      }, {
        time: `${time}`
      })
    :
      translate({
        id: `theme.home.link.youtube`,
        message: 'Watch on YouTube',
      });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={watchOn}
      className={clsx(styles['link'], styles['link--youtube'])}
    >
      <img src="/img/icons/youtube.svg" />
    </a>
  );
}
