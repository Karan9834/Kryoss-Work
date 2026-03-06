import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
    const steps = [
        { title: "Sign Up", desc: "Users sign up via email, phone, or social login.", icon: "👤" },
        { title: "Search Medicine", desc: "Browse products, upload prescriptions, and add to cart.", icon: "🔍" },
        { title: "Secure Payment", desc: "Multiple payment options for a safe checkout.", icon: "💳" },
        { title: "Store Processing", desc: "Pharmacy receives and prepares the order.", icon: "💊" },
        { title: "Auto Dispatch", desc: "System assigns driver based on location.", icon: "🚚" },
        { title: "Real-time Tracking", desc: "Track order status and delivery updates.", icon: "📍" },
        { title: "Doorstep Delivery", desc: "Driver delivers medicines to the location.", icon: "🏡" },
        { title: "Review & Reorder", desc: "Rate the experience and easily reorder.", icon: "⭐" },
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

            <div className="container mx-auto px-4 relative z-10 flex-grow flex flex-col justify-center">
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-teal-400 font-bold text-sm mb-2 uppercase tracking-widest font-ibm-plex"
                    >
                        Easy Process
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl lg:text-4xl font-black text-white font-nunito"
                    >
                        How Our Medicine App Delivery Works
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all group relative overflow-hidden"
                        >
                            <div className="absolute -right-4 -top-4 text-teal-500 font-black text-5xl opacity-10 pointer-events-none">
                                0{index + 1}
                            </div>
                            <div className="flex items-center gap-4 mb-3">
                                <div className="w-12 h-12 shrink-0 bg-teal-500/20 text-teal-400 rounded-xl flex items-center justify-center text-2xl group-hover:bg-teal-500 group-hover:text-white transition-all transform group-hover:rotate-6">
                                    {step.icon}
                                </div>
                                <h4 className="text-lg font-bold text-white font-nunito leading-tight">{step.title}</h4>
                            </div>
                            <p className="text-gray-400 font-ibm-plex text-xs leading-relaxed">{step.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto block bg-white/5 rounded-3xl p-3 border border-white/10 max-w-4xl"
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
