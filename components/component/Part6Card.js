import React from 'react';
import Image from 'next/image';

function Part6Card(props) {
  const { image, text, from } = props;
  return (
    <div className=" w-full flex flex-col  items-center ">
      <div className=" w-[80px] h-[80px] mb-[30px] ">
        <Image src={image} />
      </div>

      <p className="text-[14px] wide:text-[18px] leading-[22.4px] wide:leading-[27px] font-normal text-[#26282C] text-center mb-[20px] wide:mb-[30px]">
        {text}
      </p>
      <div>
        {from.map((each, index) => (
          <span
            key={`part6Card${index}`}
            className="text-[14px] wide:text-[20px] leading-[21px] wide: leading-[30px] text-[#26282C] text-center"
          >
            <span className={`${each.bold ? 'font-bold' : 'font-normal'}`}>
              {each.text}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Part6Card;
