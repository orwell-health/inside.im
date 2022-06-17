import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

function Card(props) {
  const { color, imageWidth, title, text, start } = props;
  const container = useRef();

  useEffect(() => {
    console.log('lottie', start);
    const instance = lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,

      animationData:
        title === '불안정한 마음은 바로잡고'
          ? require('../../public/image/homepageMain_part3_1.json')
          : require('../../public/image/homepageMain_part3_2.json'),
    });
    instance.addEventListener('');
    return () => instance.destroy();
  }, []);

  return (
    <div className="w-full h-[435px] wide:w-[465px] wide:h-[640px] bg-white p-[25px] wide:p-[40px] rounded-[25px] wide:rounded-[35px] shadow-card">
      <div
        className="w-full overflow-hidden h-[200px] wide:h-[312px] rounded-[10px] wide:rounded-[20px] mb-[25px] wide:mb-[50px] flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        {<div style={{ width: imageWidth }} ref={container}></div>}
      </div>
      <div className="text-[20px] leading-[28px] wide:text-[32px] wide:leading-[44.8px] font-bold text-[#26282C] mb-[10px] wide:mb-[20px]">
        {title}
      </div>
      <div className="text-[14px] leading-[22.4px] wide:text-[17px] wide:leading-[27.2px] text-[#3A3C40]">
        {text}
      </div>
    </div>
  );
}

export default Card;
