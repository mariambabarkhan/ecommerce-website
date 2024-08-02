import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ShopNowBtn from './ShopNowBtn';

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 200 }
};

const Banner = () => {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
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
        className='relative flex items-center justify-center h-screen bg-auto bg-center z-0'
      >
        <img src="//shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=3840" alt="" srcset="//shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=375 375w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=550 550w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=750 750w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=1100 1100w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=1500 1500w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=1780 1780w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=2000 2000w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=3000 3000w, //shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&amp;width=3840 3840w" height="2755" sizes="100vw" fetchpriority="high">
        </img>
        <div className='absolute inset-50 bg-white bg-opacity-100 w-auto h-64 rounded-3xl flex flex-col items-center justify-center p-5'>
          <h1 className='text-6xl font-body mt-4 text-black mb-5 tracking-wide'>Blissful</h1>
          <h2 className='text-sm text-black font-body tracking-widest'>
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
        className='tracking-wider relative flex-col h-auto mt-44 items-center justify-center p-6 text-center mb-36'
      >
        <h1 className='text-3xl font-bodyBold text-black mb-10'> Welcome to Blissful Skincare </h1>
        <h2 className='text-md text-black font-body mb-10'>Your one stop for your skin care solutions.</h2>
        <ShopNowBtn />
      </motion.div>
    </>
  );
};

export default Banner;
