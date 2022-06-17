import { HomepageProvider } from '../components/homepageContext';
import '../styles/globals.css';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  return (
    <HomepageProvider>
      <ToastContainer />
      <div
        className="font-notosans"
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
