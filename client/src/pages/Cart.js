import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import CartInfo from '../components/CartInfo';

const Cart = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            <CartInfo />
            <Footer />
        </div>
    );
};

export default Cart;