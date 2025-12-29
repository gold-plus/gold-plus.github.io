import { translate } from '@docusaurus/Translate';
import { usePluralForm } from '@docusaurus/theme-common';

interface FormatPluralOptions {
  count: number;
  id: string;
  message: string;
  locale?: string;
  numberFormatOptions?: Intl.NumberFormatOptions;
}

function roundForPlural(n: number, maximumFractionDigits: number = 1): number {
  if (n < 1000) return n;

  const digits = Math.floor(Math.log10(n)) + 1;

  const significantDigits =
    maximumFractionDigits + ((digits - 1) % 3) + 1;

  if (significantDigits >= digits) return n;

  const power = digits - significantDigits;
  const magnitude = Math.pow(10, power);

  return Math.round(n / magnitude) * magnitude;
}

export function useFormattedPlural({
  count,
  id,
  message,
  locale = 'en',
  numberFormatOptions = {
    notation: 'compact',
    maximumFractionDigits: 1
  },
}: FormatPluralOptions): string {

  const formattedString = new Intl.NumberFormat(locale, numberFormatOptions).format(count);

  let numberForPlural = count;
  if (numberFormatOptions.notation === 'compact') {
      numberForPlural = roundForPlural(count, numberFormatOptions.maximumFractionDigits);
  }

  const { selectMessage } = usePluralForm();
  const pluralStringTemplate = translate({ id, message });
  const messageTemplate = selectMessage(numberForPlural, pluralStringTemplate);
  const finalMessage = messageTemplate.replace('{count}', formattedString);
  return finalMessage;
}
