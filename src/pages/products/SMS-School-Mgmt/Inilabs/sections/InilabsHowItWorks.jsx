import React from "react";
import { UserPlus, Settings2, Database, ShieldCheck } from "lucide-react";

const InilabsHowItWorks = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20 lg:mb-24 space-y-4">
                    <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest block">Implementation Flow</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 leading-tight">
                        Seamless & Simple{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">
                            Digital Journey.
                        </span>
                    </h2>
                </div>

                <div className="relative mt-20 max-w-4xl mx-auto">
                    {/* Vertical Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-emerald-100 -z-0" />

                    <div className="space-y-12 sm:space-y-16">
                        {[
                            { icon: <UserPlus size={32} />, title: "Enrollment", desc: "Automate leads and admissions documents in one unified inbox." },
                            { icon: <Settings2 size={32} />, title: "Configuration", desc: "Set up grades, departments, and fee structures in minutes." },
                            { icon: <Database size={32} />, title: "Data Import", desc: "Easily migrate existing school records with our CSV import tools." },
                            { icon: <ShieldCheck size={32} />, title: "Go Live", desc: "Launch your school's digital portal and start automating instantly." },
                        ].map((step, idx) => (
                            <div key={idx} className="group relative flex items-start gap-8 sm:gap-12 pl-4 sm:pl-0">
                                {/* Number Sphere */}
                                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-slate-900 rounded-full flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-[0_20px_50px_rgba(15,23,42,0.3)] z-10 transition-transform group-hover:scale-110">
                                    {idx + 1}
                                </div>

                                {/* Content Card with Glass-cut effect */}
                                <div className="flex-1 bg-white border-l-8 border-emerald-500 rounded-3xl p-8 sm:p-10 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(16,185,129,0.1)] transition-all duration-500 hover:-translate-x-2">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:justify-between">
                                        <div className="space-y-3">
                                            <div className="text-emerald-600 mb-2">
                                                {React.cloneElement(step.icon, { size: 24 })}
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tighter leading-none group-hover:text-emerald-600 transition-colors">{step.title}</h3>
                                            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-bold tracking-tight max-w-lg">
                                                {step.desc}
                                            </p>
                                        </div>
                                        <div className="hidden sm:block text-[64px] font-bold text-slate-100 italic transition-all group-hover:text-emerald-500/10">
                                            0{idx + 1}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InilabsHowItWorks;
