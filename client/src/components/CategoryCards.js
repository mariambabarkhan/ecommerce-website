import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

const CategoryCards = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-heading text-center mb-8 tracking-wider">Shop By Category</h2>
      <div className="flex flex-wrap justify-center">
        <a href="/"  className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group transition-shadow duration-300">
            <img
              src="https://shopblissfulbeauty.com/cdn/shop/collections/WhatsApp_Image_2023-09-14_at_09.44.16.jpg?v=1694666697&width=535"
              alt="category"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-6 text-center">
              <a
                href="/"
                className="text-xl font-semibold font-body mb-2 flex items-center justify-center text-black tracking-wider"
              >
                Serums
                <FiArrowRight className="ml-2 text-lg transition-transform duration-300 group-hover:scale-125" />
              </a>
            </div>
          </div>
        </a>
        <a href="/"  className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl group transition-shadow duration-300">
            <img
              src="https://shopblissfulbeauty.com/cdn/shop/collections/ASH08166.jpg?v=1700408506&width=535"
              alt="category"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-6 text-center">
              <a
                href="/"
                className="text-xl font-semibold font-body  mb-2 flex items-center justify-center text-black tracking-wider"
              >
                Moisturizers
                <FiArrowRight className="ml-2 text-lg transition-transform duration-300 group-hover:scale-125" />
              </a>
            </div>
          </div>
        </a>
        <a href="/" className="w-full md:w-1/2 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl group transition-shadow duration-300">
            <img
              src="https://shopblissfulbeauty.com/cdn/shop/collections/ASH08168.jpg?v=1700408678&width=535"
              alt="category"
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="p-6 text-center">
              <a
                href="/"
                className="text-xl font-semibold font-body  mb-2 flex items-center justify-center text-black tracking-wider"
              >
                Cleansers
                <FiArrowRight className="ml-2 text-lg transition-transform duration-300 group-hover:scale-125" />
              </a>
            </div>
          </div>
      </a>
      <a href="/"  className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl group transition-shadow duration-300">
          <img
            src="https://shopblissfulbeauty.com/cdn/shop/collections/ASH08170.jpg?v=1700408658&width=535"
            alt="category"
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="p-6 text-center">
            <a
              href="/"
              className="text-xl font-semibold font-body  mb-2 flex items-center justify-center text-black tracking-wider"
            >
              Sunscreens
              <FiArrowRight className="ml-2 text-lg transition-transform duration-300 group-hover:scale-125" />
            </a>
          </div>
        </div>
      </a>
    </div>
    </div >
  );
};

export default CategoryCards;
