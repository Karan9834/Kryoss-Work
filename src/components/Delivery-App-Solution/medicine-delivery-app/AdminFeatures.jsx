import React from 'react';
import { motion } from 'framer-motion';

const AdminFeatures = () => {
    const features = [
        {
            title: "Dashboard",
            desc: "With the powerful dashboard, admin can see all the order request, manage product, driver/store statistics, etc.",
            icon: "📊"
        },
        {
            title: "Manage Document",
            desc: "Admin can add or edit the required document for the store/driver like vehicle insurance, ID proof, store license, driving license, etc.",
            icon: "📄"
        },
        {
            title: "Payment Setting",
            desc: "An admin can set tax, store commission, driver commission, system commission and payment types such as cash, credit, or wallet.",
            icon: "💳"
        },
        {
            title: "Manage Promo Code",
            desc: "Admin can add and modified promo code with details such as promo code name, type, percentage/amount, and expired date.",
            icon: "🏷️"
        },
        {
            title: "Vehicle Management",
            desc: "An admin can add, edit, or delete a vehicle for the driver. Also, they can on/off the vehicle from the system.",
            icon: "🚗"
        },
        {
            title: "Manage User",
            desc: "Admin can see or check the user profile information. Also, they have the option to remove or block the user account.",
            icon: "👥"
        },
        {
            title: "Manage Store",
            desc: "Admin can see or check the store profile information. They have the option to remove or block the store account.",
            icon: "🏪"
        },
        {
            title: "Review & Rating",
            desc: "Admin can see store and driver review & rating with all order ID, date & time and user details which provided.",
            icon: "⭐"
        }
    ];

    return (
        <section className="min-h-screen flex items-center py-10 bg-gray-50 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100/50 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8 items-center max-w-6xl mx-auto">
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 p-4 bg-white rounded-3xl shadow-2xl border border-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                        >
                            <img
                                src="https://whitelabelfox.com/assets/images/medicine-delivery-app-development/fox-medicine-admin-panel.webp"
                                alt="Medicine Delivery Super Admin Web Features"
                                className="w-full h-auto rounded-xl shadow-md border border-gray-50"
                            />
                        </motion.div>
                        <div className="absolute -inset-4 bg-gradient-to-r from-teal-500 to-teal-300 rounded-3xl blur-2xl opacity-20 -z-10"></div>
                    </div>

                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-left mb-8"
                        >
                            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4 font-nunito leading-tight">
                                Medicine Delivery <br />
                                <span className="text-teal-600">Super Admin Web Features</span>
                            </h2>
                            <p className="text-base text-gray-600 font-ibm-plex">
                                Check our super admin web panel features of online medicine ordering system. Control every aspect of your business securely.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group lg:min-h-[130px]"
                                >
                                    <div className="w-10 h-10 bg-teal-50 text-xl flex items-center justify-center rounded-lg mb-3 group-hover:bg-teal-500 group-hover:text-white transition-all">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-base font-bold text-gray-900 mb-1 font-nunito group-hover:text-teal-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs font-ibm-plex leading-snug line-clamp-3">
                                        {feature.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminFeatures;
