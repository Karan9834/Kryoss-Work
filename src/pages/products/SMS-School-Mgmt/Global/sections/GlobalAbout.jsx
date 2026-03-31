import React from "react";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/globalsms-img/globalsmsabout.jpg";

const GlobalAbout = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden text-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Visual Space (IMAGE ON LEFT) */}
                    <div className="relative group mb-12 lg:mb-0">
                        <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border-2 border-slate-100 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src={aboutImg} alt="Global Academic Center" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative floating badge */}
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-slate-900 text-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl z-20">
                            <p className="text-yellow-400 font-black text-2xl sm:text-3xl md:text-4xl mb-1 leading-none">100+</p>
                            <p className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Partner Entities</p>
                        </div>
                        <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-slate-100 rounded-full blur-3xl opacity-60 -z-0" />
                    </div>

                    {/* Right: Content (CONTENT ON RIGHT) */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200">
                                <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Legacy of Excellence</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                                Redefining Education through{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-600">
                                    Global Excellence.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold tracking-tight">
                                Global SMS is designed for institutions that demand the benchmark in digital infrastructure. From multi-campus synchronization to complex research grant management, we provide the tools for modern academic leadership.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-5">
                            {[
                                "Scalable architecture for multi-campus institutions",
                                "Advanced faculty workload & research management",
                                "Real-time institutional performance analytics",
                                "Regulatory compliance & accreditation tracking"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-100 hover:bg-red-50/30 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-red-800 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="text-yellow-400" size={14} />
                                    </div>
                                    <span className="text-slate-800 font-bold text-sm tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalAbout;
