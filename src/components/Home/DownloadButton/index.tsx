import React, { useId, useState, useRef, useLayoutEffect, SVGProps, ComponentType } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { Tooltip } from 'react-tooltip';
import { AdvisoryModal } from '@site/src/components/Misc/AdvisoryModal';
import clsx from 'clsx';

import { usePlatform, Platform } from '@site/src/hooks/usePlatform';
import { useDownloadCount } from '@site/src/hooks/useDownloadCount';
import { useFormattedPlural } from '@site/src/hooks/useFormattedPlural';
import { useProduct } from '@site/src/hooks/useProduct';
import { DownloadIcon, WindowsDefenderIcon, WindowsIcon } from '@site/src/components/Icons';

import styles from './styles.module.css'

interface PlatformConfig {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  textId: string;
  textDefault: string;
  style: 'primary' | 'secondary' | 'disabled';
  tooltipText?: string;
  showAdvisory?: boolean;
}

const windowsConfig: PlatformConfig = {
  icon: DownloadIcon,
  textId: 'theme.download',
  textDefault: 'Download',
  style: 'primary',
  showAdvisory: true
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
  const ClientProduct = useProduct('gameClient');
  const { i18n: { currentLocale } } = useDocusaurusContext();
  const { platform } = usePlatform();
  const tooltipId = `download-tooltip:${useId()}`;
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);
  const { count, incrementCount } = useDownloadCount(`v${ClientProduct.version ?? 'unknown'}`);
  const [showAdvisory, setShowAdvisory] = useState(false);

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

  const storageKey = `download_skip_advisory_${(ClientProduct.version || 'common').replace(/\./g, '')}`;
  const handleDownloadClick = (e: React.MouseEvent) => {
    if (config.showAdvisory && ClientProduct.showAdvisory) {
      const isHiddenByUser = typeof window !== 'undefined' && localStorage.getItem(storageKey) === 'true';
      if (!isHiddenByUser) {
        e.preventDefault();
        setShowAdvisory(true);
        return;
      }
    }

    incrementCount();
  };

  const handleConfirmDownload = (dontShowAgain: boolean) => {
    if (dontShowAgain) {
      localStorage.setItem(storageKey, 'true');
    }
    setShowAdvisory(false);
    incrementCount();
    window.location.href = ClientProduct.files?.exe?.url ?? '#';
  };

  return (
    <>
      <Link
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className={buttonClass}
        to={ClientProduct.files?.exe?.url ?? '#'}
        onClick={handleDownloadClick}
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

      <AdvisoryModal
        isOpen={showAdvisory}
        onClose={() => setShowAdvisory(false)}
        onConfirm={handleConfirmDownload}
        showDoNotDisturb={true}
        confirmBtnClassName={styles['confirm-button']}
        title={<Translate id="theme.modal.home.download.notice.title">Important installation info</Translate>}
        confirmText={<Translate id="theme.modal.home.download.action.download">Download</Translate>}
      >
        <div className={styles['modal-content']}>
          <div className={styles['modal-icon']}>
            <WindowsDefenderIcon />
          </div>
          <p className={styles['notice-desc']}>
            <Translate id="theme.modal.home.download.notice.description" values={{ br: <br /> }}>
              The installer file (exe) was recently updated.
              Windows might show a SmartScreen protection window when launching it.
            </Translate>
          </p>
          <div className={styles['notice-instruction']}>
            <span className={styles['notice-instruction-title']}>
              <Translate id="theme.modal.home.download.notice.instructions.title">What to do:</Translate>
            </span>
            <p className={styles['notice-steps']}>
              <Translate id="theme.modal.home.download.notice.instructions.steps">Click "More info", then "Run anyway".</Translate>
            </p>
            <p className={styles['notice-note']}>
              <Translate id="theme.modal.home.download.notice.note" values={{ br: <br /> }}>
                This is a standard safety check and does not indicate a threat.
                The warning will go away automatically over time.
              </Translate>
            </p>
          </div>
        </div>
      </AdvisoryModal>
    </>
  );
}
