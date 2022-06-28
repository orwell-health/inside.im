import React, { useContext } from 'react';

import { Button } from '../elements/Button';

import { HomepageContext } from '../homepageContext';
import Link from 'next/link';

export default function Part7() {
  const context = useContext(HomepageContext);

  return (
    <div className="w-screen px-[24px] wide:px-0 py-[34px] wide:py-[102px] bg-[#F3F5F8] flex flex-col justify-center items-center">
      <div className="text-[24px] leading-[31.2px] wide:text-[40px] wide:leading-[52px] font-bold text-black mb-[25px] wide:mb-[40px] text-center">
        {context.isWide
          ? [
              '정신건강과 마음의 걱정을 편하게 공유하는 세상,',
              <br />,
              '함께 만들어요',
            ]
          : '정신건강과 마음의 걱정을 편하게 공유하는 세상, 함께 만들어요'}
      </div>

      <Link href="/application?target=service_provider">
        <a>
          <Button
            text={'전문가 등록 문의하기'}
            style={{ width: context.isWide ? '' : '210px' }}
            click={() => {}}
          />{' '}
        </a>
      </Link>
    </div>
  );
}
