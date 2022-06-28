import React, { useEffect } from 'react';
import {
  isBrowser,
  isDesktop,
  isChrome,
  isSafari,
  isMobile,
  isIOS,
  isAndroid,
  isMacOs,
} from 'react-device-detect';
import { Button } from '../elements/Button';

export default function AppDownload() {
  useEffect(() => {
    console.log(isBrowser, isDesktop, isChrome);
  }, []);

  const detectiOS = () => {
    return isIOS || isMacOs;
  };

  const getStoreLink = () => {
    if (detectiOS()) {
      console.log('iphone');
      return 'https://apps.apple.com/kr/app/%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C-inside/id1596901525';
    }
    console.log('android');
    return 'https://play.google.com/store/apps/details?id=com.orwellhealth.inside';
  };

  const getSchemeLink = () => {
    // if (BUILD_TARGET === 'dev') {
    //   return 'inside-dev://main/discover';
    // }
    return 'inside://main/discover';
  };

  const goToAppScheme = () => {
    const now = new Date().valueOf();

    if (isMobile) {
      if (isSafari) {
        window.location.href = getSchemeLink();
        setTimeout(() => {
          window.location.href = getStoreLink();
        }, 25);

        setTimeout(() => {
          window.location.reload();
        }, 50);
      } else {
        setTimeout(function () {
          if (new Date().valueOf() - now < 1500) {
            window.location.href = getStoreLink();
          }
        }, 1000);
        window.location.href = getSchemeLink();
      }
    } else {
      window.location.href = getStoreLink();
    }
  };

  return <Button text={'앱 다운받기'} click={goToAppScheme} />;
}
