import React from 'react';
import { motion } from 'framer-motion';

const CostCTA = () => {
    return (
        <section className="py-16 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #CCF1FC 0%, #FFD8D8 100%)' }}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight">
                            Want to Know the Cost to Develop a{' '}
                            <span className="text-teal-600">Medicine Delivery App?</span>
                        </h2>
                        <p className="text-base text-gray-700 font-ibm-plex max-w-2xl">
                            Our experts analyze your requirements and provide a detailed cost estimate for developing a seamless, user-friendly medicine delivery app.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <button className="px-10 py-4 rounded-full font-bold text-white text-base hover:scale-105 transition-transform shadow-xl whitespace-nowrap"
                            style={{ background: 'linear-gradient(90deg, #FFAA01 0%, #E54E01 100%)' }}>
                            Get a Quote
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CostCTA;
