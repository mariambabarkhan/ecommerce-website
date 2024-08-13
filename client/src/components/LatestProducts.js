import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LatestProducts = () => {
    console.log(process.env.REACT_APP_SERVER_URI);
    const [products, setProducts] = useState([]);
    const [hovered, setHovered] = useState(null);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1 
    });

    const fetchProducts = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URI}/latest-products`);
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

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="container mx-auto p-10 min-h-screen mb-10"
        >
            <h1 className="text-4xl font-heading text-center mb-12">Latest Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product, index) => (
                    <Link to={`/product/${product._id}`}  key={product._id}>
                    <motion.div
                        key={product._id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer"
                        onMouseEnter={() => setHovered(product._id)}
                        onMouseLeave={() => setHovered(null)}
                        variants={fadeInUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <img
                            src={hovered === product.id ? product.hoverImage : product.image}
                            alt={product.name}
                            className="object-cover transition-transform duration-500 ease-in-out"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-body font-semibold mb-2 group-hover:underline">{product.name}</h3>
                            <p className="text-md font-body text-gray-700">{product.price}</p>
                        </div>
                    </motion.div>
                    </Link>
                ))}
            </div>
        </motion.div>
        
    );
}

export default LatestProducts;