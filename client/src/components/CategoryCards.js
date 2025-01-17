import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const CategoryCard = ({ children, delay, linkto }) => {
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
      <Link to={linkto} className="block">
        {children}
      </Link>
    </motion.div>
  );
};

const CategoryCards = () => {
  const categories = [
    {
      title: 'Serums',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/WhatsApp_Image_2023-09-14_at_09.44.16.jpg?v=1694666697&width=535',
      linkto: '/collections/serums'
    },
    {
      title: 'Moisturizers',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08166.jpg?v=1700408506&width=535',
      linkto: '/collections/moisturizers'
    },
    {
      title: 'Cleansers',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08168.jpg?v=1700408678&width=535',
      linkto: '/collections/cleansers'
    },
    {
      title: 'Sunscreens',
      img: 'https://shopblissfulbeauty.com/cdn/shop/collections/ASH08170.jpg?v=1700408658&width=535',
      linkto: '/collections/sunscreens'
    },
  ];

  return (
    <div className="container mx-auto p-10">
      <h2 className="text-3xl font-heading text-center mb-8 tracking-wider mt-8">Shop By Category</h2>
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <CategoryCard key={category.title} delay={index * 0.3} linkto={category.linkto}>
            <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group transition-shadow duration-300">
              <img
                src={category.img}
                alt={category.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6 text-center">
                <span className="text-xl font-semibold font-body mb-2 flex items-center justify-center text-black tracking-wider">
                  {category.title}
                  <FiArrowRight className="ml-2 text-lg transition-transform duration-300 group-hover:scale-125" />
                </span>
              </div>
            </div>
          </CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
