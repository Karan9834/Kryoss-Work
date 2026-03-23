import React from 'react';
import { ShieldCheck, Zap, Globe, Award, Sparkles, TrendingUp, Handshake } from 'lucide-react';

const OTTWhyUs = () => {
    return (
        <section className="py-24 bg-[#0A0A0B] relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px] -ml-40 opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[150px] -mr-40 opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-red-500 font-bold text-sm uppercase tracking-widest block mb-4">The OTT Edge</span>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                        Trusted by the <span className="text-red-600 italic">Streaming Giants</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Global infrastructure meets localized streaming expertise. We handle the bits so you can focus on the hits.
                    </p>
                </div>

                {/* Unique Section Structure: Feature Grid with Central Glow */}
                <div className="grid lg:grid-cols-3 gap-10 items-center">

                    {/* Left Column */}
                    <div className="space-y-10 lg:text-right order-2 lg:order-1">
                        <div className="space-y-3 group hover:-translate-x-2 transition-transform duration-500">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-red-500 ml-auto mr-auto lg:mr-0 group-hover:bg-red-600 group-hover:text-white transition-all">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-xl font-black text-white">Bank-Grade DRM</h3>
                            <p className="text-gray-500 text-sm">Military-level protection against unauthorized access and restreaming.</p>
                        </div>
                        <div className="space-y-3 group hover:-translate-x-2 transition-transform duration-500">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-purple-500 ml-auto mr-auto lg:mr-0 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                <Zap size={28} />
                            </div>
                            <h3 className="text-xl font-black text-white">Sub-Second Latency</h3>
                            <p className="text-gray-500 text-sm">Optimized UDP protocols for near-instant playback across the globe.</p>
                        </div>
                    </div>

                    {/* Center Column - Visual Pulse */}
                    <div className="relative flex justify-center order-1 lg:order-2">
                        <div className="w-64 h-64 lg:w-80 lg:h-80 bg-red-600/10 rounded-full flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-red-600/5 rounded-full animate-ping"></div>
                            <div className="absolute inset-4 bg-red-600/5 rounded-full animate-ping delay-500"></div>
                            <div className="w-40 h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-red-600 to-purple-700 rounded-full shadow-[0_0_50px_rgba(220,38,38,0.4)] flex items-center justify-center text-white z-10 transition-transform duration-700 hover:scale-110">
                                <Globe size={80} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-10 order-3">
                        <div className="space-y-3 group hover:translate-x-2 transition-transform duration-500">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-amber-500 ml-auto mr-auto lg:ml-0 group-hover:bg-amber-500 group-hover:text-white transition-all">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="text-xl font-black text-white">Multi-Ad Support</h3>
                            <p className="text-gray-500 text-sm">Server-side ad insertion (SSAI) for unskippable, targeted monetizing.</p>
                        </div>
                        <div className="space-y-3 group hover:translate-x-2 transition-transform duration-500">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 ml-auto mr-auto lg:ml-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                <Handshake size={28} />
                            </div>
                            <h3 className="text-xl font-black text-white">White-Label Freedom</h3>
                            <p className="text-gray-500 text-sm">Fully customizable UI that breathes your brand's unique philosophy.</p>
                        </div>
                    </div>

                </div>

                {/* Final Stats Banner */}
                <div className="mt-24 p-10 rounded-[40px] bg-white/5 border border-white/10 flex flex-wrap justify-center gap-10 lg:gap-20">
                    <div className="text-center">
                        <p className="text-4xl lg:text-5xl font-black text-white mb-2">99.9%</p>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Global Availability</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl lg:text-5xl font-black text-white mb-2">10M+</p>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Active Devices</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl lg:text-5xl font-black text-white mb-2">500+</p>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Satisfied Clients</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OTTWhyUs;
