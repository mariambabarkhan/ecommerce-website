// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Sale />
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
