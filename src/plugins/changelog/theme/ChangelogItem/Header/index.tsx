/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useId, type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import BlogPostItemHeaderInfo from '@theme/BlogPostItem/Header/Info';
import ChangelogItemHeaderAuthors from '@theme/ChangelogItem/Header/Authors';
import { Tooltip } from 'react-tooltip';
import Translate, { translate } from '@docusaurus/Translate';

import clsx from 'clsx';
import styles from './styles.module.css';

// Reduce changelog title size, but only on list view
function ChangelogTitle() {
  const {metadata, isBlogPostPage} = useBlogPost();
  const isPrerelease = metadata.frontMatter.prerelease || false;

  const tooltipId = `tooltip:${useId()}`;
  const tooltipText = isPrerelease ? translate({
    id: `theme.home.changelog.prerelease.hint`,
    message: '',
  }) : null;

  return (
    <div className={styles['title--container']}>
      <BlogPostItemHeaderTitle
        className={clsx(
          !isBlogPostPage && styles['title--list'],
          styles['title--no-margin']
        )}
      />
      {isPrerelease && (
        <>
          <div data-tooltip-id={tooltipId} data-tooltip-content={tooltipText}>
            <div className={styles['badge']}>
                <Translate id="theme.home.changelog.prerelease">Pre-release</Translate>
            </div>
          </div>
          <Tooltip
            id={tooltipId}
            place='right'
            opacity={1.0}
            className={styles['badge--hint']}
          />
        </>
      )}
    </div>
  );
}

export default function ChangelogItemHeader(): ReactNode {
  return (
    <header>
      <ChangelogTitle />
      <BlogPostItemHeaderInfo />
      <ChangelogItemHeaderAuthors />
    </header>
  );
}
