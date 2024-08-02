import React from "react";
import Navbar from "../components/Navbar";
import Sale from "../components/Sale";
import Footer from "../components/Footer";
import Products from "../components/Products";

const AllCollections = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            <Products />
            <Footer />
        </div>
    );
};

export default AllCollections;