import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            className="relative flex items-center overflow-hidden"
            style={{
                height: "600px",
                background: "linear-gradient(100deg,#002B2C 0%,#001515 100%)",
            }}
        >
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 w-[55%] h-full opacity-20 pointer-events-none">
                <img
                    src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine%20Delivery-hero-section-BG.webp"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Container */}
            <div className="max-w-[1280px] mx-auto w-full px-6 relative z-10">
                <div className="flex items-center justify-between gap-12">

                    {/* LEFT CONTENT */}
                    <div className="max-w-[560px] text-white">

                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-teal-400 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                X
                            </div>
                            <span className="text-2xl font-semibold tracking-wide">
                                FOX-MEDICINE
                            </span>
                        </div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-[46px] leading-[56px] font-bold mb-6"
                        >
                            <span className="text-teal-400">
                                Medicine Delivery
                            </span>{" "}
                            App Development
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 text-[18px] leading-relaxed mb-8"
                        >
                            We build secure, user-friendly medicine delivery apps that simplify
                            ordering, tracking, and delivery. With our expert pharmacy app
                            development solutions you can ensure fast, reliable service for
                            your customers.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 hover:scale-105 transition-all"
                        >
                            Let's Discuss →
                        </motion.button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center items-center w-[560px]">

                        <motion.img
                            initial={{ opacity: 0, x: 60, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-hero-section-image.webp"
                            alt="Medicine App"
                            className="w-[560px] object-contain mt-6"
                        />


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;