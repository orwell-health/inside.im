import React, { useState, useEffect, useContext } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
// import LoginPopup from '../../pages/homepage/application/LoginPopup';
import { HomepageContext } from '../homepageContext';
import SNSLink from './SNSLink';
import Link from 'next/link';

function Header(props) {
  const { target } = props;

  const [whiteBackground, setWhiteBackground] = useState(false);

  const { scrollY } = useViewportScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const context = useContext(HomepageContext);

  useEffect(() => {
    scrollY.onChange((v) => {
      // console.log('scrollTop:', v, 'scrollBottom', v + window.innerHeight);
      if (v >= 100) {
        setWhiteBackground(true);
      } else {
        setWhiteBackground(false);
      }
    });
  }, [scrollY]);

  useEffect(() => {
    setLoaded(false);
    setMobileMenuOpen(false);
  }, [context.isWide]);

  useEffect(() => {
    setTimeout(() => {
      console.log('loaded', loaded, mobileMenuOpen);
      setLoaded(true);
    }, 300);
  }, [loaded]);

  function menuOpen() {
    console.log('menu open');
    setMobileMenuOpen((mobileMenuOpen) => !mobileMenuOpen);
  }
  return (
    <div
      className={` ${
        whiteBackground ? 'bg-white shadow-header' : 'bg-transparent'
      }  relative `}
    >
      {context.isWide && (
        <div
          className={`max-w-[1140px] mx-auto h-[100px] px-[50px]   flex justify-between `}
        >
          <Link href="/main">
            <div className="pt-[35px] cursor-pointer">
              <svg
                width="88"
                height="26"
                viewBox="0 0 88 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.14144 6.97984C4.87641 6.97984 6.28288 5.61519 6.28288 3.93181C6.28288 2.24844 4.87641 0.883789 3.14144 0.883789C1.40647 0.883789 0 2.24844 0 3.93181C0 5.61519 1.40647 6.97984 3.14144 6.97984ZM47.1395 6.97984C48.8745 6.97984 50.2809 5.61519 50.2809 3.93181C50.2809 2.24844 48.8745 0.883789 47.1395 0.883789C45.4045 0.883789 43.998 2.24844 43.998 3.93181C43.998 5.61519 45.4045 6.97984 47.1395 6.97984ZM58.1941 25.0299C60.6458 25.0299 62.6072 23.8405 63.3733 21.8631V24.6731H69.6558V3.21934H63.3733V11.218C62.5765 9.13659 60.6458 7.90259 58.2248 7.90259C53.9649 7.90259 51.5898 10.9653 51.5898 16.4663C51.5898 21.9375 53.9956 25.0299 58.1941 25.0299ZM60.6611 20.1236C59.0216 20.1236 57.9643 18.7261 57.9643 16.4662C57.9643 14.1767 59.0369 12.8089 60.6611 12.8089C62.3007 12.8089 63.3733 14.1767 63.3733 16.4811C63.3733 18.7707 62.316 20.1236 60.6611 20.1236ZM50.2786 24.6651H43.9962V8.25145H50.2786V24.6651ZM34.7755 25.1295C39.6789 25.1295 42.958 22.9291 42.958 19.3907C42.958 16.9078 41.3185 15.5103 37.6716 14.8561L34.607 14.306C33.0746 14.0235 32.6456 13.6964 32.6456 13.1166C32.6456 12.4178 33.3964 11.9867 34.5457 11.9867C35.8941 11.9867 36.6602 12.849 36.7522 13.6221H42.4524C42.4524 10.6337 39.7862 8.0022 34.5457 8.0022C29.6269 8.0022 26.6389 10.0539 26.6389 13.4586C26.6389 16.0009 28.4164 17.7404 31.7722 18.3351L34.8368 18.8852C36.2312 19.1379 36.7369 19.4947 36.7369 20.0894C36.7369 20.7436 35.986 21.145 34.7755 21.145C33.3658 21.145 32.569 20.4611 32.3238 19.5096H26.2559C26.6389 22.7804 29.4431 25.1295 34.7755 25.1295ZM7.86328 24.659H14.1458V15.4412C14.1458 13.9098 15.0498 12.7948 16.5362 12.7948C18.1145 12.7948 18.9113 13.8058 18.9113 15.4561V24.659H25.1938V14.118C25.1938 10.1781 23.1098 7.88855 19.3863 7.88855C16.8273 7.88855 14.9732 9.07794 14.1458 11.2932V8.24537H7.86328V24.659ZM0 24.7056H6.28248V8.29201H0V24.7056ZM87.8056 19.3365C87.3001 21.4774 85.3239 25.0159 79.4412 25.0159C73.9568 25.0159 70.6172 21.7896 70.6172 16.4522C70.6172 11.1148 73.9568 7.88855 79.242 7.88855C84.5119 7.88855 87.8822 11.0999 87.8822 16.0954V17.82H76.745C76.8062 19.7082 77.848 20.8232 79.5637 20.8232C81.2182 20.8232 82.0455 19.8123 82.214 19.3365H87.8056ZM81.9995 14.3708C81.7238 12.9137 80.774 12.0812 79.4106 12.0812C78.0471 12.0812 77.0973 12.9137 76.8216 14.3708H81.9995Z"
                  fill="url(#paint0_radial_71_4073)"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_71_4073"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(87.735 17.3743) rotate(-174.276) scale(88.1748 301.081)"
                  >
                    <stop stopColor="#5513F0" />
                    <stop offset="1" stopColor="#2C4BEC" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </Link>
          <div className="flex">
            <div className="text-[18px] leading-[26.06px] tracking-[-0.3px] font-normal pt-[35px] flex shrink-0">
              <Link href="/provider">
                <div
                  key={1}
                  className={`mr-[60px]  ${
                    target === 'provider' ? 'font-bold' : 'font-normal'
                  } cursor-pointer`}
                >
                  전문가 지원
                </div>
              </Link>
            </div>
            <div className="pt-[24px] shrink-0">
              <Link href={`/application?target=service_${target}`}>
                <div
                  className={` text-[17px] leading-[24.62px] text-white font-bold h-[48px] px-[40px] py-[10px]  rounded-[12px] bg-black cursor-pointer`}
                >
                  문의하기
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      {!context.isWide && (
        <motion.div
          // animate={{ background: mobileMenuOpen ? 'white' : 'transparent' }}
          // transition={{
          //   delay: !mobileMenuOpen && loaded ? 0.2 : 0,
          //   duration: loaded ? 0.1 : 0,
          // }}
          className={`${
            mobileMenuOpen ? 'bg-white ' : 'bg-[rgba(0,0,0,0)] delay-100'
          } transition-all`}
        >
          <div className="w-screen h-[60px] pl-[26px] pr-[24px] flex justify-between ">
            <Link href="/main">
              <div className="pt-[20px] cursor-pointer">
                <svg
                  width="73"
                  height="21"
                  viewBox="0 0 73 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.59127 5.13061C4.0224 5.13061 5.18255 4.00329 5.18255 2.61267C5.18255 1.22205 4.0224 0.0947266 2.59127 0.0947266C1.16015 0.0947266 0 1.22205 0 2.61267C0 4.00329 1.16015 5.13061 2.59127 5.13061ZM38.8842 5.13061C40.3154 5.13061 41.4755 4.00329 41.4755 2.61267C41.4755 1.22205 40.3154 0.0947266 38.8842 0.0947266C37.4531 0.0947266 36.293 1.22205 36.293 2.61267C36.293 4.00329 37.4531 5.13061 38.8842 5.13061ZM48.0025 20.0415C50.0248 20.0415 51.6427 19.059 52.2746 17.4255V19.7468H57.4568V2.02407H52.2746V8.63171C51.6174 6.91225 50.0248 5.89286 48.0277 5.89286C44.5139 5.89286 42.5548 8.42294 42.5548 12.9672C42.5548 17.4869 44.5392 20.0415 48.0025 20.0415ZM50.0374 15.9885C48.685 15.9885 47.8129 14.834 47.8129 12.9672C47.8129 11.0758 48.6976 9.94587 50.0374 9.94587C51.3899 9.94587 52.2746 11.0758 52.2746 12.9795C52.2746 14.8709 51.4025 15.9885 50.0374 15.9885ZM41.4731 19.7402H36.2909V6.18105H41.4731V19.7402ZM28.6858 20.1243C32.7304 20.1243 35.4353 18.3066 35.4353 15.3835C35.4353 13.3324 34.0829 12.1779 31.0747 11.6375L28.5467 11.1831C27.2828 10.9497 26.9289 10.6795 26.9289 10.2005C26.9289 9.62329 27.5482 9.26712 28.4962 9.26712C29.6085 9.26712 30.2404 9.97947 30.3163 10.6181H35.0182C35.0182 8.14947 32.8189 5.97559 28.4962 5.97559C24.4389 5.97559 21.9742 7.67048 21.9742 10.483C21.9742 12.5832 23.4404 14.0202 26.2084 14.5115L28.7363 14.9659C29.8865 15.1747 30.3036 15.4694 30.3036 15.9607C30.3036 16.5011 29.6843 16.8327 28.6858 16.8327C27.5229 16.8327 26.8657 16.2678 26.6635 15.4817H21.6582C21.9742 18.1837 24.2872 20.1243 28.6858 20.1243ZM6.48638 19.7356H11.6686V12.1208C11.6686 10.8558 12.4143 9.93467 13.6404 9.93467C14.9423 9.93467 15.5995 10.7698 15.5995 12.1331V19.7356H20.7817V11.0278C20.7817 7.77308 19.0628 5.88168 15.9913 5.88168C13.8805 5.88168 12.3511 6.86422 11.6686 8.69421V6.17644H6.48638V19.7356ZM0 19.7733H5.18222V6.21419H0V19.7733ZM72.4281 15.3387C72.0111 17.1073 70.381 20.0304 65.5286 20.0304C61.0047 20.0304 58.25 17.3652 58.25 12.956C58.25 8.54684 61.0047 5.88168 65.3643 5.88168C69.7113 5.88168 72.4913 8.53456 72.4913 12.6613V14.086H63.3046C63.3551 15.6458 64.2144 16.5669 65.6297 16.5669C66.9944 16.5669 67.6768 15.7317 67.8158 15.3387H72.4281ZM67.6389 11.2366C67.4114 10.0329 66.628 9.34516 65.5033 9.34516C64.3787 9.34516 63.5952 10.0329 63.3677 11.2366H67.6389Z"
                    fill="url(#paint0_radial_258_39977)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_radial_258_39977"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(72.3698 13.7177) rotate(-174.267) scale(72.7336 248.722)"
                    >
                      <stop stopColor="#5513F0" />
                      <stop offset="1" stopColor="#2C4BEC" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </Link>
            <div className="py-[12px] flex items-center ">
              <Link href={`/application?target=service_${target}`}>
                <div className=" pt-[6px] pb-[8px] px-[12px] bg-[#26282C] rounded-[8px] text-[14px] text-white mr-[23px] cursor-pointer">
                  문의하기
                </div>
              </Link>
              <div onClick={menuOpen} className="relative cursor-pointer">
                <motion.div
                  animate={{ opacity: !mobileMenuOpen ? 1 : 0 }}
                  transition={{ duration: loaded ? 0.1 : 0 }}
                  className="absolute top-0"
                >
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1H19"
                        stroke="black"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1 8H19"
                        stroke="black"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M1 15H19"
                        stroke="black"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ opacity: mobileMenuOpen ? 1 : 0 }}
                  transition={{ duration: loaded ? 0.1 : 0 }}
                >
                  <div className="w-[20px] h-[20px] flex items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 1L1 15"
                        stroke="#26282C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1 1L15 15"
                        stroke="#26282C"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div
            // animate={{ height: mobileMenuOpen ? '140px' : '0' }}
            // transition={{ duration: loaded ? 0.2 : 0, ease: 'easeInOut' }}
            className={`${
              mobileMenuOpen ? 'h-[140px]' : 'h-0'
            } overflow-hidden bg-white transition-all`}
          >
            <div className="h-full">
              <Link
                href={{
                  pathname: '/provider',
                }}
              >
                <div
                  className="h-[60px] py-[19px] px-[30px]  hover:bg-[#F6F8FF]"
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  전문가 지원
                </div>
              </Link>
              <div className="w-full px-[20px]">
                <div className="h-[1px] w-full bg-[#E1E4EB] mt-[10px] " />
              </div>
              <div className="h-[70px] py-[15px] px-[30px]  ">
                <SNSLink
                  backgroundColor={'transparent'}
                  logoColor={'#26282C'}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Header;
