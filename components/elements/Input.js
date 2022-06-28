/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { hasTouch } from 'detect-touch';

export function Input(props) {
  const {
    title,
    titleShow,
    optional,
    inputMode,
    placeholder,
    value,
    resetButton,
    errorMessage,
    errorMessageShow,
    updateValue,
    updateErrorMessage,
  } = props;

  const [isFocused, setFocused] = useState(false);

  return (
    <div>
      {titleShow && (
        <div className="flex justify-between items-center mb-[10px]">
          <p className="">
            <span className="text-[17px] leading-[24.62px] font-bold text-[#26282C] ">
              {title}
            </span>
            {!optional && (
              <span className="ml-[3px] text-[17px] leading-[24.62px] font-bold text-[#E32940] ">
                *
              </span>
            )}
          </p>
        </div>
      )}
      <div
        className={`w-full h-[52px] ring-[1px]  rounded-[12px]  bg-[#FAFBFD]  ${
          errorMessage !== ''
            ? 'ring-[#E32940]'
            : isFocused
            ? 'ring-[#26282C]'
            : 'ring-[#D1D5DC]'
        } flex justify-between 
        ${errorMessage !== '' && errorMessageShow ? ' mb-[5px]' : ''}`}
      >
        <input
          className={`w-full rounded-[12px] pl-[20px] py-[14px] font-normal text-[17px] leading-[26px] bg-[#FAFBFD] placeholder:text-[#A4A6B0] 
      ${
        errorMessage !== '' ? ' text-[#E32940]' : 'text-black '
      } caret-[#3953D9] outline-none mb-[2px]
      `}
          placeholder={placeholder}
          value={value}
          inputMode={inputMode}
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
        ></input>
        {value !== '' && resetButton && (
          <div
            className="mr-[18px] p-[4px] flex items-center"
            onTouchStart={(e) => {
              console.log('delete');
              updateValue(title, '');
              updateErrorMessage(title, '');
            }}
            onMouseDown={(e) => {
              if (!hasTouch) {
                updateValue(title, '');
                updateErrorMessage(title, '');
              }
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM12.495 5.50503C12.7683 5.77839 12.7683 6.22161 12.495 6.49497L9.98995 9L12.495 11.505C12.7683 11.7784 12.7683 12.2216 12.495 12.495C12.2216 12.7683 11.7784 12.7683 11.505 12.495L9 9.98995L6.49497 12.495C6.22161 12.7683 5.77839 12.7683 5.50503 12.495C5.23166 12.2216 5.23166 11.7784 5.50503 11.505L8.01005 9L5.50503 6.49497C5.23166 6.22161 5.23166 5.77839 5.50503 5.50503C5.77839 5.23166 6.22161 5.23166 6.49497 5.50503L9 8.01005L11.505 5.50503C11.7784 5.23166 12.2216 5.23166 12.495 5.50503Z"
                fill="#D1D5DC"
              />
            </svg>
          </div>
        )}
      </div>
      {errorMessage !== '' && errorMessageShow && (
        <div className=" text-[#E32940] text-[15px] leading-[21.72px]  ">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
