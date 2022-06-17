import React, { useState, useLayoutEffect } from 'react';

export function SubTitle(props) {
  const { subtitle } = props;

  const [isWide, setIsWide] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsWide(true);
      } else {
        setIsWide(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="">
      <div className="text-[15px] leading-[24px] wide:text-[20px] wide:leading-[32px] font-medium text-[#6B6D76]">
        {subtitle}
      </div>
    </div>
  );
}
