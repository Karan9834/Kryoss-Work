import React from 'react';
import { ArrowRight, Pill, Activity, Star, ClipboardList, Shield } from 'lucide-react';
import heroimg from "@/assets/pmslanding-img/pmslandinghero.jpg";

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
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg"
                        >
                            <Activity size={14} className="animate-pulse" />
                            <span>Precision Healthcare Management</span>
                        </div>

                        <h1
                            className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
                        >
                            Future-Proof Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-100 to-white">
                                Pharmacy Ecosystem
                            </span> <br />
                        </h1>

                        <p
                            className="text-emerald-50/70 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            Streamline prescriptions, inventory, and patient care with our unified AI-driven Pharmacy Management System. Engineered for modern dispensaries and healthcare centers.
                        </p>

                        <div
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
                        >
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-5 bg-gradient-to-r from-emerald-500 to-teal-400 text-white font-black rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl shadow-emerald-900/40 flex items-center gap-3 uppercase tracking-wider"
                            >
                                Explore our Products <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Feature Badges */}
                        <div
                            className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90"
                        >
                            <div className="flex items-center gap-2 text-emerald-100/60 font-bold text-sm uppercase tracking-widest border-r border-white/10 pr-8 last:border-0 last:pr-0">
                                <Pill className="text-emerald-400" size={18} /> Smart Stock
                            </div>
                            <div className="flex items-center gap-2 text-emerald-100/60 font-bold text-sm uppercase tracking-widest border-r border-white/10 pr-8 last:border-0 last:pr-0">
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
                            {/* PLACEHOLDER FOR IMAGE */}
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
