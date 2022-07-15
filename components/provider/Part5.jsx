import React, { useContext } from 'react';

import homepageProvider_part5 from '../../public/image/homepageProvider_part5_1.5.png';
import { Title } from '../elements/Title';
import { Button } from '../elements/Button';

import { HomepageContext } from '../homepageContext';
import Link from 'next/link';
import Image from 'next/image';

export default function Part5() {
  const context = useContext(HomepageContext);

  return (
    <div className={`w-screen h-[300px] wide:h-[500px] bg-white   relative`}>
      <div className="w-full h-full absolute top-0 left-0  overflow-hidden flex relative">
        <div
          style={{ minWidth: context.isWide ? '1200px' : '720px' }}
          className="w-full h-full absolute top-0 left-[50%] translate-x-[-50%]  "
        >
          <Image
            src={homepageProvider_part5}
            placeholder="blur"
            layout="responsive"
          />
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 " />
      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
        <div className="mb-[30px] text-center">
          <Title
            title={'더 많은 사람들을 돕고싶다면 \n 인사이드와 함께하세요.'}
            style={{ color: 'white' }}
          />
        </div>

        <Link href="/application?target=provider">
          <a>
            <Button
              text={'전문가 등록 문의하기'}
              style={{ width: context.isWide ? '' : '210px' }}
              click={() => {}}
            />{' '}
          </a>
        </Link>
      </div>
    </div>
  );
}
