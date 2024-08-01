// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Sale />
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Home;
