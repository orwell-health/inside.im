import React, { useContext } from 'react';
import Image from 'next/image';
import { HomepageContext } from '../homepageContext';

function Card(props) {
  const context = useContext(HomepageContext);
  const { title, counselor, explanation, image, link } = props;
  return (
    <div
      className="w-[180px] wide:w-[360px] h-[250px] wide:h-[500px] rounded-[10px] wide:rounded-[20px] bg-white pt-[20px] wide:pt-[40px] px-[20px] wide:px-[40px] shadow-[0_5px_21.6px_rgba(120,120,162,0.3)] 
    relative overflow-hidden shrink-0 cursor-pointer"
      onClick={() => window.open(link, '_blank')}
    >
      <p className="text-[17.5px] wide:text-[35px] leading-[22.75px] wide:leading-[45.5px] text-[#373EED] tracking-[-0.5px] font-black mb-[10px] wide:mb-[20px]">
        {title}
      </p>
      <p className="text-[12px] wide:text-[16px] leading-[14.4px] wide:leading-[21px] text-[#6B6D76] tracking-[-0.8px]">
        <span className="font-bold">{counselor}</span>
        <span className="font-medium ">{explanation}</span>
      </p>
      <div className="w-fit h-[130px] wide:h-[300px] absolute bottom-0 right-0  flex justify-end ">
        <Image
          src={image}
          layout="fixed"
          // objectFit="contain"
          height={context.isWide ? 300 : 130}
          width={context.isWide ? 250 : 110}
        />
      </div>
    </div>
  );
}

export default Card;
