import React from "react";
import { Link } from "react-router-dom";

const ShopNowBtn = () => {

    return (
        <div className="flex justify-center mt-10">
            <Link to="/collections">
            <button className="bg-cartBadge rounded-lg w-32 py-3 text-white text-lg font-body hover:bg-opacity-90 transition duration-300">
                Shop Now
            </button>
            </Link>
        </div>
    );
};

export default ShopNowBtn;