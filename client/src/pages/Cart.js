import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
// import CartItems from '../components/CartItems';
// import CartSummary from '../components/CartSummary';

const Cart = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            {/* <CartItems /> */}
            {/* <CartSummary /> */}
            <Footer />
        </div>
    );
};

export default Cart;