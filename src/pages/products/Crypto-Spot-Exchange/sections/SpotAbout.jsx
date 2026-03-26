import React from 'react';
import { Shield, Zap, Globe, Cpu } from 'lucide-react';
import aboutImg from "../../../../assets/cryptospot-img/cryptospotabout.jpg";

const SpotAbout = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-6">
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] block">The Engine of Growth</span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1A1C3C] leading-tight">
                                Built for Volume, <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Forged for Security.</span>
                            </h2>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
                                Our spot engine is the culmination of years of R&D in high-frequency trading systems, offering the reliability your institutional clients demand.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="font-bold text-[#1A1C3C]">Low Latency</h3>
                                <p className="text-gray-500 text-sm font-medium">Sub-millisecond order matching for professional execution.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <Globe size={24} />
                                </div>
                                <h3 className="font-bold text-[#1A1C3C]">Global Liquidity</h3>
                                <p className="text-gray-500 text-sm font-medium">Out-of-the-box integration with Tier-1 liquidity providers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="relative order-1 lg:order-2 group animate-fadeInRight">
                        <div className="absolute -inset-10 bg-blue-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden">
                            <img
                                src={aboutImg}
                                alt="Exchange Infrastructure"
                                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SpotAbout;
