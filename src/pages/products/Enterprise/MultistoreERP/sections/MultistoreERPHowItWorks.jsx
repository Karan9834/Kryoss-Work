import React from "react";
import { Globe, Database, Store, Zap, ArrowRight } from "lucide-react";

const MultistoreERPHowItWorks = () => {
    const syncPhases = [
        {
            title: "Global HQ Config",
            desc: "Initialize your central business architecture, tax systems, and master inventory and link all your units.",
            icon: <Globe size={32} />,
            status: "Initialized",
            phase: "PHASE-01"
        },
        {
            title: "Cloud Data Bridge",
            desc: "Secure, high-speed data tunnels established to unify every transaction across your entire enterprise.",
            icon: <Database size={32} />,
            status: "Cloud Syncing",
            phase: "PHASE-02"
        },
        {
            title: "Multi-Site Rollout",
            desc: "Each branch terminal goes live with local POS storage, ensuring zero downtime operation.",
            icon: <Store size={32} />,
            status: "Network Live",
            phase: "PHASE-03"
        },
        {
            title: "Real-time Pulse",
            desc: "Synchronized stock levels, payroll, and global sales heatmaps accessible from your HQ nodes.",
            icon: <Zap size={32} />,
            status: "Operational",
            phase: "PHASE-04"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 lg:mb-28 space-y-4">
                    <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest block font-medium">Global Sync Pipeline</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 leading-tight tracking-tight">
                        Powering Your Empire{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-600">
                            in Four Digital Phases.
                        </span>
                    </h2>
                </div>

                <div className="relative">
                    {/* Horizontal Sync Wave Decoration for Desktop */}
                    <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10 overflow-hidden">
                        <div className="h-full w-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-shimmer" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                        {syncPhases.map((phase, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center space-y-8 group relative">
                                {/* Icon Portal */}
                                <div className="w-24 h-24 rounded-[2.5rem] bg-white shadow-2xl border border-slate-100 flex items-center justify-center text-indigo-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:border-indigo-400 group-hover:bg-indigo-900 group-hover:text-white">
                                    {phase.icon}
                                    {/* Connectivity Status Orb */}
                                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full border-2 border-white shadow-lg animate-pulse" />
                                </div>

                                {/* Content Card */}
                                <div className="space-y-6 flex flex-col items-center h-full">
                                    <div className="space-y-3">
                                        <div className="flex justify-center flex-wrap gap-2 mb-2">
                                            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 font-black text-[10px] uppercase tracking-widest rounded-full border border-indigo-100">
                                                {phase.phase}
                                            </span>
                                            <span className="px-3 py-1 bg-teal-50 text-teal-600 font-black text-[10px] uppercase tracking-widest rounded-full border border-teal-100">
                                                {phase.status}
                                            </span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 tracking-tighter  leading-none transition-colors group-hover:text-indigo-600 ">
                                            {phase.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm lg:text-base leading-relaxed font-medium">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop Arrows Between Steps */}
                                {idx < syncPhases.length - 1 && (
                                    <div className="hidden lg:block absolute -right-10 top-8 text-slate-200">
                                        <ArrowRight size={24} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>


            </div>

            {/* Inline Animation Styles */}
            <style jsx>{`
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-shimmer {
                    animation: shimmer 3s infinite linear;
                }
            `}</style>
        </section>
    );
};

export default MultistoreERPHowItWorks;
