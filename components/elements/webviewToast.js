import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { BUILD_TARGET } from './config';

export default function webviewToast(message) {
  // const isDev = BUILD_TARGET === 'dev';

  toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 2000,
    hideProgressBar: true,
  });
}
