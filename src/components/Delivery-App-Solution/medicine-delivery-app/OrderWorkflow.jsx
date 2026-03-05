import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OrderWorkflow = () => {
    const [activeTab, setActiveTab] = useState('without');

    const withoutPrescriptionSteps = [
        { title: "Select Medicines", desc: "Users explore the app to select over-the-counter medicines.", img: "1" },
        { title: "Add to Cart", desc: "Selected products are added to the cart with quantity preferences.", img: "2" },
        { title: "Secure Payment", desc: "Users pay securely using multiple payment options.", img: "3" },
        { title: "Quick Delivery", desc: "The order is delivered promptly to the user's doorstep.", img: "4" }
    ];

    const withPrescriptionSteps = [
        { title: "Select Store", desc: "Users choose their preferred pharmacy from the available list.", img: "1" },
        { title: "Upload Prescription", desc: "The prescription is uploaded securely through the app.", img: "2" },
        { title: "Add Notes", desc: "User can add note if they want specific medicine from the prescription.", img: "3" },
        { title: "Delivered", desc: "Medicine are packed securely & delivered to the customer's location.", img: "4" }
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
                        className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito"
                    >
                        Seamless Medicine Ordering Workflow: <br />
                        <span className="text-teal-600">With & Without Prescription</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600 font-ibm-plex"
                    >
                        Easily order prescription and non-prescription medicines. Enjoy a smooth, secure, and hassle-free experience.
                    </motion.p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="bg-white p-2 rounded-full shadow-md border border-gray-100 flex gap-1">
                        <button
                            onClick={() => setActiveTab('without')}
                            className={`px-6 py-3 rounded-full font-bold text-xs lg:text-sm transition-all font-ibm-plex ${activeTab === 'without' ? 'bg-teal-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            ORDER WITHOUT PRESCRIPTION
                        </button>
                        <button
                            onClick={() => setActiveTab('with')}
                            className={`px-6 py-3 rounded-full font-bold text-xs lg:text-sm transition-all font-ibm-plex ${activeTab === 'with' ? 'bg-orange-500 text-white shadow-md' : 'text-gray-600 hover:bg-gray-50'}`}
                        >
                            ORDER WITH PRESCRIPTION
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

                                        <h4 className="text-base lg:text-lg font-bold text-gray-900 mb-2 font-nunito leading-tight">{step.title}</h4>
                                        <p className="text-gray-600 font-ibm-plex text-xs lg:text-sm leading-snug">{step.desc}</p>
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
