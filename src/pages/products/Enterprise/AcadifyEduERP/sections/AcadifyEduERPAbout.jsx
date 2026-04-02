import React from "react";
import { CheckCircle } from "lucide-react";
import acadifyAbout from "@/assets/acadifyeduerp-img/acadifyeduerpabout.webp";

const AcadifyEduERPAbout = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden text-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Visual Space (IMAGE ON LEFT) */}
                    <div className="relative group mb-12 lg:mb-0 order-2 lg:order-1">
                        <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-slate-100 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.02]">
                            <img
                                src={acadifyAbout}
                                alt="Acadify Illustration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative floating badge */}
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-blue-900 text-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl z-20">
                            <p className="text-blue-300 font-black text-3xl sm:text-4xl md:text-5xl mb-1 leading-none">98%</p>
                            <p className="text-[10px] sm:text-xs font-bold text-blue-100 uppercase tracking-widest leading-none">Efficiency Target</p>
                        </div>
                        <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-blue-100 rounded-full blur-[100px] opacity-40 -z-0 animate-pulse" />
                    </div>

                    {/* Right: Content (CONTENT ON RIGHT) */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block font-medium">Empowering Institutions</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                                Education Management,{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                    Redefined for Modern Schools.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold tracking-tight">
                                Traditional institution systems are slow, manual, and prone to error. AcadifyEdu leverages advanced automation to bridge the gap between administrators, teachers, and students.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Unified campus management hub",
                                "Real-time attendance & tracking",
                                "Automated exam & result engine",
                                "Advanced payroll & HR alerts",
                                "Integrated parent-teacher tools",
                                "Scalable cloud infrastructure"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="text-blue-50" size={14} />
                                    </div>
                                    <span className="text-slate-700 font-bold text-sm  tracking-tighter">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AcadifyEduERPAbout;
