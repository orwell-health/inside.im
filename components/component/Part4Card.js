import React from 'react';
import { HorizontalTitleAndText } from '../elements/HorizontalTitleAndText';
import { motion } from 'framer-motion';
import Image from 'next/image';

function Part4Card(props) {
  const { image, imageWidth, title1, title2, text } = props;
  return (
    <div className="w-full ">
      <div className="w-full h-[200px] wide:h-[400px] rounded-[15px] wide:rounded-[30px]  overflow-hidden  mb-[30px] wide:mb-[80px] relative">
        <div
          style={{ minWidth: imageWidth }}
          className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
        >
          <Image src={image} objectFit="cover" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeIn' }}
        viewport={{ once: true }}
      >
        <HorizontalTitleAndText
          title1={title1}
          title2={title2}
          title2Color={'#6B6D76'}
          text={text}
        />
      </motion.div>
    </div>
  );
}

export default Part4Card;
