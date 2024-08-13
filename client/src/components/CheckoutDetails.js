import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Confetti from 'react-confetti';

const CheckoutDetails = () => {
    const { cart, clearCart } = useCart();
    const [showConfetti, setShowConfetti] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [billingAddress, setBillingAddress] = useState('same');
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState({ message: '', type: '' });
    const [orderSubmitted, setOrderSubmitted] = useState(false);
    const [contactInfo, setContactInfo] = useState({ email: '', subscribe: false });
    const navigate = useNavigate();
    const [deliveryInfo, setDeliveryInfo] = useState({
        country: 'Pakistan',
        firstName: '',
        lastName: '',
        company: '',
        address: '',
        phone: '',
    });

    const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
    const validateAddress = (address) => /^[\w\s.,-/#]+$/.test(address);
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone);
    const validateEmailFormat = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const validateForm = () => {
        const newErrors = {};
        
        if (!validateEmailFormat(contactInfo.email)) newErrors.email = 'Invalid email format';
        if (!contactInfo.email) newErrors.email = 'Email is required';
        
        if (!validateName(deliveryInfo.firstName)) newErrors.firstName = 'First name should only contain letters';
        if (!deliveryInfo.firstName) newErrors.firstName = 'First name is required';
        
        if (!validateName(deliveryInfo.lastName)) newErrors.lastName = 'Last name should only contain letters';
        if (!deliveryInfo.lastName) newErrors.lastName = 'Last name is required';
        
        if (!validateAddress(deliveryInfo.address)) newErrors.address = 'Address contains invalid characters';
        if (!deliveryInfo.address) newErrors.address = 'Address is required';
        
        if (!validatePhone(deliveryInfo.phone)) newErrors.phone = 'Phone number should be between 10 and 15 digits';
        if (!deliveryInfo.phone) newErrors.phone = 'Phone number is required';

        if (cart.length === 0) newErrors.cart = 'Cart is Empty';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        if (orderSubmitted) {
            if (!showConfetti) {
                setShowConfetti(true);

                const confettiTimer = setTimeout(() => {
                    setShowConfetti(false);
                }, 3000);

                return () => {
                    clearTimeout(confettiTimer);
                }
            }

            const cartTimer = setTimeout(() => {
                clearCart();
            }, 500);

            return () => {
                clearTimeout(cartTimer);
            }
        }

        else if (cart.length === 0) {
            navigate('/cart');
        }
    }, [cart, orderSubmitted, showConfetti, clearCart, navigate]);


    const handleOrderSubmit = async () => {
        if (validateForm()) {
            setOrderSubmitted(true);

            const orderData = {
                cart: cart.map(item => ({
                    id: item._id,
                    quantity: item.quantity
                }))
            };

            try {
                const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/api/place-order`, orderData);
                if (response.status === 200) {
                    setShowConfetti(true);
                }
            } catch (error) {
                console.error('Error submitting order:', error);
                setSubmitStatus({ message: 'Failed to place order. Please try again.', type: 'error' });
            }
        }
    };


    const subTotal = () => {
        return cart.reduce((total, item) => total + (parseFloat(item.price.slice(3).replace(/,/g, '')) * item.quantity), 0);
    };

    const calculateTotal = () => {
        return subTotal() + 200;
    };

    const handleCheckboxChange = (e) => {
        const checked = e.target.checked;
        setContactInfo((prev) => ({ ...prev, subscribe: checked }));
        if (checked) {
            handleSubscribe(e);
        }
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!validateEmailFormat(contactInfo.email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            return;
        }

        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URI}/api/subscribe`, { email: contactInfo.email });
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
            {!orderSubmitted ? (
                <>
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
                                    type="tel"
                                    placeholder="Phone Number"
                                    value={deliveryInfo.phone}
                                    onChange={(e) => setDeliveryInfo({ ...deliveryInfo, phone: e.target.value })}
                                    className={`input-field w-full p-3 mb-4 border rounded-lg focus:outline-none ${errors.address ? 'border-red-500' : 'border-gray-300'} focus:border-gray-500`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

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
                                Place Order
                            </button>
                            {errors.cart && <p className="text-red-500 text-sm mt-4">{errors.cart}</p>}
                        </motion.div>

                    </div>
                </>
            ) : (
                <motion.div
                    className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white p-8 rounded-lg shadow-lg text-center"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        {showConfetti && <Confetti />}
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h2>
                        <p className="text-gray-600 mb-8">
                            Thank you for your purchase. Your order has been successfully placed.
                        </p>
                        <button
                            onClick={() => navigate('/collections')}
                            className="bg-cartBadge text-white py-3 px-6 rounded-lg hover:bg-customPurple transition duration-200"
                        >
                            Continue Shopping
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </motion.div>
    );
};

export default CheckoutDetails;
