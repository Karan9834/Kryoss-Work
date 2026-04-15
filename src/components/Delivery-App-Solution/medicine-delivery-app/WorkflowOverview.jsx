import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WorkflowOverview = () => {
    const [activeTab, setActiveTab] = useState('without');

    const withoutPrescription = [
        { step: "Authentication", num: "01" },
        { step: "Examine Merchant", num: "02" },
        { step: "Selection & Size Calibration", num: "03" },
        { step: "Aggregate to Selection", num: "04" },
        { step: "Submit Documentation", num: "05" },
        { step: "Monitor Logistics", num: "06" },
        { step: "Clinical Reception", num: "07" },
        { step: "Validation & Settlement", num: "08" }
    ];

    const withPrescription = [
        { step: "Registration", num: "01" },
        { step: "Merchant Discovery", num: "02" },
        { step: "Authorization Upload", num: "03" },
        { step: "Initiate Request", num: "04" },
        { step: "Review Therapeutic Inventory", num: "05" },
        { step: "Confirm & Execute Settlement", num: "06" },
        { step: "Logistical Tracking", num: "07" },
        { step: "Journey Evaluation", num: "08" }
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
                        className="text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight"
                    >
                        Foundation of the <span className="text-teal-400">Clinical Framework Workflow</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-400"
                    >
                        Examine the granular graphical progression of our pharmaceutical logistics engineering. From clinical procurement to authenticated settlement, observe how our streamlined architecture facilitates absolute convenience.
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
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'without' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                        >
                            PROCURE WITHOUT AUTHORIZATION
                        </button>
                        <button
                            onClick={() => setActiveTab('with')}
                            className={`px-6 py-3 rounded-full font-bold text-sm transition-all ${activeTab === 'with' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}
                        >
                            PROCURE WITH AUTHORIZATION
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
                                    <p className="text-white text-sm font-semibold leading-snug">{item.step}</p>
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
