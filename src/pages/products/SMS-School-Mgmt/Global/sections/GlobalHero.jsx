import React from "react";
import { ArrowRight, Globe, Award, ShieldCheck, GraduationCap, MessageCircle } from "lucide-react";
import heroImg from "@/assets/globalsms-img/globalsmshero.jpg";

const GlobalHero = () => {
    return (
        <section className="relative w-full min-h-screen lg:min-h-[90vh] overflow-hidden flex items-center py-12 lg:py-0"
            style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #334155 100%)" }}>

            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #facc15, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #991b1b, transparent 70%)" }} />
                {/* World map or grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
                {/* Left Content */}
                <div className="space-y-8 text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-white/5 backdrop-blur-sm">
                        <Globe size={16} className="text-yellow-400" />
                        <span className="text-yellow-100 text-sm font-bold tracking-wide uppercase">Unified University Platform</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        The Global Standard in{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #facc15, #f87171)" }}>
                            Higher Education.
                        </span>
                    </h1>

                    <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
                        Global School Management is an enterprise-grade ERP designed for universities and multi-campus institutions. Manage complex enrollments, faculty research, and alumni networks effortlessly.
                    </p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-6 sm:gap-8 py-6 border-t border-white/10">
                        {[
                            { icon: <Award size={20} />, label: "Accredited", value: "Global" },
                            { icon: <GraduationCap size={20} />, label: "Students", value: "500K+" },
                            { icon: <ShieldCheck size={20} />, label: "Security", value: "ISO 27001" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-yellow-400 border border-white/10 flex-shrink-0">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg sm:text-xl leading-none">{stat.value}</p>
                                    <p className="text-slate-400 text-[10px] sm:text-xs mt-1 font-medium">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a
                            href="https://preview.codecanyon.net/item/global-multi-school-management-system-express/full_screen_preview/21975378"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #facc15, #fbbf24)", boxShadow: "0 8px 30px rgba(250,204,21,0.4)" }}
                        >
                            Live Demo
                            <ArrowRight size={22} />
                        </a>
                        <a
                            href="/company/contact"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white border border-white/20 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
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
                        style={{ background: "linear-gradient(135deg, #facc15, #ef4444)" }} />
                    <div className="relative z-10 w-full max-w-lg mx-auto">
                        <div className="w-full h-64 sm:h-80 lg:h-[400px] rounded-[2rem] sm:rounded-[3rem] border-4 sm:border-[12px] border-white/5 shadow-2xl bg-slate-800/80 flex items-center justify-center relative overflow-hidden group">
                           <img src={heroImg} alt="Global University Dashboard" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl skew-x-[-2deg]">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-1">Global Ranking</p>
                            <p className="text-xl sm:text-3xl font-black text-slate-900 leading-none">Top 1%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalHero;
