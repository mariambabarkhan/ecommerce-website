import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const CartInfo = () => {
    const { cart, updateQuantity, removeFromCart } = useCart();

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price.slice(3).replace(/,/g, '')) * item.quantity), 0).toFixed(2);
    };

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-12">
            {cart.length === 0 ? (
                <div className="flex flex-col items-center mt-20">
                    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-6">Your cart is empty :(</p>
                    <Link
                        to="/collections/all"
                        className="bg-cartBadge py-2 px-4 sm:py-3 sm:px-6 text-center rounded-xl text-white font-heading hover:bg-customPurple"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading mb-8">Your Cart</h1>

                    <div className="flex flex-col space-y-4">
                        {cart.map((item) => (
                            <div key={item._id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b py-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 sm:w-32 sm:h-32 object-cover" />
                                <div className="flex-1 ml-0 sm:ml-4 mt-4 sm:mt-0">
                                    <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
                                    {item.size && <p className="text-gray-600">Size: {item.size}</p>}
                                    <p className="text-gray-600">Price: {item.price}</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                            className="px-2 py-1 bg-gray-200 rounded text-sm sm:text-base"
                                        >
                                            -
                                        </button>
                                        <span className="mx-4 text-sm sm:text-base">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                            className="px-2 py-1 bg-gray-200 rounded text-sm sm:text-base"
                                        >
                                            +
                                        </button>

                                        <button
                                            onClick={() => removeFromCart(item._id)}
                                            className="ml-4 text-gray-600 hover:text-gray-800 text-sm sm:text-base"
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row justify-between items-center font-semibold text-lg">
                        <span className="text-sm sm:text-base">Total:</span>
                        <span className="text-lg sm:text-xl">Rs. {calculateTotal()}</span>
                    </div>
                    <div className="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link
                            to="/checkout"
                            className="bg-cartBadge text-white py-2 px-4 rounded hover:bg-customPurple text-center"
                        >
                            Checkout
                        </Link>
                        <Link
                            to="/collections/all"
                            className="bg-cartBadge py-2 px-4 rounded text-white font-body text-center hover:bg-customPurple"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartInfo;
