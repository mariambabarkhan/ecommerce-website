import React, { useState, useEffect, useRef } from 'react';
import { FiSearch, FiShoppingBag, FiChevronDown } from 'react-icons/fi';
import logo from '../images/favicon.ico';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SearchMenu from './SearchMenu';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const menuRef = useRef(null);
    const { cartItemCount } = useCart();
    const navigate = useNavigate();

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

    // const handleSearchChange = async (e) => {
    //     const query = e.target.value;
    //     setSearchQuery(query);
    //     if (query.trim() !== '') {
    //         try {
    //             const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(query)}`);
    //             if (!response.ok) {
    //                 console.error('Error fetching search results:', response.statusText);
    //                 throw new Error('Network response was not ok');
    //             }
    //             const data = await response.json();
    //             setSearchResults(data);
    //         } catch (error) {
    //             console.error('Error fetching search results:', error);
    //         }
    //     } else {
    //         setSearchResults([]);
    //     }
    // };


    // const handleSearchSubmit = (e) => {
    //     e.preventDefault();
    //     if (searchQuery.trim() !== '') {
    //         navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    //     }
    // };

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
                        <Link to="/cart" className="p-2">
                            <button className="p-2 relative">
                                <FiShoppingBag size={24} />
                                {cartItemCount > 0 && (
                                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-body leading-none text-white bg-cartBadge rounded-full">
                                        {cartItemCount}
                                    </span>
                                )}
                            </button>
                        </Link>
                    </div>
                </div>

                <SearchMenu isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />


                <div ref={menuRef} className="tracking-widest flex mt-5 items-center justify-center space-x-6 text-sm text-gray-700">
                    <a href="/" className="hover:underline hover:text-black">
                        Home
                    </a>
                    <Link to="/collections/all" className="hover:underline hover:text-black">
                        Shop All
                    </Link>
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
                                <Link to="/collections/serums" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Serum
                                </Link>
                                <Link to="/collections/moisturizers" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Moisturizer
                                </Link>
                                <Link to="/collections/cleansers" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Cleanser
                                </Link>
                                <Link to="/collections/sunscreens" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
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
                                <Link to="/collections/dryness" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Dehydration & Dryness
                                </Link>
                                <Link to="/collections/dullness" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Dullness & Uneven Tone
                                </Link>
                                <Link to="/collections/breakouts" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Breakouts & Acne
                                </Link>
                                <Link to="/collections/oilyskin" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Texture, Pores & Oily Skin
                                </Link>
                                <Link to="/collections/discoloration" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Dark Spots & Discoloration
                                </Link>
                                <Link to="/collections/aging" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Healthy Aging
                                </Link>
                                <Link to="/collections/cleansing" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Makeup Removing & Deep Cleansing
                                </Link>
                                <Link to="/collections/sun-protection" className="block px-4 py-2 text-sm text-gray-100 hover:underline ">
                                    Sun Protection
                                </Link>
                            </div>
                        )}
                    </div>
                    <a href="/collections/bundles" className="hover:underline hover:text-black">
                        Bundles
                    </a>
                    <Link to="/about" className="hover:underline hover:text-black">
                        About Us
                    </Link>
                    <Link to="/contact" className="hover:underline hover:text-black">
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
