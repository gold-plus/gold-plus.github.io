/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import fs from 'fs-extra';
import path from 'path';

import { processMdxComponents } from './mdx-components';

/**
 * Multiple versions may be published on the same day, causing the order to be
 * the reverse. Therefore, our publish time has a "fake hour" to order them.
 */
// TODO may leak small amount of memory in multi-locale builds
const publishTimes = new Set<string>();

type Author = {name: string; url: string; alias: string; imageURL: string};

type AuthorsMap = Record<string, Author>;

type ChangelogEntry = {
  title: string;
  content: string;
  authors: Author[];
};

function parseAuthor(committerLine: string): Author {
  const groups = committerLine.match(
    /- (?:(?<name>.*?) \()?\[@(?<alias>.*)\]\((?<url>.*?)\)\)?/,
  )!.groups as {name: string; alias: string; url: string};

  return {
    ...groups,
    name: groups.name ?? groups.alias,
    imageURL: `https://github.com/${groups.alias}.png`,
  };
}

function parseAuthors(content: string): Author[] {
  const sectionMarkers = ['authors', 'testers', 'contributors'];
  const authorsSet = new Map<string, Author>();
  for (const marker of sectionMarkers) {
    const sectionContent = content.match(new RegExp(
      `<!--\\s*${marker}\\s*-->(?:[\\s\\n]*)([\\s\\S]*?)(?=\\n\\s*#{2,}|\\n\\s*<!--|$)`, 'i'
    ))?.[1];
    if (!sectionContent) continue;

    const lines = sectionContent.match(/- .*/g);
    if (!lines) continue;

    for (const line of lines) {
      const author = parseAuthor(line);
      if (author?.url) {
        authorsSet.set(author.url, author);
      }
    }
  }

  return [...authorsSet.values()].sort((a, b) => a.url.localeCompare(b.url));
}

export function createAuthorsMap(
  changelogEntries: ChangelogEntry[],
): AuthorsMap {
  const allAuthors = changelogEntries.flatMap((entry) => entry.authors);
  const authorsMap: AuthorsMap = {};
  allAuthors?.forEach((author) => {
    authorsMap[author.alias] = author;
  });
  return authorsMap;
}

function toChangelogEntry(sectionContent: string, authorsData: Record<string, any>): ChangelogEntry | null {
  const titleLine = sectionContent
    .match(/\n## .*/)?.[0]
    .trim()
    .replace('## ', '');
  if (!titleLine) {
    return null;
  }
  let content = sectionContent
    .replace(/\n## .*/, '')
    .trim();

  const authors = parseAuthors(content);
  const isPrerelease = /beta|pre-release|rc/i.test(titleLine.toLowerCase());
  const cleanTitle = titleLine.replace(/ *(\([\d-]+\)|\[.*?\])/g, '');

  const { processedContent, imports } = processMdxComponents(cleanTitle, content, authorsData);

  let hour = 20;
  const date = titleLine.match(/ \((?<date>.*)\)/)?.groups!.date;
  while (publishTimes.has(`${date}T${hour}:00`)) {
    hour -= 1;
  }
  publishTimes.add(`${date}T${hour}:00`);

  const finalContent = `---
mdx:
 format: mdx
prerelease: ${isPrerelease}
date: ${`${date}T${hour}:00`}${
      authors.length > 0
        ? `
authors:
${authors.map((author) => `  - '${author.alias}'`).join('\n')}`
        : ''
    }
---

${imports.join('\n')}

# ${cleanTitle}

${processedContent.replace(/####/g, '##')}`

  return {
    authors,
    title: cleanTitle,
    content: finalContent,
  };
}

export function toChangelogEntries(filesContent: string[], authorsData: Record<string, any>): ChangelogEntry[] {
  publishTimes.clear();
  return filesContent
    .flatMap((content) => content.split(/(?=\n## )/))
    .map((sectionContent) => toChangelogEntry(sectionContent, authorsData))
    .filter((s): s is ChangelogEntry => s !== null);
}

export async function createBlogFiles(
  generateDir: string,
  changelogEntries: ChangelogEntry[]
): Promise<void> {

  await Promise.all(
    changelogEntries.map((changelogEntry) =>
      fs.outputFile(
        path.join(generateDir, `${changelogEntry.title}.md`),
        changelogEntry.content,
      ),
    ),
  );

  await fs.outputFile(
    path.join(generateDir, 'authors.json'),
    JSON.stringify(createAuthorsMap(changelogEntries), null, 2),
  );
}
