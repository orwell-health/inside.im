/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    loader: 'imgix',
    //akamai
    path: '/',
  },
  // experimental: {
  //   outputStandalone: true,
  // },
  env: {
    REACT_APP_API_SERVER_HOST: 'https://dev-api.priv-inside.im',
    REACT_APP_API_KEY:
      '3fa3c760748a906079d0ac30fa13853f692bd9d1e4c4b225435dc438e570dc0a',
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/main',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
