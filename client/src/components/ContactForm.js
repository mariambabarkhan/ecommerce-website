import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const ContactForm = () => {
    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitStatus, setSubmitStatus] = useState("");
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required.";
        if (!formData.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email address is invalid.";
        }
        if (!formData.phone) newErrors.phone = "Phone number is required.";
        else if (!/^\d{11}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }
        if (!formData.message) newErrors.message = "Message is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            await axios.post("http://localhost:5000/contact", formData);
            setSubmitStatus("Thanks for contacting us. We'll get back to you as soon as possible.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setErrors({});
        } catch (error) {
            setSubmitStatus("There was an error sending your message. Please try again.");
        }
    };

    return (
        <motion.div
            ref={contactRef}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex items-center justify-center h-screen bg-auto bg-center"
        >
            <div className="absolute inset-0 bg-white bg-opacity-100 rounded-3xl flex flex-col p-10">
                <h1 className="text-7xl font-bodyheading font-semibold text-black mb-20 tracking-wider text-center">Contact</h1>
                <form className="flex flex-col space-y-4 w-1/2 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex space-x-4 w-full">
                        <div className="flex-1">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                autoComplete="name"
                                className={`border border-gray-600 rounded-xl p-2 w-full ${errors.name ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div className="flex-1">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email*"
                                autoComplete="email"
                                className={`border border-gray-600 rounded-xl p-2 w-full ${errors.email ? 'border-red-500' : ''}`}
                                required
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                    </div>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        autoComplete="tel"
                        className={`border border-gray-600 rounded-xl p-2 mb-6 w-full ${errors.phone ? 'border-red-500' : ''}`}
                        pattern="\d{11}"
                        required
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Comments"
                        className={`border border-gray-600 rounded-xl p-2 mb-6 w-full ${errors.message ? 'border-red-500' : ''}`}
                        rows="4"
                        required
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    <button
                        type="submit"
                        className="bg-cartBadge text-white p-2 rounded-md self-center w-1/4"
                    >
                        Send
                    </button>
                </form>
                {submitStatus && (
                    <div className="flex items-center justify-center mt-4 p-4 rounded-md">
                        <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <p className="text-center">{submitStatus}</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ContactForm;
