import { useId } from 'react';
import styles from './styles.module.css';
import Translate, { translate } from '@docusaurus/Translate';
import { Tooltip } from 'react-tooltip';

import clsx from 'clsx';

export const DownloadProductButton = ({ product }) => {
  const { exe, zip } = product.files;

  const showZip = !!(exe && zip);

  const tooltipId = `tooltip:${useId()}`;

  const text = translate({
    id: 'theme.download.portable',
    message: 'Download the portable version',
  });

  return (
    <div>
      <a className={styles['download-button']} href={product.files.exe.url}>
        <div className={styles['btn-text-group']}>
          <span className={styles['btn-title']}>
            <Translate id="theme.download">Download</Translate>
          </span>
          <span className={styles['btn-subtitle']}>v{product.version}</span>
        </div>
        <div className={styles['btn-icon-box']}>
          <span className={styles['btn-icon']} />
          <span className={styles['btn-meta']}><Translate id="theme.download.size">Size</Translate> {product.files.exe.size}</span>
        </div>
      </a>
      <a
        href={zip?.url || '#'}
        className={clsx(styles['download-alt-link-box'], !showZip && styles['download-alt-link-box-hidden'])}
        data-tooltip-id={tooltipId}
        data-tooltip-content={text}>
        <div className={styles['download-alt-link-icon']}/>
        <div className={styles['download-alt-link']}>ZIP</div>
      </a>
      <Tooltip
        id={tooltipId}
        place="bottom"
        opacity={0.8}
        className={styles['download-tooltip']}
      />
    </div>
  );
};
