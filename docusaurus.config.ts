import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as path from 'path';
import ConfigLocalized from './docusaurus.config.localized.json';

const defaultLocale = 'ru';

function getLocalizedConfigValue(key: keyof typeof ConfigLocalized) {
  const currentLocale = process.env.DOCUSAURUS_CURRENT_LOCALE ?? defaultLocale;
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

const config: Config = {
  title: 'GoldClient',
  favicon: 'img/favicon.ico',
  customFields: {
    currentVersion: '2.5.6.0',
    downloadProduct: 'https://cdn.download-cs.net/cs16_russian.exe'
  },
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://gold-plus.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '', // Usually your GitHub org/user name.
  projectName: 'gold-plus', // Usually your repo name.

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
        debug: true, // This will enable the plugin in production
        docs: false,
        theme: {
          customCss: './src/css/theme.css',
        },
      } satisfies Preset.Options
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'GoldClient Plus',
        src: 'img/logo.svg'
      },
      items: [
        {to: '/changelog', label: 'Changelog', position: 'left'},
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
    footer: {
      style: 'dark',
      copyright: getLocalizedConfigValue('footer.copyright').replace("{year}", String(new Date().getFullYear())),
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
      ['./src/plugins/changelog/index.ts', {
        blogTitle: 'Changelog',
        // Not useful, but permits to run git commands earlier
        // Otherwise the sitemap plugin will run them in postBuild()
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        blogDescription: 'Keep yourself up-to-date about new features in every release',
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
      './src/plugins/home-generate-preview/index.ts',
  ],
};

export default config;
