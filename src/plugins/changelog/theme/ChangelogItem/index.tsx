/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import ChangelogItemHeader from '@theme/ChangelogItem/Header';
import type {Props} from '@theme/BlogPostItem';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemContent from '@theme/BlogPostItem/Content';

import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

type ChangelogItemProps = Props & {
  showReadMoreButton?: boolean;
};

export default function ChangelogItem({children, showReadMoreButton = true}: ChangelogItemProps): ReactNode {
  const {metadata} = useBlogPost();
  return (
    <BlogPostItemContainer className={styles.changelogItemContainer}>
      <ChangelogItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      {showReadMoreButton && (
      <div className="card__footer">
        <Link to={metadata.permalink} className="read-more">
          <Translate id="theme.changelog.item.readMore">Read more</Translate>
        </Link>
      </div>
      )}
    </BlogPostItemContainer>
  );
}
