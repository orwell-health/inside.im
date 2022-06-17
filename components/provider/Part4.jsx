import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import providerPoint1 from '../../public/image/homepageProvider_part4_1.png';
import providerPoint2 from '../../public/image/homepageProvider_part4_2.png';
import providerPoint3 from '../../public/image/homepageProvider_part4_3.png';
import providerPoint4 from '../../public/image/homepageProvider_part4_4.png';
import providerPoint5 from '../../public/image/homepageProvider_part4_5.png';
import providerPoint6 from '../../public/image/homepageProvider_part4_6.png';

import { SubtitleAndTitle } from '../elements/SubtitleAndTitle';
import { Title3 } from '../elements/Title3';

import { HomepageContext } from '../homepageContext';
import Image from 'next/image';

function Part4() {
  const context = useContext(HomepageContext);
  const points = [
    {
      image: providerPoint1,

      title: '철저한 자격증 관리',
      detail: context.isWide
        ? [
            '범람하는 비전문적인 자격증들 속에서 답답하셨죠?',
            <br />,
            '인사이드는 상담심리사 1급, 임상심리사 1급 상담사 선생님들과 협력하고 있답니다.',
          ]
        : '범람하는 비전문적인 자격증들 속에서 답답하셨죠? 인사이드는 상담심리사 1급, 임상심리사 1급 상담사 선생님들과 협력하고 있답니다.',
    },
    {
      image: providerPoint2,

      title: '상담에만 집중하세요',
      detail: context.isWide
        ? [
            '보고서 작성, 잡다한 행정업무, 자기 PR자료 작성, 결제관리',
            <br />,
            '이제 더이상 신경쓰지 마세요.',
          ]
        : '보고서 작성, 잡다한 행정업무, 자기 PR자료 작성, 결제관리 이제 더이상 신경쓰지 마세요.',
    },
    {
      image: providerPoint3,
      title: '선생님의 안전까지',
      detail: context.isWide
        ? [
            '상담 진행중 위기상황 및 돌발 상황 발생시',
            <br />,
            '대응메뉴얼과 신고절차 모두 준비되어 있어요.',
          ]
        : '상담 진행중 위기상황 및 돌발 상황 발생시 대응메뉴얼과 신고절차 모두 준비되어 있어요.',
    },
    {
      image: providerPoint4,
      title: '보다 강화된 보안',
      detail: context.isWide
        ? [
            '개인정보처리 및 암호화에 대한 꼼꼼한 법률 자문을 바탕으로',
            <br />,
            '외부인은 물론 인사이드 내부팀조차 개별 상담 데이터를 조회할 수 없어요.',
          ]
        : '개인정보처리 및 암호화에 대한 꼼꼼한 법률 자문을 바탕으로 외부인은 물론 인사이드 내부팀조차 개별 상담 데이터를 조회할 수 없어요.',
    },
    {
      image: providerPoint5,
      title: '비상식적인 수수료는 그만',
      detail: context.isWide
        ? [
            '많은 센터 및 플랫폼이 취하는 높은 수수료 없이',
            <br />,
            '건전하고 합리적인 방식으로 협력해요.',
          ]
        : '많은 센터 및 플랫폼이 취하는 높은 수수료 없이 건전하고 합리적인 방식으로 협력해요.',
    },
    {
      image: providerPoint6,
      title: '함께 성장하세요',
      detail: context.isWide
        ? [
            '상담사 선생님들의 역량을 증대하기 위한 세미나, 워크샵, 전문가들의 협력,',
            <br />,
            '개인 상담소 개소 조력 등 다양한 방안들을 기획하고 있어요.',
          ]
        : '상담사 선생님들의 역량을 증대하기 위한 세미나, 워크샵, 전문가들의 협력, 개인 상담소 개소 조력 등 다양한 방안들을 기획하고 있어요.',
    },
  ];
  return (
    <div
      className={`w-full px-[24px] wide:px-0 wide:max-w-[960px] mx-auto   bg-white py-[75px] wide:py-[150px] `}
    >
      <div className="mb-[30px] wide:mb-[50px]">
        <SubtitleAndTitle
          subtitle={'사람들의 마음에 도움을 주는일만 생각하세요'}
          title={'다른 것들은 신경쓰지 마세요'}
        />
      </div>
      {points.map((point, index) => (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          viewport={{ once: true }}
        >
          <div
            className={`w-full px-[30px] pt-[30px] pb-[35px] wide:px-[40px] py-[40px] mb-[20px] ${
              index % 3 === 0
                ? 'bg-[#EFEFFF]'
                : index % 3 === 1
                ? 'bg-[#E8F1FF]'
                : 'bg-[#F4F4F9]'
            }  rounded-[15px] rounded-[30px] wide:flex wide:items-center`}
          >
            <div className=" shrink-0  flex items-center justify-center overflow-hidden mb-[20.64px] wide:mb-0 wide:mr-[20px]">
              <div className={`${context.isWide ? 'w-[250px]' : 'w-[227px]'}`}>
                <Image src={point.image} />
              </div>
            </div>
            <div className="">
              {/* <p className="mb-[10px]">
                <Title3 title={point.title} />
              </p> */}
              <div className="text-[20px] leading-[28px] wide:text-[32px] wide:leading-[44.8px] font-bold text-black mb-[10px]">
                {point.title}
              </div>
              <p className="text-[14px] leading-[22.4px] wide:text-[18px] wide:leading-[28.8px] text-[#3A3C40] font-normal">
                {point.detail}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Part4;
