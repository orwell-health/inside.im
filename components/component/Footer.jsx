import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import SNSLink from './SNSLink';
import { HomepageContext } from '../homepageContext';

function Footer(props) {
  const context = useContext(HomepageContext);
  const [footerText, setFooterText] = useState('');

  useEffect(() => {
    setFooterText([
      '(주) 오웰헬스',
      <br />,
      '대표 홍승주   사업자등록번호 378-86-02282',
      <br />,
      '통신판매업신고 제 2022-서울강남-02138 호',
      <br />,
      '서울특별시 강남구 테헤란로 151, 3층 301호 (역삼동, 역삼 하이츠 빌딩)',
      <br />,
      'admin@orwellhealth.org  /  070-7954-3518',
    ]);
  }, []);

  return (
    <div className="w-screen bg-black px-[24px] wide:px-[100px] pt-[40px] pb-[50px] wide:py-[70px] wide:flex wide:justify-between">
      <div className="text-[12px] wide:text-[15px] leading-[16.8px] wide:leading-[21px] text-white font-normal mb-[40px] wide:mb-0">
        <div>{footerText}</div>
        <div className="flex items-center mt-[20px]  text-white cursor-pointer">
          <div
            onClick={() =>
              window.open(
                'https://orwellhealth.priv-inside.im/terms/service.html',
                '_blank',
              )
            }
          >
            이용약관
          </div>
          <div className="bg-white w-[1px] h-[12px] mx-[15px] mt-[3px] cursor-pointer" />
          <div
            onClick={() =>
              window.open(
                'https://orwellhealth.priv-inside.im/terms/privacy_policy.html',
                '_blank',
              )
            }
          >
            개인정보처리방침
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start wide:items-end wide:justify-between">
        <div className=" mb-[20px] wide:mb-0">
          {context.isWide && (
            <svg
              width="88"
              height="25"
              viewBox="0 0 88 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.14144 6.28568C4.87641 6.28568 6.28288 4.87858 6.28288 3.14284C6.28288 1.4071 4.87641 0 3.14144 0C1.40647 0 0 1.4071 0 3.14284C0 4.87858 1.40647 6.28568 3.14144 6.28568ZM47.1395 6.28568C48.8745 6.28568 50.2809 4.87858 50.2809 3.14284C50.2809 1.4071 48.8745 0 47.1395 0C45.4045 0 43.998 1.4071 43.998 3.14284C43.998 4.87858 45.4045 6.28568 47.1395 6.28568ZM58.1941 24.8972C60.6458 24.8972 62.6072 23.6708 63.3733 21.632V24.5293H69.6558V2.4082H63.3733V10.6557C62.5765 8.50952 60.6458 7.23713 58.2248 7.23713C53.9649 7.23713 51.5898 10.3951 51.5898 16.0672C51.5898 21.7086 53.9956 24.8972 58.1941 24.8972ZM60.6611 19.8383C59.0216 19.8383 57.9643 18.3973 57.9643 16.0672C57.9643 13.7064 59.0369 12.296 60.6611 12.296C62.3007 12.296 63.3733 13.7064 63.3733 16.0825C63.3733 18.4433 62.316 19.8383 60.6611 19.8383ZM50.2786 24.5211H43.9962V7.59684H50.2786V24.5211ZM34.7755 24.9999C39.6789 24.9999 42.958 22.7311 42.958 19.0826C42.958 16.5225 41.3185 15.0815 37.6716 14.4069L34.607 13.8397C33.0746 13.5485 32.6456 13.2112 32.6456 12.6133C32.6456 11.8928 33.3964 11.4483 34.5457 11.4483C35.8941 11.4483 36.6602 12.3374 36.7522 13.1346H42.4524C42.4524 10.0532 39.7862 7.33984 34.5457 7.33984C29.6269 7.33984 26.6389 9.45537 26.6389 12.9659C26.6389 15.5873 28.4164 17.3809 31.7722 17.9941L34.8368 18.5613C36.2312 18.822 36.7369 19.1899 36.7369 19.8031C36.7369 20.4776 35.986 20.8915 34.7755 20.8915C33.3658 20.8915 32.569 20.1863 32.3238 19.2052H26.2559C26.6389 22.5778 29.4431 24.9999 34.7755 24.9999ZM7.86328 24.5148H14.1458V15.0102C14.1458 13.4313 15.0498 12.2815 16.5362 12.2815C18.1145 12.2815 18.9113 13.3239 18.9113 15.0256V24.5148H25.1938V13.6459C25.1938 9.58346 23.1098 7.22266 19.3863 7.22266C16.8273 7.22266 14.9732 8.44905 14.1458 10.7332V7.59057H7.86328V24.5148ZM0 24.5629H6.28248V7.63867H0V24.5629ZM87.8056 19.0267C87.3001 21.2342 85.3239 24.8828 79.4412 24.8828C73.9568 24.8828 70.6172 21.5562 70.6172 16.0527C70.6172 10.5493 73.9568 7.22266 79.242 7.22266C84.5119 7.22266 87.8822 10.5339 87.8822 15.6848V17.4631H76.745C76.8062 19.41 77.848 20.5597 79.5637 20.5597C81.2182 20.5597 82.0455 19.5173 82.214 19.0267H87.8056ZM81.9995 13.9065C81.7238 12.4042 80.774 11.5457 79.4106 11.5457C78.0471 11.5457 77.0973 12.4042 76.8216 13.9065H81.9995Z"
                fill="white"
              />
            </svg>
          )}
          {!context.isWide && (
            <svg
              width="71"
              height="21"
              viewBox="0 0 71 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.51316 5.85534C3.90114 5.85534 5.02632 4.728 5.02632 3.33734C5.02632 1.94668 3.90114 0.819336 2.51316 0.819336C1.12518 0.819336 0 1.94668 0 3.33734C0 4.728 1.12518 5.85534 2.51316 5.85534ZM37.7124 5.85534C39.1004 5.85534 40.2255 4.728 40.2255 3.33734C40.2255 1.94668 39.1004 0.819336 37.7124 0.819336C36.3244 0.819336 35.1992 1.94668 35.1992 3.33734C35.1992 4.728 36.3244 5.85534 37.7124 5.85534ZM46.5549 20.7667C48.5163 20.7667 50.0854 19.7841 50.6983 18.1506V20.4719H55.7243V2.74878H50.6983V9.35658C50.0609 7.63708 48.5163 6.61766 46.5794 6.61766C43.1716 6.61766 41.2715 9.1478 41.2715 13.6922C41.2715 18.212 43.1961 20.7667 46.5549 20.7667ZM48.5285 16.7136C47.2169 16.7136 46.371 15.5591 46.371 13.6922C46.371 11.8007 47.2291 10.6708 48.5285 10.6708C49.8402 10.6708 50.6983 11.8007 50.6983 13.7045C50.6983 15.5959 49.8525 16.7136 48.5285 16.7136ZM40.2233 20.4655H35.1973V6.90601H40.2233V20.4655ZM27.8196 20.849C31.7424 20.849 34.3657 19.0312 34.3657 16.1081C34.3657 14.057 33.054 12.9024 30.1365 12.362L27.6848 11.9076C26.459 11.6742 26.1157 11.404 26.1157 10.925C26.1157 10.3477 26.7164 9.99157 27.6358 9.99157C28.7145 9.99157 29.3274 10.7039 29.401 11.3426H33.9612C33.9612 8.87389 31.8282 6.69995 27.6358 6.69995C23.7008 6.69995 21.3104 8.39489 21.3104 11.2075C21.3104 13.3077 22.7324 14.7448 25.417 15.236L27.8687 15.6905C28.9842 15.8993 29.3887 16.1941 29.3887 16.6853C29.3887 17.2258 28.7881 17.5574 27.8196 17.5574C26.6919 17.5574 26.0544 16.9924 25.8583 16.2063H21.0039C21.3104 18.9084 23.5537 20.849 27.8196 20.849ZM6.29102 20.4602H11.317V12.8453C11.317 11.5802 12.0403 10.6591 13.2294 10.6591C14.492 10.6591 15.1294 11.4942 15.1294 12.8576V20.4602H20.1554V11.7522C20.1554 8.4974 18.4883 6.60596 15.5094 6.60596C13.4623 6.60596 11.979 7.58853 11.317 9.41856V6.90073H6.29102V20.4602ZM0 20.4988H5.026V6.93935H0V20.4988ZM70.2447 16.0633C69.8403 17.8319 68.2593 20.7551 63.5532 20.7551C59.1657 20.7551 56.4939 18.0899 56.4939 13.6806C56.4939 9.27127 59.1657 6.60604 63.3938 6.60604C67.6098 6.60604 70.306 9.25899 70.306 13.3858V14.8105H61.3962C61.4452 16.3704 62.2786 17.2915 63.6512 17.2915C64.9748 17.2915 65.6366 16.4563 65.7714 16.0633H70.2447ZM65.5999 11.9611C65.3792 10.7574 64.6194 10.0696 63.5287 10.0696C62.4379 10.0696 61.6781 10.7574 61.4575 11.9611H65.5999Z"
                fill="white"
              />
            </svg>
          )}
        </div>
        <div className="mb-[10px] wide:mb-0">
          <SNSLink backgroundColor={'#FFFFFF1A'} logoColor={'#F3F5F8'} />
        </div>
        <div className="flex flex-col items-start wide:items-end text-[14px] wide:text-[15px] leading-[19.6px] wide:leading-[21px] font-normal">
          <div className=" text-[#A4A6B0]">
            ⓒ 2022 Orwell Health, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
