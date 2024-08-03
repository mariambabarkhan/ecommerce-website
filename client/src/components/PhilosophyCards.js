import React from 'react';
import { useInView } from 'react-intersection-observer';
import ShopNowBtn from './ShopNowBtn';
import {Link} from 'react-router-dom';

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
    <div className="container mx-auto p-10">
      <h2
        ref={headingRef}
        className={`text-4xl font-heading text-center mb-12 tracking-wider transition-transform duration-1000 ${headingInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
      >
        Discover the Blissful Difference
      </h2>
      <div
        ref={cardsRef}
        className={`flex flex-nowrap justify-center gap-8 tracking-wider font-normal transition-transform duration-1000 ${cardsInView ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'}`}
      >
        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-philCard rounded-lg shadow-lg p-6 text-left h-72 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Philosophy</h3>
              <p className="text-md text-gray-600">
                At Blissful, we believe in the power of simplicity. Our skincare philosophy centers around creating products that are gentle yet effective, addressing a wide range of skin concerns while respecting your skin's natural balance.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-philCard rounded-lg shadow-lg p-6 text-left h-72 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Scientific Excellence</h3>
              <p className="text-md text-gray-600">
                Our formulations are rooted in scientific research and innovation. Backed by cutting-edge technology, we strive to provide you with products that deliver visible results, promoting healthier, happier skin.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/3 p-4">
          <div className="bg-philCard rounded-lg shadow-lg p-6 text-left h-72 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Self-Care Rituals</h3>
              <p className="text-md text-gray-600">
                We understand that skincare is more than just a routine – it's a ritual. Elevate your self-care experience with our products that transform your daily regimen into a luxurious and relaxing moment of tranquility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/collections/all"><ShopNowBtn /></Link>
    </div>
  );
};

export default PhilosophyCards;
