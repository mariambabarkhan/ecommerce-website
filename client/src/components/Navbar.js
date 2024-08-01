import React from 'react';
import { FiSearch, FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <FiSearch size={20} />
            </button>
          </div>
          <div className="flex items-center flex-grow space-x-6 justify-center">
            <a href="/" className="text-lg font-medium text-black">
              Home
            </a>
            <a href="/" className="text-lg font-medium text-black">
              Shop All
            </a>
            <div className="relative group">
              <a href="/" className="text-lg font-medium text-black">
                Shop By Category
              </a>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 shadow-lg group-hover:block">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Category 1
                </a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Category 2
                </a>
              </div>
            </div>
            <div className="relative group">
              <a href="/" className="text-lg font-medium text-black">
                Shop By Skin Concern
              </a>
              <div className="absolute left-0 hidden mt-2 w-48 bg-white border border-gray-200 shadow-lg group-hover:block">
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Concern 1
                </a>
                <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Concern 2
                </a>
              </div>
            </div>
            <a href="/" className="text-lg font-medium text-black">
              Bundles
            </a>
            <a href="/" className="text-lg font-medium text-black">
              About Us
            </a>
            <a href="/" className="text-lg font-medium text-black">
              Contact Us
            </a>
          </div>
          <div className="flex items-center">
            <button className="p-2 relative">
              <FiShoppingBag size={20} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-purple-600 rounded-full">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
