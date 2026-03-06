import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen flex items-center py-10 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative max-w-sm lg:max-w-md mx-auto"
                        >
                            <img
                                src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-about-us-image.webp"
                                alt="Medicine Delivery Solution"
                                className="w-full h-auto rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-50 rounded-full -z-10 animate-pulse"></div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-teal-600 font-bold text-sm mb-2 uppercase tracking-wider font-ibm-plex">About The Solution</h2>
                            <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-nunito leading-tight">
                                Pharmacy App Development <br />
                                <span className="text-teal-600">Solution To Simplify</span> Medicine Delivery
                            </h3>

                            <div className="space-y-4 text-gray-600 text-base leading-relaxed font-ibm-plex">
                                <p>
                                    The healthcare industry is one of the fastest-growing sectors, and the appearance of online medicine delivery apps have become a game changer. Instead of visiting a physical pharmacy, users can order medicines conveniently from the comfort of their homes.
                                </p>
                                <p>
                                    At White Label Fox, we provide end-to-end pharmacy delivery app development solutions that serve the evolving needs of pharmacies and healthcare businesses. Our ready-to-use medicine delivery app includes a customer app, driver app, store app and a web panel for controlling operations.
                                </p>
                                <p>
                                    Whether you are a pharmacy owner looking to digitize your business or an entrepreneur looking to launch an on-demand medicine delivery platform, our customized medicine delivery app development solutions can help.
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
                                        <div className="font-bold text-gray-900">Custom Apps</div>
                                        <div className="text-sm">iOS & Android</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Secure Panel</div>
                                        <div className="text-sm">Store & Admin</div>
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
