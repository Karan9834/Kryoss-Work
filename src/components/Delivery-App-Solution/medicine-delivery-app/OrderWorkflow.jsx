import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderWorkflow = () => {
    const [activeTab, setActiveTab] = useState('without');

    const withoutPrescriptionSteps = [
        { title: "Identify Products", desc: "Individuals navigate the framework to select required over-the-counter medications.", img: "1" },
        { title: "Aggregate Selection", desc: "Identified items are consolidated with specific volume requirements.", img: "2" },
        { title: "Authenticated Payment", desc: "Participants settle accounts through diverse encrypted transaction channels.", img: "3" },
        { title: "Expedited Fulfillment", desc: "The clinical request is facilitated immediately to the participant's doorstep.", img: "4" }
    ];

    const withPrescriptionSteps = [
        { title: "Identify Merchant", desc: "Participants select an authorized pharmacy from the verified merchant list.", img: "1" },
        { title: "Authorization Upload", desc: "Clinical documentation is submitted securely through the integrated portal.", img: "2" },
        { title: "Operational Notes", desc: "Participants can provide specific instructions for medication fulfillment details.", img: "3" },
        { title: "Fulfillment Finalized", desc: "Clinical supplies are packaged with integrity and distributed to the participant.", img: "4" }
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-10 bg-gray-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <img
                    src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-workflow-bg.webp"
                    alt="Background Pattern"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
                    >
                        Unified Clinical Logistics Flow: <br />
                        <span className="text-teal-600">Authorized & Non-Authorized Path</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600"
                    >
                        Effortlessly secure both foundational and specialized medications. Experience a streamlined, high-integrity, and intuitive logistics journey.
                    </motion.p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="bg-white p-2 rounded-full shadow-md border border-gray-100 flex gap-1">
                        <button
                            onClick={() => setActiveTab('without')}
                            className={`px-6 py-3 rounded-full font-bold text-xs lg:text-sm transition-all ${activeTab === 'without' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            PROCURE WITHOUT AUTHORIZATION
                        </button>
                        <button
                            onClick={() => setActiveTab('with')}
                            className={`px-6 py-3 rounded-full font-bold text-xs lg:text-sm transition-all ${activeTab === 'with' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            PROCURE WITH AUTHORIZATION
                        </button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-[2rem] shadow-xl p-6 lg:p-8"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {(activeTab === 'without' ? withoutPrescriptionSteps : withPrescriptionSteps).map((step, idx) => (
                                    <div key={idx} className="relative text-center group">
                                        <div className="w-24 h-24 mx-auto mb-4 bg-gray-50 rounded-full flex items-center justify-center relative shadow-inner overflow-hidden border-2 border-transparent group-hover:border-teal-100 transition-all">
                                            {/* Improvised image path based on pattern */}
                                            <div className="absolute inset-0 flex items-center justify-center text-3xl font-black text-gray-200">
                                                0{idx + 1}
                                            </div>
                                            <img
                                                src={`https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-${activeTab}-prescription-${step.img}.webp`}
                                                alt={step.title}
                                                className="w-14 h-14 object-contain relative z-10 drop-shadow-md transform group-hover:scale-110 transition-all"
                                                onError={(e) => {
                                                    // Fallback icon if specific image isn't found
                                                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231A9B9E'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E";
                                                }}
                                            />
                                        </div>
                                        {/* Connector Line */}
                                        {idx < 3 && <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-teal-200 to-transparent -z-10"></div>}

                                        <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 leading-tight">{step.title}</h4>
                                        <p className="text-gray-600 text-xs lg:text-sm leading-snug">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default OrderWorkflow;
