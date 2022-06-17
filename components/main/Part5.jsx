import React, { useContext } from 'react';
import Part5Card from '../component/Part5Card';
import homepageMain_part5_1 from '../../public/image/homepageMain_part5_1.png';
import homepageMain_part5_2 from '../../public/image/homepageMain_part5_2.png';
import homepageMain_part5_3 from '../../public/image/homepageMain_part5_3.png';
import { SubtitleAndTitle } from '../elements/SubtitleAndTitle';
import { HomepageContext } from '../homepageContext';

const contents = [
  {
    backgroundColor: '#D8E9FC',
    image: homepageMain_part5_1,
    title: '디지털 멘탈케어 프로그램',
    text: [
      '서울의대 출신 의사 연구진과 전문 심리상담사들이 만든 멘탈케어 프로그램은 인지행동치료에 기반하여 우울, 불안, 수면, 대인관계, 번아웃 등 다양한 주제와 관련된 솔루션들을 제공합니다. ',
    ],
    left: false,
  },
  {
    backgroundColor: '#D7E2FF',
    image: homepageMain_part5_2,
    title: '1:1 코칭',
    text: [
      '인사이드의 코치는 모두 의사들에게 교육받은 정신건강 전문가입니다. 코치는 프로그램에 대한 설명과 피드백을 제공하고, 상담사 및 의사로의 연계가 필요한 경우 이를 위한 안내를 제공합니다.',
    ],
    left: true,
  },
  {
    backgroundColor: '#D7E2FF',
    image: homepageMain_part5_3,
    title: '비대면 심리상담',
    text: [
      '인사이드에서 활동하는 심리상담사는 모두 석박사급 이상의 1급 상담사입니다. 인사이드는 전문적인 인력을 통해 가장 효과적이고 안전한 정신건강서비스를 제공합니다.',
    ],
    left: false,
  },
];
function Part5() {
  const context = useContext(HomepageContext);

  return (
    <div
      className={`w-screen max-w-[960px] mx-auto px-[24px] wide:px-0 pt-[75px] wide:pt-[150px]  flex flex-col justify-between `}
    >
      <div className="mb-[30px] wide:mb-[50px]">
        <SubtitleAndTitle
          subtitle={
            context.isWide
              ? '서울대학교 의과대학 출신 의사 연구진과 데이터 엔지니어가 개발한'
              : [
                  '서울대학교 의과대학 출신 의사 연구진과',
                  <br />,
                  '데이터 엔지니어가 개발한',
                ]
          }
          title={'단계적 관리, 치료, 그리고 성장'}
          subtitle2line
        />
      </div>

      {contents.map((content, index) => (
        <div className="mb-[20px] wide:mb-[30px]">
          <Part5Card
            backgroundColor={content.backgroundColor}
            image={content.image}
            title={content.title}
            text={content.text}
            left={content.left}
          />
        </div>
      ))}
    </div>
  );
}

export default Part5;
