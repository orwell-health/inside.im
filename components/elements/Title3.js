import React from 'react';

export function Title3(props) {
  const { title, style } = props;

  return (
    <div className="">
      <div
        className="text-[20px] leading-[28px] wide:text-[32px] wide:leading-[44.8px] font-bold text-black whitespace-pre-line"
        style={style}
      >
        {title}
      </div>
    </div>
  );
}
