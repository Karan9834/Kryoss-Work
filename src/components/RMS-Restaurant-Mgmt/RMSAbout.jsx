import React from 'react';
import { Leaf, Clock, MapPin, Zap } from 'lucide-react';
import aboutimg from "@/assets/rmslanding-img/rmslandingabout.jpg";

const RMSAbout = () => {
    const highlights = [
        { title: "Fresh Inventory", description: "Real-time stock depletion and recipe costing.", icon: <Leaf size={24} className="text-green-500" /> },
        { title: "Fast Checkout", description: "Split bills and fast payments at the table.", icon: <Zap size={24} className="text-amber-500" /> },
        { title: "Cloud Sync", description: "Manage multiple branches from anywhere.", icon: <MapPin size={24} className="text-rose-500" /> },
        { title: "Shift Planning", description: "Automated staff scheduling and reporting.", icon: <Clock size={24} className="text-red-500" /> },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Single Image Container */}
                    <div className="relative group order-2 lg:order-1 h-[400px] sm:h-[500px] w-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-amber-50 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 transform group-hover:rotate-1"></div>

                        <div className="relative w-full h-full bg-white rounded-[3rem] shadow-2xl overflow-hidden transition-transform duration-700 border-4 border-white">
                            <img src={aboutimg} alt="Fine Dining Operations" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                            <div className="absolute inset-0 bg-red-500/10 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                            <span className="inline-block text-rose-600 text-[12px] font-medium tracking-[0.05em] uppercase mb-2 px-3 py-1 bg-rose-50 w-max rounded-full border border-rose-100">
                                Scalable Operations
                            </span>
                            
                            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-rose-600 to-amber-500">
                                    A Modern Foundation For Your Culinary Dreams
                                </span>
                            </h2>
                            
                            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                            <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                Running a restaurant is tough. Our Management System makes it easier. Connect your front-of-house with the kitchen, automate inventory tracking, and gather actionable insights into which menu items are driving your profits.
                            </p>
                        </div>

                        {/* Feature Highlights - Updated typography */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex flex-col gap-2 p-5 bg-orange-50/30 rounded-2xl shadow-sm border border-orange-100 hover:shadow-orange-100 hover:border-orange-200 transition-all duration-300 group hover:-translate-y-1">
                                    <div className="p-3 bg-white w-max rounded-xl group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-sm">
                                        {item.icon}
                                    </div>
                                    {/* Feature Title - Updated: text-[15px] md:text-[16px] font-bold */}
                                    <h3 className="text-gray-800 font-bold text-[15px] md:text-[16px] mt-2">{item.title}</h3>
                                    {/* Feature Description - Updated: text-[12px] md:text-[13px] font-normal */}
                                    <p className="text-gray-500 text-[12px] md:text-[13px] font-normal leading-[1.5]">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RMSAbout;