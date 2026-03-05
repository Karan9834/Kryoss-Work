import React from 'react';
import { motion } from 'framer-motion';

const DevelopmentProcess = () => {
    const steps = [
        {
            title: "Requirement Gathering",
            desc: "We begin by understanding your business needs in detail to create a tailored solution. Our in-depth research helps define essential features and user flows.",
            img: "requirement-gathering"
        },
        {
            title: "Design And Development",
            desc: "Our design team crafts an intuitive interface for easy navigation by customers, pharmacies, and drivers. Our expert developers then build a robust, scalable app.",
            img: "design-and-development"
        },
        {
            title: "Collect Third Party Accounts",
            desc: "We integrate third-party accounts such as payment gateways, mapping services, and authentication providers to enhance app functionality securely.",
            img: "collect-third-party-accounts"
        },
        {
            title: "Test And Launch",
            desc: "After successful testing, we deploy your app on Android and iOS stores. Post-launch, we offer continuous support and maintenance services.",
            img: "test-and-launch"
        }
    ];

    return (
        <section className="min-h-screen flex flex-col justify-center py-10 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 flex-grow flex flex-col justify-center">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight"
                    >
                        Our Medicine Delivery App <br />
                        <span className="text-teal-600">Development Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600 font-ibm-plex"
                    >
                        Our process is structured to ensure a seamless experience from start to finish. Here's how we bring your on-demand delivery app to life.
                    </motion.p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-[85px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-teal-200 via-orange-200 to-teal-200"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative text-center group"
                            >
                                <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-black text-lg mb-4 mx-auto relative z-10 shadow-md border-2 border-gray-50 group-hover:scale-110 transition-transform">
                                    {index + 1}
                                </div>

                                <div className="mb-4 relative w-32 h-32 mx-auto">
                                    <div className="absolute inset-0 bg-white rounded-full shadow-lg border-2 border-dashed border-teal-200 flex items-center justify-center group-hover:border-solid group-hover:border-teal-500 transition-all duration-300">
                                        <img
                                            src={`https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-${step.img}.webp`}
                                            alt={step.title}
                                            className="w-16 h-16 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                            onError={(e) => {
                                                e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%231A9B9E'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z'/%3E%3C/svg%3E";
                                            }}
                                        />
                                    </div>
                                </div>

                                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2 font-nunito group-hover:text-teal-600 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-xs font-ibm-plex px-2 leading-tight">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <h3 className="text-2xl font-black text-gray-900 mb-6 font-nunito">
                        Launch Your Medicine Delivery App with <span className="text-teal-600">Top-Notch Features!</span>
                    </h3>
                    <button className="px-8 py-4 rounded-full font-black text-white text-base hover:scale-105 transition-transform shadow-xl relative z-10"
                        style={{ background: 'linear-gradient(100deg, #002B2C 0%, #001515 100%)' }}>
                        GET STARTED NOW!
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default DevelopmentProcess;
