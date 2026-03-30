import React from 'react';
import { ShieldCheck, Network, Smartphone, BarChart3 } from 'lucide-react';

const MLMAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Industry Expert
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] leading-snug">
                        Industry Expert MLM <br />
                        <span className="text-blue-600">Growth Company</span>
                    </h2>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed italic border-l-4 border-blue-500 pl-6 bg-blue-50 py-4 rounded-r-2xl">
                         "We work with clients to establish an understanding of the business needs and requirements, providing the best means to achieve them."
                    </p>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                        Our software includes E-wallet, distributor management, commission processing, and more. Using smart coding methods and blending your software with ease-of-management features, we deploy proficient MLM software tailored to your success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Smart Contracts</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Decentralized and immutable logic ensuring 100% transparency in payouts.
                        </p>
                    </div>

                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Network className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Network Matrix</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Support for various matrix schemes including Force Matrix, Team Matrix, and more.
                        </p>
                    </div>

                    <div className="p-8 bg-cyan-50 rounded-3xl border border-cyan-100 shadow-sm hover:shadow-md transition-shadow">
                        <Smartphone className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Mobile Management</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Powerful dashboard for distributors to manage their downline from any device.
                        </p>
                    </div>

                    <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <BarChart3 className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Dynamic Tracking</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Advanced E-wallet systems and real-time sales volume analytics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MLMAbout;
