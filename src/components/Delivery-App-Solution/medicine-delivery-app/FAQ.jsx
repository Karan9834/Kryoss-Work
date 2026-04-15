import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "What are the foundational modules of a high-performance clinical logistics platform?",
            answer: [
                "Participant Interface: Intuitive search, document upload, logistical monitoring, and versatile transaction portals.",
                "Merchant Dashboard: Stock regulation, request processing, financial monitoring, and client communication.",
                "Administrative Console: Logistical oversight, comprehensive analytics, report generation, and regulatory compliance.",
                "Courier Interface: Path optimization, real-time spatial monitoring, and fulfillment verification."
            ]
        },
        {
            question: "What architectural technologies facilitate a professional pharmacy distribution ecosystem?",
            answer: [
                "Interface Engineering: Robust frameworks like React Native or Flutter for unified mobile presence.",
                "Computational Backbone: Node.js or high-performance Laravel frameworks with elastic cloud storage.",
                "Integrity Layers: End-to-end encryption, digital ledger verification for clinical records, and algorithmic risk mitigation."
            ]
        },
        {
            question: "How do intelligent algorithms elevate the pharmaceutical logistics journey?",
            answer: [
                "Predictive suggestions based on historical procurement patterns and clinical requirements.",
                "Algorithmic document scanning for accelerated verification and processing.",
                "Intelligent communication agents for instantaneous participant assistance."
            ]
        },
        {
            question: "What financial frameworks can be integrated into a clinical supply platform?",
            answer: [
                "Service-Fee Architecture: Percentage-based revenue from merchant partners per transaction.",
                "Retention Frameworks: Premier access tiers for merchant partners and elite participants.",
                "Collaborative Promotion: Integrated marketing opportunities for clinical partners and reputable brands.",
                "Logistics premiums: Revenue generated from expedited or specifically scheduled fulfillment cycles."
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
                        className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight"
                    >
                        Common Information <span className="text-teal-600">Queries</span>
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
                                <h3 className="text-base font-bold text-gray-900 pr-4">
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
                                                    <li key={pIdx} className="flex items-start gap-2 text-sm text-gray-600">
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
