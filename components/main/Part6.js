import React from 'react';

import CounselorCard from '../component/CounselorCard';
import 박지현 from '../../public/image/박지현.png';
import 김미경 from '../../public/image/김미경.png';
import 윤혜경 from '../../public/image/윤혜경.png';
import 김벼리 from '../../public/image/김벼리.png';
import 전수진 from '../../public/image/전수진.png';
import 김정호 from '../../public/image/김정호.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
import { Button } from '../elements/Button';
import { SubtitleAndTitle } from '../elements/SubtitleAndTitle';
import { HorizontalTitleAndText2 } from '../elements/HorizontalTitleAndText2';

function Part5() {
  const counselors = [
    {
      name: '박지현',
      title: ['따뜻함이 전달되는', <br />, '시간이 될 수 있도록'],
      explanation: '상담심리사 1급',
      image: 박지현,
      link: 'https://brunch.co.kr/@insidebyorwell/72',
    },
    {
      name: '김미경',
      title: [
        '기다려 줘야죠',
        <br />,
        '변한다는 건',
        <br />,
        '쉽지 않으니까요',
      ],
      explanation: '임상심리 전문가',
      image: 김미경,
      link: 'https://brunch.co.kr/@insidebyorwell/71',
    },
    {
      name: '윤혜경',
      title: ['나를 알고', <br />, '내 잠재력을', <br />, '깨우는 일'],
      explanation: '상담심리사 1급',
      image: 윤혜경,
      link: 'https://brunch.co.kr/@insidebyorwell/89',
    },

    {
      name: '김벼리',
      title: ['내담자가 스스로', <br />, '꽃 피울 수 있도록'],
      explanation: '임상심리 전문가',
      image: 김벼리,
      link: 'https://brunch.co.kr/@insidebyorwell/70',
    },
    {
      name: '전수진',
      title: ['진정한 나다움을', <br />, '찾아가는 길을 함께'],
      explanation: '상담심리사 1급',
      image: 전수진,
      link: 'https://brunch.co.kr/@insidebyorwell/73',
    },
    {
      name: '김정호',
      title: ['생각을 바꾸면', <br />, '세상이 달라져요'],
      explanation: '임상심리 전문가',
      image: 김정호,
      link: 'https://brunch.co.kr/@insidebyorwell/84',
    },
  ];
  const settings = {
    autoplay: true,
    speed: 2000,
    // autoplaySpeed: 1000,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    variableWidth: true,
    // centerMode: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <div
      className={` max-w-[960px] mx-auto px-[24px] wide:px-0 pt-[55px] wide:pt-[120px] pb-[75px] wide:pb-[150px] flex flex-col justify-between `}
    >
      <div className="mb-[30px] wide:mb-[50px]">
        <SubtitleAndTitle
          subtitle={'동종업계 가장 많은 1급 상담사 분들을 모셨어요'}
          title={'진짜 전문가를 찾으세요?'}
        />
      </div>
      <div className="bg-[#DCD7FF] w-full rounded-[25px] wide:rounded-[30px] pt-[40px] wide:pt-[100px] pb-[30px] wide:pb-[60px] overflow-hidden ">
        <div className="px-[30px] wide:px-[100px]">
          <HorizontalTitleAndText2
            title1={'철저히'}
            title2={'검증된 선생님들만'}
            title2Color={'black'}
            text={
              '인사이드에서 활동하는 심리상담사는 모두 석박사급 이상의 숙련된 1급 상담사로, 전문적인 인력을 통해 가장 효과적이고 안전한 정신건강서비스를 제공합니다.'
            }
            smallleading
          />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeIn' }}
          viewport={{ once: true }}
        >
          <div className="relative h-[313px] wide:h-[600px]">
            {/* 38+25+250 */}
            <div className="w-[570px] wide:w-[1140px] absolute left-[50%] translate-x-[-50%]">
              <Slider {...settings}>
                {counselors.map((counselor, index) => (
                  <div className="pt-[38px] pb-[25px]  wide:py-[50px] px-[7.5px] wide:px-[15px] ">
                    <CounselorCard
                      title={counselor.title}
                      counselor={`${counselor.name} 상담사 `}
                      explanation={counselor.explanation}
                      image={counselor.image}
                      link={counselor.link}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </motion.div>

        <div className="w-fit mx-auto">
          <Button
            text={'선생님 인터뷰 보기'}
            style={{ background: 'black', color: 'white' }}
            click={() =>
              window.open(
                'https://brunch.co.kr/magazine/insidecounselor',
                '_blank',
              )
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Part5;
