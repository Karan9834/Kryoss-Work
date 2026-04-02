import React from "react";
import { CheckCircle } from "lucide-react";
import rocketAbout from "@/assets/rocketlms-img/rocketlmsabout.png";

const RocketLMSAbout = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden text-slate-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Visual Space (IMAGE ON LEFT) */}
                    <div className="relative group mb-12 lg:mb-0 order-2 lg:order-1">
                        <div className="relative z-10 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] bg-slate-50 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] overflow-hidden border border-slate-100 flex items-center justify-center transition-all duration-700 group-hover:scale-[1.02]">
                            <img
                                src={rocketAbout}
                                alt="Rocket Performance Lab"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        {/* Decorative floating badge */}
                        <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-red-900 text-white p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] md:rounded-[3rem] shadow-2xl z-20">
                            <p className="text-orange-300 font-black text-3xl sm:text-4xl md:text-5xl mb-1 leading-none">0.2s</p>
                            <p className="text-[10px] sm:text-xs font-bold text-orange-100 uppercase tracking-widest leading-none">Server Response</p>
                        </div>
                        <div className="absolute -top-10 -left-10 w-48 h-48 sm:w-64 sm:h-64 bg-red-100 rounded-full blur-[100px] opacity-40 -z-0 animate-pulse" />
                    </div>

                    {/* Right: Content (CONTENT ON RIGHT) */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-4">
                            <span className="text-red-600 font-bold text-sm uppercase tracking-widest block font-medium">Performance Engineering</span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                                Education at the{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                                    Speed of Light.
                                </span>
                            </h2>
                            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-bold tracking-tight">
                                Don't let slow platforms throttle your growth. Rocket LMS is precision-engineered for maximum performance, ensuring your students never wait for knowledge.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Warp-Speed Content Delivery",
                                "Hyper-Responsive UI",
                                "Auto-Scaling Infrastructure",
                                "Low-Latency Live Classes",
                                "Propulsive Marketing Tools",
                                "Enterprise-Grade Stability"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-red-50/50 border border-red-100 hover:bg-red-50 transition-colors">
                                    <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle className="text-red-50" size={14} />
                                    </div>
                                    <span className="text-slate-700 font-bold text-sm tracking-tighter">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RocketLMSAbout;
