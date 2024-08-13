import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AddToCartBtn from './AddToCartBtn';
import CartPopUp from './CartPopUp';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}collections/all/${id}`);
            setProduct(response.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    const { isCartPopupVisible } = useCart();

    if (!product) return <div>Loading...</div>;

    return (
        <>
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap md:flex-nowrap bg-white overflow-hidden mb-12 p-10"
        >
            <div className="relative w-full md:w-1/2 p-10">
                <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-auto rounded-3xl transition-transform duration-300"
                />
            </div>

            <div className="w-full md:w-1/2 p-10">
                <h2 className="text-xs font-thin mb-2">BLISSFUL</h2>
                <h3 className="text-4xl font-semibold mb-4">{product.name}</h3>
                <p className="text-md font-thin mb-4">
                    {product.sale ? product.price || 'Price not available' : product.oldPrice || 'Old price not available'}
                </p>
                <p className="text-lg tracking-wide font-thin mb-4">{product.description}</p>

                <div className="mb-4">
                    <h4 className="font-semibold mb-2">Quantity</h4>
                    <div className="flex items-center">
                        <button onClick={decreaseQuantity} className="bg-gray-200 px-4 py-2 rounded-lg text-lg font-semibold">
                            -
                        </button>
                        <span className="mx-4 text-lg font-semibold">{quantity}</span>
                        <button onClick={increaseQuantity} className="bg-gray-200 px-4 py-2 rounded-lg text-lg font-semibold">
                            +
                        </button>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <AddToCartBtn product={product} quantity={quantity} />
                    <Link to="/cart">
                        <button className="bg-cartBadge rounded-lg w-1/2 py-3 text-white text-lg font-body hover:bg-opacity-90 transition duration-300">
                            Buy it now
                        </button>
                    </Link>
                </div>
            </div>

            {isCartPopupVisible && <CartPopUp />}
        </motion.div>
        </>
    );
};

export default ProductDetails;
