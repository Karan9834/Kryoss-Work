import React from 'react';
import { ArrowRight, Activity, HeartPulse, Star, Microscope } from 'lucide-react';
import heroImg from "@/assets/hmslanding-img/hmslandinghero.jpg";

const HMSHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('hms-cards');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#0f766e] to-[#0e7490] text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-teal-500/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-400/20 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[12px] font-medium tracking-[0.05em] uppercase backdrop-blur-md shadow-lg">
                            <Star size={14} className="text-yellow-300" />
                            <span>Next-Gen Healthcare Solutions</span>
                        </div>

                        {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
                        <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
                            Elevate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-200">
                                Hospital Management
                            </span> <br />
                            <span className="text-white"> To The Future</span>
                        </h1>

                        {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
                        <p className="text-teal-50 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl mx-auto lg:mx-0">
                            A comprehensive, scalable ecosystem for modern hospitals and clinics. From patient flow and billing to pharmacy and labs—everything unified in one intelligent platform.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-4 bg-white text-teal-900 font-semibold rounded-2xl hover:bg-cyan-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-teal-900/30 flex items-center gap-3 text-[16px] tracking-[0.01em]"
                            >
                                Explore Our Products <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Feature Badges - Updated: text-[12px] font-semibold uppercase tracking-[0.05em] */}
                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90">
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <HeartPulse className="text-rose-300" size={18} /> Patient-Centric
                            </div>
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <Activity className="text-cyan-300" size={18} /> Real-Time Vitals
                            </div>
                        </div>
                    </div>

                    {/* Right: Actual Hero Image PlaceHolder */}
                    <div className="relative group block scale-90 md:scale-100">
                        <div className="relative -inset-4 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-[4rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                        <div className="relative bg-teal-900/40 mt-[-100px] h-[400px] md:h-[500px] backdrop-blur-xl rounded-[4rem] border border-white/30 overflow-hidden shadow-2xl flex items-center justify-center">
                            <img src={heroImg} alt="HMS Hero" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/40 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HMSHero;