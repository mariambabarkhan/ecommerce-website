import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CheckoutDetails = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const [contactInfo, setContactInfo] = useState({ email: '', subscribe: false });
    const [deliveryInfo, setDeliveryInfo] = useState({
        country: 'Pakistan',
        firstName: '',
        lastName: '',
        company: '',
        address: ''
    });
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [billingAddress, setBillingAddress] = useState('same');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!contactInfo.email) newErrors.email = 'Email is required';
        if (!deliveryInfo.firstName) newErrors.firstName = 'First name is required';
        if (!deliveryInfo.lastName) newErrors.lastName = 'Last name is required';
        if (!deliveryInfo.address) newErrors.address = 'Address is required';
        if (cart.length === 0) newErrors.cart = 'Cart is Empty';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNavigation = () => {
        if (validateForm()) {
            navigate('/order-confirmation');
        }
    };

    const subTotal = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price.slice(3).replace(/,/g, '')) * item.quantity), 0);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price.slice(3).replace(/,/g, '')) * item.quantity), 0) + 200;
    };

    return (
        <motion.div
            className="checkout-page container mx-auto p-10 bg-gray-50 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <h1 className="text-4xl font-semibold mb-8 text-gray-800">Checkout</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                                     <motion.div
                        className="mb-8 p-6 bg-white rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-medium mb-4 text-gray-700">Contact</h2>
                        <input
                            type="email"
                            placeholder="Email"
                            value={contactInfo.email}
                            onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                            className={`input-field w-full p-3 mb-4 border rounded-lg focus:outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        <label className="flex items-center space-x-2 text-gray-600">
                            <input
                                type="checkbox"
                                checked={contactInfo.subscribe}
                                onChange={(e) => setContactInfo({ ...contactInfo, subscribe: e.target.checked })}
                                className="h-5 w-5"
                            />
                            <span>Email me with news and offers</span>
                        </label>
                    </motion.div>

                    <motion.div
                        className="mb-8 p-6 bg-white rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h2 className="text-2xl font-medium mb-4 text-gray-700">Delivery</h2>
                        <input
                            type="text"
                            placeholder="Country/Region"
                            value={deliveryInfo.country}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, country: e.target.value })}
                            className={`input-field w-full p-3 mb-4 border rounded-lg focus:outline-none ${errors.country ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500`}
                        />
                        {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                        <div className="flex space-x-4 mb-4">
                            <input
                                type="text"
                                placeholder="First name"
                                value={deliveryInfo.firstName}
                                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, firstName: e.target.value })}
                                className={`input-field w-full p-3 border rounded-lg focus:outline-none ${errors.firstName ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500`}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                            <input
                                type="text"
                                placeholder="Last name"
                                value={deliveryInfo.lastName}
                                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, lastName: e.target.value })}
                                className={`input-field w-full p-3 border rounded-lg focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500`}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                        </div>
                        <input
                            type="text"
                            placeholder="Company (optional)"
                            value={deliveryInfo.company}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, company: e.target.value })}
                            className="input-field w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={deliveryInfo.address}
                            onChange={(e) => setDeliveryInfo({ ...deliveryInfo, address: e.target.value })}
                            className={`input-field w-full p-3 mb-4 border rounded-lg focus:outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500`}
                        />
                        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                    </motion.div>

                    <motion.div
                        className="mb-8 p-6 bg-white rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h2 className="text-2xl font-medium mb-4 text-gray-700">Payment</h2>
                        <label className="flex items-center space-x-2 mb-4 text-gray-600">
                            <input
                                type="radio"
                                name="payment"
                                value="card"
                                checked={paymentMethod === 'card'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="h-5 w-5"
                            />
                            <span>Safepay Checkout - pay with debit & credit cards</span>
                        </label>
                        <label className="flex items-center space-x-2 text-gray-600">
                            <input
                                type="radio"
                                name="payment"
                                value="cod"
                                checked={paymentMethod === 'cod'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="h-5 w-5"
                            />
                            <span>Cash on Delivery (COD)</span>
                        </label>
                    </motion.div>

                    <motion.div
                        className="mb-8 p-6 bg-white rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <h2 className="text-2xl font-medium mb-4 text-gray-700">Billing Address</h2>
                        <label className="flex items-center space-x-2 mb-4 text-gray-600">
                            <input
                                type="radio"
                                name="billing"
                                value="same"
                                checked={billingAddress === 'same'}
                                onChange={(e) => setBillingAddress(e.target.value)}
                                className="h-5 w-5"
                            />
                            <span>Same as shipping address</span>
                        </label>
                        <label className="flex items-center space-x-2 text-gray-600">
                            <input
                                type="radio"
                                name="billing"
                                value="different"
                                checked={billingAddress === 'different'}
                                onChange={(e) => setBillingAddress(e.target.value)}
                                className="h-5 w-5"
                            />
                            <span>Use a different billing address</span>
                        </label>
                    </motion.div>

                    {paymentMethod === "card" ? (
                        <motion.button
                            onClick={handleNavigation}
                            className="btn-primary w-full py-3 mt-6 text-white bg-cartBadge hover:bg-customPurple rounded-lg shadow transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Pay now
                        </motion.button>
                    ) : (
                        <motion.button
                            onClick={handleNavigation}
                            className="btn-primary w-full py-3 mt-6 text-white bg-cartBadge hover:bg-customPurple rounded-lg shadow transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Complete Order
                        </motion.button>
                    )}

                </div>

                <motion.div
                    className="order-summary p-6 bg-white rounded-lg shadow-lg h-fit"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <h2 className="text-2xl font-medium mb-4 text-gray-700">Order Summary</h2>
                    {cart.map((item) => (
                        <div key={item._id} className="flex items-center mb-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4 rounded-lg shadow" />
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                <p className="text-gray-600">Qty: {item.quantity}</p>
                                <p className="text-gray-800 text-lg">{item.price}</p>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-between mt-4 text-gray-800">
                        <span>Subtotal:</span>
                        <span>{subTotal()}</span>
                    </div>
                    <div className="flex justify-between mt-2 text-gray-800">
                        <span>Shipping:</span>
                        <span>200</span>
                    </div>
                    <div className="flex justify-between mt-4 font-semibold text-gray-800 text-lg">
                        <span>Total:</span>
                        <span>{calculateTotal()}</span>
                    </div>
                </motion.div>
                {errors.cart && <p className="text-red-500 text-sm">{errors.cart}</p>}
            </div>
        </motion.div>
    );
};

export default CheckoutDetails;
