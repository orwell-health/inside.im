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

export default function RedirectToStore() {
  useEffect(() => {
    console.log(detectiOS());
  }, []);

  const detectiOS = () => {
    return isIOS || isMacOs;
  };
  useEffect(() => {
    if (detectiOS()) {
      window.location.href =
        'https://apps.apple.com/kr/app/%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C-inside/id1596901525';
    } else {
      window.location.href =
        'https://play.google.com/store/apps/details?id=com.orwellhealth.inside';
    }
  }, []);

  return <div />;
}
