import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext'; 
import HomeFooter from '../components/HomeFooter';

const OrderConfirmation = () => {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    return (
        <>
        <motion.div
            className="order-confirmation-page container mx-auto p-6 text-center mt-28 mb-28"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <h1 className="text-4xl mb-4">Thank You for Your Order!</h1>
            <p className="text-lg">Your order has been placed successfully. We will send you an email confirmation shortly.</p>
        </motion.div>
        <HomeFooter />
        </>
    );
};

export default OrderConfirmation;
