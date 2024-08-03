import React from 'react';

const AddToCartBtn = ({ product, onAddToCart }) => {
    const handleAddToCart = () => {
        onAddToCart(product);
    };

    return (
        <button onClick={handleAddToCart} className="bg-transparent text-black border-2 border-black w-96 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100">
            Add to Cart
        </button>
    );
}

export default AddToCartBtn;
