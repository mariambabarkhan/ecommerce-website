import React from 'react';
import { useInView } from 'react-intersection-observer';
import ShopNowBtn from './ShopNowBtn';
import { Link } from 'react-router-dom';

const PhilosophyCards = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2
        ref={headingRef}
        className={`text-2xl sm:text-3xl lg:text-4xl font-heading text-center mb-8 sm:mb-12 tracking-wider transition-transform duration-1000 ${headingInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
      >
        Discover the Blissful Difference
      </h2>
      <div
        ref={cardsRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 tracking-wider font-normal transition-transform duration-1000 ${cardsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
      >
        <div className="p-4">
          <div className="bg-philCard rounded-lg shadow-lg p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Our Philosophy</h3>
              <p className="text-sm sm:text-md text-gray-600">
                At Blissful, we believe in the power of simplicity. Our skincare philosophy centers around creating products that are gentle yet effective, addressing a wide range of skin concerns while respecting your skin's natural balance.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-philCard rounded-lg shadow-lg p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Scientific Excellence</h3>
              <p className="text-sm sm:text-md text-gray-600">
                Our formulations are rooted in scientific research and innovation. Backed by cutting-edge technology, we strive to provide you with products that deliver visible results, promoting healthier, happier skin.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-philCard rounded-lg shadow-lg p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Self-Care Rituals</h3>
              <p className="text-sm sm:text-md text-gray-600">
                We understand that skincare is more than just a routine – it's a ritual. Elevate your self-care experience with our products that transform your daily regimen into a luxurious and relaxing moment of tranquility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link to="/collections/all"><ShopNowBtn /></Link>
      </div>
    </div>
  );
};

export default PhilosophyCards;
