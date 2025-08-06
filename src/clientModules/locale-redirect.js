import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
if (ExecutionEnvironment.canUseDOM) {
  try {
    // reading preferred locale before mounting i18n
    const defaultLocale = 'ru';
    const supportedLocales = ['ru', 'en'];
    const parts = window.location.pathname.split('/');
    const maybeLocale = parts[1];
    const currentLocale = supportedLocales.includes(maybeLocale)
      ? maybeLocale
      : defaultLocale;
    let preferred = localStorage.getItem('preferred_locale');
    if (!preferred) {
      const browserLang = navigator.language || navigator.languages?.[0];
      const shortLang = browserLang.split('-')[0]; // e.g 'en-US' > 'en'
      if (supportedLocales.includes(browserLang)) {
        preferred = browserLang;
      }
      else if (supportedLocales.includes(shortLang)) {
        preferred = shortLang;
      }
    }
    if (preferred && preferred !== currentLocale)
    {
      let newPath = window.location.pathname;
      if (supportedLocales.includes(parts[1])) {
        newPath = '/' + parts.slice(2).join('/');
      }
      if (preferred !== defaultLocale) {
        newPath = '/' + preferred + newPath;
      }
      // earliest redirect, before i18n init
      window.location.replace(newPath + window.location.search + window.location.hash);
    }
  } catch (e) {
    // stub errors
  }
}
