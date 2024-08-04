import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';

const CollectionCard = ({ children, delay }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, delay } },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="w-full md:w-1/2 lg:w-1/3 p-5"
        >
            {children}
        </motion.div>
    );
};

const CollectionCategories = () => {
    const collections = [
        {
            title: 'All Products',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/serum2.jpg?v=1700379942&width=535',
            linkto: '/collections/all'
        },
        {
            title: 'Breakouts & Acne',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum4.jpg?v=1700379826&width=535',
            linkto: '/collections/breakouts'
        },
        {
            title: 'Bundles',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/Bright_GlowingSkinBundle.jpg?v=1701695573&width=535',
            linkto: '/bundles'
        },
        {
            title: 'Cleansers',
            img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08168.jpg?v=1700408678&width=535',
            linkto: '/collections/cleansers'
        },
        {
            title: 'Dark Spots & Discoloration',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum4.jpg?v=1700379826&width=535',
            linkto: '/collections/discoloration'
        },
        {
            title: 'Dehydration & Dryness',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/serum2.jpg?v=1700379942&width=535',
            linkto: '/collections/dryness'
        },
        {
            title: 'Dullness & Uneven Tone',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum4.jpg?v=1700379826&width=535',
            linkto: '/collections/dullness'
        },
        {
            title: 'Healthy Aging',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum3.jpg?v=1700380914&width=535',
            linkto: '/collections/aging'
        },
        {
            title: 'Makeup Removing & Deep Cleaning',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_0321-Enhanced-NR.jpg?v=1700379575&width=535',
            linkto: '/collections/cleansing'
        },
        {
            title: 'Moisturizers',
            img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08166.jpg?v=1700408506&width=535',
            linkto: '/collections/moisturizers'
        },
        {
            title: 'Serums',
            img: 'https://shopblissfulbeauty.com/cdn/shop/collections/WhatsApp_Image_2023-09-14_at_09.44.16.jpg?v=1694666697&width=535',
            linkto: '/collections/serums'
        },
        {
            title: 'Sun Protection',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/IMG_2457.jpg?v=1715335725&width=535',
            linkto: '/collections/sun-protection'
        },
        {
            title: 'Sunscreens',
            img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08170.jpg?v=1700408658&width=535',
            linkto: '/collections/sunscreens'
        },
        {
            title: 'Texture, Pores & Oily Skin',
            img: 'https://shopblissfulbeauty.com/cdn/shop/files/Serum3.jpg?v=1700380914&width=535',
            linkto: '/collections/oilyskin'
        }
    ];

    return (
        <div className="container mx-auto p-10">
            <h2 className="text-6xl font-bodyheading font-semibold self-start ml-6 mb-8 tracking-wide">Collections</h2>
            <div className="flex flex-wrap justify-center">
                {collections.map((category, index) => (
                    <CollectionCard key={category.title}>
                        <a href={category.linkto}>
                        <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group transition-shadow duration-300 h-[450px]">
                            <img
                                src={category.img}
                                alt={category.title}
                                className="w-full h-[80%] object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="p-6 text-center h-[20%] flex flex-col justify-center">
                                <a
                                    href={category.linkto}
                                    className="text-xl font-body font-semibold mb-2 flex items-center justify-center text-black tracking-wider"
                                >
                                    {category.title}
                                    <FiArrowRight className="ml-2 text-lg transition-transform duration-300 group-hover:scale-125" />
                                </a>
                            </div>
                        </div>
                        </a>
                    </CollectionCard>
                ))}
            </div>
        </div>
    );
};

export default CollectionCategories;
