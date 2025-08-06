import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import {useDateTimeFormat} from '@docusaurus/theme-common/internal';

import styles from './styles.module.css';

function ChangelogItem({ version }) {
  const { metadata, Preview } = version;
  const atDate = new Date(metadata.date);
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formattedDate = dateTimeFormat.format(atDate);
  return (
    <div key={metadata.permalink} className={clsx('card', styles['card'])}>
      <div className={clsx('card__header', styles['header'])}>
        <div>
          <Link to={metadata.permalink} className={styles['title']}>{metadata.title}</Link>
        </div>
        <div>
          <time dateTime={atDate.toISOString()} itemProp="dateModified" className={styles['time']}>
            {formattedDate}
          </time>
        </div>
      </div>
      <div className="card__body">
        <Preview />
      </div>
      <div className="card__footer">
        <Link to={metadata.permalink} className="read-more">
          <Translate id="theme.changelog.item.readMore">Read more</Translate>
        </Link>
      </div>
    </div>
  );
}

export default function Changelog({ versions }) {
  return (
    <section>
        <div className={styles['wrapper']}>
            {versions.map((release, idx) => (
                <ChangelogItem key={idx} version={release} />
            ))}
        </div>
    </section>
  );
}
