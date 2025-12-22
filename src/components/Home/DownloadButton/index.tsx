import React, { useId, useState, useRef, useLayoutEffect, SVGProps } from "react";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import Translate, { translate } from '@docusaurus/Translate';
import { Tooltip } from 'react-tooltip';
import clsx from 'clsx';

import { usePlatform } from '@site/src/hooks/usePlatform';

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

export default function DownloadButton() {
  const {
    siteConfig: {customFields},
  } = useDocusaurusContext();
  const { platform } = usePlatform();
  const tooltipId = `download-tooltip:${useId()}`;
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>(null);
  const [buttonWidth, setButtonWidth] = useState(0);

  useLayoutEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [platform]);

  if (platform === 'windows' || platform === 'unknown') {
    return (
      <Link className={clsx(styles['button'], styles['button--primary'])} to={`${customFields.downloadProduct}`}>
        <div className={styles['row']}>
          <span className={styles['icon']}>
            <Icon />
          </span>
          <span className={styles['text']}>
            <Translate id='theme.home.download'>Download</Translate>
          </span>
        </div>
        <div className={styles['wrap']}>
          <div className={styles['version']}>
            <Translate id='theme.home.download.latest'>Latest</Translate> : {`${customFields.currentVersion}`}
          </div>
        </div>
      </Link>
    );
  }

  if (platform === 'macos' || platform === 'linux') {
    const tooltipText = translate({
      id: 'theme.home.download.nonWindowsHint',
      message: 'This is a Windows application. An emulator (like Wine or Proton) may be required',
    });

    return (
      <>
        <Link
          ref={buttonRef as React.Ref<HTMLAnchorElement>}
          className={clsx(styles['button'], styles['button--secondary'])}
          to={`${customFields.downloadProduct}`}
          data-tooltip-id={tooltipId}
        >
          <div className={styles['row']}>
            <span className={styles['icon']}><WindowsIcon /></span>
            <span className={styles['text']}>
              <Translate id='theme.home.download.forWindows'>Download for Windows</Translate>
            </span>
          </div>
          <div className={styles['wrap']}>
            <div className={styles['version']}>
              <Translate id='theme.home.download.latest'>Latest</Translate> : {`${customFields.currentVersion}`}
            </div>
          </div>
        </Link>
        <Tooltip id={tooltipId} place='top' className={styles['button--tooltip']} style={{ maxWidth: `${buttonWidth * 0.85}px` }}>{tooltipText}</Tooltip>
      </>
    );
  }

  if (platform === 'android') {
    const tooltipText = translate({
      id: 'theme.home.download.androidHint',
      message: 'This is a Windows application and not officially supported on Android. An emulator (like Wine or Winlator) may be required',
    });
    return (
      <>
        <Link
          ref={buttonRef as React.Ref<HTMLAnchorElement>}
          className={clsx(styles['button'], styles['button--secondary'])}
          to={`${customFields.downloadProduct}`}
          data-tooltip-id={tooltipId}
        >
          <div className={styles['row']}>
            <span className={styles['icon']}><WindowsIcon /></span>
            <span className={styles['text']}>
              <Translate id='theme.home.download.forWindows'>Download for Windows</Translate>
            </span>
          </div>
          <div className={styles['wrap']}>
            <div className={styles['version']}>
              <Translate id='theme.home.download.latest'>Latest</Translate> : {`${customFields.currentVersion}`}
            </div>
          </div>
        </Link>
        <Tooltip id={tooltipId} place='top' className={styles['button--tooltip']} style={{ maxWidth: `${buttonWidth * 0.85}px` }}>{tooltipText}</Tooltip>
      </>
    );
  }

  const tooltipText = translate({
    id: 'theme.home.download.mobileHint',
    message: 'Download is available on desktop (Windows) only',
  });

  return (
    <div data-tooltip-id={tooltipId}>
      <span ref={buttonRef as React.Ref<HTMLAnchorElement>}>
        <button
          className={clsx(styles['button'], styles['button--disabled'])}
          disabled
        >
          <div className={styles['row']}>
            <span className={styles['icon']}><WindowsIcon /></span>
            <span className={styles['text']}>
              <Translate id='theme.home.download.onlyWindows'>Available on Windows</Translate>
            </span>
          </div>
          <div className={styles['wrap']}>
              <div className={styles['version']}>
                <Translate id='theme.home.download.latest'>Latest</Translate> : {`${customFields.currentVersion}`}
              </div>
          </div>
        </button>
      </span>
      <Tooltip id={tooltipId} place='top' className={styles['button--tooltip']} style={{ maxWidth: `${buttonWidth * 0.85}px` }}>{tooltipText}</Tooltip>
    </div>
  );
}
