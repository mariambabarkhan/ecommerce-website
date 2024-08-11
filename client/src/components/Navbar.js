import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiShoppingBag, FiChevronDown } from 'react-icons/fi';
import logo from '../images/favicon.ico';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchMenu from './SearchMenu';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const menuRef = useRef(null);
    const { cartItemCount } = useCart();

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchQuery('');
        setSearchResults([]);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setOpenMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const activeLinkClass = 'underline text-black';
    const inactiveLinkClass = 'text-gray-700 hover:underline hover:text-black';

    return (
        <nav className="bg-white border-gray-200 font-body z-10 relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-20 mt-5 relative">

                    <div className="flex-shrink-0">
                        <button className="p-2" onClick={toggleSearch}>
                            <FiSearch size={20} />
                        </button>
                    </div>

                    <div className="flex-grow flex justify-center">
                        <img src={logo} alt="Logo" className="h-16" />
                    </div>

                    <div className="flex-shrink-0">
                        <NavLink to="/cart" className="p-2">
                            <button className="p-2 relative">
                                <FiShoppingBag size={24} />
                                {cartItemCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-body leading-none text-white bg-cartBadge rounded-full">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </NavLink>
                    </div>
                </div>

                <SearchMenu isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

                <div ref={menuRef} className="tracking-widest flex mt-5 items-center justify-center space-x-6 text-sm">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/collections/all" 
                        className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                    >
                        Shop All
                    </NavLink>
                    <div className="relative z-10">
                        <button
                            onClick={() => toggleMenu('category')}
                            className="hover:underline hover:text-black flex items-center space-x-1"
                        >
                            <span>Shop By Category</span>
                            <FiChevronDown size={16} />
                        </button>
                        {openMenu === 'category' && (
                            <div className="absolute left-0 mt-2 w-48 bg-cartBadge border border-gray-200 shadow-lg rounded-2xl p-2">
                                <Link to="/collections/serums" onClick={() => toggleMenu('category')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Serum
                                </Link>
                                <Link to="/collections/moisturizers" onClick={() => toggleMenu('category')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Moisturizer
                                </Link>
                                <Link to="/collections/cleansers" onClick={() => toggleMenu('category')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Cleanser
                                </Link>
                                <Link to="/collections/sunscreens" onClick={() => toggleMenu('category')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Sunscreen
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="relative z-10">
                        <button
                            onClick={() => toggleMenu('skinConcern')}
                            className="hover:underline hover:text-black flex items-center space-x-1"
                        >
                            <span>Shop By Skin Concern</span>
                            <FiChevronDown size={16} />
                        </button>
                        {openMenu === 'skinConcern' && (
                            <div className="absolute left-0 mt-2 w-48 bg-cartBadge border border-gray-200 shadow-lg rounded-2xl p-2">
                                <Link to="/collections/dryness" onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Dehydration & Dryness
                                </Link>
                                <Link to="/collections/dullness"  onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Dullness & Uneven Tone
                                </Link>
                                <Link to="/collections/breakouts" onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Breakouts & Acne
                                </Link>
                                <Link to="/collections/oily-skin" onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Texture, Pores & Oily Skin
                                </Link>
                                <Link to="/collections/discoloration" onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Dark Spots & Discoloration
                                </Link>
                                <Link to="/collections/aging" onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Healthy Aging
                                </Link>
                                <Link to="/collections/cleansers" onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Makeup Removing & Deep Cleansing
                                </Link>
                                <Link to="/collections/sun-protection" onClick={() => toggleMenu('skinConcern')} className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Sun Protection
                                </Link>
                            </div>
                        )}
                    </div>
                    <NavLink 
                        to="/collections/bundles" 
                        className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                    >
                        Bundles
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                    >
                        About Us
                    </NavLink>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
                    >
                        Contact Us
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
