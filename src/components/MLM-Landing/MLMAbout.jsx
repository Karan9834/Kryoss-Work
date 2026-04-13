import React from 'react';
import { ShieldCheck, Network, Smartphone, BarChart3 } from 'lucide-react';

const MLMAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase mb-4">
                        Industry Expert
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Industry Expert MLM <br />
                        <span className="text-blue-600">Growth Company</span>
                    </h2>
                    
                    {/* Quote / Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6] italic border-l-4 border-blue-500 pl-6 bg-blue-50 py-4 rounded-r-2xl">
                        "We work with clients to establish an understanding of the business needs and requirements, providing the best means to achieve them."
                    </p>
                    
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        Our software includes E-wallet, distributor management, commission processing, and more. Using smart coding methods and blending your software with ease-of-management features, we deploy proficient MLM software tailored to your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Smart Contracts</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Decentralized and immutable logic ensuring 100% transparency in payouts.
                        </p>
                    </div>

                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Network className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Network Matrix</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Support for various matrix schemes including Force Matrix, Team Matrix, and more.
                        </p>
                    </div>

                    <div className="p-8 bg-cyan-50 rounded-3xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow">
                        <Smartphone className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Mobile Management</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Powerful dashboard for distributors to manage their downline from any device.
                        </p>
                    </div>

                    <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <BarChart3 className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Dynamic Tracking</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Advanced E-wallet systems and real-time sales volume analytics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MLMAbout;