// CartPopUp.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const CartPopUp = ({ product, cartItemCount, onClose }) => {
    const [show, setShow] = useState(true);
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            controls.start({ opacity: 0 });
            const fadeOutTimer = setTimeout(() => {
                setShow(false);
                onClose();
            }, 500);
            return () => clearTimeout(fadeOutTimer);
        }, 3000);

        return () => clearTimeout(timer);
    }, [controls, onClose]);

    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="absolute top-0 right-10 mt-2 w-72 bg-white border border-gray-200 shadow-lg rounded-lg z-20 p-4"
        >
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Item added to your cart</span>
                <button onClick={onClose} className="text-gray-500 hover:text-black">
                    &times;
                </button>
            </div>
            <div className="mt-4 flex">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg" />
                <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                    <p className="text-sm text-gray-600">Size: {product.size}</p>
                </div>
            </div>
            <div className="mt-4">
                <Link to="/cart" className="block text-center border border-black rounded-lg py-2 text-black font-semibold hover:bg-gray-100">
                    View cart ({cartItemCount})
                </Link>
                <Link to="/checkout" className="block text-center bg-customPurple text-white rounded-lg py-2 mt-2 font-semibold hover:bg-cartBadge">
                    Check out
                </Link>
                <Link to="/collections/all" className="block text-center text-gray-600 mt-2 hover:underline">
                    Continue shopping
                </Link>
            </div>
        </motion.div>
    );
}

export default CartPopUp;
