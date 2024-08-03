import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Banner from '../components/Banner';
import CategoryCards from '../components/CategoryCards';
import PhilosophyCards from '../components/PhilosophyCards';
import HomeFooter from '../components/HomeFooter';
import LatestProducts from '../components/LatestProducts';
import BuyVitC from '../components/BuyVitC';
import CartPopUp from '../components/CartPopUp';
import { CartProvider } from '../context/CartContext';

const Home = () => {
    const [showCartPopUp, setShowCartPopUp] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setCartItemCount(cartItemCount + product.quantity);
        setSelectedProduct(product);
        setShowCartPopUp(true);
        setTimeout(() => {
            setShowCartPopUp(false);
        }, 5000);
    };

    const handleClosePopUp = () => {
        setShowCartPopUp(false);
    };

    return (
        <CartProvider>
            <div>
                <Sale />
                <Navbar />
                <Banner />
                <CategoryCards />
                <PhilosophyCards />
                <LatestProducts />
                <div className="relative">
                    <BuyVitC onAddToCart={handleAddToCart} />
                    {showCartPopUp && (
                        <CartPopUp
                            product={selectedProduct}
                            cartItemCount={cartItemCount}
                            onClose={handleClosePopUp}
                        />
                    )}
                </div>
                <HomeFooter />
            </div>
        </CartProvider>
    );
};

export default Home;
