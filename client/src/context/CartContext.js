import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });
    
    const [isCartPopupVisible, setCartPopupVisible] = useState(false);
    const [popupProduct, setPopupProduct] = useState(null);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(item => item._id === product._id);
            if (existingProductIndex >= 0) {
                const newCart = [...prevCart];
                newCart[existingProductIndex].quantity += product.quantity;
                return newCart;
            }
            return [...prevCart, { ...product, quantity: product.quantity }];
        });
        setPopupProduct(product);
        setCartPopupVisible(true);
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item._id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item._id === id ? { ...item, quantity } : item
            );
        });
    };

    const closeCartPopup = () => {
        setCartPopupVisible(false);
    };

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            updateQuantity,
            cartItemCount,
            isCartPopupVisible,
            popupProduct,
            closeCartPopup
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);

