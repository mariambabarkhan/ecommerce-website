import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa';
import logo from '../images/favicon.ico'; // Make sure the path is correct

const Footer = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Increase delay between each child animation
      },
    },
  };

  // Use Intersection Observer for each section
  const { ref: subscribeRef, inView: subscribeInView } = useInView({ triggerOnce: false });
  const { ref: logoRef, inView: logoInView } = useInView({ triggerOnce: false });
  const { ref: quickLinksRef, inView: quickLinksInView } = useInView({ triggerOnce: false });
  const { ref: userInfoRef, inView: userInfoInView } = useInView({ triggerOnce: false });
  const { ref: contactUsRef, inView: contactUsInView } = useInView({ triggerOnce: false });

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={container}
      className="bg-transparent text-black p-10"
    >
      <div className="container mx-auto">
        {/* Subscribe Section */}
        <motion.div
          ref={subscribeRef}
          variants={fadeInUp}
          animate={subscribeInView ? "visible" : "hidden"}
          transition={{ duration: 1 }} // Increase the duration
          className="flex flex-col items-center justify-center mb-8"
        >
          <h3 className="text-3xl font-semibold font-body mb-4">Subscribe to our emails</h3>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-black md:mr-2"
            />
            <button className="bg-black hover:bg-gray-800 text-white font-semibold rounded-lg py-2 px-4 flex items-center">
              <FaArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        <div className="flex flex-wrap md:flex-nowrap items-start justify-between">
          {/* Logo Section */}
          <motion.div
            ref={logoRef}
            variants={fadeInUp}
            animate={logoInView ? "visible" : "hidden"}
            transition={{ duration: 1 }} // Increase the duration
            className="flex-shrink-0 mb-8 md:mb-0"
          >
            <img src={logo} alt="Logo" className="w-52 mr-72" />
          </motion.div>

          {/* Quick Links Section */}
          <motion.div
            ref={quickLinksRef}
            variants={fadeInUp}
            animate={quickLinksInView ? "visible" : "hidden"}
            transition={{ duration: 1 }} // Increase the duration
            className="flex-1 mt-4 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/" className="hover:underline">Shop All</a></li>
              <li><a href="/" className="hover:underline">About Us</a></li>
              <li><a href="/" className="hover:underline">Contact Us</a></li>
            </ul>
          </motion.div>

          {/* User Info Section */}
          <motion.div
            ref={userInfoRef}
            variants={fadeInUp}
            animate={userInfoInView ? "visible" : "hidden"}
            transition={{ duration: 1 }} // Increase the duration
            className="flex-1 mt-4 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">User Info</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/" className="hover:underline">Terms of Service</a></li>
              <li><a href="/" className="hover:underline">Refund Policy</a></li>
              <li><a href="/" className="hover:underline">Shipping Policy</a></li>
              <li><a href="/" className="hover:underline">Contact Us</a></li>
            </ul>
          </motion.div>

          {/* Contact Us & Working Days Section */}
          <motion.div
            ref={contactUsRef}
            variants={fadeInUp}
            animate={contactUsInView ? "visible" : "hidden"}
            transition={{ duration: 1 }} // Increase the duration
            className="flex-1 mt-4 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-2"><h4 className='font-semibold'>Email: </h4><a href="mailto:blissfulbeautypakistan@gmail.com" className="hover:underline">blissfulbeautypakistan@gmail.com</a></p>
            <h3 className="text-lg font-semibold mb-4">Working Days</h3>
            <p>Mon - Fri: 9 am to 5 pm</p>
            <p>Sat & Sun: Off</p>
          </motion.div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <motion.div
        variants={fadeInUp}
        animate={contactUsInView ? "visible" : "hidden"}
        transition={{ duration: 1 }} // Increase the duration
        className="bg-transparent py-4"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="/" className="text-black hover:text-gray-600">
              <FaFacebookF size={24} />
            </a>
            <a href="/" className="text-black hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
          </div>
          <hr className="border-gray-300 mb-4" />
          <p className="text-sm">
            © 2024, Blissful Powered by Shopify
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
