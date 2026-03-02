import React, { useState } from 'react';

const AppPortfolio = () => {
    const [activeTab, setActiveTab] = useState('customer');

    const screens = {
        customer: [
            "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-customer-ui-1.webp",
            "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-customer-ui-2.webp",
            "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-customer-ui-3.webp",
            "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-customer-ui-4.webp"
        ],
        driver: [
            "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-driver-app-feature-ui.webp" // Falling back to available assets
        ],
        store: [
            "https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-store-app-feature-ui.webp"
        ]
    };

    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Experience Our <span className="text-[#10B981]">App Interface</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg lowercase">
                        Meticulously crafted user experience that keeps your customers coming back.
                    </p>

                    <div className="flex justify-center gap-8 mt-12 border-b border-gray-100">
                        {['customer', 'driver', 'store'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-4 px-2 font-black text-sm tracking-widest uppercase transition-all relative ${activeTab === tab ? 'text-[#10B981]' : 'text-gray-300 hover:text-gray-500'
                                    }`}
                            >
                                {tab} App
                                {activeTab === tab && (
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#10B981] rounded-t-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
                        {screens[activeTab].map((screen, idx) => (
                            <div key={idx} className="group overflow-hidden rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 bg-gray-50 aspect-[9/18]">
                                <img
                                    src={screen}
                                    alt={`App Screen ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>

                    {/* Background glow */}
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#10B981]/5 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </section>
    );
};

export default AppPortfolio;
