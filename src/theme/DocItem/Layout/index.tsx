import React, {type ReactNode} from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import { FeedbackProvider } from '@site/src/context/FeedbackContext';
import { DocInfoProvider } from '@site/src/context/DocInfoContext';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const { metadata } = useDoc();
  return (
    <DocInfoProvider metadata={metadata}>
      <FeedbackProvider pageId={metadata.id}>
        <Layout {...props} />
      </FeedbackProvider>
    </DocInfoProvider>
  );
}
