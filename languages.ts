// languages.ts
export const defaultLocale = 'ru';
export const locales = ['ru', 'en'] as const;
export const localeConfigs = {
  en: { label: 'English' },
  ru: { label: 'Русский' },
};

export type Locale = (typeof locales)[number];
