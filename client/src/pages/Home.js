import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Banner from '../components/Banner';
import CategoryCards from '../components/CategoryCards';
import PhilosophyCards from '../components/PhilosophyCards';
import HomeFooter from '../components/HomeFooter';
import LatestProducts from '../components/LatestProducts';
import BuyVitC from '../components/BuyVitC';

const Home = () => {
    return (
            <div>
                <Sale />
                <Navbar />
                <Banner />
                <CategoryCards />
                <PhilosophyCards />
                <LatestProducts />
                <BuyVitC />
                <HomeFooter />
            </div>
    );
};

export default Home;
