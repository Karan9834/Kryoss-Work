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
            title: "Customer App",
            image: "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-customer-app-ui.webp",
            features: [
                { title: "Upload Prescription", desc: "Users can upload the medicine prescription and can order medicine in a very convenient way." },
                { title: "Easy Call", desc: "If a user has any query regarding the order, they have the option to call to store/driver within the app." },
                { title: "Track Order", desc: "A user can view the live location of the delivery person on the map and get an idea about the delivery time." },
                { title: "Wallet", desc: "Add and manage funds for quick and hassle-free payments." },
                { title: "Easy Search", desc: "The search option allows the user to easily search the medicine based on their requirement." },
                { title: "Payment Option", desc: "A user has a flexible payment option such as cash, credit or in-app wallet to pay for the amount of the services." },
                { title: "Add to Cart", desc: "A user can add items to add to the cart option. After he/she can add or remove the item based on their availability." },
                { title: "Manage History", desc: "Track past orders and reorder medicines easily." }
            ]
        },
        driver: {
            title: "Driver App",
            image: "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-driver-app-ui.webp",
            features: [
                { title: "Upload Document", desc: "After login, the driver can upload required documents such as vehicle insurance, driving license, and ID Proof." },
                { title: "Social Login", desc: "A driver can log in or signup through their social account like Facebook, Google or via Email." },
                { title: "Manage Bank Details", desc: "A driver can add or manage bank details to get the order earning from the admin." },
                { title: "Manage Orders", desc: "Accept, update, and track delivery requests efficiently." },
                { title: "Map Navigation", desc: "A driver can use Google map navigation to find the shortest rough to reach the user location in minimal time." },
                { title: "Manage Profile", desc: "A driver can manage their profile information such as name, email, address, and profile picture." },
                { title: "Earning Report", desc: "A driver can view earning report with all complete, cancel, running, and pending order request." },
                { title: "View Order Details", desc: "Access complete order information for smooth deliveries." }
            ]
        },
        store: {
            title: "Store App",
            image: "https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-store-app-ui.webp",
            features: [
                { title: "Manage Profile", desc: "A store owner can manage their profile information such as name, address, profile picture, delivery radius, etc." },
                { title: "View Feedback", desc: "A store owner can view their review & rating given by the user with all details like order ID, date & time, etc." },
                { title: "Store Setting", desc: "A store owner can manage tax, extra cancellation charges, delivery radius, store opening and closing time with setting options." },
                { title: "Manage Orders", desc: "Process incoming orders and update order status." },
                { title: "Manage Product", desc: "A store owner has an option to on/off the product based on their availability. They don't have the option to add products." },
                { title: "Order History", desc: "A store owner can view order history with all complete, cancel, running, and pending order requests." },
                { title: "Delivery Service Radius", desc: "A store owner can set an exact flexible X range limit of delivery radius to offer medicine delivery services." },
                { title: "Earning Details", desc: "Track daily, weekly, and monthly earnings effortlessly." }
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
                        className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight"
                    >
                        Powerful Features We Built For a <br />
                        <span className="text-teal-600">Seamless Medicine Delivery Experience</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-600 font-ibm-plex max-w-2xl mx-auto"
                    >
                        Our medicine delivery app development solution is designed with latest and essential features that improve convenience of all users and ensure a seamless delivery experience.
                    </motion.p>
                </div>

                <div className="flex justify-center mb-8">
                    <div className="flex flex-wrap justify-center gap-2 bg-gray-50 p-1.5 rounded-xl lg:rounded-full border border-gray-100">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 rounded-xl lg:rounded-full font-bold text-sm transition-all transform font-ibm-plex ${activeTab === tab.id ? `${tab.color} text-white shadow-lg scale-105` : 'text-gray-500 hover:text-gray-900 hover:bg-white'}`}
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
                            <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 font-nunito border-b-2 border-teal-500 pb-2 inline-block">
                                {featureData[activeTab].title} Features
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
                                        <h4 className="text-base font-bold text-gray-900 mb-1 font-nunito">{feature.title}</h4>
                                        <p className="text-gray-600 text-xs font-ibm-plex leading-snug">{feature.desc}</p>
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
