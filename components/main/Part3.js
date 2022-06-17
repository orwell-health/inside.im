import React, { useState, useContext } from 'react';
import Part3Card from '../component/Part3Card';
import { motion } from 'framer-motion';
import { SubTitle } from '../elements/SubTitle';
import { HomepageContext } from '../homepageContext';

function Part3() {
  const context = useContext(HomepageContext);
  const [lottieStart1, setLottieStart1] = useState(false);
  const [lottieStart2, setLottieStart2] = useState(false);

  return (
    <div className="bg-[#F3F5F8]">
      <div
        className={`py-[75px] wide:py-[150px] px-[24px] wide:px-0 wide:max-w-[960px] mx-auto `}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <div className="mb-[30px] wide:mb-[50px]">
            <div className="mb-[30px]">
              <div
                className="font-bold  text-[30px] leading-[39px] wide:text-[60px] wide:leading-[78px]  "
                style={{
                  background:
                    'radial-gradient(99.83% 1234.86% at 99.83% 68.01%, #5513F0 0%, #2C4BEC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {[
                  '이제 인사이드를 통해',
                  <br />,
                  '팀의 잠재성을 끌어올릴 시간입니다',
                ]}
              </div>
            </div>
            <SubTitle
              subtitle={
                context.isWide
                  ? [
                      '힘든 사람들은 안정적으로, 안정적인 사람은 더 뛰어나게',
                      <br />,
                      '모두를 위한 디지털 정신건강센터를 만듭니다.',
                    ]
                  : [
                      '힘든 사람들은 안정적으로, 안정적인 사람은 더 뛰어나게 모두를 위한 디지털 정신건강센터를 만듭니다.',
                    ]
              }
            />
          </div>
        </motion.div>
        <div className="wide:flex wide:justify-between ">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ once: true }}
            onAnimationStart={() => {
              console.log('start lottie1');
              setLottieStart1(true);
            }}
            className={`${context.isWide ? '' : 'mb-[20px]'}`}
          >
            {lottieStart1 && (
              <Part3Card
                color={'#CDDBFF'}
                imageWidth={context.isWide ? '250px' : '247px'}
                title={'불안정한 마음은 바로잡고'}
                text={
                  '전문적인 검사를 통해 이용자의 우울, 불안, 수면 등과 같은 정신건강을 평가하고, 멘탈케어 프로그램을 활용해 적합한 솔루션을 제시합니다.'
                }
                start={lottieStart1}
              />
            )}
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: 'easeIn' }}
            viewport={{ once: true }}
            onAnimationStart={() => {
              setLottieStart2(true);
            }}
          >
            {lottieStart2 && (
              <Part3Card
                color={'#BEBDFF'}
                imageWidth={context.isWide ? '300px' : '247px'}
                title={'잠재성은 더 높이고'}
                text={
                  '심한 압박과 스트레스 속에서도 현명하게 대처할 수 있는 힘을 기르고, 관계회복, 불안감 완화, 자신감 향상 등의 목표를 위해 조직화된 프로그램과 전문 심리상담사들을 통해 개인과 조직의 잠재성을 향상합니다.'
                }
                start={lottieStart2}
              />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Part3;
