import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import iphone13 from '../../public/image/iphone13.png';
// import iphone13_shadow from '../../image/iphone13_shadow.png';
import { HomepageContext } from '../homepageContext';
import Image from 'next/image';

function Part5Card(props) {
  const { backgroundColor, image, title, text, left } = props;
  const context = useContext(HomepageContext);
  return (
    <div
      className="w-full h-[600px] wide:h-[700px] px-[30px] wide:px-[50px] rounded-[25px] wide:rounded-[50px] overflow-hidden"
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        className={`w-full h-full wide:flex ${
          left ? 'wide:flex-row-reverse' : 'wide:flex-row'
        }`}
      >
        <div className="w-full wide:w-[50%] mt-[40px] wide:mt-[100px]  pr-[20px]">
          <div className="w-[25px] h-[25px] wide:w-[50px] wide:h-[50px] rounded-[25px] bg-qna flex justify-center items-center mb-[10px] wide:mb-[20px]">
            {context.isWide && (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.17 16.73H9.47V10.34H15.53V7.22H9.47V0.829998H6.17V7.22H0.14V10.34H6.17V16.73Z"
                  fill="white"
                />
              </svg>
            )}
            {!context.isWide && (
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.58531 8.36504H5.23531V5.17004H8.26531V3.61004H5.23531V0.415039H3.58531V3.61004H0.570312V5.17004H3.58531V8.36504Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
          <p
            className="text-[24px] leadiing-[33.6px] wide:text-[40px] wide:leading-[56px] text-[#26282C] font-bold mb-[10px] wide:mb-[30px] "
            style={{ wordBreak: 'keep-all' }}
          >
            {title}
          </p>

          <p className="text-[14px] leading-[22.4px] wide:text-[18px] wide:leading-[28.8px] font-normal text-[#26282C]">
            {text}
          </p>
        </div>
        <div
          className={`w-full px-[25px] wide:px-0 wide:w-[50%] h-full pt-[50px] ${
            left ? 'wide:pr-[50px]' : 'wide:pl-[50px]'
          }`}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            viewport={{ once: true }}
          >
            <div className="relative ">
              {/* <div className="absolute top-[-145px] right-[-109px]  z-10">
                <img className="scale-3" src={iphone13_shadow} alt="empty" />
              </div> */}

              <div className="absolute top-0 drop-shadow-iphone">
                <Image src={iphone13} />
              </div>

              <div className=" rounded-[43px] absolute top-[11px] bottom-[11px] left-[13px] right-[13px] wide:top-[20px] wide:bottom-[20px] wide:left-[26px] wide:right-[26px]  ">
                <Image src={image} objectFit="cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Part5Card;
