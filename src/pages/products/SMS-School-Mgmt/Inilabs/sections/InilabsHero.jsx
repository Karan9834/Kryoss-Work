import React from "react";
import { Download, Users, Star, ArrowRight, Sparkles, BookOpen, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import heroImg from "../../../../../assets/Inilabs/1....jpeg";

const InilabsHero = () => {
    return (
        <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-12 lg:py-0"
            style={{ background: "linear-gradient(135deg, #065f46 0%, #059669 40%, #10b981 70%, #6366f1 100%)" }}>

            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #60a5fa, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full opacity-30"
                    style={{ background: "radial-gradient(circle, #a7f3d0, transparent 70%)" }} />
                {/* School patterns - books/grids */}
                <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-300/30 bg-white/10 backdrop-blur-sm">
                        <Sparkles size={16} className="text-emerald-300" />
                        <span className="text-emerald-100 text-sm font-bold tracking-wide uppercase">All-In-One School OS</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Revolutionize Your{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #6ee7b7, #3b82f6)" }}>
                            School Ecosystem.
                        </span>
                    </h1>

                    <p className="text-lg text-emerald-50/80 max-w-xl leading-relaxed">
                        iNiLabs School Management System provides a comprehensive digital infrastructure for modern K-12 schools.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 sm:gap-8 py-6 border-t border-white/10">
                        {[
                            { icon: <BookOpen size={20} />, label: "Modules", value: "45+" },
                            { icon: <Clock size={20} />, label: "Automation", value: "Real-time" },
                            { icon: <ShieldCheck size={20} />, label: "Secure Data", value: "256-bit" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-300 flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg sm:text-xl leading-none">{stat.value}</p>
                                    <p className="text-emerald-200/60 text-[10px] sm:text-xs mt-1 font-medium">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a
                            href="https://preview.codecanyon.net/item/inilabs-school-management-system-express/full_screen_preview/11630340"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #059669, #4f46e5)", boxShadow: "0 8px 30px rgba(5,150,105,0.4)" }}
                        >
                            Live Demo
                            <ArrowRight size={22} />
                        </a>
                        <a
                            href="/company/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                        >
                            <MessageCircle size={22} />
                            Let's Discuss
                            <ArrowRight size={22} />
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative mt-8 lg:mt-0">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-20"
                        style={{ background: "linear-gradient(135deg, #34d399, #6366f1)" }} />
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        <div className="w-full h-64 sm:h-80 lg:h-[400px] rounded-[2rem] sm:rounded-[3rem] border-4 sm:border-8 border-white/10 shadow-2xl bg-emerald-950/40 backdrop-blur-md flex items-center justify-center overflow-hidden">
                            <img src={heroImg} alt="iNiLabs Dashboard" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InilabsHero;
