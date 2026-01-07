import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Header from '@site/src/components/Home/Header/Hero';
import Changelog from '@site/src/components/Home/Changelog';
import { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';
import { useInfiniteScroll } from '@site/src/hooks/useInfiniteScroll';
import { useProduct } from '@site/src/hooks/useProduct';

import styles from './styles.module.css';

const initial_releases_on_load = 5;
const releases_per_page = 3;

export default function Home({ releases }) {
  const { siteConfig } = useDocusaurusContext();
  const ClientProduct = useProduct('gameClient');
  const loadedReleases = useInfiniteScroll(releases,
    initial_releases_on_load, releases_per_page
  );

  return (
    <Layout
      description={
        translate({
          id: 'theme.home.description',
          message: 'Download GoldClient — the stable alternative CS 1.6 client. High performance, latest updates, and enhanced security. Play now and enjoy!',
        })}>
      <Head>
        <title>{`${siteConfig.customFields.homeTitle}`}</title>
        <meta property="og:title" content={`${siteConfig.customFields.homeTitle}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "GoldClient",
            "alternateName": ["GSClient", "GSClient+"],
            "url": siteConfig.url,
            "applicationCategory": "GameApplication",
            "operatingSystem": "Windows",
            "description": translate({
              id: 'theme.home.schema.description',
              message: 'GoldClient — the next generation and official successor to the GSClient project. Featuring latest updates, enhanced security, and bug fixes.',
            }),
            "softwareVersion": ClientProduct.version,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Head>
      <Header />
      <main className={styles['main']}>
        <Changelog versions={loadedReleases} />
      </main>
    </Layout>
  );
}
