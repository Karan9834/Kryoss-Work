import React from 'react';
import { motion } from 'framer-motion';

const Platforms = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center py-10 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                <img
                    src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-app-ui-bg.webp"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center max-w-5xl">
                <div className="text-center mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                    >
                        High-Performance Clinical Logistics <br />
                        <span className="text-teal-600">Framework Engineering for Cross-Platforms</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600 max-w-2xl mx-auto"
                    >
                        Our pharmaceutical distribution ecosystem facilitates unified Android & iOS journeys alongside a robust administrative console for strategic enterprise oversight.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                    {/* Customer App */}
                    <div className="relative text-center group">
                        <div className="absolute inset-x-10 bottom-0 h-1/2 bg-gradient-to-t from-teal-100 to-transparent -z-10 rounded-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <img
                            src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-customer-android-and-ios-app.webp"
                            alt="Customer Application"
                            className="w-[60%] lg:w-[70%] h-auto max-h-[25vh] object-contain mx-auto transform transition-transform duration-500 group-hover:scale-105"
                        />
                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Systems</h3>
                        <p className="text-gray-600 text-sm">
                            Participant, Logistics & Merchant (Android + iOS)
                        </p>
                    </div>

                    {/* Admin Panels */}
                    <div className="relative text-center group mt-10 lg:mt-0">
                        <div className="absolute inset-x-10 bottom-0 h-1/2 bg-gradient-to-t from-orange-100 to-transparent -z-10 rounded-3xl opacity-50 transition-opacity group-hover:opacity-100"></div>
                        <img
                            src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-admin-panel.webp"
                            alt="Admin Panel"
                            className="w-[80%] lg:w-[90%] h-auto max-h-[25vh] object-contain mx-auto transform transition-transform duration-500 group-hover:scale-105 rounded-3xl shadow-2xl"
                        />
                        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Management Consoles</h3>
                        <p className="text-gray-600 text-sm">
                            Enterprise Admin & Merchant Hub
                        </p>
                    </div>
                </div>

                {/* Banner inside this section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-6 lg:p-10 rounded-3xl text-center relative overflow-hidden flex flex-col justify-center max-h-[30vh]"
                    style={{ background: 'linear-gradient(135deg, #CCF1FC 0%, #FFD8D8 100%)' }}
                >
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-3 relative z-10 leading-tight">
                        Optimize Clinical Care with an <br />
                        <span className="text-teal-600">Advanced Pharmaceutical Engine!</span>
                    </h3>
                    <p className="text-gray-700 text-sm lg:text-base mb-6 max-w-2xl mx-auto relative z-10 font-medium">
                        Our specialists assist with dedicated pharmaceutical logistics engineering that elevates participant convenience and optimizes healthcare accessibility.
                    </p>
                    <button className="px-8 py-4 rounded-full font-black text-white text-sm lg:text-base w-max mx-auto hover:scale-105 transition-transform shadow-2xl relative z-10"
                        style={{ background: 'linear-gradient(90deg, #1A9B9E 0%, #002B2C 100%)' }}>
                        GET CUSTOM SOLUTION
                    </button>
                    {/* Decorative App Icon element */}
                    <div className="absolute right-0 bottom-0 opacity-20">
                        <img
                            src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-cta-image.webp"
                            alt="CTA Graphic"
                            className="h-64 object-contain translate-x-1/4 translate-y-1/4"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Platforms;
