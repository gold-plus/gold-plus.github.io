import React, {type ReactNode} from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import { useDocInfo } from '@site/src/context/DocInfoContext';
import type { WrapperProps } from '@docusaurus/types';

import styles from './styles.module.css';

import clsx from 'clsx';

type Props = WrapperProps<typeof TOCType>;

export default function TOCWrapper(props: Props): ReactNode {
  const { isOnDocsPage } = useDocInfo();

  return (
    <TOC
      {...props}
      className={clsx(
        props.className,
        isOnDocsPage && styles['disable-scroll']
      )}
    />
  );
}
