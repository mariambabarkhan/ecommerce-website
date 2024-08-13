import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaFacebookF, FaInstagram, FaArrowRight } from 'react-icons/fa';
import logo from '../images/favicon.ico';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  const location = useLocation();  // Get the current location

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const { ref: subscribeRef, inView: subscribeInView } = useInView({ triggerOnce: false });
  const { ref: logoRef, inView: logoInView } = useInView({ triggerOnce: false });
  const { ref: quickLinksRef, inView: quickLinksInView } = useInView({ triggerOnce: false });
  const { ref: userInfoRef, inView: userInfoInView } = useInView({ triggerOnce: false });
  const { ref: contactUsRef, inView: contactUsInView } = useInView({ triggerOnce: false });

  const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!validateEmailFormat(email)) {
      setSubmitStatus({ message: 'Invalid Email. Please try again.', type: 'error' });
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      setSubmitStatus({ message: response.data.message, type: 'success' });
      setEmail('');
    } catch (error) {
      setSubmitStatus({ message: 'Failed to subscribe. Please try again.', type: 'error' });
    }
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={container}
      className="bg-transparent text-black p-10"
    >
      <div className="container mx-auto">
        {(location.pathname === '/' || location.pathname === '/cart') && (
          <motion.div
            ref={subscribeRef}
            variants={fadeInUp}
            animate={subscribeInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center mb-8"
          >
            <h3 className="text-3xl font-semibold font-body mb-4">Subscribe to our emails</h3>
            <form onSubmit={handleSubscribe} className="flex items-center">
              <input
                type="email"
                placeholder="Email"
                id="subscribe-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-1 focus:ring-black md:mr-2"
              />
              <button type="submit" className="bg-black hover:bg-gray-800 text-white font-semibold rounded-lg py-2 px-4 flex items-center">
                <FaArrowRight size={16} />
              </button>
            </form>
            {submitStatus && (
              <p className={`mt-4 text-sm ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {submitStatus.message}
              </p>
            )}
          </motion.div>
        )}

        <div className="flex flex-wrap md:flex-nowrap items-start justify-between">
          <motion.div
            ref={logoRef}
            variants={fadeInUp}
            animate={logoInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            className="flex-shrink-0 mb-8 md:mb-0"
          >
            <img src={logo} alt="Logo" className="w-52 mr-72" />
          </motion.div>

          <motion.div
            ref={quickLinksRef}
            variants={fadeInUp}
            animate={quickLinksInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            className="flex-1 mt-4 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><Link to="/collections/all" className="hover:underline">Shop All</Link></li>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </motion.div>

          <motion.div
            ref={userInfoRef}
            variants={fadeInUp}
            animate={userInfoInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            className="flex-1 mt-4 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">User Info</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/" className="hover:underline">Terms of Service</a></li>
              <li><a href="/" className="hover:underline">Refund Policy</a></li>
              <li><a href="/" className="hover:underline">Shipping Policy</a></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </motion.div>

          <motion.div
            ref={contactUsRef}
            variants={fadeInUp}
            animate={contactUsInView ? "visible" : "hidden"}
            transition={{ duration: 1 }}
            className="flex-1 mt-4 md:mt-0"
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div>
              <p className="mb-2"></p>
              <h4 className='font-semibold'>Email: </h4>
              <a href="mailto:blissfulbeautypakistan@gmail.com" className="hover:underline">blissfulbeautypakistan@gmail.com</a>
            </div>
            <h3 className="text-lg font-semibold mb-4">Working Days</h3>
            <p>Mon - Fri: 9 am to 5 pm</p>
            <p>Sat & Sun: Off</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        variants={fadeInUp}
        animate={contactUsInView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
        className="bg-transparent py-4"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://shopblissfulbeauty.com/#" className="text-black hover:text-gray-600">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.instagram.com/blissfulbeautypakistan/" className="text-black hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
          </div>
          <hr className="border-gray-300 mb-4" />
          <p className="text-sm">
            © 2024, Blissful Powered by MBK :P
          </p>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
