import React, { useContext } from 'react';
import Part4Card from '../component/Part4Card';
import part4_1 from '../../public/image/homepageMain_part4_1.png';
import part4_2 from '../../public/image/homepageMain_part4_2.png';
import { SubtitleAndTitle } from '../elements/SubtitleAndTitle';
import { HomepageContext } from '../homepageContext';
import Image from 'next/image';

function Part4() {
  const context = useContext(HomepageContext);

  return (
    <div className="bg-web1 ">
      <div
        className={` py-[50px] px-[24px] wide:px-0 wide:py-[150px] max-w-[960px] mx-auto flex flex-col justify-between `}
      >
        <div className="mb-[24px] wide:mb-[80px]">
          <SubtitleAndTitle
            subtitle={
              context.isWide
                ? '언제든, 어디서든, 앱 서비스 하나로 필요한 모든 정신건강서비스를'
                : [
                    '언제든, 어디서든, 앱 서비스 하나로',
                    <br />,
                    '필요한 모든 정신건강서비스를',
                  ]
            }
            title={'가장 편리하게, 가장 효율적으로'}
            subtitle2line
          />
        </div>

        <div className="mb-[50px] wide:mb-[100px]">
          <Part4Card
            image={part4_1}
            imageWidth={context.isWide ? '1052px' : '500px'}
            title1={'언제든 어디서든'}
            title2={'스마트폰만 있다면'}
            text={[
              '바쁜 와중에 누군가를 찾아가기 쉽지 않았나요?',
              <br />,
              '인사이드를 통해서는 스마트폰만 있다면 언제 어디서든 최고의 전문가를 만날 수 있습니다. 퇴근 후 늦은밤 내 방 안에서 전문가를 만나보는 건 어떤가요?',
            ]}
          />
        </div>
        <div className="">
          <Part4Card
            image={part4_2}
            imageWidth={context.isWide ? '1240px' : '500px'}
            title1={'어떤 고민이든지'}
            title2={'도움이 필요할 때'}
            text={[
              '마음의 고민을 털어놓을 곳을 찾지 못했나요?',
              <br />,
              '내 역량을 끌어올리기 위해 누군가의 도움이 필요했나요? 인사이드는 우울, 불안과 같은 정서 문제에서부터 퍼포먼스 증진을 위한 프로그램까지 다양한 솔루션들을 제공합니다.',
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Part4;
