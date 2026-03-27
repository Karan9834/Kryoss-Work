import React from 'react';
import { ShieldCheck, Zap, BarChart3, Users } from 'lucide-react';
import aboutImg from '../../assets/transportlanding-img/transportlandingabout.jpg';

const LogisticsAbout = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Visual */}
                    <div className="relative order-2 lg:order-1 group animate-fadeInRight">
                        <div className="absolute -inset-10 bg-orange-50 rounded-full blur-[100px] opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative bg-white p-4 rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
                            <img 
                                src={aboutImg} 
                                alt="About Logistics" 
                                className="w-full h-[400px] object-cover rounded-[2.5rem] transition-transform duration-700 group-hover:scale-105" 
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-10 order-1 lg:order-2">
                        <div className="space-y-6">
                            <span className="text-orange-600 font-bold text-sm uppercase tracking-[0.3em] block ">Data-Driven Logistics</span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#0F172A] leading-tight">
                                Streamline Global <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">Operations with Precision.</span>
                            </h2>
                            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-xl">
                                We provide more than just software. Our platform integrates deep analytics and AI to predict bottlenecks and optimize your entire supply chain.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8">
                            <div className="space-y-4 p-6 bg-slate-50 rounded-[2rem] hover:bg-orange-50 transition-colors duration-500 group">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                                    <ShieldCheck size={24} />
                                </div>
                                <h3 className="font-bold text-[#0F172A]">Safe & Secure</h3>
                                <p className="text-slate-500 text-sm font-medium">Enterprise-level protection for your shipment data.</p>
                            </div>
                            <div className="space-y-4 p-6 bg-slate-50 rounded-[2rem] hover:bg-blue-50 transition-colors duration-500 group">
                                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                    <Zap size={24} />
                                </div>
                                <h3 className="font-bold text-[#0F172A]">Instant Tracking</h3>
                                <p className="text-slate-500 text-sm font-medium">Real-time GPS visibility for every fleet member.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(50px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInRight { animation: fadeInRight 1s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default LogisticsAbout;
