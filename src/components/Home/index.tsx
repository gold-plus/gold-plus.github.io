import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '@site/src/components/Home/Header/Hero';
import Changelog from '@site/src/components/Home/Changelog';
import { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';
import { useInfiniteScroll } from '@site/src/hooks/useInfiniteScroll';

import styles from './styles.module.css';

const initial_releases_on_load = 5;
const releases_per_page = 3;

export default function Home({ releases }) {
  const { siteConfig } = useDocusaurusContext();
  const loadedReleases = useInfiniteScroll(releases,
    initial_releases_on_load, releases_per_page
  );

  return (
    <Layout
      description={
        translate({
          id: 'theme.home.tagline',
          message: 'Alternative CS 1.6 client - built with stability and performance in mind.',
        })}>
      <Head>
        <title>{`${siteConfig.customFields.homeTitle}`}</title>
        <meta property="og:title" content={`${siteConfig.customFields.homeTitle}`} />
      </Head>
      <Header />
      <main className={styles['main']}>
        <Changelog versions={loadedReleases} />
      </main>
    </Layout>
  );
}
