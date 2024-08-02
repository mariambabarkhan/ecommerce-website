import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';

const CategoryCard = ({ children, delay }) => {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="w-full md:w-1/2 lg:w-1/4 p-4"
    >
      {children}
    </motion.div>
  );
};

const CategoryCards = () => {
  const categories = [
    {
      title: 'Serums',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/WhatsApp_Image_2023-09-14_at_09.44.16.jpg?v=1694666697&width=535',
    },
    {
      title: 'Moisturizers',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08166.jpg?v=1700408506&width=535',
    },
    {
      title: 'Cleansers',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08168.jpg?v=1700408678&width=535',
    },
    {
      title: 'Sunscreens',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08170.jpg?v=1700408658&width=535',
    },
  ];

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-3xl font-heading text-center mb-8 tracking-wider">Shop By Category</h2>
      <a href='/' className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <CategoryCard key={category.title} delay={index * 0.3}>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group transition-shadow duration-300">
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 text-center">
                <a
                  href="/"
                  className="text-xl font-semibold font-body mb-2 flex items-center justify-center text-black tracking-wider"
                >
                  {category.title}
                  <FiArrowRight className="ml-2 text-lg transition-transform duration-300 group-hover:scale-125" />
                </a>
              </div>
            </div>
          </CategoryCard>
        ))}
      </a>
    </div>
  );
};

export default CategoryCards;
