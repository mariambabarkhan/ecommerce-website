import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AddToCartBtn from '../components/AddToCartBtn';
import { useCart } from '../context/CartContext';
import CartPopUp from '../components/CartPopUp';
import Footer from '../components/Footer';

const Bundles = () => {
    const [hovered, setHovered] = useState(null);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const products = [
        {
            id: 1,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin.jpg?v=1715688531&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/AMskincaredrysensitiveskin.jpg?v=1715688531&width=360',
            name: 'AM Skincare Bundle (Dry, Sensitive and Acne Prone Skin)',
            price: 'Rs.9,350.00 PKR',
            oldPrice: 'Rs.11,000.00 PKR',
            sale: true
        },
        {
            id: 2,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2.jpg?v=1715688478&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/AMskincare_Oilyskin_2.jpg?v=1715688478&width=360',
            name: 'AM Skincare Bundle (Oily and Combination Skin)',
            price: 'Rs.9,180.00 PKR',
            oldPrice: 'Rs.10,000.00 PKR',
            sale: true
        },
        {
            id: 3,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle.jpg?v=1701695224&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/AntiAgingBundle.jpg?v=1701695224&width=360',
            name: 'Anti Aging Bundle',
            price: 'Rs.7,862.50 PKR',
            oldPrice: 'Rs.9,250.00 PKR',
            sale: true
        },
        {
            id: 4,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/168028A3-807E-4E4B-A5B9-30CCFEBF8CB1.jpg?v=1713080286&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/168028A3-807E-4E4B-A5B9-30CCFEBF8CB1.jpg?v=1713080286&width=360',
            name: 'Barrier Repair Bundle',
            price: 'Rs.6,162.50 PKR',
            oldPrice: 'Rs.7,250.00 PKR',
            sale: true
        },
        {
            id: 5,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle.jpg?v=1701695573&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle.jpg?v=1701695573&width=360',
            name: 'Bright and Glowing Skin Bundle',
            price: 'Rs.4,000.00 PKR',
            oldPrice: 'Rs.3.400.00 PKR',
            sale: true
        },
        {
            id: 6,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05149.jpg?v=1707677911&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05149.jpg?v=1707677911&width=360',
            name: 'Hydrated and Plump Skin Bundle',
            price: 'Rs.6,460.00 PKR',
            oldPrice: 'Rs.7,600.00 PKR',
            sale: true
        },
        {
            id: 7,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG-0950.jpg?v=1713080644&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG-0950.jpg?v=1713080644&width=360',
            name: 'Mega Bundle (Dry, Sensitive and Acne Prone Skin)',
            price: 'Rs.13,812.00 PKR',
            oldPrice: 'Rs.16,250.00 PKR',
            sale: true
        },
        {
            id: 8,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/E761975A-2936-4627-AA44-561E1F4D01CC.jpg?v=1713080672&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/E761975A-2936-4627-AA44-561E1F4D01CC.jpg?v=1713080672&width=360',
            name: 'Mega Bundle (Oily and Combination Skin)',
            price: 'Rs.13,642.50 PKR',
            oldPrice: 'Rs.16,050.00 PKR',
            sale: true
        },
        {
            id: 9,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05183.jpg?v=1707681314&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05183.jpg?v=1707681314&width=360',
            name: 'PM Skincare Bundle (Dry, Sensitive and Acne Prone Skin)',
            price: 'Rs.6,970.00 PKR',
            oldPrice: 'Rs.8,200.00 PKR',
            sale: true
        },
        {
            id: 10,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle.jpg?v=1701684215&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle.jpg?v=1701684215&width=360',
            name: 'PM Skincare Bundle (Oily and Combination Skin)',
            price: 'Rs.6,800.00 PKR',
            oldPrice: 'Rs.8,000.00 PKR',
            sale: true
        },
        {
            id: 11,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1.jpg?v=1701687417&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1.jpg?v=1701687417&width=360',
            name: 'Super Serum Bundle',
            price: 'Rs.8,202.50 PKR',
            oldPrice: 'Rs.9,650.00 PKR',
            sale: true
        },
        {
            id: 12,
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
            <h1 className="text-6xl font-semibold self-start mb-12">Bundles</h1>
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

export default Bundles;
