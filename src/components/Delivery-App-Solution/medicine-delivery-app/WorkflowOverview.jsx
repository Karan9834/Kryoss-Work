import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkflowOverview = () => {
    const [activeTab, setActiveTab] = useState('without');

    const withoutPrescription = [
        { step: "Login - Sign Up", num: "01" },
        { step: "Browse Store", num: "02" },
        { step: "Find Medicine And Select Size", num: "03" },
        { step: "Add To Cart", num: "04" },
        { step: "Upload Prescription", num: "05" },
        { step: "Track Order", num: "06" },
        { step: "Order Received", num: "07" },
        { step: "Give Review And Secure Payment", num: "08" }
    ];

    const withPrescription = [
        { step: "Register", num: "01" },
        { step: "Find Store", num: "02" },
        { step: "Upload Prescription", num: "03" },
        { step: "Place Order", num: "04" },
        { step: "Review Available Medicine", num: "05" },
        { step: "Confirm Order And Proceed To Pay", num: "06" },
        { step: "Track Order", num: "07" },
        { step: "Give Review", num: "08" }
    ];

    const flowImages = [
        "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-graphical-flow-step-1-image.webp",
        "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-graphical-flow-step-2-image.webp",
        "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-graphical-flow-step-3-image.webp",
        "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-graphical-flow-step-4-image.webp",
        "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/Medicine-Delivery-graphical-flow-step-5-image.webp"
    ];

    return (
        <section className="py-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(100deg, #002B2C 0%, #001515 100%)' }}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-black text-white mb-4 font-nunito leading-tight"
                    >
                        Overview of <span className="text-teal-400">Medicine App Workflow</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-400 font-ibm-plex"
                    >
                        Explore the step-by-step graphical flow of our medicine delivery app development. From ordering medicines to securing payments, see how our simple process ensures convenience for all users.
                    </motion.p>
                </div>

                {/* Flow Images */}
                <div className="flex justify-center flex-wrap gap-4 mb-10 max-w-4xl mx-auto">
                    {flowImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="w-[140px] hover:scale-105 transition-transform"
                        >
                            <img
                                src={img}
                                alt={`Workflow Step ${idx + 1}`}
                                className="w-full h-auto rounded-2xl shadow-lg border border-white/10"
                                onError={(e) => { e.target.parentElement.style.display = 'none'; }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/10 p-1.5 rounded-full flex gap-1 border border-white/20">
                        <button
                            onClick={() => setActiveTab('without')}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all font-ibm-plex ${activeTab === 'without' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                        >
                            ORDER WITHOUT PRESCRIPTION
                        </button>
                        <button
                            onClick={() => setActiveTab('with')}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all font-ibm-plex ${activeTab === 'with' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                        >
                            ORDER WITH PRESCRIPTION
                        </button>
                    </div>
                </div>

                {/* Steps */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {(activeTab === 'without' ? withoutPrescription : withPrescription).map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="relative bg-white/5 border border-white/10 p-5 rounded-2xl text-center group hover:bg-white/10 transition-all"
                                >
                                    <div className="w-10 h-10 mx-auto mb-3 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-400 font-black text-sm group-hover:bg-teal-500 group-hover:text-white transition-all">
                                        {item.num}
                                    </div>
                                    <p className="text-white text-sm font-semibold font-nunito leading-snug">{item.step}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default WorkflowOverview;
