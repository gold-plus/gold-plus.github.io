// src/context/DocInfoContext.tsx
import React, { useContext, createContext, ReactNode } from 'react';

import type { DocMetadata } from '@docusaurus/plugin-content-docs';

const DocInfoContext = createContext<DocMetadata | null>(null);

export function DocInfoProvider({ children, metadata }: { children: ReactNode, metadata: DocMetadata }) {
  return (
    <DocInfoContext.Provider value={metadata}>
      {children}
    </DocInfoContext.Provider>
  );
}

export function useDocInfo(): {
  metadata: DocMetadata | null;
  isOnDocsPage: boolean;
} {
  const metadata = useContext(DocInfoContext);
  return {
    metadata,
    isOnDocsPage: metadata != null,
  };
}
