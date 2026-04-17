import React from 'react';
import { ArrowRight, Pill, Activity, Star, ClipboardList, Shield } from 'lucide-react';
const heroimg = "/Products/pms/pms/Future-Proof Your.jpg";

const PMSHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('pms-cards');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#002B2C] text-white">
            {/* Background Pattern - Similar to medicine-delivery-app reference */}
            <div className="absolute right-0 top-0 w-[55%] h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-l from-emerald-500/20 to-transparent"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-emerald-400/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left transition-all duration-700">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-[12px] font-medium tracking-[0.05em] uppercase backdrop-blur-md shadow-lg"
                        >
                            <Activity size={14} className="animate-pulse" />
                            <span>Precision Healthcare Management</span>
                        </div>

                        {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
                        <h1
                            className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]"
                        >
                            Future-Proof Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-white">
                                Pharmacy Ecosystem
                            </span> <br />
                        </h1>

                        {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
                        <p
                            className="text-emerald-50/70 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl mx-auto lg:mx-0"
                        >
                            Streamline prescriptions, inventory, and patient care with our unified AI-driven Pharmacy Management System. Engineered for modern dispensaries and healthcare centers.
                        </p>

                        {/* CTA Buttons */}
                        <div
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-semibold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-900/40 flex items-center gap-3 text-[16px] tracking-[0.01em]"
                            >
                                Explore our Products <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Feature Badges - Updated: text-[12px] font-semibold uppercase tracking-[0.05em] */}
                        <div
                            className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90"
                        >
                            <div className="flex items-center gap-2 text-emerald-100/60 font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/10 pr-8 last:border-0 last:pr-0">
                                <Pill className="text-emerald-400" size={18} /> Smart Stock
                            </div>
                            <div className="flex items-center gap-2 text-emerald-100/60 font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/10 pr-8 last:border-0 last:pr-0">
                                <Shield className="text-emerald-400" size={18} /> HIPAA Compliant
                            </div>
                        </div>
                    </div>

                    {/* Right: Actual Hero Image PlaceHolder */}
                    <div
                        className="relative group block scale-90 md:scale-100 transition-all duration-1000"
                    >
                        <div className="relative -inset-4 bg-gradient-to-r from-emerald-600/20 to-teal-400/20 rounded-[4rem] blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                        <div className="relative bg-white/5 mt-[-20px] h-[400px] md:h-[500px] backdrop-blur-xl rounded-[4rem] border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                            <img
                                src={heroimg}
                                alt="Pharmacy Management Dashboard"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#002B2C] to-transparent pointer-events-none opacity-60"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PMSHero;