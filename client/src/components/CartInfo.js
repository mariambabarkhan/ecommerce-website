import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartInfo = () => {
    const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price.slice(3).replace(/,/g, '') * item.quantity), 0);
    };

    return (
        <div className="container mx-auto p-12 min-h-screen">
            <h1 className="text-4xl font-semibold mb-8">Your cart</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Product</h2>
                    <h2 className="text-lg font-semibold">Quantity</h2>
                    <h2 className="text-lg font-semibold">Total</h2>
                </div>
                {cart.map(item => (
                    <div key={item.id} className="flex justify-between items-center mb-4">
                        <div className="flex-1">
                            <h3 className="text-md font-semibold">{item.name}</h3>
                            <p className="text-sm">Size: {item.size}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 px-2 py-1 rounded-lg">-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 px-2 py-1 rounded-lg">+</button>
                        </div>
                        <div className="flex-1 text-right">
                            <p className="text-md font-semibold">Rs.{item.price.slice(3).replace(/,/g, '') * item.quantity}</p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500">Remove</button>
                    </div>
                ))}
                <div className="flex justify-between mt-6">
                    <h2 className="text-xl font-semibold">Estimated Total</h2>
                    <p className="text-xl font-semibold">Rs.{calculateTotal()}</p>
                </div>
                <div className="mt-6">
                    <p className="text-sm">Taxes, Discounts and shipping calculated at checkout</p>
                    <button className="bg-cartBadge text-white py-2 px-4 rounded mt-4">Check out</button>
                </div>
            </div>
        </div>
    );
};

export default CartInfo;
