import React, { useState, useEffect, useRef, useContext } from 'react';
import google from '../../public/image/google.png';
import apple from '../../public/image/apple.png';
import homepage_main from '../../public/image/homepage_main.png';
import homepage_main_small from '../../public/image/homepage_main_small.png';
import { MainTitle } from '../elements/MainTitle';
import { Button } from '../elements/Button';
import { motion, useViewportScroll } from 'framer-motion';
import lottie from 'lottie-web';
import { HomepageContext } from '../homepageContext';
import { BUILD_TARGET } from '../../config';
import SNSLink from '../component/SNSLink';
import Image from 'next/image';
import AppDownload from '../component/AppDownload';

// import browserEnv from 'browser-env';

function Part1() {
  const context = useContext(HomepageContext);
  const [fontRLoaded, setFontRLoaded] = useState(false);
  const [fontMLoaded, setFontMLoaded] = useState(false);
  const [fontBLoaded, setFontBLoaded] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [scrollAmount, setScrollAmount] = useState(0);
  const { scrollY, scrollYProgress } = useViewportScroll();
  const container = useRef();

  const goGooglePlayStore = () => {
    window.location.href =
      'https://play.google.com/store/apps/details?id=com.orwellhealth.inside';
  };
  const goAppStore = () => {
    window.location.href =
      'https://apps.apple.com/kr/app/%EC%9D%B8%EC%82%AC%EC%9D%B4%EB%93%9C-inside/id1596901525';
  };

  useEffect(() => {
    console.log(context.isWide);
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../public/image/homepageMain_arrow.json'),
    });
    return () => instance.destroy();
  }, []);

  useEffect(() => {
    scrollY.onChange((v) => {
      setScrollAmount(v);
    });
  }, [scrollYProgress, scrollY]);

  return (
    <div
      className={`w-screen h-[780px] wide:h-[950px] overflow-hidden  relative`}
    >
      <motion.div style={{ y: -(scrollAmount * 3) / 8 }}>
        <div className="absolute w-full h-full top-0 left-[50%] translate-x-[-50%] min-w-[960px] wide:left-0 wide:translate-x-[0%] ">
          {context.isWide && <Image src={homepage_main} placeholder="blur" />}
          {!context.isWide && (
            <Image src={homepage_main_small} placeholder="blur" />
          )}
        </div>
      </motion.div>
      <div className="absolute top-[130px] left-[30px] wide:left-0 wide:top-[50%] wide:translate-y-[calc(-50%-70px)] w-full ">
        <div className={`max-w-[960px] mx-auto `}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ once: true }}
          >
            <MainTitle
              title={['중요한 건', <br />, '내 마음이니까']}
              subtitle={['멘탈케어 솔루션 인사이드']}
            />

            {context.isWide && (
              <div className="text-[18px] leading-[24.52px] text-white font-medium tracking-[-.02em] flex flex-row">
                <div
                  className="w-fit h-[56px] py-[13px] px-[27px] bg-black rounded-[12px] mr-[10px] flex cursor-pointer"
                  onClick={goGooglePlayStore}
                >
                  <div className="w-[30px] h-[30px]  mr-[2px]">
                    <Image src={google} />
                  </div>

                  <div className="mt-[2px]">Google Play</div>
                </div>
                <div
                  className="w-fit h-[56px] py-[13px] px-[27px] bg-black rounded-[12px] mr-[10px] flex cursor-pointer"
                  onClick={goAppStore}
                >
                  <div className="w-[30px] h-[30px]  mr-[2px]">
                    <Image src={apple} />
                  </div>
                  <span className="mt-[2px]">App Store</span>
                </div>
              </div>
            )}
            {!context.isWide && (
              <AppDownload />
              // <Button text={'앱 다운받기'} click={goToAppScheme} />
            )}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-[40px] w-full">
        <div className="mx-auto w-[40px] h-[40px]" ref={container}></div>
      </div>
      {context.isWide && (
        <div className="absolute bottom-[100px] max-w-[960px] left-[50%] translate-x-[-50%] w-full">
          <SNSLink backgroundColor={'#0000004D'} logoColor={'#F3F5F8'} />
        </div>
      )}
    </div>
  );
}

export default Part1;
