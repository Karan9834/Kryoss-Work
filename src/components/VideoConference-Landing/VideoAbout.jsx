import React from 'react';
import { Share2, Users, Layout, Zap } from 'lucide-react';
import aboutImg from '../../assets/videolanding-img/videolandingabout.jpg';

const VideoAbout = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Visual (Image on Left per user request) */}
                    <div className="relative order-2 lg:order-1 group">
                        <div className="absolute -inset-10 bg-purple-50 rounded-full blur-[100px] opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-white p-4 rounded-[4rem] shadow-2xl border border-gray-100 overflow-hidden">
                             <img 
                                src={aboutImg} 
                                alt="Video Collaboration" 
                                className="w-full h-[400px] object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-105" 
                             />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-6">
                            <span className="text-purple-600 font-bold text-sm uppercase tracking-[0.3em] block">Better Together</span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#1A1C3C] leading-tight">
                                Redefining the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-sky-600">Unified Workspace.</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                                Break down barriers with a platform that combines immersive video conferencing with powerful collaboration tools, keeping everyone in sync.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4 p-8 bg-slate-50 rounded-[2.5rem] hover:bg-purple-50 transition-colors duration-500 group border border-transparent hover:border-purple-100">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform">
                                    <Layout size={24} />
                                </div>
                                <h3 className="font-bold text-[#1A1C3C]">Hybrid Layouts</h3>
                                <p className="text-slate-500 text-sm font-medium">Auto-adjusting grids that spotlight active speakers.</p>
                            </div>
                            <div className="space-y-4 p-8 bg-slate-50 rounded-[2.5rem] hover:bg-sky-50 transition-colors duration-500 group border border-transparent hover:border-sky-100">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                                    <Zap size={24} />
                                </div>
                                <h3 className="font-bold text-[#1A1C3C]">Low Latency</h3>
                                <p className="text-slate-500 text-sm font-medium">Optimized for global stability and sub-second lag.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VideoAbout;
