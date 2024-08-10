import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';

const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setSearchResults(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };             

        if (query) {
            fetchSearchResults();
        }
    }, [query]);

    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h1>
            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {searchResults.length === 0 && !loading && <p>No results found</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {searchResults.map(result => (
                    <div key={result._id} className="border rounded-lg p-4 shadow-md">
                        <img src={result.image} alt={result.name} className="w-full h-40 object-cover mb-2" />
                        <h2 className="text-lg font-medium">{result.name}</h2>
                        <p className="text-sm text-gray-600">{result.price}</p>
                        <a href={`/product/${result._id}`} className="text-blue-500 hover:underline">View Details</a>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default SearchResults;
