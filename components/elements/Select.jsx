import React, { useEffect, useState, useRef } from 'react';
import { PressedEffect } from '../button/PressedEffect';

export function Select(props) {
  const { title, optional, value, options, updateValue } = props;

  const [selected, setSelected] = useState(value);

  useEffect(() => {
    console.log(options[0] === selected);
    updateValue(title, selected);
  }, [selected]);

  return (
    <div className="w-full">
      <p className="mb-[10px]">
        <span className="text-[17px] leading-[24.62px] font-bold text-[#26282C] ">{title}</span>
        {!optional && <span className="ml-[3px] text-[17px] leading-[24.62px] font-bold text-[#E32940] ">*</span>}
      </p>
      <div className="w-full mb-[30px] flex justify-between">
        {options.map((option, index) => (
          <div className="w-[calc((100%-5px)/2)]">
            <PressedEffect
              element={
                <div
                  className={`w-full h-[54px] ring-[1px] rounded-[12px]   ${
                    option === selected ? 'ring-[#26282C] font-medium' : 'ring-[#D1D5DC] font-normal'
                  }  px-[20px] py-[14px]  text-[17px] leading-[26px] mb-[2px] text-black text-center`}
                >
                  {option}
                </div>
              }
              disable={false}
              action={() => {
                setSelected(option);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
