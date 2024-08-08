import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AddToCartBtn from './AddToCartBtn';
import { useCart } from '../context/CartContext';
import CartPopUp from './CartPopUp';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [hovered, setHovered] = useState(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/collections/all');
            setProducts(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

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

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="container mx-auto p-12 min-h-screen mb-10"
        >
            <h1 className="text-6xl font-semibold self-start mb-12">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
    );
};

export default Products;
