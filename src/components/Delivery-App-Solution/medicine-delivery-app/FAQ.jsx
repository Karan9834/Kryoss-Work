import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What are the key features of a successful medicine delivery app?",
            answer: [
                "User Panel: Easy medicine search, prescription upload, order tracking, and multiple payment options.",
                "Pharmacy Panel: Inventory management, order acceptance, sales tracking, and customer communication.",
                "Admin Panel: Order monitoring, analytics, reports, and compliance management.",
                "Delivery Panel: Route optimization, real-time tracking, and delivery status updates."
            ]
        },
        {
            question: "What technologies are used to build a medicine delivery app?",
            answer: [
                "Frontend: React Native, Flutter, or Swift/Kotlin for native apps.",
                "Backend: Node.js, Laravel, or Python with cloud-based databases.",
                "Security: SSL encryption, blockchain for prescription verification, and AI-driven fraud detection."
            ]
        },
        {
            question: "How can AI and machine learning enhance a medicine delivery app?",
            answer: [
                "Smart medicine recommendations based on purchase history.",
                "Automated prescription scanning for faster processing.",
                "AI chatbots for instant customer support."
            ]
        },
        {
            question: "What monetization strategies can be implemented in a medicine delivery app?",
            answer: [
                "Commission-Based Model: Charge pharmacies a percentage per order.",
                "Subscription Model: Offer premium features for pharmacies and users.",
                "In-App Advertising: Promote healthcare brands and pharmacies.",
                "Delivery Charges: Earn revenue from express or scheduled deliveries."
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight"
                    >
                        Frequently Asked <span className="text-teal-600">Questions</span>
                    </motion.h2>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-base font-bold text-gray-900 font-nunito pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-teal-600 text-white rotate-180' : 'bg-teal-50 text-teal-600'}`}>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5">
                                            <ul className="space-y-2">
                                                {faq.answer.map((point, pIdx) => (
                                                    <li key={pIdx} className="flex items-start gap-2 text-sm text-gray-600 font-ibm-plex">
                                                        <div className="w-5 h-5 shrink-0 mt-0.5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        </div>
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
