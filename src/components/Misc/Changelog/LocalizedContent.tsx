// src/components/Misc/Changelog/LocalizedContent.tsx
import React, { useMemo } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface LocalizedContentProps {
  filename: string;
}

export const LocalizedContent: React.FC<LocalizedContentProps> = ({ filename }) => {
  const { i18n } = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const Component = useMemo(() => {
    try {
      if (locale !== i18n.defaultLocale) {
        return require(`@site/i18n/${locale}/docusaurus-plugin-content-pages/${filename}`).default;
      }
    } catch (e) {
        // error swallowing
    }

    return require(`@site/src/pages/${filename}`).default;
  }, [locale, filename]);

  return <Component />;
};
