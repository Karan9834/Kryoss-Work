import React from "react";
import { CheckCircle } from "lucide-react";
import mentorAbout from "@/assets/mentorlms-img/mentorlmsabout.png";

const MentorLMSAbout = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden text-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Visual Space (IMAGE ON LEFT) */}
                    <div className="relative group mb-12 lg:mb-0 order-2 lg:order-1">
                        <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-slate-100 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.02]">
                            <img
                                src={mentorAbout}
                                alt="Mentor Course Designer"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Decorative floating badge */}
                        {/* <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-purple-900 text-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl z-20">
                            <p className="text-fuchsia-300 font-black text-3xl sm:text-4xl md:text-5xl mb-1 leading-none">99%</p>
                            <p className="text-[10px] sm:text-xs font-bold text-fuchsia-100 uppercase tracking-widest leading-none">Uptime Guarantee</p>
                        </div> */}
                        <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-purple-100 rounded-full blur-[100px] opacity-40 -z-0 animate-pulse" />
                    </div>

                    {/* Right: Content (CONTENT ON RIGHT) */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <span className="text-purple-600 font-bold text-sm uppercase tracking-widest block font-medium">Global Knowledge Hub</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                                Education,{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
                                    Redefined for All.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold tracking-tight">
                                Breaking down barriers to quality education. Mentor LMS provides the tools to build immersive learning experiences that engage users and drive institutional growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Interactive Course Builder",
                                "Global Content Delivery",
                                "AI-Powered Assessments",
                                "Seamless Video Streaming",
                                "Gamified Learning Paths",
                                "Full Mobile Compatibility"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-purple-50/50 border border-purple-100 hover:bg-purple-50 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="text-purple-50" size={14} />
                                    </div>
                                    <span className="text-slate-700 font-bold text-ms  tracking-tighter">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentorLMSAbout;
