import React from 'react';
import Banner from '../components/Banner';
import CategoryCards from '../components/CategoryCards';
import PhilosophyCards from '../components/PhilosophyCards';
import LatestProducts from '../components/LatestProducts';
import BuyVitC from '../components/BuyVitC';

const Home = () => {
    return (
            <div>
                <Banner />
                <CategoryCards />
                <PhilosophyCards />
                <LatestProducts />
                <BuyVitC />
            </div>
    );
};

export default Home;
