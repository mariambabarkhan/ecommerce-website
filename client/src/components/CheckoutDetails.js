import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';

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
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [billingAddress, setBillingAddress] = useState('same');
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });

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

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/cart');
        }
    }, [cart]);

    const handleOrderSubmit = () => {
        const orderData = {
            orderNumber: 'ORD123456',
            orderDate: new Date().toLocaleDateString(),
            deliveryDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(), // 5 days from now
            items: cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity })),
            totalAmount: calculateTotal(),
            userName: `${deliveryInfo.firstName} ${deliveryInfo.lastName}`,
            userEmail: contactInfo.email
        };

        if (validateForm()) {
            navigate('/order-confirmation', { state: { orderData } });
        }
    };

    const subTotal = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price.slice(3).replace(/,/g, '')) * item.quantity), 0);
    };

    const calculateTotal = () => {
        return subTotal() + 200; // 200 is the flat shipping cost
    };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setContactInfo((prev) => ({ ...prev, subscribe: checked }));
        if (checked) {
            handleSubscribe(e);
        }
    };

    const validateEmailFormat = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!validateEmailFormat(contactInfo.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/subscribe', { email: contactInfo.email });
            setSubmitStatus({ message: response.data.message, type: 'success' });
            console.log(response.data.message);
            setContactInfo({ ...contactInfo, subscribe: true });
        } catch (error) {
            setSubmitStatus({ message: 'Failed to subscribe. Please try again.', type: 'error' });
            console.log(error);
        }
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
                                onChange={handleCheckboxChange}
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
                            <input
                                type="text"
                                placeholder="Last name"
                                value={deliveryInfo.lastName}
                                onChange={(e) => setDeliveryInfo({ ...deliveryInfo, lastName: e.target.value })}
                                className={`input-field w-full p-3 border rounded-lg focus:outline-none ${errors.lastName ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500`}
                            />
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
                        <label className="flex items-center space-x-2 text-gray-600">
                            <input
                                type="radio"
                                value="cod"
                                checked={paymentMethod === 'cod'}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="h-5 w-5"
                            />
                            <span>Cash on Delivery (COD)</span>
                        </label>
                    </motion.div>

                    <motion.div
                        className="p-6 bg-white rounded-lg shadow"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <h2 className="text-2xl font-medium mb-4 text-gray-700">Billing Address</h2>
                        <label className="flex items-center space-x-2 text-gray-600 mb-4">
                            <input
                                type="radio"
                                value="same"
                                checked={billingAddress === 'same'}
                                onChange={(e) => setBillingAddress(e.target.value)}
                                className="h-5 w-5"
                            />
                            <span>Same as delivery address</span>
                        </label>
                        <label className="flex items-center space-x-2 text-gray-600">
                            <input
                                type="radio"
                                value="different"
                                checked={billingAddress === 'different'}
                                onChange={(e) => setBillingAddress(e.target.value)}
                                className="h-5 w-5"
                            />
                            <span>Use a different billing address</span>
                        </label>
                    </motion.div>
                </div>

                <motion.div
                    className="order-summary p-6 h-fit w-fit bg-white rounded-lg shadow"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                >
                    <h2 className="text-2xl font-medium mb-6 text-gray-700">Order Summary</h2>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="flex items-center justify-between mb-6">
                                <div className="relative mr-4">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-lg shadow"
                                    />
                                    <span className="absolute top-0 left-0 bg-cartBadge text-white text-xs font-semibold rounded-full px-2 py-0.5 transform -translate-x-1/2 -translate-y-1/2">
                                        {item.quantity}
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <span className="text-gray-700">{item.name}</span>
                                </div>
                                <span className="text-gray-700 ml-6">{item.price}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between text-lg font-medium mb-6">
                        <span>Subtotal</span>
                        <span className='font-normal'>{subTotal().toLocaleString('en-US', { style: 'currency', currency: 'PKR' })}</span>
                    </div>
                    <div className="flex justify-between text-lg font-medium mb-6">
                        <span>Shipping</span>
                        <span className='font-normal'>PKR 200.00</span>
                    </div>
                    <div className="flex justify-between text-xl font-semibold">
                        <span>Total</span>
                        <span className='font-normal'>{calculateTotal().toLocaleString('en-US', { style: 'currency', currency: 'PKR' })}</span>
                    </div>
                    <button
                        onClick={handleOrderSubmit}
                        className="w-full mt-6 bg-cartBadge text-white py-3 rounded-lg hover:bg-customPurple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                    >
                        Confirm Order
                    </button>
                    {errors.cart && <p className="text-red-500 text-sm mt-4">{errors.cart}</p>}
                </motion.div>

            </div>
        </motion.div>
    );
};

export default CheckoutDetails;
