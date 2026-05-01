import React from 'react';
import { Target, Shield, Layers, Rocket } from 'lucide-react';
import aboutImg from "../../../../assets/cryptoderivatives-img/cryptoderivativesabout.jpg";

const DerivAbout = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Visual (Classical Image Layout) */}
                    <div className="relative group animate-fadeInLeft">
                        <div className="absolute -inset-10 bg-purple-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl border border-purple-50 overflow-hidden">
                            <img
                                src={aboutImg}
                                alt="Trading Performance"
                                className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <span className="text-purple-600 font-bold text-sm uppercase tracking-[0.3em] block underline underline-offset-8 decoration-blue-400">Institutional Grade</span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1E293B] leading-tight">
                                Professional Performance <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">Without Compromise.</span>
                            </h2>
                            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl">
                                Our derivatives platform is engineered for the high-pressure environment of leverage trading. We provide the stability, transparency, and speed required for professional market participation.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-4">
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                                    <Target size={24} />
                                </div>
                                <h3 className="font-bold text-[#1E293B]">Precision Matching</h3>
                                <p className="text-gray-400 text-xs font-bold leading-relaxed">Deterministic order execution with zero slippage across major pairs.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                                    <Shield size={24} />
                                </div>
                                <h3 className="font-bold text-[#1E293B]">Auto-Deleveraging</h3>
                                <p className="text-gray-400 text-xs font-bold leading-relaxed">Intelligent ADL systems to maintain market stability during volatility.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DerivAbout;
