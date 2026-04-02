import React from 'react';
import { Heart, Search, Users, ShieldCheck, Sparkles } from 'lucide-react';
import heroImg from '../../assets/datinglanding-img/datinglandinghero.jpg';

const DatingHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#FFF1F2]">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-float-slow opacity-20 text-rose-300"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${10 + Math.random() * 10}s`
                        }}
                    >
                        <Heart size={10 + Math.random() * 30} fill="currentColor" />
                    </div>
                ))}
            </div>

            {/* Gradient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/50 rounded-full blur-[120px] -mr-64 -mt-64 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-[120px] -ml-64 -mb-64"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="space-y-8 animate-fadeInUp">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-rose-100 rounded-full shadow-sm text-rose-600 font-bold text-xs uppercase tracking-widest">
                            <Sparkles size={14} className="animate-pulse" />
                            Premium Matchmaking Solutions
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
                            Where Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Story</span> <br />
                            Begins With <span className="text-rose-500">Love</span>
                        </h1>

                        <p className="text-slate-600 text-lg max-w-lg leading-relaxed">
                            Launch your personalized dating or matrimony platform with enterprise-grade security, AI-powered matching, and seamless user experiences.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => document.getElementById('dating-products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-bold rounded-full shadow-xl shadow-rose-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                            >
                                Explore Our Products
                                <Heart size={20} className="group-hover:fill-white transition-all" />
                            </button>
                        </div>

                        {/* Social Proof */}
                        <div className="flex items-center gap-8 pt-8 opacity-70">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-rose-100 flex items-center justify-center text-rose-500 font-bold text-xs">U{i}</div>
                                ))}
                            </div>
                            <div className="text-sm font-medium text-slate-500">
                                <span className="text-slate-900 font-bold block">1M+ Connects</span>
                                Trusted by globally.
                            </div>
                        </div>
                    </div>

                    {/* Right: Visual Mockup */}
                    <div className="relative animate-fadeInRight mt-12 mb-30 lg:mt-0">
                        <div className="relative z-10 w-full max-w-[500px] mx-auto group">
                            <div className="absolute -inset-6 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>

                            <div className="relative bg-white p-6 rounded-[3rem] shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-700">
                                <div className="aspect-[5/5]  bg-rose-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center relative">
                                    <img src={heroImg} alt="Dating App UI" className="w-full h-full object-cover" />
                                </div>
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl z-20 animate-float hidden lg:flex items-center gap-3">
                                <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase">Verified</p>
                                    <p className="text-sm font-bold text-slate-900">Trust Badge</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotate(0); }
                    50% { transform: translateY(-30px) rotate(15deg); }
                }
                .animate-float-slow { animation: float-slow infinite ease-in-out; }
                
                @keyframes fadeInUp {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeInUp { animation: fadeInUp 0.8s ease-out forwards; }

                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }

                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default DatingHero;
