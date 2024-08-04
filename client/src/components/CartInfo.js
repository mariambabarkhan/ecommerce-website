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
        <div className="container mx-auto p-12 min-h-screen">
            {cart.length === 0 ? (
                <div className="flex flex-col space-y-4">
                    <p className="font-heading text-5xl mb-10 mt-10 self-center">Your cart is empty :(</p>
                    <Link
                        to="/collections/all"
                        className="bg-cartBadge py-3 px-4 w-1/4 text-center rounded-xl text-white font-heading self-center hover:bg-customPurple"
                    >
                        Continue Shopping
                    </Link>
                    <br></br><br></br><br></br><br></br>
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-heading mb-10">Your Cart</h1>

                    <div className="flex flex-col space-y-4">
                        {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b py-4">
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                                <div className="flex-1 ml-4">
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    {item.size && <p className="text-gray-600">Size: {item.size}</p>}
                                    <p className="text-gray-600">Price: {item.price}</p>
                                    <div className="flex items-center mt-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            disabled={item.quantity <= 1}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            -
                                        </button>
                                        <span className="mx-4">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="px-2 py-1 bg-gray-200 rounded"
                                        >
                                            +
                                        </button>

                                        <button onClick={() => removeFromCart(item.id)}
                                            className="ml-4 text-gray-600 hover:text-gray-800">
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between items-center font-semibold text-lg">
                        <span>Total:</span>
                        <span>Rs. {calculateTotal()}</span>
                    </div>
                    <div className="mt-6 flex justify-between">
                        <Link
                            to="/checkout"
                            className="bg-cartBadge text-white py-2 px-4 rounded hover:bg-customPurple"
                        >
                            Checkout
                        </Link>
                        <Link
                            to="/collections/all"
                            className="bg-cartBadge py-2 px-4 rounded text-white font-body hover:bg-customPurple"
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
