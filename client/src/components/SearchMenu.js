import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SearchMenu = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                onClose();
                setSearchQuery('');
                setSearchResults([]);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() !== '') {
            try {
                const response = await fetch(`https://blissfulpk-server.vercel.app/api/search?query=${encodeURIComponent(query)}`);
                if (!response.ok) {
                    console.error('Error fetching search results:', response.statusText);
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        } else {
            setSearchQuery('');
            setSearchResults([]);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
            onClose();
            setSearchQuery('');
            setSearchResults([]);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            ref={searchRef}
            className="absolute top-20 left-0 right-0 bg-white shadow-lg z-20 p-4"
        >
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-2 border rounded-md focus:outline-none"
                    placeholder="Search for products..."
                />
            </form>
            <div className="mt-2">
                <h3 className="text-gray-500 text-sm mb-2">SUGGESTIONS</h3>
                {searchResults.length > 0 ? (
                    searchResults.slice(0, 3).map((result, index) => (
                        <Link to={`/product/${result._id}`} key={index} className="p-2 hover:bg-gray-100 flex items-center">
                            <img src={result.image} alt={result.name} className="h-10 w-10 rounded-full mr-2" />
                            <div>
                                <p>{result.name}</p>
                                <p className="text-sm text-gray-600">{result.price}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-gray-400 text-sm">No results found</p>
                )}
                <h3 className="text-gray-500 text-sm mt-4">PRODUCTS</h3>
                {searchResults.length > 0 ? (
                    <Link to={`/product/${searchResults[0]._id}`} className="flex items-center p-2 hover:bg-gray-100">
                        <img src={searchResults[0].image} alt={searchResults[0].name} className="h-10 w-10 rounded-full mr-2" />
                        <div>
                            <p>{searchResults[0].name}</p>
                            <p className="text-sm text-gray-600">{searchResults[0].price}</p>
                        </div>
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default SearchMenu;
