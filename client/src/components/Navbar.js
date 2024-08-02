import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiShoppingBag, FiChevronDown } from 'react-icons/fi';
import logo from '../images/favicon.ico';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [cartItemCount, setCartItemCount] = useState(0);
    const menuRef = useRef(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="bg-white border-gray-200 font-body z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-20 mt-5">
                    {/* Search Icon */}
                    <div className="flex-shrink-0">
                        <button className="p-2">
                            <FiSearch size={20} />
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-grow flex justify-center">
                        <img src={logo} alt="Logo" className="h-16" />
                    </div>

                    {/* Cart Icon */}
                    <div className="flex-shrink-0">
                        <button className="p-2 relative" onClick={() => setCartItemCount(cartItemCount + 1)}>
                            <FiShoppingBag size={24} />
                            {cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-body leading-none text-white bg-cartBadge rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Navbar Links */}
                <div ref={menuRef} className="tracking-widest flex mt-5 items-center justify-center space-x-6 text-sm text-gray-700">
                    <a href="/" className="hover:underline hover:text-black">
                        Home
                    </a>
                    <a href="/" className="hover:underline hover:text-black">
                        Shop All
                    </a>
                    <div className="relative">
                        <button
                            onClick={() => toggleMenu('category')}
                            className="hover:underline hover:text-black flex items-center space-x-1"
                        >
                            <span>Shop By Category</span>
                            <FiChevronDown size={16} />
                        </button>
                        {openMenu === 'category' && (
                            <div className="absolute left-0 mt-2 w-48 bg-cartBadge border border-gray-200 shadow-lg rounded-2xl">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Serum
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Moisturizer
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Cleanser
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Sunscreen
                                </a>
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <button
                            onClick={() => toggleMenu('skinConcern')}
                            className="hover:underline hover:text-black flex items-center space-x-1"
                        >
                            <span>Shop By Skin Concern</span>
                            <FiChevronDown size={16} />
                        </button>
                        {openMenu === 'skinConcern' && (
                            <div className="absolute left-0 mt-2 w-48 bg-cartBadge border border-gray-200 shadow-lg rounded-2xl">
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Dehydration & Dryness
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Dullness & Uneven Tone
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Breakouts & Acne
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Texture, Pores & Oily Skin
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Dark Spots & Discoloration
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Healthy Aging
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Makeup Removing & Deep Cleansing
                                </a>
                                <a href="/" className="block px-4 py-2 text-sm text-gray-100 hover:underline hover:text-black">
                                    Sun Protection
                                </a>
                            </div>
                        )}
                    </div>
                    <a href="/" className="hover:underline hover:text-black">
                        Bundles
                    </a>
                    <a href="/" className="hover:underline hover:text-black">
                        About Us
                    </a>
                    <Link to="/contact" className="hover:underline hover:text-black">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
