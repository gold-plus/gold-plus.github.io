import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import CodeBlockWithPreview from '@site/src/components/Misc/CodeBlockWithPreview';

import styles from './styles.module.css';

export default function XhairConfig({ title, previewSrc, config = [], labelConfig = 'Config', labelConsole = 'To Console'}) {
  const fileConfig = config.join('\n');
  const consoleConfig = config.join(';\n');
  return (
    <CodeBlockWithPreview
      preview={
        <img src={previewSrc} className={styles['xhair-guide-preview']} />
      }
    >
      <Tabs>
        <TabItem value="cfg-file" label={labelConfig}>
          <CodeBlock language="cfg" title={title}>
            {fileConfig}
          </CodeBlock>
        </TabItem>
        <TabItem value="cfg-console" label={labelConsole}>
          <CodeBlock language="cfg" title={title}>
            {consoleConfig}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </CodeBlockWithPreview>
  );
}
