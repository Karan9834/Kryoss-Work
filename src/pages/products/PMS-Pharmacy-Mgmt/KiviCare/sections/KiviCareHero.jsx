import React from "react";
import { ArrowRight, ShieldCheck, Heart, Cross, Stethoscope, HeartPulse, ShieldPlus, MessageCircle } from "lucide-react";
import heroImg from "@/assets/kivicarepms-img/kivicarepmshero.webp";

const KiviCareHero = () => {
    return (
        <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-12 lg:py-0"
            style={{ background: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)" }}>

            {/* Animated background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-teal-200/40 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200/40 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-300/30 bg-white/50 backdrop-blur-sm">
                        <Heart size={16} className="text-teal-600" />
                        <span className="text-teal-800 text-sm font-bold tracking-wide uppercase">Hospital Pharmacy Solution</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                        Compassionate Care,{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #0d9488, #10b981)" }}>
                            Digital Efficiency.
                        </span>
                    </h1>

                    <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                        KiviCare is an enterprise PMS specifically designed for hospital environments. Synchronize ward stocks, inpatient billing, and physician prescriptions into one clinical-grade platform.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 sm:gap-8 py-6 border-t border-teal-200/50">
                        {[
                            { icon: <HeartPulse size={20} />, label: "Patients", value: "2M+" },
                            { icon: <ShieldPlus size={20} />, label: "Clinics", value: "500+" },
                            { icon: <Stethoscope size={20} />, label: "Uptime", value: "99.9%" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-teal-700 flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-slate-900 font-bold text-lg sm:text-xl leading-none">{stat.value}</p>
                                    <p className="text-slate-500 text-[10px] sm:text-xs mt-1 font-medium">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a
                            href="https://preview.codecanyon.net/item/kivicare-tm-pharma-addon-pharmacy-inventory-management-in-laravel/full_screen_preview/60994895"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #0d9488, #0f766e)", boxShadow: "0 8px 30px rgba(13,148,136,0.3)" }}
                        >
                            Live Demo
                            <ArrowRight size={22} />
                        </a>
                        <a
                            href="/company/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-teal-800 border border-teal-200 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white"
                        >
                            <MessageCircle size={22} />
                            Let's Discuss
                            <ArrowRight size={22} />
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="absolute inset-0 rounded-full blur-[100px] opacity-30"
                        style={{ background: "linear-gradient(135deg, #2dd4bf, #10b981)" }} />
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        <div className="w-full h-64 sm:h-80 lg:h-[400px] rounded-[2rem] sm:rounded-[3rem] border-4 sm:border-[12px] border-white shadow-2xl bg-teal-50 flex items-center justify-center relative overflow-hidden group">
                           <img src={heroImg} alt="KiviCare Dashboard" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center gap-3 sm:gap-4 border border-teal-50">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                <ShieldPlus size={18} className="sm:w-[24px] sm:h-[24px]" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Clinic Status</p>
                                <p className="text-xs sm:text-sm font-black text-emerald-600 leading-none">Fully Optimized</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KiviCareHero;
