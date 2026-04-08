import { Link } from 'react-router-dom';

import React, { useState } from 'react';
import { Smartphone, Check, User, Truck, Store } from 'lucide-react';

const AppFeatures = () => {
    const [activeTab, setActiveTab] = useState('customer');

    const features = {
        customer: {
            title: "Customer App",
            image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/fox-food-customer-app-feature-mockup.webp",
            items: [
                "Social Media Integration",
                "Browse by Category/Cuisine",
                "Real-time Order Tracking",
                "Multiple Payment Options",
                "Order History & Reorder",
                "Ratings & Reviews",
                "Promo Codes & Discounts",
                "Push Notifications"
            ]
        },
        driver: {
            title: "Delivery Driver App",
            image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/fox-food-driver-app-feature-mockup.webp",
            items: [
                "In-App Navigation",
                "Active/Inactive Status",
                "Order Notifications",
                "Earnings Dashboard",
                "Payout History",
                "Route Optimization",
                "Contact Support",
                "Profile Management"
            ]
        },
        restaurant: {
            title: "Restaurant App/Panel",
            image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/fox-food-store-app-feature-mockup.webp",
            items: [
                "Menu Management",
                "Order Status Management",
                "Service Radius Setting",
                "Inventory Management",
                "Earnings Reports",
                "Store Settings",
                "Customer Details",
                "Offer Management"
            ]
        }
    };

    return (
        <section className="py-16 px-4 sm:px-10 lg:px-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 font-primary">
                        Powerful <span className="text-[#FF5722]">Features</span> for Everyone
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base mb-8">
                        Tailored features for customers, delivery partners, and restaurants to ensure peak performance.
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        <button
                            onClick={() => setActiveTab('customer')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all text-sm ${activeTab === 'customer'
                                ? 'bg-[#FF5722] text-white shadow-xl shadow-orange-500/30'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <User size={18} /> Customer App
                        </button>
                        <button
                            onClick={() => setActiveTab('driver')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all text-sm ${activeTab === 'driver'
                                ? 'bg-[#FF5722] text-white shadow-xl shadow-orange-500/30'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <Truck size={18} /> Driver App
                        </button>
                        <button
                            onClick={() => setActiveTab('restaurant')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all text-sm ${activeTab === 'restaurant'
                                ? 'bg-[#FF5722] text-white shadow-xl shadow-orange-500/30'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <Store size={18} /> Store App
                        </button>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-[32px] p-6 lg:p-12 shadow-2xl shadow-gray-200/50">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Content */}
                        <div key={activeTab} className="animate-fade-in order-2 lg:order-1">
                            <div className="inline-block bg-orange-100/50 text-[#FF5722] px-3 py-1 rounded-lg font-bold text-xs mb-4">
                                {features[activeTab].title} Modules
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                                Designed for <span className="text-[#FF5722]">Efficiency</span>
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                {features[activeTab].items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-[#FF5722] group-hover:text-white transition-all transition-duration-300">
                                            <Check size={14} className="text-green-600 group-hover:text-white" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
                                <button className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-[#FF5722] transition-all flex items-center gap-2">
                                    <Smartphone size={18} /> Download User Guide
                                </button>
                                <Link to="/company/contact" className="text-[#FF5722] font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-all border border-[#FF5722]">
                                    Book a Consultation
                                </Link>
                            </div>
                        </div>

                        {/* Right: Mockup */}
                        <div key={`${activeTab}-img`} className="relative animate-fade-in order-1 lg:order-2">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5722]/20 to-transparent rounded-full blur-[100px] -z-10 animate-pulse"></div>
                            <img
                                src={features[activeTab].image}
                                alt={features[activeTab].title}
                                className="w-full max-w-[500px] mx-auto h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)] transform hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppFeatures;
