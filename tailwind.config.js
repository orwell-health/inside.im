/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        homeslide: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0)' },
        },
        wiggle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      borderWidth: {
        1: '1px',
      },
      fontSize: {
        category: '15px',
        question: '17px',
        title: '20px',
        questionTitle: '24px',
        content: '17px',
        counselortext: '16px',
      },
      fontFamily: {
        appleSD: ['AppleSDNeo', 'sans-serif'],
        sfPro: ['SFPro', 'sans-serif'],
        notosans: ['Noto Sans KR', 'sans-serif'],
      },
      colors: {
        category: '#3953D9',
        divide: ' #FAFBFD',
        link: '#F3F5F8',
        content: '#26282C',
        spinning:
          'conic-gradient(from 180deg at 50% 50%, rgba(44, 75, 236, 0) 0deg, #2C4BEC 360deg)',
      },
      spacing: {
        '4px': '4px',
        '5px': '5px',
        '6px': '6px',
        '8px': '8px',
        '10px': '10px',
        '12px': '12px',
        '14px': '14px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '30px': '30px',
        '32px': '32px',
        '33px': '33px',
        '40px': '40px',
        '48px': '48px',
        '100px': '100px',
        '140px': '140px',
        '170px': '170px',
        '200px': '200px',
        '300px': '300px',
        '335px': '335px',
        mincontent: '216px',
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      },
      lineHeight: {
        content: '27px',
        counselortext: '27px',
        counselortitle: '28px',
        title: '28.8px',
      },
      rotate: {
        270: '270deg',
      },
      boxShadow: {
        counselorcard: '0px 10px 20px -10px rgba(41, 49, 93, 0.22)',
        border: '0 0 0 1.4px #3953D9 inset',
        card: '0px 15px 20px 0px rgba(0, 0, 0, 0.1)',
        dropdown: ' 0px 3px 8px 0px #0000001A',
        loginPopup: '0px 10px 20px -10px #29315D38',
        header: '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
        // iphone: '-40px 15px 50px rgba(0, 0, 0, 0.25)',
      },
      dropShadow: {
        header: '0px 1px 2px 0px rgba(0, 0, 0, 0.15)',
        iphone: '-40px 15px 50px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        qna: 'radial-gradient(99.83% 1234.86% at 99.83% 68.01%, #5513F0 0%, #2C4BEC 100%)',
        blueGradient:
          'radial-gradient(99.83% 1234.86% at 99.83% 68.01%, #5513F0 0%, #2C4BEC 100%)',
        half: 'linear-gradient(#3953D9 50%, #FFFFFF 50%)',
        gradient:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)',
        web1: 'linear-gradient(180deg, rgba(250, 251, 253, 0) 56.55%, #FAFBFD 100%)',
        spinning:
          'conic-gradient(from 180deg at 50% 50%, rgba(44, 75, 236, 0) 0deg, #2C4BEC 360deg)',
      },
      placeholderColor: {
        default: '#A4A6B0',
      },
      animation: {
        'spin-2s': 'spin 2s linear infinite',
        wiggle: 'wiggle 0.8s ease-in-out',
      },
      color: {
        gradient:
          'radial-gradient(99.83% 1234.86% at 99.83% 68.01%, #5513F0 0%, #2C4BEC 100%)',
      },
      screens: {
        wide: '960px',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-safe-area'),
  ],
};
