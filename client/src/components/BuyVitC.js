import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const BuyVitC = () => {
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const { ref, inView } = useInView({
        triggerOnce: false, // Set to false to animate every time it comes into view
        threshold: 0.1 // Adjust as needed
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap md:flex-nowrap bg-white overflow-hidden mb-12 ml-28 p-10"
        >
            {/* Product Image Section */}
            <div className="relative w-full md:w-1/2 p-4 mr-32">
                <img
                    src="https://shopblissfulbeauty.com/cdn/shop/files/Serum4.jpg?v=1700379826&width=720" // Replace with your image URL
                    alt="Brightening Serum - Vitamin C"
                    className="object-cover w-full h-auto rounded-3xl transition-transform duration-300"
                />
            </div>

            {/* Product Details Section */}
            <div className="w-full md:w-1/2 p-4">
                <h2 className="text-xs font-thin mb-2">BLISSFUL</h2>
                <h3 className="text-4xl font-semibold mb-4">Brightening Serum -</h3>
                <h3 className="text-4xl font-semibold mb-4">Vitamin C</h3>
                <p className="text-md font-thin font-body mb-4">Rs.2,200.00 PKR</p>
                <p className="text-xs mb-4"><a href="/"><u>Shipping</u></a> calculated at checkout.</p>

                {/* Size Selector */}
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Size</h4>
                    <p>30ml</p>
                </div>

                {/* Quantity Selector */}
                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Quantity</h4>
                    <div className="flex items-center">
                        <button onClick={decreaseQuantity} className="bg-gray-200 px-4 py-2 rounded-lg text-lg font-semibold">
                            -
                        </button>
                        <span className="mx-4 text-lg font-semibold">{quantity}</span>
                        <button onClick={increaseQuantity} className="bg-gray-200 px-4 py-2 rounded-lg text-lg font-semibold">
                            +
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-4">
                    <button className="bg-transparent text-black border-2 border-black w-96 py-2 px-4 rounded-lg font-semibold hover:bg-gray-100">
                        Add to Cart
                    </button>
                    <button className="bg-cartBadge rounded-lg w-96 py-3 text-white text-lg font-body hover:bg-opacity-90 transition duration-300">
                        Buy it now
                    </button>
                    <div className="flex items-center">
                        <a href="/" className="text-black hover:underline flex items-center">
                            View full details
                            <FiArrowRight className="ml-2 text-lg transition-transform duration-300 transform hover:scale-110" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default BuyVitC;
