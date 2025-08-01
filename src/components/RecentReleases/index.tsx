import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function RecentReleaseCard({ version }) {
  const { metadata, Preview } = version;
  return (
    <div key={metadata.permalink} className={styles.card}>
      <div className={styles.date}>{new Date(metadata.date).toLocaleDateString()}</div>
      <Link to={metadata.permalink} className={styles.title}>{metadata.title}</Link>
        <Preview />
      <Link to={metadata.permalink} className={styles.readMore}>
        Read more →
      </Link>
    </div>
  );
}

export default function RecentReleases({ versions }) {
  return (
    <section>
        <div className={styles.wrapper}>
            {versions.map((release, idx) => (
                <RecentReleaseCard key={idx} version={release} />
            ))}
        </div>
    </section>
  );
}
