import React from 'react';

export function MainTitle(props) {
  const { title, subtitle, style } = props;

  return (
    <div className="mb-[50px]" style={style}>
      <p className="font-bold text-[#26282C] mb-[15px] text-[40px] leading-[48px] wide:text-[80px] wide:leading-[96px]  wide:mb-[20px] whitespace-pre-line">
        {title}
      </p>
      <p className="font-medium text-[#6B6D76] text-[15px] leading-[22.5px] wide:text-[24px] wide:leading-[36px] whitespace-pre-line ">
        {subtitle}
      </p>
    </div>
  );
}
