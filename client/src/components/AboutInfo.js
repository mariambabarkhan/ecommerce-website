import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const AboutInfo = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24 py-12 lg:py-20 min-h-screen font-body"
        >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-thin mb-8 sm:mb-10 md:mb-12">About Us</h1>
            <p className="font-thin text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10">
                Welcome to Blissful Beauty!
            </p>
            <p className="font-thin text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10">
                At Blissful Beauty, we are passionate about providing the best skincare products that bring out the natural glow and beauty in you. Our mission is to offer high-quality, effective, and safe products that cater to all skin types and concerns.
            </p>
            <p className="font-thin text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10">
                Founded with a commitment to excellence, Blissful Beauty strives to combine the latest advancements in skincare science with natural ingredients to create products that deliver visible results. We believe that everyone deserves to feel confident and beautiful in their own skin.
            </p>
            <p className="font-thin text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10">
                Our range of products is carefully curated and tested to ensure they meet our high standards of quality and performance. From cleansers and moisturizers to serums and masks, Blissful Beauty has everything you need to achieve and maintain healthy, radiant skin.
            </p>
            <p className="font-thin text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10">
                We are dedicated to providing exceptional customer service and support. If you have any questions or need assistance with our products, please don't hesitate to reach out to us.
            </p>
            <p className="font-thin text-base sm:text-lg md:text-xl text-gray-700 mt-6 sm:mt-8 md:mt-10">
                Thank you for choosing Blissful Beauty. We are excited to be a part of your skincare journey!
            </p>
            <p className="font-thin text-base sm:text-lg md:text-xl text-gray-700 mt-6 sm:mt-8 md:mt-10">
                Visit us at <a href="https://shopblissfulbeauty.com" className="text-cartBadge hover:underline">shopblissfulbeauty.com</a> to explore our products and learn more about our brand.
            </p>
        </motion.div>
    );
};

export default AboutInfo;
