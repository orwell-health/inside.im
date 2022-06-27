import React, { useEffect, useState, useContext } from 'react';
import Head from 'next/head';
// import { Head } from 'next/document';

import { HomepageContext } from '../components/homepageContext';
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

export default function Home() {
  const context = useContext(HomepageContext);
  useEffect(() => {
    if (window.innerWidth >= 960) {
      context.setIsWide(true);
    } else {
      context.setIsWide(false);
    }
  }, []);

  useEffect(() => {
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
  return (
    <div>
      <Head>
        <meta
          name="naver-site-verification"
          content="e2b740f85984f18eefaf08b68b2c6299aa0a9373"
        />
        <title>인사이드</title>
        <meta
          name="description"
          content="멘탈케어 코스부터 비대면 심리상담까지 과학적인 멘탈케어 프로그램을 경험해보세요."
        />
        <meta
          name="keywords"
          content="인사이드, 멘탈 헬스케어, 감정기록, 자가검사, 심리상담 "
        />
        <meta name="author" content="Orwell Health" />

        <meta property="og:url" content="https://www.inside.im" />
        <meta property="og:title" content="인사이드 inside - 멘탈케어 솔루션" />
        <meta
          property="og:description"
          content="인사이드에서 과학적인 멘탈케어 프로그램을 경험해보세요."
        />
        <meta property="og:image" content="/inside_opengraph.png" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=optional"
          rel="stylesheet"
        /> */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>

      <div className={`w-screen relative`}>
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
    </div>
  );
}
