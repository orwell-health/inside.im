import React, { useState, useLayoutEffect } from 'react';

export function SubTitle(props) {
  const { subtitle } = props;

  return (
    <div className="text-[15px] leading-[24px] wide:text-[20px] wide:leading-[32px] font-medium text-[#6B6D76] whitespace-pre-line">
      {subtitle}
    </div>
  );
}
