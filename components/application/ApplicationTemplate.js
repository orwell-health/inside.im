import React, { useState, useRef, useEffect, useContext } from 'react';
// import ApplicationProvider from './ApplicationProvider';
import ApplicationCustomer from './ApplicationCustomer';
import kakaotalk from '../../public/image/kakaotalk.png';
import Image from 'next/image';

export default function ApplicationTemplate(props) {
  const { from } = props;

  return (
    <div
      className={`w-screen pt-[50px] wide:pt-[80px] pb-[60px] wide:pb-[150px] relative `}
    >
      <div className="w-full px-[20px] wide:px-0 wide:max-w-[520px] mx-auto flex flex-col items-center justify-center ">
        {from === 'provider' && (
          <ApplicationCustomer type={'전문가 등록 문의'} />
        )}
        {from === 'customer' && (
          <ApplicationCustomer type={'프로그램 참여요청'} />
        )}
        {(from === 'service_main' || from === 'service_provider') && (
          <ApplicationCustomer type={'서비스 관련 문의'} />
        )}
      </div>
      <div className="fixed bottom-[40px] wide:bottom-[60px] right-[20px] wide:right-[100px] w-[60px] wide:w-[70px] h-[60px] wide:h-[70px] rounded-[70px] bg-[#FAE100] flex items-center justify-center">
        <div
          className="w-[33px] wide:w-[38px] cursor-pointer flex items-center"
          onClick={() => window.open('http://pf.kakao.com/_YduKb', '_blank')}
        >
          <Image src={kakaotalk} />
        </div>
      </div>
    </div>
  );
}
