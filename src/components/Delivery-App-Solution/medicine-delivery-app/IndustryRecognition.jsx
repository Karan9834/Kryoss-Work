import React from 'react';
import { motion } from 'framer-motion';

const IndustryRecognition = () => {
    const platforms = [
        { name: "Trustpilot", rating: "4.8/5", icon: "⭐" },
        { name: "Google Reviews", rating: "4.9/5", icon: "🌟" },
        { name: "Clutch", rating: "4.7/5", icon: "🏆" },
        { name: "GoodFirms", rating: "4.8/5", icon: "✨" }
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                    >
                        Validated by Global Evaluation Platforms{' '}
                        <span className="text-teal-600">& Industrial Authorities</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600"
                    >
                        We are honored to receive validation from premier analytic frameworks like Trustpilot, Google, Clutch, and GoodFirms. With superior performance metrics, our dedication to engineering high-integrity frameworks is universally acknowledged.
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    {platforms.map((p, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 border border-gray-100 px-8 py-6 rounded-2xl text-center hover:shadow-xl hover:-translate-y-1 transition-all group min-w-[180px]"
                        >
                            <div className="text-4xl mb-3">{p.icon}</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">
                                {p.name}
                            </h3>
                            <p className="text-teal-600 font-black text-xl">{p.rating}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryRecognition;
