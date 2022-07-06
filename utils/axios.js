import axios from 'axios';
import webviewToast from '../components/elements/webviewToast';

// const HOST_API = process.env.NEXT_PUBLIC_API_SERVER_HOST;
// const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const HOST_API = 'https://dev-api.priv-inside.im';
const API_KEY =
  '3fa3c760748a906079d0ac30fa13853f692bd9d1e4c4b225435dc438e570dc0a';

console.log(HOST_API, API_KEY);
const axiosInstance = axios.create({
  baseURL: HOST_API,
  headers: {
    'X-Api-Key': API_KEY,
    'Content-Type': `application/json`,
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'Something went wrong',
    ),
);

export default axiosInstance;
