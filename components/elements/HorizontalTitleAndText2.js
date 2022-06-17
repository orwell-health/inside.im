import React from 'react';
// import PropTypes from 'prop-types';

export function HorizontalTitleAndText2(props) {
  const { title1, title2, title1Color, title2Color, text, textColor } = props;

  return (
    <div className=" wide:flex wide:items-center wide:justify-between">
      <div className={`text-[24px] leading-[31.2px]  wide:text-[35px] wide:leading-[49px] font-bold `}>
        <p className="text-[#26282C] wide:w-[330px]" style={{ color: title1Color }}>
          {title1}
        </p>
        <p style={{ color: title2Color }}>{title2}</p>
      </div>
      <div
        className="mt-[10px] block wide:mt-0 text-[14px] leading-[22.4px]  wide:text-[18px] wide:leading-[28.8px] font-normal text-[#3A3C40]"
        style={{ color: textColor }}
      >
        {text}
      </div>
    </div>
  );
}
