import React from 'react';
import TOCItems from '@theme-original/TOCItems';

export default function TOCItemsWrapper(props) {
  const modifiedProps = {
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

  return <TOCItems {...modifiedProps} />;
}
