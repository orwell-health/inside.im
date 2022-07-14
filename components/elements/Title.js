import React from 'react';

export function Title(props) {
  const { title, style } = props;

  return (
    <div
      className="font-bold  text-[24px] leading-[31.2px] wide:text-[60px] wide:leading-[78px] whitespace-pre-line "
      style={style}
    >
      {title}
    </div>
  );
}
