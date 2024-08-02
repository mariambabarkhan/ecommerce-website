import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ShopNowBtn from './ShopNowBtn';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const Banner = () => {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: false, 
    threshold: 0.1 
  });

  return (
    <>
      <motion.div
        ref={bannerRef}
        initial="hidden"
        animate={bannerInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeOut" }}
        className='relative flex items-center justify-center h-screen bg-auto bg-center mt-10'
        style={{ backgroundImage: "url('https://shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&width=1500')"}}
      >
        <div className='absolute inset-50 bg-white bg-opacity-100 w-auto h-auto rounded-3xl flex flex-col items-center justify-center p-8'>
          <h1 className='text-4xl font-bodyBold text-black mb-10 tracking-wide'>Blissful</h1>
          <h2 className='text-md text-black font-body mb-6 tracking-widest'>
            More Than Skincare, It's a Lifestyle of Radiance
          </h2>
          <ShopNowBtn />
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={bannerInView ? "visible" : "hidden"}
        variants={fadeInUp}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Add delay for staggered effect
        className='tracking-wider relative flex-col h-auto mt-10 items-center justify-center p-6 text-center'
      >
        <h1 className='text-3xl font-bodyBold text-black mb-10'> Welcome to Blissful Skincare </h1>
        <h2 className='text-md text-black font-body mb-10'>Your one stop for your skin care solutions.</h2>
        <ShopNowBtn />
      </motion.div>
    </>
  );
};

export default Banner;
