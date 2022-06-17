import React, { useEffect, useState, useRef } from 'react';

export function DropDown(props) {
  const {
    title,
    titleShow,
    optional,
    value,
    errorMessage,
    options,
    updateValue,
    updateErrorMessage,
  } = props;

  const [selected, setSelected] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    updateValue(title, selected);
  }, [selected]);

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
        className={`w-full h-[52px] ring-[1px] rounded-[12px]  bg-[#FAFBFD]  
        ${
          errorMessage !== ''
            ? 'ring-[#E32940]'
            : isOpen
            ? 'ring-[#26282C]'
            : 'ring-[#D1D5DC]'
        } flex justify-between 
        ${errorMessage !== '' ? ' mb-[5px]' : ''}`}
        onClick={(e) => {
          setIsOpen((isOpen) => !isOpen);
          if (updateErrorMessage) {
            updateErrorMessage(title, '');
          }
        }}
      >
        <div
          className={`w-full rounded-[12px] pl-[20px] py-[14px] font-normal text-[17px] leading-[26px] bg-[#FAFBFD] 
  mb-[2px] ${selected === '' ? 'text-[#A4A6B0]' : 'text-black '}
      `}
        >
          {selected}
          {selected === '' && '선택하세요'}
        </div>

        <div className="mr-[14px] p-[4px] flex items-center">
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="#26282C"
              stroke-width="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {errorMessage !== '' && (
        <div className=" text-[#E32940] text-[15px] leading-[21.72px]">
          {errorMessage}
        </div>
      )}
      {isOpen && (
        <div className="relative translate-y-[5px]">
          <div className="absolute top-0 w-full h-auto ring-[1px] ring-[#E1E4EB] rounded-[12px] bg-white shadow-dropdown p-[5px]">
            {options.map((option, index) => (
              <div
                className="w-full h-[45px] px-[15px] py-[12px] text-[15px] leading-[21.72px] text-[#4E4F53] rounded-[8px] hover:bg-[#F6F8FF]"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
