import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { HomepageContext } from '../homepageContext';

export default function QnAItem(props) {
  const context = useContext(HomepageContext);
  const { question, answer } = props;
  const [isSeeMore, setSeeMore] = useState(false);
  const [rotate, setRotate] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const detailRef = useRef();
  const titleRef = useRef();

  useEffect(() => {
    // console.log('height', 37 + 41 + titleRef.current.offsetHeight);
    setTimeout(() => {
      setLoaded(true);
    }, 100);
    if (detailRef.current && titleRef.current) {
      // console.log(
      //   detailRef.current.offsetHeight,
      //   titleRef.current.offsetHeight,
      // );
    }
  }, []);

  function seeAnswer() {
    setRotate((rotate) => rotate + 1);
    setSeeMore((isSeeMore) => !isSeeMore);
  }

  return (
    <div className={``}>
      <motion.div
        className={` `}
        animate={{
          height: titleRef.current
            ? isSeeMore && detailRef.current
              ? context.isWide
                ? `${
                    titleRef.current.offsetHeight +
                    detailRef.current.offsetHeight
                  }px`
                : `${
                    titleRef.current.offsetHeight +
                    detailRef.current.offsetHeight
                  }px`
              : context.isWide
              ? `${titleRef.current.offsetHeight}px`
              : `${titleRef.current.offsetHeight}px`
            : '',
        }}
        transition={{ duration: loaded ? 0.2 : 0 }}
      >
        <div
          className={` px-[10px] wide:px-[20px] cursor-pointer `}
          onClick={seeAnswer}
        >
          <div className=" flex justify-between">
            <div className="pr-[20px]">
              <div className="flex wide:items-center">
                <div className="mt-[14.5px] wide:mt-0 w-[25px] h-[25px] wide:w-[50px] wide:h-[50px] rounded-[25px] bg-[#161616]  inline flex justify-center items-center mr-[10px] wide:mr-[20px] shrink-0">
                  {context.isWide ? (
                    <svg
                      width="19"
                      height="26"
                      viewBox="0 0 19 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.0103 20.3639C14.1063 20.3639 17.5903 16.5679 17.5903 10.3019C17.5903 4.06188 14.1063 0.421875 9.0103 0.421875C3.8883 0.421875 0.404297 4.03588 0.404297 10.3019C0.404297 16.5679 3.8883 20.3639 9.0103 20.3639ZM9.0103 17.2179C6.1243 17.2179 4.3303 14.6439 4.3303 10.3019C4.3303 6.19388 6.1243 3.72388 9.0103 3.72388C11.8703 3.72388 13.6903 6.19388 13.6903 10.3019C13.6903 14.6439 11.8703 17.2179 9.0103 17.2179ZM15.2243 25.2259C16.6283 25.2259 17.7723 24.9919 18.4743 24.6539L17.7723 21.8199C17.2003 22.0279 16.4983 22.1579 15.6403 22.1579C13.7163 22.1579 11.7403 21.3779 11.0123 19.5059L7.1123 19.8959C8.3343 22.9639 11.1423 25.2259 15.2243 25.2259Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="10"
                      height="14"
                      viewBox="0 0 10 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.50612 10.6819C7.05413 10.6819 8.79613 8.78394 8.79613 5.65094C8.79613 2.53094 7.05413 0.710938 4.50612 0.710938C1.94512 0.710938 0.203125 2.51794 0.203125 5.65094C0.203125 8.78394 1.94512 10.6819 4.50612 10.6819ZM4.50612 9.10894C3.06312 9.10894 2.16613 7.82194 2.16613 5.65094C2.16613 3.59694 3.06312 2.36194 4.50612 2.36194C5.93613 2.36194 6.84612 3.59694 6.84612 5.65094C6.84612 7.82194 5.93613 9.10894 4.50612 9.10894ZM7.61313 13.1129C8.31513 13.1129 8.88713 12.9959 9.23813 12.8269L8.88713 11.4099C8.60113 11.5139 8.25013 11.5789 7.82113 11.5789C6.85913 11.5789 5.87112 11.1889 5.50712 10.2529L3.55713 10.4479C4.16813 11.9819 5.57213 13.1129 7.61313 13.1129Z"
                        fill="white"
                      />
                    </svg>
                  )}
                </div>
                <p
                  className="pt-[17.5px] pb-[19px] wide:pt-[37px] wide:pb-[41px]
                  text-[14px] leading-[18.2px] wide:text-[25px] wide:leading-[32.5px] font-medium text-black inline"
                  ref={titleRef}
                >
                  {question}
                </p>
              </div>
            </div>
            <div className="mt-[17.5px] wide:mt-0 wide:flex wide:items-center">
              <motion.div
                className="inline-block  p-[4px]"
                animate={{ rotate: 180 * rotate }}
                transition={{ duration: loaded ? 0.2 : 0 }}
              >
                {context.isWide ? (
                  <svg
                    width="22"
                    height="12"
                    viewBox="0 0 22 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L11 11L21 1"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="black"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </motion.div>
            </div>
          </div>
          {
            <motion.div
              className={`pointer-events-none `}
              animate={{ opacity: isSeeMore ? 1 : 0 }}
              transition={{ duration: loaded ? 0.2 : 0 }}
            >
              <div ref={detailRef} className={`pb-[25.5px] wide:pb-[50px]`}>
                <div className="flex items-start pr-[30px] wide:pr-[50px]">
                  <div className="w-[25px] h-[25px] wide:w-[50px] wide:h-[50px] rounded-[25px] bg-[#2152FF]  inline flex justify-center items-center mr-[10px] wide:mr-[20px] shrink-0">
                    {context.isWide ? (
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.896484 19.9998H4.79648L7.55248 9.98977C8.12448 7.98777 8.67048 5.77776 9.19049 3.69776H9.29449C9.84049 5.75176 10.3865 7.98777 10.9585 9.98977L13.7145 19.9998H17.7445L11.5825 0.759766H7.05848L0.896484 19.9998ZM4.71848 15.0598H13.8705V12.0958H4.71848V15.0598Z"
                          fill="white"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="9"
                        height="11"
                        viewBox="0 0 9 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.449219 10.5H2.39922L3.77722 5.495C4.06322 4.494 4.33622 3.389 4.59622 2.349H4.64822C4.92122 3.376 5.19422 4.494 5.48022 5.495L6.85822 10.5H8.87322L5.79222 0.880005H3.53022L0.449219 10.5ZM2.36022 8.03H6.93622V6.548H2.36022V8.03Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-[14px] leading-[21px] wide:text-[24px] wide:leading-[36px] font-normal text-[#26282C] ">
                    {answer}
                  </p>
                </div>
              </div>
            </motion.div>
          }
        </div>
      </motion.div>
    </div>
  );
}
