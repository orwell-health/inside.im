import React from 'react';
import QnAItem from '../component/QnAItem';
import { Title2 } from '../elements/Title2';

export default function Part9() {
  const qnaList = [
    {
      question: '팀원들이 상담 내용이 알려지는 걸 걱정하진 않을까요?',
      answer: [
        '인사이드는 그 누구에게도 서비스 이용자의 정신건강 상태나 상담 기록에 대한 정보들을 제공하지 않습니다. 제휴한 기업의 인사팀을 비롯한 그 구성원들에게도 마찬가지입니다. 인사이드는 이용자들의 개인적인 생각과 마음들을 보호합니다. 가장 개인적인 것이 가장 진솔한 것이니까요.',
      ],
    },
    {
      question:
        '팀원들에게 정신건강 관리 서비스를 제공해 주고 싶은데 돈이 많이 들까 걱정이에요.',
      answer: [
        '인사이드는 스타트업부터 대기업까지 각 기업의 상황에 맞는 다양한 이용 플랜들을 제공하고 있습니다. 뿐만 아니라 최대 지출 금액을 미리 설정하여 과도한 지출이 발생하는 일을 방지하고 있습니다. 또한 일정 수준 이상의 지출이 발생하면 자동으로 안내를 받아볼 수 있는 서비스도 제공하고 있습니다. 팀원들의 정신건강을 관리하고 싶다면 망설이지 말고 연락주세요. 현 상황에 딱 맞는 플랜을 추천드릴게요.',
      ],
    },
    {
      question: '실제 팀원들에게 도움이 될까요?',
      answer: [
        '인사이드의 정신건강 평가와 멘탈케어 프로그램들은 서울의대 출신 의사들과 심리학자들에 의해 만들어졌습니다. 정신건강 평가는 실제 임상에서 이용하고 있는 지표들을 활용하고 있으며, 프로그램은 정신의학과 심리학에서 충분히 검증된 이론들에 기반하여 만들어졌습니다. 뿐만 아니라 인사이드에 참여하고 있는 심리상담사 선생님들은 모두 석˙박사급 이상으로 1급 상담사 자격증을 보유하고 계십니다. 인사이드를 통해 우리 회사에 최고의 디지털 정신건강센터를 도입해 보세요.',
      ],
    },
  ];
  return (
    <div
      className={`py-[50px] wide:py-[150px] px-[24px] wide:px-0 max-w-[960px] mx-auto `}
    >
      <div className="text-center mb-[30px] wide:mb-[50px]">
        <Title2 title={'궁금한 것은 언제든 물어보세요'} />
      </div>
      <div />
      {qnaList.map((qna, index) => (
        <div key={`qna${index}`}>
          {index === 0 && <div className="w-full h-[1px] bg-[#26282C]" />}
          <div className="">
            <QnAItem question={qna.question} answer={qna.answer} />
          </div>
          {index !== qnaList.length - 1 && (
            <div className="w-full h-[1px] bg-[#D1D5DC]" />
          )}
          {index === qnaList.length - 1 && (
            <div className="w-full h-[1px] bg-[#26282C]" />
          )}
        </div>
      ))}
      <div />
    </div>
  );
}
