import React, { useState, useRef, useEffect, useContext } from 'react';

import Link from 'next/link';
import { HomepageContext } from '../homepageContext';
import { Button } from '../elements/Button';

export default function Submitted(props) {
  const { from } = props;
  const context = useContext(HomepageContext);

  return (
    <div className={`w-full h-full bg-white relative`}>
      <div className="w-full absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col items-center">
        <div className="font-bold text-[#26282C] text-[27px] leading-[35.1px] wide:text-[40px] wide:leading-[42px]  wide:text-center mb-[30px]">
          {'제출이 완료되었어요'}
        </div>

        <div className="text-[15px] leading-[21.72px] text-[#4E4F53] font-light text-center mb-[40px]">
          {[
            '수집된 개인정보는 상담이 종료된 후 파기됩니다.',
            <br />,
            '이외 문의사항은 registration@orwellhealth.org로 연락 바랍니다.',
          ]}
        </div>
        <Link href={from === 'service_provider' ? '/provider' : '/main'}>
          <a>
            <Button
              text={'홈으로 가기'}
              style={{
                width: context.isWide ? '' : '210px',
                background: 'white',
                border: '1px solid #4E4F53',
                color: '#26282C',
              }}
              click={() => {
                console.log('홈으로 가기');
                setTimeout(() => {
                  context.setSubmitted(false);
                }, 1000);
              }}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
