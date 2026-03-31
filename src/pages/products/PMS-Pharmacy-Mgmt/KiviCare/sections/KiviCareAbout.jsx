import React from "react";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/kivicarepms-img/kivicarepmsabout.webp";

const KiviCareAbout = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden text-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Visual Space (IMAGE ON LEFT) */}
                    <div className="relative group mb-12 lg:mb-0">
                        <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[550px] bg-sky-50/50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-2 border-dashed border-sky-100 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src={aboutImg} alt="KiviCare Hospital Sync" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative floating items */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-teal-100 rounded-full blur-[60px] sm:blur-[80px] -z-0 opacity-40 animate-pulse" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-48 sm:h-48 bg-sky-200 rounded-full blur-[60px] sm:blur-[80px] -z-0 opacity-30 delay-1000 animate-pulse" />
                    </div>

                    {/* Right: Content (CONTENT ON RIGHT) */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100">
                                <span className="text-sky-700 font-bold text-xs uppercase tracking-widest leading-none">Clinical Integration</span>
                            </div>
                             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                                Pharmacy Beyond the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-teal-600">
                                    Counter.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold tracking-tight">
                                KiviCare bridges the gap between the pharmacy, the ward, and the physician. Our hospital-specific PMS ensures that medication administration is tracked from procurement to the patient's bedside, reducing errors and improving outcome.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "In-patient & Out-patient billing",
                                "Ward stock & mini-store tracking",
                                "Direct physician-to-pharmacist sync",
                                "Nurse administration dashboard",
                                "Bulk procurement & supplier mgmt",
                                "Patient-medication profile history"
                            ].map((item, idx) => (
                                <div key={idx} className="group flex items-start gap-3 p-4 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/30 transition-all">
                                    <CheckCircle2 className="text-sky-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
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

export default KiviCareAbout;
