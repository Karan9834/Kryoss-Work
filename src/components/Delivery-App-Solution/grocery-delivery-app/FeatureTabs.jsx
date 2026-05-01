import React, { useState } from 'react';
import { User, Truck, Store, CheckCircle } from 'lucide-react';

const FeatureTabs = () => {
    const [activeTab, setActiveTab] = useState('customer');

    const features = {
        customer: {
            title: "Customer App",
            image: "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-customer-app-feature-ui.webp",
            list: [
                "Advanced Product Search & Filters",
                "Scheduled Delivery Options",
                "Multiple Payment Gateways",
                "Live Order Tracking",
                "Wallet & Promo Codes",
                "In-App Chat with Drivers"
            ]
        },
        driver: {
            title: "Driver App",
            image: "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-driver-app-feature-ui.webp",
            list: [
                "Real-time Route Optimization",
                "Delivery History & Analytics",
                "Earnings Tracking",
                "Availability Toggle (Online/Offline)",
                "Document Upload & Verification",
                "Push Notifications for Orders"
            ]
        },
        restaurant: {
            title: "Store App",
            image: "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-store-app-feature-ui.webp",
            list: [
                "Inventory & Menu Management",
                "Order Preparation Management",
                "Payout Reports & Statistics",
                "Offers & Discount Management",
                "Customer Reviews Management",
                "Business Hours Configuration"
            ]
        }
    };

    return (
        <section className="py-20 px-4 sm:px-10 lg:px-20 bg-[#F9FAFB]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Powerful <span className="text-[#10B981]">Features</span> for Everyone
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg lowercase">
                        EVERY ASPECT OF THE GROCERY ECOSYSTEM IS COVERED WITH OUR COMPREHENSIVE FEATURE SET.
                    </p>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12 bg-white/50 p-2 rounded-2xl border border-gray-100 max-w-fit mx-auto shadow-sm">
                        {[
                            { id: 'customer', icon: <User size={20} />, label: 'Customer App' },
                            { id: 'driver', icon: <Truck size={20} />, label: 'Driver App' },
                            { id: 'restaurant', icon: <Store size={20} />, label: 'Store App' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-[#10B981] text-white shadow-xl shadow-emerald-500/30'
                                        : 'text-gray-600 hover:bg-white hover:text-[#10B981]'
                                    }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-[40px] p-8 lg:p-16 shadow-2xl shadow-gray-200/50">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Content */}
                        <div key={activeTab} className="animate-fade-in space-y-8">
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                    {features[activeTab].title} <span className="text-[#10B981]">Highlights</span>
                                </h3>
                                <p className="text-gray-600">
                                    Optimized user experience designed for high retention and seamless operations.
                                </p>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                {features[activeTab].list.map((feature, idx) => (
                                    <div key={idx} className="flex gap-3 group">
                                        <div className="shrink-0 mt-1">
                                            <CheckCircle className="text-[#10B981] group-hover:scale-110 transition-transform" size={20} />
                                        </div>
                                        <span className="text-gray-700 font-medium group-hover:text-[#10B981] transition-colors">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <button className="mt-6 border-b-2 border-[#10B981] text-[#10B981] font-bold pb-1 hover:text-[#059669] hover:border-[#059669] transition-all">
                                Explore All Features
                            </button>
                        </div>

                        {/* Right: Illustration */}
                        <div key={`${activeTab}-img`} className="animate-fade-in-right flex justify-center">
                            <img
                                src={features[activeTab].image}
                                alt={features[activeTab].title}
                                className="w-full max-w-md h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureTabs;
