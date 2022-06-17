import React, { useState, useEffect } from 'react';
import { hasTouch } from 'detect-touch';

export function Button(props) {
  const { text, style, click } = props;
  const [buttonDown, setButtonDown] = useState(false);

  function mouseUp(e) {
    console.log('mouse up');
    setButtonDown(false);
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

  return (
    <div
      className={` h-[54px] w-[200px] wide:w-[276px] wide:h-[70px] py-[14px] wide:py-[20px]  bg-qna rounded-[50px]  text-white text-center
        font-medium wide:font-bold
        text-[17px] leading-[26px] wide:text-[24px] wide:leading-[28.8px] ${
          buttonDown ? 'opacity-50' : 'opacity-100'
        } cursor-pointer`}
      style={style}
      onMouseDown={(e) => {
        if (!hasTouch) {
          console.log('mouse down');
          setButtonDown(true);
        }
      }}
      onClick={(e) => {
        if (!hasTouch && click) {
          click();
        }
      }}
      onTouchStart={(e) => {
        setButtonDown(true);
      }}
      onTouchEnd={(e) => {
        setButtonDown(false);
        if (
          document
            .elementsFromPoint(
              e.changedTouches[0].clientX,
              e.changedTouches[0].clientY,
            )
            .includes(e.currentTarget) &&
          click
        ) {
          click();
        }
      }}
    >
      <div className="translate-y-[-2px]">{text}</div>
    </div>
  );
}
