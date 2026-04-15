import React from 'react';
import { ArrowRight, Play, Server, Zap, Tv } from 'lucide-react';
import heroImg from '../../assets/ottlanding-img/ottlandinghero1.jpg';

const OTTHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#0A0A0B]">
            {/* Cinematic Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4 opacity-40"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeInLeft">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                            <span className="text-gray-300 text-xs font-bold uppercase tracking-widest leading-none">Ultra HD 4K Ready</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight">
                            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-500 to-orange-500">Streaming Empire</span> Without Limits
                        </h1>

                        <p className="text-gray-400 text-lg lg:text-xl max-w-xl leading-relaxed">
                            Launch your own Netflix-style platform in days. Ultra-low latency, global edge delivery, and powerful monetization tools.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => document.getElementById('explore-ott')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-bold rounded-full shadow-2xl shadow-red-500/20 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                            >
                                Explore Our Products
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-8 pt-8 border-t border-white/5">
                            <div>
                                <p className="text-2xl font-black text-white">50M+</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Global Streams</p>
                            </div>
                            <div className="w-px h-10 bg-white/10"></div>
                            <div>
                                <p className="text-2xl font-black text-white">100+</p>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">CDNs Deployed</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visuals */}
                    <div className="relative animate-fadeInRight lg:pr-10">
                        <div className="relative group">
                            {/* Glowing Aura */}
                            <div className="absolute -inset-10 bg-gradient-to-tr from-purple-600/30 to-red-600/30 rounded-[60px] blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700"></div>

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-white/10 to-transparent rounded-[60px] border-8 border-white/10 shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-[1.02] lg:-translate-y-10 group-hover:shadow-purple-500/20">
                                <img src={heroImg} alt="OTT Hero" className="w-full h-full object-cover" />

                                {/* Overlay status badges */}
                                <div className="absolute bottom-8 left-8 right-8 p-4 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-red-600/20 text-red-500 rounded-lg flex items-center justify-center italic font-black text-[10px]">LIVE</div>
                                        <div>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase">Streaming Health</p>
                                            <p className="text-sm font-bold text-white">Optimal (99.9%)</p>
                                        </div>
                                    </div>
                                    <Zap size={20} className="text-white/40" />
                                </div>
                            </div>

                            {/* Floating Stats Label */}
                            <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 shadow-2xl z-20 animate-bounce">
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">Active Users</p>
                                <p className="text-2xl font-black text-white leading-none">5.2k</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInRight { animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
            `}</style>
        </section>
    );
};

export default OTTHero;
