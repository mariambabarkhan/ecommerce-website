import React from 'react';
import Navbar from '../components/Navbar';
import Sale from '../components/Sale';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Contact;
