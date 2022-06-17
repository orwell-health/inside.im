import React, { useContext } from 'react';
import homepageMain_part7_1 from '../../public/image/homepageMain_part7_1.png';
import homepageMain_part7_2 from '../../public/image/homepageMain_part7_2.png';
import homepageMain_part7_3 from '../../public/image/homepageMain_part7_3.png';
import homepageMain_part7_4 from '../../public/image/homepageMain_part7_4.png';
import homepageMain_part7_5 from '../../public/image/homepageMain_part7_5.png';
import SwiperView2 from '../component/SwiperView2';
import { Title2 } from '../elements/Title2';
import { HomepageContext } from '../homepageContext';

export default function Part7() {
  const context = useContext(HomepageContext);

  const contents = [
    {
      image: homepageMain_part7_1,
      text: context.isWide
        ? [
            '직업 특성 때문에 상담을 받을 수 있는 시간이 일정치 않은데,',
            <br />,
            '제가 원하는 시간에 받을 수 있다는 점이 좋아요.',
            <br />,
            '그리고 비대면이다보니 편안한 공간에서 편안한 상태로 할 수 있는 점도 좋았죠.',
          ]
        : '직업 특성 때문에 상담을 받을 수 있는 시간이 일정치 않은데, 제가 원하는 시간에 받을 수 있다는 점이 좋아요. 그리고 비대면이다보니 편안한 공간에서 편안한 상태로 할 수 있는 점도 좋았죠.',
      from: [
        { text: '퇴근시간이 일정하지 않은 ', bold: true },
        { text: '간호사 정OO님', bold: false },
      ],
    },
    {
      image: homepageMain_part7_2,
      text: context.isWide
        ? [
            '회사에서 중요한 발표를 망쳤어요. 내 커리어는 여기서 끝인가 생각이 들면서',
            <br />,
            '일이 손에 잡히지 않았어요. 그러다 상담을 받게 됐는데 상담사 선생님이',
            <br />,
            '‘정말로 다 끝난 게 맞아요? 발표는 다음번에 또 있지 않나요?’ 같은 새로운 가정들을 해주셨어요.',
            <br />,
            '제가 했던 생각이 비논리적이라는 것을 깨닫고, 다시 힘을 내서 일을 하기 시작했죠.',
          ]
        : '회사에서 중요한 발표를 망쳤어요. 내 커리어는 여기서 끝인가 생각이 들면서 일이 손에 잡히지 않았어요. 그러다 상담을 받게 됐는데 상담사 선생님이 ‘정말로 다 끝난 게 맞아요? 발표는 다음번에 또 있지 않나요?’ 같은 새로운 가정들을 해주셨어요. 제가 했던 생각이 비논리적이라는 것을 깨닫고, 다시 힘을 내서 일을 하기 시작했죠.',
      from: [
        { text: '광고회사 AE로 일하고 있는 ', bold: true },
        { text: '최OO님', bold: false },
      ],
    },
    {
      image: homepageMain_part7_3,
      text: context.isWide
        ? [
            '근무지 근처엔 상담센터가 없어요. 큰 맘 먹고 도시의 상담센터를 찾아가면',
            <br />,
            '정해진 선생님에게 상담을 받게 되죠. 그런데 인사이드에서는',
            <br />,
            '전문성을 갖춘 선생님들의 프로필과 인터뷰를 미리 다 읽어볼 수 있고,',
            <br />,
            '내가 원하는 선생님을 선택할 수 있어요.',
          ]
        : '근무지 근처엔 상담센터가 없어요. 큰 맘 먹고 도시의 상담센터를 찾아가면 정해진 선생님에게 상담을 받게 되죠. 그런데 인사이드에서는 전문성을 갖춘 선생님들의 프로필과 인터뷰를 미리 다 읽어볼 수 있고, 내가 원하는 선생님을 선택할 수 있어요.',
      from: [
        { text: '도서지역 공공기관에서 근무 중인 ', bold: true },
        { text: '김OO님', bold: false },
      ],
    },
    {
      image: homepageMain_part7_4,
      text: context.isWide
        ? [
            '문자나 전화 상담보다 훨씬 더 좋았어요.',
            <br />,
            '문자 상담의 경우에는 1:1로 상담 받고 있다는 느낌을 못 받았었거든요. ',
            <br />,
            '영상으로 상담하니 오프라인 상담과 비슷하게 선생님이',
            <br />,
            '내 얘기에 집중하고 있다는 느낌을 받을 수 있어서 좋았어요.',
          ]
        : '문자나 전화 상담보다 훨씬 더 좋았어요. 문자 상담의 경우에는 1:1로 상담 받고 있다는 느낌을 못 받았었거든요. 영상으로 상담하니 오프라인 상담과 비슷하게 선생님이 내 얘기에 집중하고 있다는 느낌을 받을 수 있어서 좋았어요.',
      from: [
        { text: '비대면 상담 이용 경험이 있는 ', bold: true },
        { text: '워킹맘 권OO님', bold: false },
      ],
    },
    {
      image: homepageMain_part7_5,
      text: context.isWide
        ? [
            '회사에 적응하는 과정에서 제 자신을 많이 잃어서 우울했는데,',
            <br />,
            '제가 원래 좋아하고 원하던 것을 하나하나 찾아주시더라구요. ',
            <br />,
            '상담을 통해서 그동안 흘려보낸 과거의 시간도 위로 받았고 ',
            <br />,
            '제 안에 발견하지 못했던 부분까지 알게되어 선생님께 정말 감사했습니다.',
          ]
        : '회사에 적응하는 과정에서 제 자신을 많이 잃어서 우울했는데, 제가 원래 좋아하고 원하던 것을 하나하나 찾아주시더라구요. 상담을 통해서 그동안 흘려보낸 과거의 시간도 위로 받았고 제 안에 발견하지 못했던 부분까지 알게되어 선생님께 정말 감사했습니다.',
      from: [
        { text: '판교에서 근무중인 ', bold: true },
        { text: '새내기 개발자 문OO님', bold: false },
      ],
    },
  ];

  return (
    <div className="bg-[#F3F5F8]">
      <div
        className={`max-w-[960px] mx-auto py-[50px] pb-[40px] wide:pb-0 wide:py-[100px]  flex flex-col justify-between `}
      >
        <div className="text-center mb-[50px] ">
          <Title2
            title={
              context.isWide
                ? ['가장 편안하고, 가장 효과적인 경험으로']
                : ['가장 편안하고,', <br />, '가장 효과적인 경험으로']
            }
          />
        </div>
        <div className="px-[24px]  wide:px-0">
          <SwiperView2 contents={contents} />
        </div>
      </div>
    </div>
  );
}
