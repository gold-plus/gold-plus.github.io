/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'path';
import fs from 'fs-extra';
import pluginContentBlog, { validateOptions } from '@docusaurus/plugin-content-blog';
import { getPluginI18nPath, readDataFile } from '@docusaurus/utils';

export { validateOptions };

import {
  aliasedSitePath,
  docuHash,
  normalizeUrl,
  safeGlobby,
} from '@docusaurus/utils';

import { createBlogFiles, toChangelogEntries } from './utils';

const MonorepoRoot = path.resolve(path.join(__dirname, '../../..'));

async function getChangelogFiles(currentLocale: string, defaultLocale: string): Promise<string[]> {
  const allFiles = await safeGlobby(['CHANGELOG*.md'], {
    cwd: MonorepoRoot,
  });

  const hasLocaleSpecific = allFiles.some((filename) =>
    filename.endsWith(`.${currentLocale}.md`)
  );

  const matchedFiles = allFiles.filter((filename) => {
    // if there's any locale-specific changelog, skip non-locale ones
    const isLocaleSpecific = filename.endsWith(`.${currentLocale}.md`);
    const isNonLocale = !/\.[a-z]{2}\.md$/i.test(filename);

    if (hasLocaleSpecific) return isLocaleSpecific;

    // fallback: allow non-locale only for defaultLocale
    if (currentLocale === defaultLocale && isNonLocale)
      return true;
    return false;
  });

  if (matchedFiles.length === 0) {
      throw new Error(`[changelog-plugin] No changelog files found for locale: ${currentLocale}`);
  }

  return matchedFiles.map((f) => f);
}

function readChangelogFile(filename: string) {
  return fs.readFile(path.join(MonorepoRoot, filename), 'utf-8');
}

async function loadChangelogEntries(changelogFiles: string[], authorsData: Record<string, any>, defaultReleaseDescription : string) {
  const filesContent = await Promise.all(changelogFiles.map(readChangelogFile));
  return toChangelogEntries(filesContent, authorsData, defaultReleaseDescription);
}

export default async function ChangelogPlugin(context, options) {
  const generateDir = path.join(context.siteDir, 'changelog/',
    (context.i18n.currentLocale == context.i18n.defaultLocale) ? 'default' : context.i18n.currentLocale);

  const { defaultReleaseDescription } = context.siteConfig.customFields;

  const blogOptions = {
    ...options,
    path: generateDir,
    id: 'changelog',
    blogListComponent: '@theme/ChangelogList',
    blogPostComponent: '@theme/ChangelogPage',
  };

  const blogPlugin = await pluginContentBlog(context, blogOptions);
  const changelogFiles = await getChangelogFiles(context.i18n.currentLocale, context.i18n.defaultLocale);
  const contentPaths = {
      contentPath: path.resolve(context.siteDir, 'changelog'),
      contentPathLocalized: getPluginI18nPath({
          localizationDir: context.localizationDir,
          pluginName: 'docusaurus-plugin-content-blog-changelog',
          pluginId: options.id,
      }),
  };

  const authorsData = await readDataFile({
    filePath: blogOptions.authorsMapPath,
    contentPaths: contentPaths
  }) || {};

  return {
    ...blogPlugin,
    name: 'docusaurus-plugin-content-blog-changelog',

    async loadContent() {
      const changelogEntries = await loadChangelogEntries(changelogFiles, authorsData, defaultReleaseDescription);

      // we have to create intermediate files here
      // unfortunately Docusaurus doesn't have yet any concept of virtual file
      await createBlogFiles(generateDir, changelogEntries);

      // read the files we actually just wrote
      const content = (await blogPlugin.loadContent?.())!;

      content.blogPosts.forEach((post, index) => {
        const pageIndex = Math.floor(
          index / (options.postsPerPage as number),
        );
        // @ts-expect-error: TODO Docusaurus use interface declaration merging
        post.metadata.listPageLink = normalizeUrl([
          context.baseUrl,
          options.routeBasePath,
          pageIndex === 0 ? '/' : `/page/${pageIndex + 1}`,
        ]);
      });
      return content;
    },

    contentLoaded: async function (params) {
      const { content, actions } = params;

      async function createPage(blogPost, index) {
        return {
          // inject the metadata you need for each recent releases
          metadata: await actions.createData(
            `release-metadata-${index}.json`,
            JSON.stringify({
              source: blogPost.metadata.source,
              title: blogPost.metadata.title,
              date: blogPost.metadata.date,
              description: blogPost.metadata.description,
              permalink: blogPost.metadata.permalink,
              frontMatter: blogPost.metadata.frontMatter,
              prerelease: blogPost.metadata.frontMatter.prerelease || false,
            })
          ),

          // inject the MDX excerpt as a JSX component prop
          // (what's above the <!-- truncate --> marker)
          Preview: {
            __import: true,
            // the markdown file for the blog releases will be loaded by webpack
            path: blogPost.metadata.source,
            query: { truncated: true },
          },
        };
      }

      const modules = await Promise.all(
        content.blogPosts.map((release, idx) => createPage(release, idx))
      );

      actions.addRoute({
        // add route for the home page
        path: context.baseUrl,
        exact: true,

        // the component to use for the "Home" page route
        component: '@site/src/components/Home/index.tsx',

        // these are the props that will be passed to our "Home" page component
        modules: {
          releases: modules,
        },
      });

      // Call the default overridden `contentLoaded` implementation
      return blogPlugin.contentLoaded(params);
    },

    configureWebpack(config, isServer, utils, content) {
      const webpackConfig = blogPlugin.configureWebpack?.(config, isServer, utils, content);
      const pluginDataDirRoot = path.join(
        context.generatedFilesDir,
        'docusaurus-plugin-content-blog-changelog',
        'default',
      );
      // Redirect the metadata path to our folder
      // @ts-expect-error: unsafe but works
      const mdxLoader = webpackConfig.module.rules[0].use[0];
      mdxLoader.options.metadataPath = (mdxPath: string) => {
        // Note that metadataPath must be the same/in-sync as
        // the path from createData for each MDX.
        const aliasedPath = aliasedSitePath(mdxPath, context.siteDir);
        return path.join(pluginDataDirRoot, `${docuHash(aliasedPath)}.json`);
      };
      return webpackConfig;
    },

    getThemePath() {
      return './theme';
    },

    getPathsToWatch() {
      return [path.join(MonorepoRoot, 'CHANGELOG*.md')];
    },
  };
};
