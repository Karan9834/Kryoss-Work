import React from 'react';
import { motion } from 'framer-motion';

const CustomerBenefits = () => {
    const benefits = [
        {
            title: "Convenient Home Delivery",
            desc: "The online pharmacy app development allows customers to order medications from the comfort of their homes. Whether they have busy schedules, mobility issues, or need emergency medicines, the app ensures they get medicine without visiting a pharmacy. This removes the hassle of long queues and store visits which makes healthcare more accessible.",
            icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        },
        {
            title: "Real-Time Tracking & Notifications",
            desc: "With features like real-time tracking and automated notifications, customers stay informed about their order status. They can track deliveries, receive estimated arrival times, and also get reminders for refills which ensures they never miss a dose.",
            icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        },
        {
            title: "Remote Prescription Management",
            desc: "For individuals who manage medications for elderly family members or loved ones in different locations, the pharmacy delivery app serves as a lifesaver. They can place orders remotely which reduces the stress of managing prescriptions. The app has the ability to upload digital prescriptions which simplifies the process.",
            icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        },
        {
            title: "Personalized Discounts & Loyalty",
            desc: "Personalized recommendations and discounts encourage cost savings while improving customer experience. It also has loyalty programs, subscription models, and exclusive offers that help users access affordable healthcare solutions.",
            icon: "M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-5/12"
                    >
                        <img
                            src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-delivery-app-benefits-your-customer.webp"
                            alt="Medicine Delivery App Benefits"
                            className="w-full h-auto rounded-3xl"
                        />
                    </motion.div>

                    {/* Right - Content */}
                    <div className="lg:w-7/12">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight">
                                How a Medicine Delivery App{' '}
                                <span className="text-teal-600">Benefits Your Customers</span>
                            </h2>
                            <p className="text-base text-gray-600 font-ibm-plex">
                                Here's how your healthcare business can bring convenience to the doorsteps of your users with medicine delivery app development.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 shrink-0 bg-teal-50 rounded-xl flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                                            <svg className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={benefit.icon} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-base font-bold text-gray-900 mb-1 font-nunito group-hover:text-teal-600 transition-colors">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm font-ibm-plex leading-relaxed">
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerBenefits;
