import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const ContactForm = () => {
    const { ref: contactRef, inView: contactInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
                <form className="flex flex-col space-y-4 w-1/2 mx-auto">
                    <div className="flex space-x-4 w-full">
                        <input
                            type="text"
                            placeholder="Name"
                            className="border border-gray-600 rounded-xl p-2 flex-1"
                            style={{ borderWidth: '1px' }}
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            className="border border-gray-600 rounded-xl p-2 flex-1"
                            style={{ borderWidth: '1px' }}
                        />
                    </div>
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="border border-gray-600 rounded-xl p-2 mb-6"
                        style={{ borderWidth: '1px' }}
                    />
                    <textarea
                        placeholder="Comments"
                        className="border border-gray-600 rounded-xl p-2 mb-6"
                        rows="4"
                        style={{ borderWidth: '1px' }}
                    />
                    <button
                        type="submit"
                        className="bg-cartBadge text-white p-2 rounded-md self-center w-1/4"
                    >
                        Send
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default ContactForm;
