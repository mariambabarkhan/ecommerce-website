import React from 'react';

const Banner = () => {
  return (
    <>
      <div
        className='relative flex items-center justify-center h-screen bg-auto bg-center mt-10'
        style={{ backgroundImage: "url('https://shopblissfulbeauty.com/cdn/shop/files/banner_5.png?v=1693455474&width=1500')" }} // Replace with your image path
      >
        <div className='absolute inset-50 bg-white bg-opacity-100 w-auto h-auto rounded-3xl flex flex-col items-center justify-center p-6'>
          <h1 className='text-6xl font-body text-black mb-10 tracking-wide'>Blissful</h1>
          <h2 className='text-md text-black font-body mb-10 tracking-widest'>
            More Than Skincare, It's a Lifestyle of Radiance
          </h2>
          <button className="bg-cartBadge rounded-lg w-1/3 py-3 text-white text-lg font-body hover:bg-opacity-90 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
      <div className=' tracking-wider relative flex-col h-auto mt-10 items-center justify-center p-6 text-center'>
        <h1 className='text-3xl font-bodyBold text-black mb-10'> Welcome to Blissful Skincare </h1>
        <h2 className='text-md text-black font-body mb-10'>Your one stop for your skin care solutions.</h2>
        <button className="bg-cartBadge rounded-lg w-32 py-3 text-white text-lg font-body hover:bg-opacity-90 transition duration-300">
          Shop Now
        </button>

      </div>
    </>
  );
};

export default Banner;
