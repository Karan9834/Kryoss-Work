import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { title: "Profile Creation", desc: "Participants register via electronic mail, mobile digits, or social credentials.", icon: "👤" },
        { title: "Curate Treatment", desc: "Examine inventories, submit medical authorizations, and aggregate requirements.", icon: "🔍" },
        { title: "Encrypted Settlement", desc: "Diverse transaction gateways for a protected checkout experience.", icon: "💳" },
        { title: "Merchant Preparation", desc: "Pharmacy receives and organizes the specified clinical request.", icon: "💊" },
        { title: "Automated Dispatch", desc: "Infrastructure assigns logistics personnel based on proximity metrics.", icon: "🚚" },
        { title: "Live Tracking", desc: "Observe request milestones and logistical progression updates.", icon: "📍" },
        { title: "Residential Arrival", desc: "Personnel facilitate clinical supply directly to the specified location.", icon: "🏡" },
        { title: "Evaluation", desc: "Rate the overall journey and facilitate rapid recurring procurement.", icon: "⭐" },
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-10 relative overflow-hidden"
            style={{ background: 'linear-gradient(100deg, #002B2C 0%, #001515 100%)' }}>
            <div className="absolute inset-0 opacity-10">
                <img
                    src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-how-does-platform-works-BG.webp"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 flex-grow flex flex-col justify-center max-w-7xl">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-400 font-bold text-sm mb-2 uppercase tracking-widest"
                    >
                        Simplified Architecture
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl lg:text-4xl font-semibold text-white"
                    >
                        Functional Path of Our Pharmaceutical Ecosystem
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 lg:p-6 rounded-2xl hover:bg-white/10 transition-all group relative overflow-hidden min-h-[160px] flex flex-col justify-start"
                        >
                            <div className="absolute -right-4 -top-4 text-teal-500 font-black text-5xl opacity-10 pointer-events-none">
                                0{index + 1}
                            </div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 shrink-0 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center text-2xl group-hover:bg-teal-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                                    {step.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white leading-tight">{step.title}</h4>
                            </div>
                            <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto block bg-white/5 rounded-3xl p-3 border border-white/10 max-w-3xl"
                >
                    <img
                        src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-how-does-platform-works-image.webp"
                        alt="Process Graphic"
                        className="w-full h-auto max-h-[25vh] object-contain rounded-xl shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default HowItWorks;
