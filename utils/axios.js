import axios from 'axios';

const HOST_API = process.env.NEXT_PUBLIC_API_SERVER_HOST;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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
