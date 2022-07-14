import { HomepageProvider } from '../components/homepageContext';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <HomepageProvider>
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
