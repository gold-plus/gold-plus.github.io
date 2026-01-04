import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as path from 'path';
import ConfigLocalized from './docusaurus.config.localized.json';

const defaultLocale = 'ru';
const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;

const currentVersion = '2.5.6.0';

const repoName = 'gold-plus';
const webSite = 'https://goldclient.ru';

function getLocalizedConfigValue(key: keyof typeof ConfigLocalized) {
  const values = ConfigLocalized[key];
  if (!values) {
    throw new Error(`Localized config key=${key} not found`);
  }

  const value = values[currentLocale] ?? values[defaultLocale];
  if (!value) {
    throw new Error(
      `Localized value for config key=${key} not found for both currentLocale=${currentLocale} or defaultLocale=${defaultLocale}`,
    );
  }
  return value;
}

function getChangelogDescription() {
  return getLocalizedConfigValue('changelog.description').replace('{version}', currentVersion);
}

const config: Config = {
  title: 'GoldClient',
  favicon: 'img/favicon.ico',
  customFields: {
    currentVersion,
    downloadProduct: 'https://cdn.download-cs.net/cs16_russian.exe',
    useLangAsIcon: true,
    homeTitle: getLocalizedConfigValue('title'),
    defaultReleaseDescription: getLocalizedConfigValue('changelog.release.description'),
  },
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: webSite,

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gold-plus', // Usually your GitHub org/user name.
  projectName: 'GoldClient', // Usually your repo name.

  onBrokenLinks: 'warn', //'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: defaultLocale,
    locales: ['ru', 'en'],
    localeConfigs: {
      en: {
        label: "English",
      },
      ru: {
        label: "Русский",
      },
    },
  },

  presets: [
    ['@docusaurus/preset-classic',
      {
        //debug: true, // this will enable the plugin in production
        //docs: false,
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/' + repoName + '/' + repoName + '.github.io/tree/master/'
        },
        theme: {
          customCss: './src/css/theme.css',
        },
        gtag: {
          trackingID: 'G-TC9Z5M38TV',
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: 'GTM-WRVHFXCM',
        }
      } satisfies Preset.Options
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: false, // enables the hide button
        autoCollapseCategories: false, // collapses sibling categories
      }
    },
    image: currentLocale === 'en' ?
      'img/goldclient-social-card-en.png' :
      'img/goldclient-social-card.png',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'GoldClient Plus',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/changelog/', label: 'Changelog', position: 'left'},
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: 'https://github.com/goldclient-plus/GoldSrc-Tracker',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    tableOfContents: {
      maxHeadingLevel: 4, // allow using head 4th level <h4> inside TOC (Table Of Contents)
    },
    footer: {
      style: 'dark',
      copyright: getLocalizedConfigValue('footer.copyright').replace("{year}", String(new Date().getFullYear())),
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      indexName: "goldcrawler",
      appId: "5NXISP8N8N",
      apiKey: "fd4c7c3baa5b0c7c951ffc6980e4b9d6",
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
      ['./src/plugins/changelog/index.ts', {
        blogTitle: 'Changelog',
        // Not useful, but permits to run git commands earlier
        // Otherwise the sitemap plugin will run them in postBuild()
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        blogDescription: getChangelogDescription(),
        blogSidebarCount: 'ALL',
        blogSidebarTitle: 'Changelog',
        routeBasePath: '/changelog',
        showReadingTime: false,
        postsPerPage: 20,
        archiveBasePath: null,
        authorsMapPath: 'authors.yml',
        feedOptions: {
          type: 'all',
          title: getLocalizedConfigValue('feed.title'),
          description: getLocalizedConfigValue('feed.description'),
          copyright: `Copyright © ${new Date().getFullYear()} GoldClient, Inc.`,
          language: defaultLocale,
        },
        onInlineAuthors: 'warn',
      }],
      ["docusaurus-plugin-yandex-metrica", {
        counterID: "103594554",
        webvisor: true,
        trackHash: true
      }],
      './src/plugins/home-generate-preview/index.ts',
  ],
  clientModules: [
    require.resolve('./src/clientModules/locale-redirect.js')
  ],
};

export default config;
