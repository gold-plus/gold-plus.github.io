import React from 'react';
import styles from './styles.module.css';

interface ResponsiveGridProps {
  children: React.ReactNode;
  minItemWidth?: string;
}

export const Grid: React.FC<ResponsiveGridProps> = ({
  children,
  minItemWidth = '200px',
}) => {
  const gridStyles = { '--min-item-width': minItemWidth } as React.CSSProperties;
  return (
    <div className={styles['responsive-grid']} style={gridStyles}>
      {children}
    </div>
  );
};
