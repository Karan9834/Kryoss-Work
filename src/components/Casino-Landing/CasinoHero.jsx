import React from 'react';
import { ArrowRight, Gamepad2, ShieldCheck, Trophy } from 'lucide-react';

const CasinoHero = ({ onExplore }) => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#FFF7ED] via-white to-[#FEF3C7]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FEF3C7] -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-50"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-200 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
            <div className="absolute bottom-10 right-20 w-48 h-48 bg-amber-200 rounded-full blur-[80px] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeInLeft">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full border border-orange-200">
                            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
                            <span className="text-orange-800 text-[12px] font-medium tracking-[0.05em] uppercase">Premium Casino Software</span>
                        </div>

                        {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
                        <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1E293B]">
                            World-Class <span className="text-orange-600">Casino Gaming</span> Solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Unmatched Gameplay</span>
                        </h1>

                        {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
                        <p className="text-[#4A4B5E] text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl">
                            Custom casino game software solutions catering to mobile gaming, land-based systems, and online platforms. Elevate your gaming business with Kryoss.
                        </p>
                    </div>

                    {/* Right Content - Visuals */}
                    <div className="relative animate-fadeInRight lg:pr-10">
                        <div className="relative group">
                            {/* Decorative Background for Image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-400 rounded-[60px] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-orange-100 to-amber-50 rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-[1.02] lg:-translate-y-10">
                                <img src="https://i.pinimg.com/1200x/e3/bd/f4/e3bdf4f3b449376ddaa33dfca28d0488.jpg" alt="Casino Gaming" className="w-full h-full object-cover" />
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

export default CasinoHero;