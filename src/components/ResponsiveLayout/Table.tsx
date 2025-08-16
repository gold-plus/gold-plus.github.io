import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';

interface ResponsiveTableProps {
  children: React.ReactNode;
}

export const Table: React.FC<ResponsiveTableProps> = ({ children }) => {
  const tableRef = useRef<HTMLTableElement>(null);
  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent || '');
    if (headers.length === 0) return;

    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      cells.forEach((cell, index) => {
        if (headers[index]) {
          cell.setAttribute('data-label', headers[index]);
        }
      });
    });
  }, []);

  return (
    <div className={styles['table-wrapper']}>
      <table ref={tableRef} className={styles['responsive-table']}>
        {children}
      </table>
    </div>
  );
};
