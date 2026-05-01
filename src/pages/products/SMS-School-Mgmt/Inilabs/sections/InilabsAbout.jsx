import React from "react";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "../../../../../assets/Inilabs/2....jpeg";

const InilabsAbout = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Visual Space (IMAGE ON LEFT) */}
                    <div className="relative group mb-12 lg:mb-0">
                        <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-2 border-emerald-50 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src={aboutImg} alt="iNiLabs Central Hub" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-emerald-50 rounded-full blur-3xl opacity-60 -z-0" />
                    </div>

                    {/* Right: Content (CONTENT ON RIGHT) */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100">
                                <span className="text-emerald-700 font-bold text-xs uppercase tracking-widest leading-relaxed">Integrated Learning</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                                Empowering Schools with{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-indigo-600">
                                    Next-Gen Technology.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold tracking-tight">
                                iNiLabs SMS is built on modern, secure, and robust technology to help educational institutions manage themselves with absolute ease. Our platform simplifies daily operations, allowing educators to focus on what matters most: the students.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Complete Student Lifecycle Mgmt",
                                "Automated Finance & Fee Collection",
                                "Dynamic Exam & Grading Engines",
                                "Integrated Library & Inventory",
                                "Unified Communication Platform",
                                "Powerful Analytics & Reporting"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all">
                                    <CheckCircle2 className="text-emerald-600 flex-shrink-0" size={20} />
                                    <span className="text-slate-800 font-bold text-sm tracking-tighter leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InilabsAbout;
