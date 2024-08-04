import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AddToCartBtn from '../components/AddToCartBtn';
import { useCart } from '../context/CartContext';
import CartPopUp from '../components/CartPopUp';
import Footer from '../components/Footer';

const Breakouts = () => {
    const [hovered, setHovered] = useState(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const products = [
        {
            id: 1,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/168028A3-807E-4E4B-A5B9-30CCFEBF8CB1.jpg?v=1713080286&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/168028A3-807E-4E4B-A5B9-30CCFEBF8CB1.jpg?v=1713080286&width=360',
            name: 'Barrier Repair Bundle',
            price: 'Rs.6,162.50 PKR',
            oldPrice: 'Rs.7,250.00 PKR',
            sale: true
        },
        {
            id: 2,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_1691.jpg?v=1707670229&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05089.jpg?v=1707670228&width=360',
            name: 'Barrier Repair Cleanser',
            price: 'Rs.1,750.00 PKR',
            oldPrice: 'Rs.1,800.00 PKR',
            sale: false
        },
        {
            id: 3,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_0214.jpg?v=1700379107&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01591.jpg?v=1700379107&width=360',
            name: 'Barrier Repair Moisturizer',
            price: 'Rs.1,200.00 PKR',
            oldPrice: 'Rs.1,200.00 PKR',
            sale: false
        },
        {
            id: 4,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum4.jpg?v=1700379826&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01311.jpg?v=1700379914&width=360',
            name: 'Brightening Serum - Vitamin C',
            price: 'Rs.2,200.00 PKR',
            oldPrice: 'Rs.2,200.00 PKR',
            sale: false
        },
        {
            id: 5,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum3.jpg?v=1700380914&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01444.jpg?v=1700381538&width=360',
            name: 'Multi Peptide Centella Serum',
            price: 'Rs.2,450.00 PKR',
            oldPrice: 'Rs.2,450.00 PKR',
            sale: false
        },
        {
            id: 6,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serium1.jpg?v=1700380125&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01343.jpg?v=1700380125&width=360',
            name: 'Retinol',
            price: 'Rs.2,800.00 PKR',
            oldPrice: 'Rs.2,800.00 PKR',
            sale: false
        },
        {
            id: 7,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle.jpg?v=1701687230&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle.jpg?v=1701687230&width=360',
            name: 'Teenage Skincare Bundle',
            price: 'Rs.3,867.00 PKR',
            oldPrice: 'Rs.4,550.00 PKR',
            sale: true
        }
    ];

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const container = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const { isCartPopupVisible } = useCart();

    return (
        <>
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="container mx-auto p-12 min-h-screen mb-10"
        >
            <h1 className="text-6xl font-semibold self-start mb-12">Breakouts & Acne</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer max-w-xs"
                        onMouseEnter={() => setHovered(product.id)}
                        onMouseLeave={() => setHovered(null)}
                        variants={fadeInUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                    >
                        <div className="relative overflow-hidden">
                            <motion.img
                                src={hovered === product.id ? product.hoverImage : product.image}
                                alt={product.name}
                                className={`w-full h-full object-cover rounded-t-lg transition-transform duration-500 ${hovered === product.id ? 'scale-105' : ''}`}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: hovered === product.id ? 1 : 1 }}
                            />
                            {product.sale && (
                                <span className="absolute bottom-2 left-2 bg-cartBadge text-white text-xs px-4 py-1 rounded-xl">Sale</span>
                            )}
                        </div>
                        <div className="mt-4 p-4 text-center">
                            <h2 className={`text-lg font-semibold text-gray-800 transition-all duration-300 ${hovered === product.id ? 'underline' : ''}`}>
                                {product.name}
                            </h2>
                            <div className="flex justify-center items-center space-x-2 mt-1">
                                {product.sale && (
                                    <div className="text-gray-500 line-through">{product.oldPrice}</div>
                                )}
                                <div className="text-lg text-gray-800">{product.price}</div>
                            </div>
                            <AddToCartBtn product={product} quantity={1} />

                        </div>
                    </motion.div>
                ))}
            {isCartPopupVisible && <CartPopUp />}
            </div>

        </motion.div>
        <Footer />
        </>
    );

}

export default Breakouts;
