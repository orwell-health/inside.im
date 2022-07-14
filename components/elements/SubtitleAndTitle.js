import React from 'react';
import { motion } from 'framer-motion';
import { SubTitle } from './SubTitle';
import { Title } from './Title';

export function SubtitleAndTitle(props) {
  const { subtitle, title, subtitle2line } = props;

  return (
    <div className="text-center">
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <div
          className={`${
            subtitle2line ? 'mb-[10px]' : 'mb-[5px]'
          } wide:mb-[10px] whitespace-pre-line`}
        >
          <SubTitle subtitle={subtitle} />
        </div>

        <div className="text-[24px] leading-[32px] wide:text-[60px] wide:leading-[78px] font-bold text-black ">
          {title}
        </div>
      </motion.div>
    </div>
  );
}
