import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { locales, defaultLocale } from './../../languages';

function handleLocaleRedirect() {
  // reading preferred locale before mounting i18n
  const ua = navigator.userAgent || '';
  const botList = [
    // search engine
    'bot', 'spider', 'crawl', 'algolia', 'google', 'inspection',
    'yandex', 'rambler', 'slurp', 'baidu', 'bing', 'duckduckgo',

    // social & messengers
    'facebook', 'discord', 'whatsapp', 'twitter', 'instagram', 'vkShare', 'telegram', 'max',
    'linkedin', 'reddit', 'steam', 'valve', 'pinterest', 'slack',

    // analysis tools
    'tool', 'lighthouse', 'pagespeed',

    // ai
    'gpt', 'openai', 'grok', 'x\\.?ai', 'anthropic', 'perplexity', 'gemini'/*, 'gptbot', 'claudebot'*/
  ];

  const botRegex = new RegExp(botList.join('|'), 'i');
  const isBot = botRegex.test(ua) || navigator.webdriver;
  if (isBot) {
    return; // skip redirect for all bots and crawlers
  }

  const pathname = window.location.pathname;
  const parts = pathname.split('/');

  const maybeLocale = parts[1];
  const currentLocale = locales.includes(maybeLocale)
    ? maybeLocale
    : defaultLocale;

  let preferred = localStorage.getItem('preferred_locale');
  if (!preferred) {
    const browserLang = (navigator.language || navigator.languages?.[0] || '').toLowerCase();
    const shortLang = browserLang.split('-')[0]; // e.g 'en-US' > 'en'
    if (locales.includes(browserLang)) {
      preferred = browserLang;
    }
    else if (locales.includes(shortLang)) {
      preferred = shortLang;
    }
  }

  if (!preferred || preferred === currentLocale) {
    return;
  }

  let newPath = pathname;

  if (locales.includes(parts[1])) {
    newPath = '/' + parts.slice(2).join('/');
  }

  if (preferred !== defaultLocale) {
    newPath = '/' + preferred + newPath;
  }

  const finalPath = newPath.replace(/\/+/g, '/');

  // earliest redirect, before i18n init
  if (finalPath !== pathname) {
    window.location.replace(
      finalPath + window.location.search + window.location.hash
    );
  }
}

if (ExecutionEnvironment.canUseDOM) {
  try {
    handleLocaleRedirect();
  } catch (e) {
    // stub errors
  }
}
