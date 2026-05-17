import styles from './styles.module.css';
import { useDateTimeFormat } from '@docusaurus/theme-common/internal';

export function Version({ version, date }: { version: string, date: string }) {
  const atDate = new Date(date);
  const dateTimeFormat = useDateTimeFormat({
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const formattedDate = dateTimeFormat.format(atDate);
  return (
    <div className={styles['version-header']}>
      <span className={styles['version-title']}>{version}</span>
      <span className={styles['version-date']}>{formattedDate}</span>
    </div>
  );
}
