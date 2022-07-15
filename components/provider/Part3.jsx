import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import iphones from '../../public/image/iphones.png';
import iphones_small from '../../public/image/iphones_small.png';

import { Title } from '../elements/Title';
import { HorizontalTitleAndText } from '../elements/HorizontalTitleAndText';

import { HomepageContext } from '../homepageContext';
import Image from 'next/image';

function Part3() {
  const context = useContext(HomepageContext);

  return (
    <div
      className={`w-full px-[24px] wide:px-0 wide:max-w-[960px] mx-auto bg-white pt-[50px] wide:pt-[80px]  `}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <div className="mb-[30px] wide:mb-[50px] text-center">
          <Title title={'비대면 정신건강 서비스에 대한'} />
          <Title title={'긍정적 대답 80% 이상'} style={{ color: '#3953D9' }} />
        </div>
      </motion.div>
      <div className="w-full bg-qna h-[600px] wide:h-[900px] rounded-[25px] wide:rounded-[50px] pt-[40px] wide:pt-[60px] overflow-hidden relative">
        <div className="px-[30px] wide:px-[50px] mb-[-50px] wide:mb-0">
          <HorizontalTitleAndText
            title1={'환자를 직접'}
            title2={'대면하지 않아도'}
            title1Color={'white'}
            title2Color={'#98A3E0'}
            text={
              '인사이드 서비스 안에서 보다 정확하고 연속적인 검사들을 기반으로 대면진료 ∙ 상담과 상호 보완하며 진행합니다. 비대면 상담실과 객관적인 치료 도구들을 활용할 수 있어요'
            }
            textColor={'white'}
            smallMargin
          />
        </div>

        <div className="wide:w-full absolute wide:bottom-0 left-[50%] translate-x-[-50%] ">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeIn' }}
            viewport={{ once: true }}
          >
            <div
              className={` ${
                context.isWide
                  ? 'w-full translate-y-[10px]'
                  : '  min-w-[800px] '
              }`}
            >
              <Image src={context.isWide ? iphones : iphones_small} priority />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Part3;
