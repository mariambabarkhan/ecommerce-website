import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useCart } from '../context/CartContext';

const CartPopUp = () => {
    const { isCartPopupVisible, popupProduct, closeCartPopup, cartItemCount } = useCart();
    const [show, setShow] = useState(isCartPopupVisible);
    const controls = useAnimation();

    useEffect(() => {
        if (isCartPopupVisible) {
            setShow(true);
            const timer = setTimeout(() => {
                controls.start({ opacity: 0 });
                const fadeOutTimer = setTimeout(() => {
                    setShow(false);
                    closeCartPopup(setShow(false));
                }, 500);
                return () => clearTimeout(fadeOutTimer);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [controls, isCartPopupVisible, closeCartPopup]);

    if (!show || !popupProduct) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={controls}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="fixed right-10 top-2 w-72 bg-white border border-gray-200 shadow-lg rounded-lg z-20 p-4"
        >
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Item added to your cart</span>
                <button onClick={closeCartPopup} className="text-gray-500 hover:text-black">
                    &times;
                </button>
            </div>
            <div className="mt-4 flex">
                <img src={popupProduct.image} alt={popupProduct.name} className="w-16 h-16 rounded-lg" />
                <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{popupProduct.name}</h4>
                    <p className="text-sm text-gray-600">Size: {popupProduct.size}</p>
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
};

export default CartPopUp;
