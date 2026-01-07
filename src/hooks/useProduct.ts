import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Product } from '@site/products.config';

export function useProduct(productName: string) {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const data = Product[productName];
  if (!data) return null;
  const formattedDate = new Intl.DateTimeFormat(currentLocale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(data.releaseDate));

  const files = Object.keys(data.files).reduce((acc, key) => {
    const file = data.files[key];
    acc[key] = {
      ...file,
      size: formatSize(file.bytes, currentLocale, 'megabyte')
    };
    return acc;
  }, {} as any);

  return {
    ...data,
    releaseDate: formattedDate,
    files,
  };
}

const UNITS = [ 'byte', 'kilobyte', 'megabyte', 'gigabyte', 'terabyte', 'petabyte' ];

const formatSize = (n, locale = "ru", minUnit = "byte") => {
  const minIndex = UNITS.indexOf(minUnit);
  const safeMinIndex = minIndex === -1 ? 0 : minIndex;
  const naturalIndex = n === 0 ? 0 : Math.floor(Math.log(n) / Math.log(1024));
  const i = Math.max(naturalIndex, safeMinIndex);
  const value = n / Math.pow(1024, i);
  return new Intl.NumberFormat(locale, {
    style: "unit",
    unit: UNITS[i],
    unitDisplay: "short",
    maximumFractionDigits: value < 1 ? 1 : 0,
  }).format(value);
};
