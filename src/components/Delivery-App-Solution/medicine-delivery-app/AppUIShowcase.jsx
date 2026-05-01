import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppUIShowcase = () => {
    const [activeTab, setActiveTab] = useState('customer');

    const tabs = [
        { id: 'customer', label: 'Customer App', color: 'bg-teal-600' },
        { id: 'driver', label: 'Driver App', color: 'bg-orange-500' },
        { id: 'store', label: 'Store App', color: 'bg-gray-800' }
    ];

    const uiData = {
        customer: {
            images: [
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/customer-app-ui-1.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/customer-app-ui-2.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/customer-app-ui-3.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/customer-app-ui-4.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/customer-app-ui-5.webp",
            ]
        },
        driver: {
            images: [
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/driver-app-ui-1.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/driver-app-ui-2.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/driver-app-ui-3.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/driver-app-ui-4.webp",
            ]
        },
        store: {
            images: [
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/store-app-ui-1.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/store-app-ui-2.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/store-app-ui-3.webp",
                "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/store-app-ui-4.webp",
            ]
        }
    };

    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                    >
                        Contemporary & Intuitive Interfaces of{' '}
                        <span className="text-teal-600">Clinical Logistics Frameworks</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600"
                    >
                        Examine our refined visual designs for modern pharmaceutical distribution. With streamlined layouts and logical navigation, individuals manage medications and deliveries flawlessly.
                    </motion.p>
                </div>

                <div className="flex justify-center mb-10">
                    <div className="flex flex-wrap justify-center gap-2 bg-gray-50 p-1.5 rounded-full border border-gray-100">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === tab.id ? `${tab.color} text-white shadow-md` : 'text-gray-500 hover:text-gray-900 hover:bg-white'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="flex justify-center flex-wrap gap-6 max-w-5xl mx-auto"
                    >
                        {uiData[activeTab].images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="w-[200px] rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <img
                                    src={img}
                                    alt={`${activeTab} App UI ${idx + 1}`}
                                    className="w-full h-auto"
                                    onError={(e) => {
                                        e.target.parentElement.style.display = 'none';
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default AppUIShowcase;
