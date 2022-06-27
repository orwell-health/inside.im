import React, { useState, useEffect, useRef } from 'react';
import { Title } from '../elements/Title';
import { motion, useViewportScroll } from 'framer-motion';

function Part2Test() {
  const pageRef = useRef();
  const titleRef = useRef();
  const row1Ref = useRef();
  const row2Ref = useRef();
  const row3Ref = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollBottom, setScrollBottom] = useState(0);
  const [textHeight, setTextHeight] = useState(0);
  const [row1Show, setRow1Show] = useState(false);
  const [row2Show, setRow2Show] = useState(false);
  const [row3Show, setRow3Show] = useState(false);
  const { scrollY } = useViewportScroll(titleRef);

  useEffect(() => {
    setTextHeight(row1Ref.current.offsetHeight);
    scrollY.onChange((v) => {
      // console.log('scrollTop:', v, 'scrollBottom', v + window.innerHeight);
      // console.log('width', row1Ref.current.offsetWidth, row2Ref.current.offsetWidth, row3Ref.current.offsetWidth);
      setScrollTop(v);
      setScrollBottom(v + window.innerHeight);
      if (
        pageRef.current &&
        row1Ref.current &&
        row2Ref.current &&
        row3Ref.current
      ) {
        if (
          v + window.innerHeight >
          pageRef.current.offsetTop + row3Ref.current.offsetTop
        ) {
          setRow3Show(true);
          setRow2Show(true);
          setRow1Show(true);
        } else if (
          v + window.innerHeight >
          pageRef.current.offsetTop + row2Ref.current.offsetTop
        ) {
          setRow2Show(true);
          setRow1Show(true);
        } else if (
          v + window.innerHeight >
          pageRef.current.offsetTop + row1Ref.current.offsetTop
        ) {
          setRow1Show(true);
        }
      }
    });
  }, [scrollY]);

  return (
    <div
      className={`w-screen h-[512px] wide:h-[1024px]  bg-black overflow-hidden  relative text-center`}
      ref={pageRef}
    >
      <div className=" w-full h-full">
        <div
          className="mb-[44px] pt-[75px] wide:pt-[150px] flex justify-center"
          ref={titleRef}
        >
          <Title
            title={[
              '우리 팀도 이런 고민,',
              <br />,
              '한 번 쯤은 있지 않았나요?',
            ]}
            style={{ color: 'white' }}
          />
        </div>
        <div className="font-bold text-[#4E4F53] whitespace-nowrap text-[60px] leading-[90px] wide:text-[120px] wide:leading-[180px] ">
          <motion.div
            ref={row1Ref}
            className="px-[20px]"
            style={{
              x: row1Show
                ? (scrollBottom -
                    (pageRef.current.offsetTop + row1Ref.current.offsetTop)) *
                  -0.6
                : 0,
              opacity: row1Show
                ? (scrollBottom -
                    (pageRef.current.offsetTop + row1Ref.current.offsetTop)) /
                  textHeight
                : 0,
            }}
          >
            <p className="">{['슬럼프, 번아웃, 발표 불안, 무기력, 불면증,']}</p>
          </motion.div>

          <div className="flex justify-end">
            <motion.div
              ref={row2Ref}
              className="px-[20px]"
              style={{
                x: row2Show
                  ? scrollBottom -
                    (pageRef.current.offsetTop + row2Ref.current.offsetTop)
                  : 0,
                opacity: row2Show
                  ? (scrollBottom -
                      (pageRef.current.offsetTop + row2Ref.current.offsetTop)) /
                    textHeight
                  : 0,
              }}
            >
              <p className="">
                {['공황장애, 스트레스, 우울, 초조함, 압박감, 팀 내 갈등,']}
              </p>
            </motion.div>{' '}
          </div>

          <motion.div
            ref={row3Ref}
            className="px-[20px]"
            style={{
              x: row3Show
                ? (scrollBottom -
                    (pageRef.current.offsetTop + row3Ref.current.offsetTop)) *
                  -0.6
                : 0,
              opacity: row3Show
                ? (scrollBottom -
                    (pageRef.current.offsetTop + row3Ref.current.offsetTop)) /
                  textHeight
                : 0,
            }}
          >
            <p className="">
              {['상사와의 마찰, 이혼, 이별, 자녀문제, 불안감']}
            </p>
          </motion.div>
        </div>
      </div>{' '}
    </div>
    //
  );
}

export default Part2Test;
