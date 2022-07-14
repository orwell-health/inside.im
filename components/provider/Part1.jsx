import React, { useRef, useEffect, useContext } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';

import { MainTitle } from '../elements/MainTitle';
import { Button } from '../elements/Button';

import { HomepageContext } from '../homepageContext';
import Link from 'next/link';
import useFontLoad from '../../pages/useFontLoad';

function Part1() {
  const context = useContext(HomepageContext);
  const container = useRef();
  const [fontLoaded] = useFontLoad();

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../public/image/homepageMain_arrow.json'),
    });
    return () => instance.destroy();
  }, []);

  return (
    <div
      className={`w-screen h-[780px] wide:h-[950px] overflow-hidden bg-[#EFF2FF] relative`}
    >
      <div className="absolute top-[50%] translate-y-[-50%] w-full">
        <div className="wide:max-w-[960px] mx-auto ">
          {fontLoaded && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeIn' }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center"
            >
              <MainTitle
                title={
                  context.isWide
                    ? ['모두가 더 행복해지길', <br />, '바라시나요?']
                    : ['모두가 더', <br />, '행복해지길', <br />, '바라시나요?']
                }
                subtitle={['그렇다면 저희와 함께 고민하세요']}
                style={{ textAlign: 'center' }}
              />
              <Link href="/application?target=service_provider">
                <a>
                  <Button
                    text={'전문가 등록 문의하기'}
                    style={{ width: context.isWide ? '' : '210px' }}
                    click={() => {}}
                  />{' '}
                </a>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
      <div className="absolute bottom-[40px] w-full">
        <div className="mx-auto w-[40px] h-[40px]" ref={container}></div>
      </div>
    </div>
  );
}

export default Part1;
