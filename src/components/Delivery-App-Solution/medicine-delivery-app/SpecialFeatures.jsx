import React from 'react';
import { motion } from 'framer-motion';

const SpecialFeatures = () => {
    const features = [
        {
            title: "AI-Driven Personalized Search",
            desc: "Our app uses advanced AI technology to suggest medicines based on past orders, prescriptions, and user preferences, ensuring a quick, seamless, and personalized shopping experience.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            title: "Prescription Verification",
            desc: "Customers can upload prescriptions, and our built-in verification system ensures compliance while allowing pharmacies to approve orders quickly.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        },
        {
            title: "Pharmacy & Store Support",
            desc: "Users can choose to buy from multiple pharmacies, compare prices, and order from the nearest store for faster deliveries and better availability.",
            icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        },
        {
            title: "Automated Refill Reminders",
            desc: "The app sends automated notifications to remind users when it's time to reorder their medicines. It ensures they never miss a dose.",
            icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        },
        {
            title: "Subscription & Membership Plans",
            desc: "Customers can subscribe to monthly medicine plans or avail membership benefits. It helps them get regular deliveries, and exclusive discounts.",
            icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        },
        {
            title: "Multi-Languages and Accessibility",
            desc: "Our app offers multiple languages option and advanced voice search features supported, making it user-friendly for a diverse audience, including elderly.",
            icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        }
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-10 bg-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-50 -z-10 rounded-l-full transform translate-x-1/2 opacity-50"></div>
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-50 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center">
                <div className="text-center mx-auto mb-8 max-w-3xl">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight"
                    >
                        What Makes Our Medicine <br />
                        <span className="text-teal-600">Delivery App Special?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm lg:text-base text-gray-600 font-ibm-plex"
                    >
                        Our medicine delivery app development services go beyond basic functionality to offer feature-rich medicine delivery apps that improve user experience.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-5 lg:p-6 rounded-3xl shadow-md border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors duration-300 shadow-inner">
                                    <svg className="w-6 h-6 text-teal-600 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                                    </svg>
                                </div>
                                <h3 className="text-base lg:text-lg font-bold text-gray-900 font-nunito group-hover:text-teal-600 transition-colors leading-tight">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 font-ibm-plex text-xs lg:text-sm leading-snug">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Banner inside this section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="p-6 lg:p-8 rounded-3xl text-center relative overflow-hidden flex flex-col justify-center"
                    style={{ background: 'linear-gradient(100deg, #002B2C 0%, #001515 100%)' }}
                >
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500 to-transparent"></div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white mb-3 relative z-10 font-nunito leading-tight">
                        Launch Your Medicine Delivery App <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                            in Just 5 Days
                        </span>
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base mb-6 max-w-2xl mx-auto relative z-10 font-ibm-plex">
                        Get your app live quickly with our ready-to-deploy solution. Skip lengthy development phases.
                    </p>
                    <button className="px-8 py-3 rounded-full font-black text-white text-sm hover:scale-105 transition-transform shadow-lg relative z-10 w-max mx-auto"
                        style={{ background: 'linear-gradient(90deg, #FFAA01 0%, #E54E01 100%)' }}>
                        LAUNCH NOW
                    </button>
                    {/* Decorative App Icon element */}
                    <div className="absolute -right-20 -bottom-20 opacity-10">
                        <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SpecialFeatures;
