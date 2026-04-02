import React from "react";
import { Package, CreditCard, Users, BarChart, Truck, Database, Zap, ShieldCheck } from "lucide-react";

const MultistoreERPFeatures = () => {
    const featureNodes = [
        {
            title: "Inventory Master",
            desc: "Centralized stock control with automated replenishment triggers across 100+ locations.",
            metric: "99.9% Accuracy",
            icon: <Package size={32} />,
            color: "text-teal-400"
        },
        {
            title: "Unified Billing POS",
            desc: "Offline-first POS nodes with real-time cloud synchronization for uninterrupted multi-site sales.",
            metric: "0ms Latency",
            icon: <CreditCard size={32} />,
            color: "text-indigo-400"
        },
        {
            title: "Global CRM Hub",
            desc: "Universal customer profiles linked across all retail points with instant loyalty processing.",
            metric: "Instant Sync",
            icon: <Users size={32} />,
            color: "text-teal-400"
        },
        {
            title: "BI Command Center",
            desc: "High-precision analytics engine delivering branch-wise profitability and sales heatmaps.",
            metric: "Live Insight",
            icon: <BarChart size={32} />,
            color: "text-indigo-400"
        },
        {
            title: "Autonomous Logistics",
            desc: "End-to-end fleet tracking and AI route optimization for decentralized product distribution.",
            metric: "24/7 Tracking",
            icon: <Truck size={32} />,
            color: "text-teal-400"
        },
        {
            title: "Core Integrity",
            desc: "Hardware-level security protocols ensuring data sovereignty across the entire merchant network.",
            metric: "Max Security",
            icon: <ShieldCheck size={32} />,
            color: "text-indigo-400"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)" }}>

            {/* Simulated Data Connection Network Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            {/* Glowing orbs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-20 space-y-4">
                    <span className="text-teal-400 font-bold text-sm uppercase tracking-widest block font-medium">Enterprise Features</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        The Connected{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">
                            Command Control Hub.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featureNodes.map((node, i) => (
                        <div key={i} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-teal-500/30 overflow-hidden">

                            {/* Connectivity Line (Simulated CSS) */}
                            <div className="absolute top-0 right-0 w-24 h-px bg-gradient-to-l from-teal-500/0 via-teal-500/20 to-teal-500/0 group-hover:from-teal-500/50 transition-all duration-500" />

                            <div className="relative z-10 space-y-6">
                                <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center ${node.color} transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white`}>
                                    {node.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight  leading-none transition-colors group-hover:text-teal-400 italic">
                                        {node.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm lg:text-base leading-relaxed font-medium">
                                        {node.desc}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                                    <div className="flex items-center gap-2">
                                        <Zap size={12} className="text-teal-400 animate-pulse" />
                                        <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest leading-none">System Load: Low</span>
                                    </div>
                                    <div className="px-3 py-1 bg-teal-500/10 rounded-full border border-teal-500/20 text-teal-400 text-[10px] font-black uppercase tracking-widest leading-none">
                                        {node.metric}
                                    </div>
                                </div>
                            </div>

                            {/* Node Scan Effect */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-teal-500/10 group-hover:h-full group-hover:bg-teal-500/5 transition-all duration-700 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MultistoreERPFeatures;
