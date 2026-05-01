import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
    const reasons = [
        {
            title: "Rapid Deployment Cycle",
            desc: "Operationalize your pharmaceutical logistics framework within 5 business days. Initiate participant serving immediately and secure an early industrial advantage.",
            icon: "M13 10V3L4 14h7v7l9-11h-7z"
        },
        {
            title: "Participant-Centric Design",
            desc: "Featuring a streamlined and logical interface, the platform delivers a high-integrity journey for both participants and logistics personnel, ensuring seamless fulfillment.",
            icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        },
        {
            title: "Dynamic Alert Infrastructure",
            desc: "Maintain participant engagement with instantaneous notifications regarding request status, authorization validations, and fulfillment milestones.",
            icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        },
        {
            title: "Authorization Oversight",
            desc: "Enable participants to submit clinical documentation effortlessly while merchant partners manage, validate, and fulfill requests with absolute precision.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            title: "Elastic Framework Architecture",
            desc: "Calibrate the framework to align with your specific enterprise parameters, services, and visual identity. Deliver a tailored journey that distinguishes your ecosystem.",
            icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        },
        {
            title: "Extensible & High-Integrity",
            desc: "Engineered to facilitate enterprise expansion, the framework scales in alignment with your requirements. Integrated security protocols guarantee participant data and transaction protection.",
            icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        }
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Left - Content */}
                    <div className="lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                                Why Select Our{' '}
                                <span className="text-teal-600">Clinical Logistics Framework?</span>
                            </h2>
                            <p className="text-base text-gray-600">
                                Our Pharmaceutical Distribution Ecosystem represents the premier framework for initiating your on-demand clinical enterprise with speed and operational integrity. Here is why it remains the superior choice:
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                                            <svg className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={reason.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="text-base font-bold text-gray-900 group-hover:text-teal-600 transition-colors leading-tight">
                                            {reason.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {reason.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-5/12"
                    >
                        <img
                            src="https://whitelabelfox.com/assets/images/why-choose-us/why-choose-our-gojek-clone-script-image.webp"
                            alt="Why Choose Our Medicine Delivery App"
                            className="w-full h-auto rounded-3xl"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
