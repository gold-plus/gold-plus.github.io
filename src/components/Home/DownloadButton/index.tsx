import React, { useId, useState, useRef, useLayoutEffect, SVGProps, ComponentType } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { Tooltip } from 'react-tooltip';
import clsx from 'clsx';

import { usePlatform, Platform } from '@site/src/hooks/usePlatform';
import { useDownloadCount } from '@site/src/hooks/useDownloadCount';
import { useFormattedPlural } from '@site/src/hooks/useFormattedPlural';
import { useProduct } from '@site/src/hooks/useProduct';

import styles from './styles.module.css'

function Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
      <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24m296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24m-124 88c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20m64 0c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20"></path>
    </svg>
  )
}

function WindowsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
      <path fill="currentColor" d="M22.5 22.5H4V4h18.5v18.5zM44 4v18.5H25.5V4H44zM22.5 44H4V25.5h18.5V44zM44 44H25.5V25.5H44V44z" />
    </svg>
  );
}

interface PlatformConfig {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  textId: string;
  textDefault: string;
  style: 'primary' | 'secondary' | 'disabled';
  tooltipText?: string;
}

const windowsConfig: PlatformConfig = {
  icon: Icon,
  textId: 'theme.download',
  textDefault: 'Download',
  style: 'primary'
};

const posixConfig: PlatformConfig = {
  icon: WindowsIcon,
  textId: 'theme.home.download.forWindows',
  textDefault: 'Download for Windows',
  style: 'secondary',
  tooltipText: translate({
    id: 'theme.home.download.nonWindowsHint',
    message: 'This is a Windows application. An emulator (like Wine or Proton) may be required',
  })
};

const androidConfig: PlatformConfig = {
  icon: WindowsIcon,
  textId: 'theme.home.download.forWindows',
  textDefault: 'Download for Windows',
  style: 'secondary',
  tooltipText: translate({
    id: 'theme.home.download.androidHint',
    message: 'This is a Windows application and not officially supported on Android. An emulator (like Wine or Winlator) may be required',
  })
};

const iosConfig: PlatformConfig = {
  icon: WindowsIcon,
  textId: 'theme.home.download.onlyWindows',
  textDefault: 'Available on Windows',
  style: 'disabled',
  tooltipText: translate({
    id: 'theme.home.download.mobileHint',
    message: 'Download is available on desktop (Windows) only',
  })
};

const platformConfigs: Record<Platform, PlatformConfig> = {
  windows: windowsConfig,
  macos: posixConfig,
  linux: posixConfig,
  android: androidConfig,
  ios: iosConfig,
  unknown: windowsConfig
};

export default function DownloadButton() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const { platform } = usePlatform();
  const tooltipId = `download-tooltip:${useId()}`;
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  const ClientProduct = useProduct('gameClient');
  const productId = `v${ClientProduct.version ?? 'unknown'}`;
  const { count, incrementCount } = useDownloadCount(productId);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [platform]);

  const config = platformConfigs[platform];
  const IconComponent = config.icon;
  const buttonClass = clsx(styles['button'], styles[`button--${config.style}`]);

  const downloadCountLabel = useFormattedPlural({
    count: count ?? 0,
    id: 'theme.home.download.count',
    message: '{count} download|{count} downloads',
    locale: currentLocale,
    numberFormatOptions: { notation: 'compact', maximumFractionDigits: 1 }
  });

  return (
    <>
      <Link
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className={buttonClass}
        to={ClientProduct.files?.exe?.url ?? '#'}
        onClick={incrementCount}
        data-tooltip-id={config.tooltipText ? tooltipId : undefined}
      >
        <div className={styles['row']}>
          <span className={styles['icon']}><IconComponent /></span>
          <span className={styles['text']}>
            <Translate id={config.textId}>{config.textDefault}</Translate>
          </span>
        </div>
        <div className={clsx(styles['wrap'], (count !== null && count > 0) && styles['has-count'])}>
          <div className={styles['version']}>
            <Translate id='theme.home.download.version' values={{ version: ClientProduct.version ?? 'unknown' }}>{'Version : {version}'}</Translate>
          </div>
          {count !== null && count > 0 && (
            <span className={styles['count-text']}>
              {downloadCountLabel}
            </span>
          )}
        </div>
      </Link>
      {config.tooltipText && (
        <Tooltip id={tooltipId} place='top' className={styles['button--tooltip']} style={{ maxWidth: `${buttonWidth * 0.85}px` }}>
          {config.tooltipText}
        </Tooltip>
      )}
    </>
  );
}
