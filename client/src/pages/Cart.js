import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import CartInfo from '../components/CartInfo';
import HomeFooter from '../components/HomeFooter';

const Cart = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            <CartInfo />
            <HomeFooter />
        </div>
    );
};

export default Cart;