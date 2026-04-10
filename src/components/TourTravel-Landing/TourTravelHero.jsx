import React from 'react';
import { ArrowRight, Globe, Star, Users } from 'lucide-react';
import heroImg from '../../assets/tourlanding-img/Tourlandinghero.jpg';

const TourTravelHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#FFF7ED]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#E0F2FE] -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-50"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-200 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
            <div className="absolute bottom-10 right-20 w-48 h-48 bg-amber-200 rounded-full blur-[80px] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeInLeft">
                        {/* Hero Badge - Updated: text-xs font-medium tracking-wider uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-100 rounded-full border border-sky-200">
                            <span className="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
                            <span className="text-sky-800 text-[12px] font-medium tracking-wider uppercase">Explore the World with Ease</span>
                        </div>

                        {/* Hero H1 - Updated: text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1E293B]">
                            Your Complete <span className="text-sky-600">Tour & Travel</span> Platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Seamless Adventures</span>
                        </h1>

                        {/* Hero Description - Updated: text-base md:text-lg font-normal leading-relaxed */}
                        <p className="text-base md:text-lg font-normal leading-relaxed text-[#4A4B5E] max-w-xl">
                            Launch a world-class travel booking platform. From flights and hotels to curated tour packages — manage it all from one powerful dashboard.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {/* Hero Button - Updated: text-sm md:text-base font-semibold tracking-wide uppercase */}
                            <button
                                onClick={() => document.getElementById('tour-products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-semibold rounded-full shadow-xl shadow-sky-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-sm md:text-base tracking-wide uppercase"
                            >
                                Explore Our Products
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Visuals */}
                    <div className="relative animate-fadeInRight lg:pr-10">
                        <div className="relative group">
                            {/* Decorative Background for Image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-amber-400 rounded-[60px] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-sky-100 to-amber-50 rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-[1.02] lg:-translate-y-10">
                                <img src={heroImg} alt="Tour Travel Hero" className="w-full h-full object-cover" />
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

export default TourTravelHero;