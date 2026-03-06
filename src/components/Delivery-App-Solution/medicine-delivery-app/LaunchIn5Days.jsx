import React from 'react';
import { motion } from 'framer-motion';

const LaunchIn5Days = () => {
    const points = [
        "Skip lengthy development phases and launch a fully functional, scalable platform",
        "Connects pharmacies, customers, and delivery agents in real-time",
        "Prescription uploads and live order tracking included",
        "Secure payments and instant notifications built-in"
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="relative">
                            <img
                                src="https://whitelabelfox.com/assets/images/gojek-clone-app/hit-the-market-withgojek-clone-app-in-days-not-months-image.webp"
                                alt="Launch in 5 Days"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                                onError={(e) => {
                                    e.target.src = "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-hero-section-image.webp";
                                }}
                            />
                            <div className="absolute -top-4 -right-4 bg-orange-500 text-white font-black text-xl px-6 py-3 rounded-2xl shadow-lg transform rotate-3">
                                5 Days!
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight">
                            Launch Your Medicine Delivery App{' '}
                            <span className="text-teal-600">in Just 5 Days</span>
                        </h2>
                        <p className="text-base text-gray-600 font-ibm-plex mb-6 leading-relaxed">
                            Get your Medicine Delivery App live in just 5 working days with our quick, ready-to-deploy solution. Unlike traditional custom development that takes weeks or months, our pre-built platform accelerates your time-to-market.
                        </p>

                        <div className="space-y-4 mb-8">
                            {points.map((point, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-6 h-6 shrink-0 mt-0.5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-gray-700 font-ibm-plex">{point}</p>
                                </div>
                            ))}
                        </div>

                        <button className="px-8 py-4 rounded-full font-bold text-white text-base hover:scale-105 transition-transform shadow-xl"
                            style={{ background: 'linear-gradient(90deg, #FFAA01 0%, #E54E01 100%)' }}>
                            LAUNCH NOW
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LaunchIn5Days;
