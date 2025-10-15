import React, { useId } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { Tooltip } from 'react-tooltip';
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
  const isPrerelease = metadata.prerelease || false;

  const tooltipId = `tooltip:${useId()}`;
  const tooltipText = isPrerelease ? translate({
    id: `theme.home.changelog.prerelease.hint`,
    message: '',
  }) : null;

  return (
    <div key={metadata.permalink} className={clsx('card', styles['card'])}>
      <div className={clsx('card__header', styles['header'])}>
        <div className={styles['card--container']}>
          <Link to={metadata.permalink} className={styles['title']}>{metadata.title}</Link>
          {isPrerelease && (
            <>
              <div data-tooltip-id={tooltipId} data-tooltip-content={tooltipText}>
                <div className={styles['badge']}>
                    <Translate id="theme.home.changelog.prerelease">Pre-release</Translate>
                </div>
              </div>
              <Tooltip
                id={tooltipId}
                place='left'
                opacity={1.0}
                className={`${styles['badge--hint']}`}
              />
            </>
          )}
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
