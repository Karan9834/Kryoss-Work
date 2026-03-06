import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(100deg, #002B2C 0%, #001515 100%)' }}>
            <div className="absolute inset-0 opacity-10">
                <img
                    src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-app-ui-bg.webp"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <h2 className="text-3xl lg:text-5xl font-black text-white mb-6 font-nunito leading-tight">
                        Ready to Start Your <br />
                        <span className="text-teal-400">Medicine Delivery Business?</span>
                    </h2>
                    <p className="text-base text-gray-300 font-ibm-plex mb-10 max-w-2xl mx-auto">
                        Consult with our experts and get a custom quote for your requirements. Launch your own pharmacy delivery app and digitize your healthcare business quickly and efficiently.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full font-black text-white text-base hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,170,1,0.4)]"
                            style={{ background: 'linear-gradient(90deg, #FFAA01 0%, #E54E01 100%)' }}>
                            GET A FREE QUOTE
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 rounded-full font-black text-white text-base border-2 border-teal-500 hover:bg-teal-500/20 transition-all font-ibm-plex">
                            BOOK A LIVE DEMO
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
