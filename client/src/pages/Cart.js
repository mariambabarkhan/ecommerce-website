import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import HomeFooter from '../components/HomeFooter';
import CartInfo from '../components/CartInfo';

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