// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Banner from '../components/Banner';
import CategoryCards from '../components/CategoryCards';
import PhilosophyCards from '../components/PhilosophyCards';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            <Banner />
            <CategoryCards />
            <PhilosophyCards />
            <Footer />
        </div>
    );
};

export default Home;
