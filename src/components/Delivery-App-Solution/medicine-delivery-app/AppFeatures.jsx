import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AppFeatures = () => {
    const [activeTab, setActiveTab] = useState('customer');

    const tabs = [
        { id: 'customer', label: 'Customer App', color: 'bg-teal-600' },
        { id: 'driver', label: 'Driver App', color: 'bg-orange-500' },
        { id: 'store', label: 'Store App', color: 'bg-gray-800' }
    ];

    const featureData = {
        customer: {
            title: "Individual Portal",
            image: "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-customer-app-ui.webp",
            features: [
                { title: "Prescription Submission", desc: "Individuals easily upload clinical authorizations to secure necessary treatments efficiently." },
                { title: "Direct Assistance", desc: "Users can instantaneously contact merchant partners or logistics personnel within the platform." },
                { title: "Live Monitoring", desc: "Observe the real-time movement of logistics personnel on interactive maps for arrival estimates." },
                { title: "Virtual Credits", desc: "Consolidate and manage account balances for streamlined, instant transaction processing." },
                { title: "Intuitive Filtering", desc: "Advanced filtering mechanisms allow individuals to identify specific medications with precision." },
                { title: "Transaction Versatility", desc: "Supports diverse settlement methods including digital wallets, credit options, or physical fulfillment." },
                { title: "Selection Basket", desc: "Aggregate required items in a consolidated list prior to final procurement or adjustment." },
                { title: "Activity Records", desc: "Review comprehensive historical records and facilitate rapid recurring procurement." }
            ]
        },
        driver: {
            title: "Logistics Interface",
            image: "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-driver-app-ui.webp",
            features: [
                { title: "Registry Submission", desc: "Personnel submit foundational records including vehicle insurance and professional credentials directly." },
                { title: "Integrated Access", desc: "Facilitate rapid platform entry utilizing established social identifiers or secondary email authentication." },
                { title: "Settlement Profiles", desc: "Distribution personnel regulate banking information to facilitate automated periodic earnings distribution." },
                { title: "Route Governance", desc: "Supervise incoming distribution requests and finalize logistics paths with precision." },
                { title: "Dynamic Routing", desc: "Utilize integrated navigation to identify the most efficient corridors for rapid clinical fulfillment." },
                { title: "Account Oversight", desc: "Personnel regulate identification data, contact details, and professional visual representation." },
                { title: "Performance Metrics", desc: "Review detailed activity logs covering pending, active, and finalized distribution assignments." },
                { title: "Assignment Details", desc: "Access comprehensive data points for each distribution to ensure operational accuracy." }
            ]
        },
        store: {
            title: "Merchant Dashboard",
            image: "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-store-app-ui.webp",
            features: [
                { title: "Outlet Governance", desc: "Pharmacy partners regulate facility data including operational status, locations, and branding assets." },
                { title: "Client Evaluations", desc: "Review client-provided feedback and performance scores linked to specific transaction identifiers." },
                { title: "Operational Parameters", desc: "Regulate essential variables such as regional coverage, cancellation policies, and daily schedules." },
                { title: "Workflow Oversight", desc: "Systematically process incoming requests and categorize distribution stages in real-time." },
                { title: "Stock Regulation", desc: "Merchant partners can moderate existing inventory availability to reflect current physical stock levels." },
                { title: "Transaction Archives", desc: "Access broad historical data covering all merchant activities and fulfillment statuses." },
                { title: "Fulfillment Boundaries", desc: "Precisely define local distribution ranges to optimize regional clinical supply chains." },
                { title: "Revenue Analysis", desc: "Monitor periodic financial performance covering daily, weekly, and longer business cycles." }
            ]
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center py-10 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                    >
                        Sophisticated Functionalities Built For a <br />
                        <span className="text-teal-600">Unified Clinical Distribution Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600 max-w-2xl mx-auto"
                    >
                        Our pharmaceutical ecosystem architecture integrates essential, modern features that enhance user experience while ensuring absolute logistical accuracy.
                    </motion.p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="flex flex-wrap justify-center gap-2 bg-gray-50 p-1.5 rounded-xl lg:rounded-full border border-gray-100">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-xl lg:rounded-full font-bold text-sm transition-all transform ${activeTab === tab.id ? `${tab.color} text-white shadow-lg scale-105` : 'text-gray-500 hover:text-gray-900 hover:bg-white'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"
                    >
                        <div className="order-2 lg:order-1 relative flex justify-center">
                            <div className="absolute inset-0 bg-teal-50 rounded-full blur-3xl opacity-50 -z-10 transform scale-110"></div>
                            <img
                                src={featureData[activeTab].image}
                                alt={`${featureData[activeTab].title} Features`}
                                className="w-[60%] lg:w-[70%] xl:w-[60%] h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-700 max-h-[50vh] object-contain"
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-6 border-b-2 border-teal-500 pb-2 inline-block">
                                {featureData[activeTab].title} Capabilities
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {featureData[activeTab].features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group lg:min-h-[140px]"
                                    >
                                        <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-3 group-hover:bg-teal-600 group-hover:text-white transition-all">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-gray-600 text-xs leading-snug">{feature.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default AppFeatures;
