import React, { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
import homepageMain_part8 from '../../public/image/homepageMain_part8_1.5.png';
import { Title } from '../elements/Title';
import { Button } from '../elements/Button';
import { HomepageContext } from '../homepageContext';
import Image from 'next/image';
import Link from 'next/link';

function Part8() {
  const context = useContext(HomepageContext);
  // const navigate = useNavigate();

  return (
    <div className={`w-screen h-[300px] wide:h-[500px] bg-white   relative`}>
      <div className="w-full h-full absolute top-0 left-0  overflow-hidden flex relative">
        <div
          style={{ minWidth: context.isWide ? '1200px' : '720px' }}
          className="w-full h-full absolute top-0 left-[50%] translate-x-[-50%]  "
        >
          {/* <img
            src={homepageMain_part8}
            className="w-full object-fit my-auto"
            alt="empty"
          /> */}
          <Image
            src={homepageMain_part8}
            placeholder="blur"
            layout="responsive"
          />
        </div>
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-black opacity-50 " />
      <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center">
        <div className="mb-[30px] text-center">
          <Title
            title={'팀원들의 내면에 집중해보세요 \n 더 큰 잠재성을 만나보세요'}
            style={{ color: 'white' }}
          />
        </div>
        <Link href="/application?target=customer">
          <a>
            <Button
              text={'프로그램 참여 문의하기'}
              style={{ width: context.isWide ? '290px' : '208px' }}
              // click={() => {}}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Part8;
