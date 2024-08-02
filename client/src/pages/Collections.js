import React from "react";
import Navbar from "../components/Navbar";
import Sale from "../components/Sale";
import Footer from "../components/Footer";
import CollectionCategories from "../components/CollectionCategories";

const Collections = () => {
    return (
        <div>
            <Sale />
            <Navbar />
            <CollectionCategories />
            <Footer />
        </div>
    );
};

export default Collections;