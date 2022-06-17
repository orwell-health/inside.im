/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import { hasTouch } from 'detect-touch';

export function MultilineInput(props) {
  const { title, optional, placeholder, value, errorMessage, updateValue, updateErrorMessage } = props;

  const [isFocused, setFocused] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-[10px]">
        <p className="">
          <span className="text-[17px] leading-[24.62px] font-bold text-[#26282C] ">{title}</span>
          {!optional && <span className="ml-[3px] text-[17px] leading-[24.62px] font-bold text-[#E32940] ">*</span>}
        </p>
      </div>
      <div
        className={`w-full h-[144px] ring-[1px] rounded-[12px]  bg-[#FAFBFD]  ${
          errorMessage !== '' ? 'ring-[#E32940]' : isFocused ? 'ring-[#26282C]' : 'ring-[#D1D5DC]'
        } flex justify-between items-start
        ${errorMessage !== '' ? ' mb-[5px]' : 'mb-[30px]'}`}
      >
        <textarea
          className={`w-full h-full rounded-[12px] px-[20px] py-[14px] font-normal text-[17px] leading-[26px] bg-[#FAFBFD] placeholder:text-[#A4A6B0] 
      ${errorMessage !== '' ? ' text-[#E32940]' : 'text-black '} caret-[#3953D9] outline-none mb-[2px] resize-none
      `}
          placeholder={placeholder}
          value={value}
          onClick={(e) => {
            e.target.focus();
          }}
          onChange={(e) => {
            updateValue(title, e.target.value);
            updateErrorMessage(title, '');
          }}
          onFocus={(e) => {
            setFocused(true);
          }}
          onBlur={(e) => {
            setFocused(false);
          }}
        ></textarea>
      </div>
      {errorMessage !== '' && (
        <div className=" text-[#E32940] text-[15px] leading-[21.72px] mb-[20px] ">{errorMessage}</div>
      )}
    </div>
  );
}
