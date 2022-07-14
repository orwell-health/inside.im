import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import homepageProvider_part2_1 from '../../public/image/homepageProvider_part2_1.png';
import homepageProvider_part2_2 from '../../public/image/homepageProvider_part2_2.png';

import { SubtitleAndTitle } from '../elements/SubtitleAndTitle';
import { Title3 } from '../elements/Title3';

import { HomepageContext } from '../homepageContext';
import Image from 'next/image';

function Part2() {
  const context = useContext(HomepageContext);
  return (
    <div
      className={`px-[24px] wide:px-[50px] wide:max-w-[960px] mx-auto  pt-[75px] wide:pt-[150px] bg-white overflow-hidden `}
    >
      <div className="mb-[30px] wide:mb-[50px]">
        <SubtitleAndTitle
          subtitle={
            context.isWide
              ? '상담이 필요한 상황에도 정신건강서비스를 이용하기까지'
              : '상담이 필요한 상황에도 \n 정신건강서비스를 이용하기까지'
          }
          title={'대면 진료는 아직 두려운 사람들'}
        />
      </div>
      <div className="w-full wide:h-[640px]  wide:relative">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <div className="wide:z-10 wide:absolute wide:top-0 wide:left-0 h-[371px] wide:h-[560px] bg-[#DEE7FF] rounded-[25px] wide:rounded-[50px] w-full wide:w-[52%] py-[30px] wide:py-[60px] px-[25px] wide:px-[50px] mb-[20px] wide:mb-0">
            <div className=" w-full h-full flex flex-col  items-center justify-between text-center">
              <div className="text-[22px] leading-[30.8px] wide:text-[30px] wide:leading-[42px] font-bold text-[#3953D9]">
                {['“일반인 3명 중 1명”']}
              </div>
              <div className="w-[245px] wide:w-[340px]  mx-auto">
                <Image src={homepageProvider_part2_1} />
              </div>
              <div>
                <div className="mb-[20px] ">
                  <Title3
                    title={'사회 인식과 주변 시선으로 \n 치료를 주저하거나'}
                  />
                </div>
                <p className="text-[11px] wide:text-[18px] leading-[16.5px] wide:leading-[27px] text-[#A4A6B0] text-center">
                  {
                    '* 출처: 정신건강서비스 이용자 대상 \n inside 자체 설문 (n=532)'
                  }
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <div className="wide:z-0 wide:absolute wide:top-[80px] wide:right-0 h-[371px] wide:h-[560px] bg-[#F3F5F8] rounded-[25px] wide:rounded-[50px] w-full wide:w-[52%] pt-[40px] pb-[30px] wide:py-[60px] px-[25px] wide:px-[30px]">
            <div className=" w-full h-full flex flex-col  items-center justify-between text-center">
              <div>
                <Title3
                  title={'제대로된 전문가를 \n 만나지 못한 경우가 대부분'}
                />
              </div>
              <div>
                <div className="w-[60px] h-[60px] wide:w-[80px] wide:h-[80px] mb-[15px] wide:mb-[30px] rounded-[40px] mx-auto">
                  <Image src={homepageProvider_part2_2} />
                </div>
                <p className="text-[15px] wide:text-[18px] leading-[22.5px] wide:leading-[27px] font-normal text-[#26282C] text-center ">
                  {
                    '“선생님을 소개받고 시간 내서 찾아가도 \n 나한테 맞는 건가? 도움이 되고 있나? \n 의문이 들었어요. 하는 일도 바빠서 \n 결국 상담은 꾸준히 이어가질 못했고요”'
                  }
                </p>{' '}
              </div>
              <div>
                <span className="text-[11px] wide:text-[18px] leading-[16.5px] wide: leading-[27px] text-[#A4A6B0] text-center">
                  {'프리랜서 작가 K님과의 인터뷰 중'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Part2;
