import React from 'react';
// import PropTypes from 'prop-types';

export function Title2(props) {
  const { title, color } = props;

  return (
    <div className="">
      <div
        className="text-[20px] leading-[26px] wide:text-[50px] wide:leading-[65px] font-bold text-black "
        style={{ color: color }}
      >
        {title}
      </div>
    </div>
  );
}
