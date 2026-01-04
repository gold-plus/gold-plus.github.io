import React, {type ReactNode} from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type {WrapperProps} from '@docusaurus/types';

import Translate from '@docusaurus/Translate';

import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { Feedback } from '@site/src/components/Misc/Page';

import styles from './styles.module.css';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): ReactNode {
  const { metadata } = useDoc();
  const showFeedback = metadata?.frontMatter.feedback;

  return (
    <>
      <Footer {...props} />
      {showFeedback &&
        <div className={styles['feedback-container']}>
          <h3><Translate id="theme.feedback.title">Feedback</Translate></h3>
          <Feedback />
        </div>
      }
    </>
  );
}
