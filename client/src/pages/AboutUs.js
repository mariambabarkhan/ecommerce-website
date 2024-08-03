import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import AboutInfo from '../components/AboutInfo';

const AboutUs = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            <AboutInfo /> 
            <Footer />
        </div>
    );
};

export default AboutUs;