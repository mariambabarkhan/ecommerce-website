import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Products = () => {
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
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_1691.jpg?v=1707670229&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05089.jpg?v=1707670228&width=360',
            name: 'Barrier Repair Cleanser',
            price: 'Rs.1,750.00 PKR',
            oldPrice: 'Rs.1,800.00 PKR',
            sale: false
        },
        {
            id: 6,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_0214.jpg?v=1700379107&width=720',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01591.jpg?v=1700379107&width=360',
            name: 'Barrier Repair Moisturizer',
            price: 'Rs.1,200.00 PKR',
            oldPrice: 'Rs.1,200.00 PKR',
            sale: false
        },
        {
            id: 7,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle.jpg?v=1701695573&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle.jpg?v=1701695573&width=360',
            name: 'Bright and Glowing Skin Bundle',
            price: 'Rs.4,000.00 PKR',
            oldPrice: 'Rs.3.400.00 PKR',
            sale: true
        },
        {
            id: 8,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum4.jpg?v=1700379826&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01311.jpg?v=1700379914&width=360',
            name: 'Brightening Serum - Vitamin C',
            price: 'Rs.2,200.00 PKR',
            oldPrice: 'Rs.2,200.00 PKR',
            sale: false
        },
        {
            id: 9,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/serum2.jpg?v=1700379942&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01500.jpg?v=1700379954&width=360',
            name: 'Hyalaronic Acid',
            price: 'Rs.2,200.00 PKR',
            oldPrice: 'Rs.2,200.00 PKR',
            sale: false
        },
        {
            id: 10,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05149.jpg?v=1707677911&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05149.jpg?v=1707677911&width=360',
            name: 'Hydrated and Plump Skin Bundle',
            price: 'Rs.6,460.00 PKR',
            oldPrice: 'Rs.7,600.00 PKR',
            sale: true
        },
        {
            id: 11,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_0321-Enhanced-NR.jpg?v=1700379575&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01614.jpg?v=1700379575&width=360',
            name: 'Hydrating Cleanser',
            price: 'Rs.1,550.00 PKR',
            oldPrice: 'Rs.1,550.00 PKR',
            sale: false
        },
        {
            id: 12,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG-0950.jpg?v=1713080644&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG-0950.jpg?v=1713080644&width=360',
            name: 'Mega Bundle (Dry, Sensitive and Acne Prone Skin)',
            price: 'Rs.13,812.00 PKR',
            oldPrice: 'Rs.16,250.00 PKR',
            sale: true
        },
        {
            id: 13,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/E761975A-2936-4627-AA44-561E1F4D01CC.jpg?v=1713080672&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/E761975A-2936-4627-AA44-561E1F4D01CC.jpg?v=1713080672&width=360',
            name: 'Mega Bundle (Oily and Combination Skin)',
            price: 'Rs.13,642.50 PKR',
            oldPrice: 'Rs.16,050.00 PKR',
            sale: true
        },
        {
            id: 14,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum3.jpg?v=1700380914&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01444.jpg?v=1700381538&width=360',
            name: 'Multi Peptide Centella Serum',
            price: 'Rs.2,450.00 PKR',
            oldPrice: 'Rs.2,450.00 PKR',
            sale: false
        },
        {
            id: 15,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05183.jpg?v=1707681314&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC05183.jpg?v=1707681314&width=360',
            name: 'PM Skincare Bundle (Dry, Sensitive and Acne Prone Skin)',
            price: 'Rs.6,970.00 PKR',
            oldPrice: 'Rs.8,200.00 PKR',
            sale: true
        },
        {
            id: 16,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle.jpg?v=1701684215&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/PMskincarebundle.jpg?v=1701684215&width=360',
            name: 'PM Skincare Bundle (Oily and Combination Skin)',
            price: 'Rs.6,800.00 PKR',
            oldPrice: 'Rs.8,000.00 PKR',
            sale: true
        },
        {
            id: 17,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Serium1.jpg?v=1700380125&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC01343.jpg?v=1700380125&width=360',
            name: 'Retinol',
            price: 'Rs.2,800.00 PKR',
            oldPrice: 'Rs.2,800.00 PKR',
            sale: false
        },
        {
            id: 18,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1.jpg?v=1701687417&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/AllSerumBundle_1.jpg?v=1701687417&width=360',
            name: 'Super Serum Bundle',
            price: 'Rs.8,202.50 PKR',
            oldPrice: 'Rs.9,650.00 PKR',
            sale: true
        },
        {
            id: 19,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle.jpg?v=1701687230&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/TeenageSkincareBundle.jpg?v=1701687230&width=360',
            name: 'Teenage Skincare Bundle',
            price: 'Rs.3,867.00 PKR',
            oldPrice: 'Rs.4,550.00 PKR',
            sale: true
        },
        {
            id: 20,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/Fixed1.jpg?v=1712597105&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG-0737.png?v=1712599740&width=360',
            name: 'Thermal Spring Water Spray',
            price: 'Rs.1,850.00 PKR',
            oldPrice: 'Rs.1,850.00 PKR',
            sale: false
        },
        {
            id: 21,
            image: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_2457.jpg?v=1715335725&width=360',
            hoverImage: 'https://shopblissfulbeauty.com/cdn/shop/files/DSC07337.jpg?v=1715335725&width=360',
            name: 'Tinted Sunscreen SPF 60',
            price: 'Rs.1,800.00 PKR',
            oldPrice: 'Rs.1,800.00 PKR',
            sale: false
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

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="container mx-auto p-12 min-h-screen mb-10"
        >
            <h1 className="text-6xl font-semibold self-start mb-12">Products</h1>
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
                        <div className="relative">
                            <img
                                src={hovered === product.id ? product.hoverImage : product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            {product.sale && (
                                <span className="absolute bottom-2 left-2 bg-cartBadge text-white text-xs px-4 py-1 rounded-xl">Sale</span>
                            )}
                        </div>
                        <div className="mt-4 p-4 text-center">
                            <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                            <div className="flex justify-center items-center space-x-2 mt-1">
                                {product.sale && (
                                    <div className="text-gray-500 line-through">{product.oldPrice}</div>
                                )}
                                <div className="text-lg text-gray-800">{product.price}</div>
                            </div>
                            <Link to='/cart'>
                                <button className="mt-4 bg-white border border-gray-400 text-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-100">Add to cart</button>
                            </Link>
                        </div>

                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}

export default Products;
