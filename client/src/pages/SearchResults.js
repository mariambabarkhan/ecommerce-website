import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AddToCartBtn from '../components/AddToCartBtn';
import CartPopUp from '../components/CartPopUp';
import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

const SearchResults = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hovered, setHovered] = useState(null);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get('query') || '';
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const { isCartPopupVisible } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                console.log('Fetching products for query:', query); 
                const response = await fetch(`http://localhost:5000/api/search?query=${encodeURIComponent(query)}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                console.log('Fetched products:', data); 
                setProducts(data);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching products:', error); 
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchProducts();
        }
    }, [query]);

    return (
        <>
                <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="container mx-auto p-12 min-h-screen mb-10"
            >
                <h1 className="text-6xl font-semibold self-start mb-12">Search Results</h1>
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-500">{error}</p>}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.length === 0 && !loading && <p>No results found</p>}
                    {products.map((product, index) => (
                        <motion.div
                            key={product._id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer max-w-xs"
                            onMouseEnter={() => setHovered(product._id)}
                            onMouseLeave={() => setHovered(null)}
                            variants={fadeInUp}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                        >
                            <div className="relative overflow-hidden">
                                <motion.img
                                    src={hovered === product._id ? product.hoverImage : product.image}
                                    alt={product.name}
                                    className={`w-full h-full object-cover rounded-t-lg transition-transform duration-500 ${hovered === product._id ? 'scale-105' : ''}`}
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: hovered === product._id ? 1 : 1 }}
                                />
                                {product.sale && (
                                    <span className="absolute bottom-2 left-2 bg-cartBadge text-white text-xs px-4 py-1 rounded-xl">Sale</span>
                                )}
                            </div>
                            <div className="mt-4 p-4 text-center">
                                <Link to={`/product/${product._id}`}>
                                    <h2 className={`text-lg font-semibold text-gray-800 transition-all duration-300 ${hovered === product._id ? 'underline' : ''}`}>
                                        {product.name}
                                    </h2>
                                </Link>
                                <div className="flex justify-center items-center space-x-2 mt-1 mb-4">
                                    {product.sale && (
                                        <div className="text-gray-500 line-through">{product.oldPrice}</div>
                                    )}
                                    <div className="text-lg text-gray-800">{product.price}</div>
                                </div>
                                <AddToCartBtn product={product} quantity={1} />
                            </div>
                        </motion.div>
                    ))}
                    {isCartPopupVisible && <CartPopUp />}
                </div>
            </motion.div>
        </>
    );
};

export default SearchResults;
