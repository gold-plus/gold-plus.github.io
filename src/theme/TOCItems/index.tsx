import React from 'react';
import TOCItems from '@theme-original/TOCItems';

import { useWindowSize } from '@docusaurus/theme-common';
import { useDocInfo } from '@site/src/context/DocInfoContext';
import { Feedback } from '@site/src/components/Misc/Page';

import styles from './styles.module.css';

export default function TOCItemsWrapper(props) {
  const { metadata } = useDocInfo();
  const windowSize = useWindowSize();
  const isDesktop = windowSize === 'desktop';

  const newProps = {
    ...props,
    toc: props.toc.map(item => ({
      ...item,
      value: item.value.replace(/.*:\s*/, ''),
      children: item.children
      ? item.children.map(sub => ({
        ...sub,
        value: sub.value.replace(/.*:\s*/, '')
      })
      )
      : []
    }))
  };

  if (metadata && isDesktop) {
    const showFeedback = metadata.frontMatter?.feedback === true;
    return (
      <div className={styles['toc-container-wrap']}>
        <div className={styles['toc-items-scroll']}>
          <TOCItems {...newProps} />
        </div>
        {showFeedback && (
          <div className={styles['toc-item-feedback']}>
            <Feedback pageId={metadata.id} isSidebar={true} />
          </div>
        )}
      </div>
    );
  }

  return <TOCItems {...newProps} />
}
