import React from 'react';
import { ArrowRight, Trophy, ShieldCheck, Zap } from 'lucide-react';

const BettingHero = ({ onExplore }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#ECFDF5] via-white to-[#D1FAE5]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D1FAE5] -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-50"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
            <div className="absolute bottom-10 right-20 w-48 h-48 bg-teal-200 rounded-full blur-[80px] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fadeInLeft">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                            <span className="text-emerald-800 text-xs font-bold uppercase tracking-widest">Premium Betting App Softwares</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-semibold text-[#1E293B] leading-tight">
                            World-Class <span className="text-emerald-600">Betting Solutions</span> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500 font-bold">Unmatched Thrills</span>
                        </h1>

                        <p className="text-[#4A4B5E] text-lg lg:text-xl max-w-xl leading-relaxed">
                            Kryoss Softech is a world-renowned betting app development agency. We create feature-rich, high-speed, and scalable real-time sports betting applications.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={onExplore}
                                className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-bold rounded-full shadow-xl shadow-emerald-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                            >
                                Explore Our Products
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <p className="text-2xl font-black text-[#1E293B]">50k+</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Active Players</p>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <p className="text-2xl font-black text-[#1E293B]">100%</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Payment Security</p>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <p className="text-2xl font-black text-[#1E293B]">24/7</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Live Support</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-fadeInRight lg:pr-10">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-[60px] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>
                            <div className="relative z-10 w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-emerald-100 to-teal-50 rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-[1.02] lg:-translate-y-10">
                                <img src="https://images.unsplash.com/photo-1596742572447-5790553ef443?auto=format&fit=crop&q=80&w=800" alt="Betting Apps" className="w-full h-full object-cover" />
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

export default BettingHero;
