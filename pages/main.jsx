import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import Header from '../components/component/Header';
import Part1 from '../components/main/Part1';
import Part2 from '../components/main/Part2';
import Part3 from '../components/main/Part3';
import Part4 from '../components/main/Part4';
import Part5 from '../components/main/Part5';
import Part6 from '../components/main/Part6';
import Part7 from '../components/main/Part7';
import Part8 from '../components/main/Part8';
import Part9 from '../components/main/Part9';
import Part10 from '../components/main/Part10';
import Footer from '../components/component/Footer';

import { HomepageContext } from '../components/homepageContext';

function B2BMain() {
  const [isFontBLLoaded, setIsFontBLLoaded] = useState(false);
  const [isFontBLoaded, setIsFontBLoaded] = useState(false);

  const [isFontMLoaded, setIsFontMLoaded] = useState(false);
  const [isFontRLoaded, setIsFontRLoaded] = useState(false);

  const context = useContext(HomepageContext);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        context.setIsWide(true);
      } else {
        context.setIsWide(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`w-screen font-notosans relative`}>
      {/* isFontBLLoaded && isFontBLoaded && isFontMLoaded && isFontRLoaded */}
      <div className="fixed top-0 left-[50%] translate-x-[-50%]  w-full  z-50 ">
        <Header target={'main'} />
      </div>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Part5 /> <Part6 />
      <Part7 /> <Part8 />
      <Part9 />
      <Part10 />
      <Footer />
    </div>
  );
}

export default B2BMain;
