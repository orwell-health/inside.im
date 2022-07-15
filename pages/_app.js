import { HomepageProvider } from '../components/homepageContext';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <HomepageProvider>
      <Head>
        <meta
          name="naver-site-verification"
          content="e2b740f85984f18eefaf08b68b2c6299aa0a9373"
        />
        <title>인사이드</title>
        <link rel="icon" href="/favicon.ico" />
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
      </Head>
      <ToastContainer />

      <div
        className="font-notosans whitespace-pre-line"
        style={{
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        }}
      >
        <Component {...pageProps} />
      </div>
    </HomepageProvider>
  );
}

export default MyApp;
