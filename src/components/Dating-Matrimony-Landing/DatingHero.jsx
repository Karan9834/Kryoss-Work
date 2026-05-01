import React from 'react';
import { Heart, Search, Users, ShieldCheck, Sparkles } from 'lucide-react';
import heroImg from '../../assets/maternitydating-product/every where begin love a.png';

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
                        {/* Hero Badge - Updated: text-xs font-medium tracking-wider uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-rose-100 rounded-full shadow-sm text-rose-600 font-bold text-[12px] font-medium tracking-wider uppercase">
                            <Sparkles size={14} className="animate-pulse" />
                            Premium Matchmaking Solutions
                        </div>

                        {/* Hero H1 - Updated: text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-slate-900">
                            Where Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">Story</span> <br />
                            Begins With <span className="text-rose-500">Love</span>
                        </h1>

                        {/* Hero Description - Updated: text-base md:text-lg font-normal leading-relaxed */}
                        <p className="text-base md:text-lg font-normal leading-relaxed text-slate-600 max-w-lg">
                            Launch your personalized dating or matrimony platform with enterprise-grade security, AI-powered matching, and seamless user experiences.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {/* Hero Button - Updated: text-sm md:text-base font-semibold tracking-wide uppercase */}
                            <button
                                onClick={() => document.getElementById('dating-products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-semibold rounded-full shadow-xl shadow-rose-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-sm md:text-base tracking-wide uppercase"
                            >
                                Explore Our Products
                                <Heart size={20} className="group-hover:fill-white transition-all" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Visual Mockup */}
                    <div className="relative animate-fadeInRight mt-12 mb-30 lg:mt-0">
                        <div className="relative z-10 w-full max-w-[500px] mx-auto group">
                            <div className="absolute -inset-6 bg-gradient-to-r from-rose-400 to-purple-400 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-all duration-700"></div>

                            <div className="relative bg-white p-6 rounded-[3rem] shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-700">
                                <div className="aspect-[5/5] bg-rose-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center relative">
                                    <img src={heroImg} alt="Dating App UI" className="w-full h-full object-cover" />
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