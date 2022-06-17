import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';

import Header from '../components/component/Header';
import Part1 from '../components/provider/Part1';
import Part2 from '../components/provider/Part2';
import Part3 from '../components/provider/Part3';
import Part4 from '../components/provider/Part4';
import Part5 from '../components/provider/Part5';
import Part6 from '../components/provider/Part6';
import Part7 from '../components/provider/Part7';
import Footer from '../components/component/Footer';
import { HomepageContext } from '../components/homepageContext';

export default function B2BProvider() {
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

  return (
    <div className={`w-screen relative`}>
      <div className="fixed top-0 left-[50%] translate-x-[-50%]  w-full  z-50 ">
        <Header target={'provider'} />
      </div>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
      <Footer />
    </div>
  );
}
