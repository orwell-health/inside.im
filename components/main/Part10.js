import React, { useEffect } from 'react';
import { Button } from '../elements/Button';
import { BUILD_TARGET } from '../../config';
import AppDownload from '../component/AppDownload';

export default function Part10() {
  return (
    <div className="w-screen py-[50px] wide:py-[128px] bg-[#F3F5F8] flex flex-col justify-center items-center">
      <div className="text-[24px] leading-[31.2px] wide:text-[40px] wide:leading-[52px] font-bold text-black mb-[25px] wide:mb-[40px] text-center">
        {['지금 인사이드와 함께하세요']}
      </div>
      <AppDownload />
    </div>
  );
}
