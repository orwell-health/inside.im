import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
// import { useParams, useNavigate, useLocation } from 'react-router-dom';

import Header from '../components/component/Header';
import Footer from '../components/component/Footer';
import ApplicationTemplate from '../components/application/ApplicationTemplate';

import { HomepageContext } from '../components/homepageContext';
import Submitted from '../components/application/Submitted';
import { useRouter } from 'next/router';

export default function B2BApplication() {
  // const { from } = useParams();
  const router = useRouter();
  const from = router.query.target;
  console.log(from);

  const context = useContext(HomepageContext);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        console.log('wide');
        context.setIsWide(true);
      } else {
        console.log('small');
        context.setIsWide(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function isLoggedIn() {
    context.setShowLoginPopup(false);
  }

  return (
    <div className={`w-screen h-screen font-notosans relative  flex flex-col `}>
      <div
        className={`${
          context.submitted
            ? ' flex-initial'
            : 'fixed top-0 left-[50%] translate-x-[-50%]  w-full  z-50'
        }  `}
      >
        <Header target={'main'} />
      </div>
      {context.submitted && (
        <div className="flex-1 w-screen  px-[20px]  z-30">
          <Submitted from={from} />
        </div>
      )}
      {!context.submitted && (
        <div className="mt-[100px]">
          <ApplicationTemplate from={from} />
        </div>
      )}
      <div className={` ${context.submitted ? ' flex-initial' : ''} `}>
        <Footer />
      </div>

      {/* {context.showLoginPopup && (
        <div className="fixed top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
          <div
            className="absolute right-[23px] top-[23px] "
            onClick={() => {
              context.setShowLoginPopup(false);
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19" stroke="#26282C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 5L19 19" stroke="#26282C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <LoginPopup isLoggedIn={isLoggedIn} />
        </div>
      )} */}
    </div>
  );
}
