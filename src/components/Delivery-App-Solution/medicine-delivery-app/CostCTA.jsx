import React from 'react';
import { motion } from 'framer-motion';

const CostCTA = () => {
    return (
        <section className="py-16 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #CCF1FC 0%, #FFD8D8 100%)' }}>
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-2/3"
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3 leading-tight">
                            Evaluating Product Pricing for a{' '}
                            <span className="text-teal-600">Digital Clinical Platform?</span>
                        </h2>
                        <p className="text-sm text-gray-700 max-w-xl leading-relaxed">
                            Our team evaluates your specific parameters to deliver a comprehensive financial roadmap for engineering a high-performance clinical logistics ecosystem.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <button className="px-10 py-4 rounded-full font-bold text-white text-base hover:scale-105 transition-transform shadow-xl whitespace-nowrap shrink-0"
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
