import React from "react";
import { ArrowRight, Activity, ShieldCheck, Zap, Heart, ShieldPlus, LayoutDashboard } from "lucide-react";
import heroImg from "@/assets/pharmacynextaipms-img/pharmacynextaipmshero.jpg";

const PharmacyNextAIHero = () => {
    return (
        <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-12 lg:py-0"
            style={{ background: "linear-gradient(135deg, #0f766e 0%, #0d9488 40%, #0891b2 70%, #4f46e5 100%)" }}>

            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #22d3ee, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)" }} />
                {/* Tech/AI patterns */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-sm">
                        <Activity size={16} className="text-cyan-400" />
                        <span className="text-cyan-100 text-sm font-bold tracking-wide uppercase">AI-Powered Pharmacy Management</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Smart Billing.{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #6ee7b7, #22d3ee, #818cf8)" }}>
                            Zero Errors.
                        </span>{" "}
                        Pure Precision.
                    </h1>

                    <p className="text-lg text-teal-50/80 max-w-xl leading-relaxed">
                        PharmacyNext AI is the ultimate retail pharmacy OS. From AI-driven stock predictions and drug interaction alerts to lightning-fast POS billing—running your pharmacy has never been this smart.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 sm:gap-8 py-6 border-t border-white/10">
                        {[
                            { icon: <Zap size={20} />, label: "Billing Speed", value: "3x Faster" },
                            { icon: <ShieldPlus size={20} />, label: "Safety Checks", value: "Real-time" },
                            { icon: <LayoutDashboard size={20} />, label: "Insights", value: "AI-Driven" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-cyan-300 flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg sm:text-xl leading-none">{stat.value}</p>
                                    <p className="text-cyan-200/60 text-[10px] sm:text-xs mt-1 font-medium">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <a
                            href="https://preview.codecanyon.net/item/pharmacynext-modern-pharmacy-pos-management-system/full_screen_preview/57668356"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #0d9488, #4f46e5)", boxShadow: "0 8px 30px rgba(13,148,136,0.4)" }}
                        >
                            Live Demo
                            <ArrowRight size={22} />
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-20"
                        style={{ background: "linear-gradient(135deg, #2dd4bf, #6366f1)" }} />
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        <div className="w-full h-64 sm:h-80 lg:h-[400px] rounded-[2rem] sm:rounded-[3rem] border-4 sm:border-8 border-white/10 shadow-2xl bg-slate-900/40 backdrop-blur-md flex items-center justify-center overflow-hidden">
                            <img src={heroImg} alt="PharmacyNext AI Dashboard" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl flex items-center gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                <ShieldPlus size={20} className="sm:w-[24px] sm:h-[24px]" />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Interaction Check</p>
                                <p className="text-xs sm:text-sm font-black text-emerald-600 leading-none">100% Secure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PharmacyNextAIHero;
