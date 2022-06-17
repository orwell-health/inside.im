import React, { useEffect } from 'react';
import { Button } from '../elements/Button';
import { BUILD_TARGET } from '../../config';

export default function Part10() {
  let varUA;
  let isAndroid = false;
  let isiOSMobile = false;
  let isiPad = false;
  let isMac = false;
  let isSafari = false;
  let isMobile = false;

  useEffect(() => {
    varUA = navigator.userAgent.toLowerCase();
    console.log(varUA);
    isAndroid = /(android)/i.test(navigator.userAgent);
    isiOSMobile = /(iPhone|iPod|iPad)/i.test(navigator.platform);
    isiPad = varUA.indexOf('macintosh') > -1 && navigator.maxTouchPoints > 2;
    isMac = /(Mac)/i.test(navigator.platform);
    isSafari =
      navigator.vendor &&
      navigator.vendor.indexOf('Apple') > -1 &&
      navigator.userAgent &&
      navigator.userAgent.indexOf('CriOS') === -1 &&
      navigator.userAgent.indexOf('FxiOS') === -1;

    isMobile = isAndroid || isiOSMobile || isiPad;
  }, []);

  const detectiOS = () => {
    if (isiOSMobile || isMac || isiPad) {
      return true;
    }
    return false;
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
  return (
    <div className="w-screen py-[50px] wide:py-[128px] bg-[#F3F5F8] flex flex-col justify-center items-center">
      <div className="text-[24px] leading-[31.2px] wide:text-[40px] wide:leading-[52px] font-bold text-black mb-[25px] wide:mb-[40px] text-center">
        {['지금 인사이드와 함께하세요']}
      </div>

      <Button text={'앱 다운받기'} click={goToAppScheme} />
    </div>
  );
}
