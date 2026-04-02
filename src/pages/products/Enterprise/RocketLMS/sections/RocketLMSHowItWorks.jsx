import React from "react";
import { ClipboardList, Rocket, CloudUpload, Globe, CheckCircle, ArrowRight } from "lucide-react";

const RocketLMSHowItWorks = () => {
    const steps = [
        {
            icon: <ClipboardList size={32} />,
            title: "Mission Briefing",
            desc: "Define your curriculum and organize your educational goals.",
            label: "Phase 01"
        },
        {
            icon: <CloudUpload size={32} />,
            title: "Ignition Stage",
            desc: "Upload content to our hyper-scaling infrastructure nodes.",
            iconColor: "text-orange-500"
        },
        {
            icon: <Rocket size={32} />,
            title: "Global Lift-off",
            desc: "Deploy core academy assets globally across the network.",
            iconColor: "text-red-600"
        },
        {
            icon: <Globe size={32} />,
            title: "Orbital Control",
            desc: "Scale your reach and manage your empire from mission control.",
            iconColor: "text-orange-600"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 lg:mb-24 space-y-4">
                    <span className="text-red-600 font-bold text-sm uppercase tracking-widest block font-medium">Platform Workflow</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        The Rocket{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                            Launch Roadmap.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative items-center">
                    {/* Connection lines for desktop */}
                    <div className="hidden lg:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-slate-100 -z-10" />

                    {steps.map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center space-y-8 group relative">
                            <div className={`w-20 h-20 rounded-[2rem] bg-white shadow-2xl border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-red-400 ${idx % 2 === 0 ? "text-orange-600" : "text-red-500"}`}>
                                {step.icon}
                                {/* Number indicator */}
                                {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-xs ring-4 ring-white shadow-xl">
                                    0{idx + 1}
                                </div> */}
                            </div>

                            <div className="space-y-4 px-4 h-full flex flex-col items-center">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-slate-800 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                                <div className="mt-4 flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full font-bold text-[10px] uppercase tracking-widest border border-red-100">
                                    <CheckCircle size={12} />
                                    Phase Active
                                </div>
                            </div>

                            {/* Mobile only arrows between steps */}
                            {idx < steps.length - 1 && (
                                <div className="lg:hidden py-4 text-slate-600">
                                    <ArrowRight size={24} className="rotate-90" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default RocketLMSHowItWorks;
