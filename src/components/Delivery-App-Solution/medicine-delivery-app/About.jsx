import React from 'react';
import { motion } from 'framer-motion';
import aboutimg from '@/assets/medixpro-medicinedelivery-img/about.jpg';
const About = () => {
    return (
        <section className="min-h-screen flex items-center py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative max-w-md lg:max-w-lg mx-auto"
                        >
                            <img
                                src={aboutimg}
                                alt="Medicine Delivery Solution"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-50 rounded-full -z-10 animate-pulse"></div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-teal-600 font-bold text-sm mb-2 uppercase tracking-wider">Solution Insights</h2>
                            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                                Pharmacy Digital Framework <br />
                                <span className="text-teal-600">Architectures To Optimize</span> Clinical Supply
                            </h3>

                            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                                <p>
                                    The clinical sector represents a primary high-growth territory, where the introduction of virtual medication dispatch frameworks has fundamentally altered operations. Rather than seeking out local dispensaries, individuals can now secure prescriptions effortlessly from their primary residences.
                                </p>
                                <p>
                                    At Kryoss Work, we deliver comprehensive clinical distribution software architectures designed to meet the shifting requirements of modern pharmaceutical enterprises. Our ready-to-deploy medical ecosystem incorporates dedicated user portals, courier interfaces, merchant dashboards, and centralized management consoles.
                                </p>
                                <p>
                                    Whether you maintain a physical pharmacy aiming for digital expansion or an industry disruptor launching a broad clinical supply network, our tailored pharmaceutical software architectures facilitate your goals.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6">
                                <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-teal-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Tailored Interfaces</div>
                                        <div className="text-sm">Multi-Platform Ready</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Encrypted Console</div>
                                        <div className="text-sm">Merchant & Admin</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
