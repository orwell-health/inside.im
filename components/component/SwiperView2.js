import React, { useRef, useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Part6Card from './Part6Card';
import { HomepageContext } from '../homepageContext';
import { hasTouch } from 'detect-touch';

export default function SwiperView(props) {
  const { contents } = props;
  const context = useContext(HomepageContext);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [prevButtonDown, setPrevButtonDown] = useState(false);
  const [nextButtonDown, setNextButtonDown] = useState(false);

  function mouseUp(e) {
    setPrevButtonDown(false);
    setNextButtonDown(false);
  }

  useEffect(() => {
    if (!hasTouch) {
      function watchMouseUp() {
        window.addEventListener('mouseup', mouseUp);
      }
      watchMouseUp();
      return () => {
        window.addEventListener('mouseup', mouseUp);
      };
    }
  });

  SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center ">
        {context.isWide && (
          <div
            ref={prevRef}
            className={`w-[64px] h-[64px] bg-transparent ring-[1px] ring-[#80838b] rounded-[32px] flex justify-center items-center
            shrink-0 pointer-events-auto mr-[30px] mb-[180px] ${
              prevButtonDown ? 'opacity-50' : 'opacity-100'
            } cursor-pointer`}
            onMouseDown={(e) => {
              if (!hasTouch) {
                setPrevButtonDown(true);
              }
            }}
            onTouchStart={(e) => {
              setPrevButtonDown(true);
            }}
            onTouchEnd={(e) => {
              setPrevButtonDown(false);
            }}
          >
            <svg
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1L1 11L11 21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}

        <Swiper
          slidesPerView={1}
          effect={'fade'}
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidePerView={1}
          scrollbar={{ draggable: true }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={!context.isWide}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          virtualTranslate={true}
        >
          {contents.map((content, index) => (
            <SwiperSlide key={`swiperview${index}`} className="mb-[80px]">
              <Part6Card
                image={content.image}
                text={content.text}
                from={content.from}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {context.isWide && (
          <div
            ref={nextRef}
            className={`w-[64px] h-[64px] bg-transparent ring-[1px] ring-[#80838b] rounded-[32px] flex justify-center items-center shrink-0 ml-[30px]
            mb-[180px] ${
              nextButtonDown ? 'opacity-50' : 'opacity-100'
            } cursor-pointer`}
            onMouseDown={(e) => {
              if (!hasTouch) {
                setNextButtonDown(true);
              }
            }}
            onTouchStart={(e) => {
              // console.log('mousedown');
              setNextButtonDown(true);
            }}
            onTouchEnd={(e) => {
              setNextButtonDown(false);
            }}
          >
            <svg
              width="12"
              height="22"
              viewBox="0 0 12 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L11 11L1 21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
