import { useState, useEffect } from 'react';

type Platform = 'windows' | 'macos' | 'linux' | 'android' | 'ios' | 'unknown';

interface NavigatorUAData {
  readonly brands: readonly { brand: string; version: string }[];
  readonly mobile: boolean;
  readonly platform: string;
}

interface NavigatorWithUAData extends Navigator {
  readonly userAgentData?: NavigatorUAData;
}

export function usePlatform(): { platform: Platform; isMobile: boolean } {
  const [platform, setPlatform] = useState<Platform>('unknown');

  useEffect(() => {
    const nav = window.navigator as NavigatorWithUAData;
    if (nav.userAgentData) {
      const platformName = nav.userAgentData.platform.toLowerCase();
      if (platformName.includes('win')) {
        setPlatform('windows');
      } else if (platformName.includes('mac')) {
        setPlatform('macos');
      } else if (platformName.includes('linux')) {
        setPlatform('linux');
      } else if (platformName.includes('android')) {
        setPlatform('android');
      } else if (nav.userAgentData.mobile) {
        setPlatform('ios');
      }
      return;
    }

    const ua = nav.userAgent.toLowerCase();
    if (/windows|win32/.test(ua)) {
      setPlatform('windows');
    } else if (/macintosh|mac os x/.test(ua)) {
      setPlatform('macos');
    } else if (/linux/.test(ua)) {
      setPlatform('linux');
    } else if (/android/.test(ua)) {
      setPlatform('android');
    } else if (/iphone|ipad|ipod/.test(ua)) {
      setPlatform('ios');
    }

  }, []);

  const isMobile = platform === 'android' || platform === 'ios';

  return { platform, isMobile };
}
