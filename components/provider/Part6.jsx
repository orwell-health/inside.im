import React from 'react';
import QnAItem from '../component/QnAItem';

import { Title2 } from '../elements/Title2';

export default function Part6() {
  const qnaList = [
    {
      question: '전문가 등록 기준이 있나요?',
      answer: [
        '현재 상담심리사 1급, 임상심리사 1급 자격증을 보유하고 계신 상담사 선생님만 전문가 등록이 가능합니다. 하지만 향후 다양한 방식으로 더 많은 선생님들께서 인사이드에서 활동할 수 있도록 할 계획이랍니다. 그러니 디지털 공간에서의 심리상담에 대해 관심이 많은 분들이라면 언제든지 문의주세요!',
      ],
    },
    {
      question: '돌발상황에 잘 대처할 수 있을까요?',
      answer: [
        '인사이드는 비대면 심리상담을 제공하는 어플리케이션 서비스 중 유일하게 본인인증 절차를 적용하고 있습니다. 이를 기반으로 내담자의 성희롱이나 돌발행위가 발생했을 때 자동화된 신고 프로세스를 도입하여 활용하고 있습니다. 인사이드에서 더 안전하게 심리상담을 진행해 보세요.',
      ],
    },
    {
      question: '잘 집중해서 상담할 수 있을까요?',
      answer: [
        '이미 많은 선생님들이 비대면으로 심리상담을 진행하고 있습니다. 해외에서는 관련된 학회가 만들어져 비대면 공간에서의 상담에 대한 연구를 적극적으로 진행하고 있습니다. 인사이드 선생님 중에서는 2년 넘게 비대면으로만 상담을 진행하셨던 분도 계시답니다. 인사이드와 함께 비대면 공간에서의 상담 문화와 양식을 만들어나가보는 건 어떨까요? 다가올 미래의 정신건강서비스를 만들어나가는 데에 저희와 선생님이 함께 할 수 있기를 기대합니다.',
      ],
    },
    {
      question: '비대면 상담만의 특징이 있나요?',
      answer: [
        '인사이드는 의사와 심리학자들이 모여서 만든 인지행동치료 프로그램을 제공하고 있습니다. 향후 서비스 내에서 선생님들이 직접 해당 프로그램들을 이끌 수 있도록 할 예정이랍니다. 뿐만 아니라 상담사 선생님들께서 더 편리하게 이용할 수 있는 상담 내역 및 스케쥴 관리 프로그램을 제공할 계획입니다. 인사이드를 활용하여 더 편리하고 더 즐거운 상담 경험을 제공해 보는 건 어떠세요?',
      ],
    },
  ];
  return (
    <div
      className={`py-[50px] wide:py-[150px] px-[24px] wide:px-0 max-w-[960px] mx-auto  `}
    >
      <div className="text-center mb-[30px] wide:mb-[50px]">
        <Title2 title={'궁금한 것은 언제든 물어보세요'} />
      </div>
      <div />
      {qnaList.map((qna, index) => (
        <div>
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
