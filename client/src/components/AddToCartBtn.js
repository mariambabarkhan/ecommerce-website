import React from 'react';
import { useCart } from '../context/CartContext';

const AddToCartBtn = ({ product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({ ...product, quantity: 1 });
    };

    return (
        <button onClick={handleAddToCart} className="bg-transparent text-black border-2 border-black w-1/2 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100">
            Add to Cart
        </button>
    );
};

export default AddToCartBtn;
