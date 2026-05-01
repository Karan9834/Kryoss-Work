import React from 'react'

import { Smartphone, Globe } from "lucide-react";

const WhatYouGet = () => {
    return (
        <section className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-4">

                {/* TOP TAG */}
                <div className="flex justify-center mb-4">
                    <span className="border border-gray-300 rounded-full px-5 py-1 text-sm text-gray-600">
                        Solution Components
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="text-center text-[32px] md:text-[42px] leading-[44px] md:leading-[56px] font-semibold text-[#2f2f2f] mb-6">
                    Comprehensive Deliverables Included in Our Mobility Suite
                </h2>

                {/* SUBTEXT */}
                <p className="text-center text-[16px] text-[#5f5f5f] max-w-4xl mx-auto mb-16">
                    The rapid-deployment mobility solution arrives with every structural component required
                    to launch a market-leading enterprise. From passenger interfaces to partner
                    operations, all modules are engineered for cross-platform excellence.
                </p>

                {/* CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* MOBILE APPS */}
                    <div className="border border-[#d6d6d6] rounded-[20px] overflow-hidden">
                        {/* HEADER */}
                        <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a1a1a] to-black">
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                                <Smartphone className="text-black" size={20} />
                            </div>
                            <h3 className="text-white text-[20px] font-semibold">
                                Mobile Apps
                            </h3>
                        </div>

                        {/* CONTENT */}
                        <ul className="px-8 py-6 space-y-4 text-[16px] text-[#2f2f2f]">
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Customer Android App
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Driver Android App
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Customer IOS App
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Driver IOS App
                            </li>
                        </ul>
                    </div>

                    {/* WEBSITE & ADMIN */}
                    <div className="border border-[#d6d6d6] rounded-[20px] overflow-hidden">
                        {/* HEADER */}
                        <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#1a1a1a] to-black">
                            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center">
                                <Globe className="text-black" size={20} />
                            </div>
                            <h3 className="text-white text-[20px] font-semibold">
                                Website & Admin Panels
                            </h3>
                        </div>

                        {/* CONTENT */}
                        <ul className="px-8 py-6 space-y-4 text-[16px] text-[#2f2f2f]">
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Super Admin Panel
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Account Web Admin
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Dispatcher Web Admin
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-black rounded-full"></span>
                                Static Landing Website
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;