import React from "react";
import { Zap, Activity, Shield, Globe, Play, Cpu, BarChart, Users } from "lucide-react";

const RocketLMSFeatures = () => {
    const features = [
        {
            title: "Nitro Stream 4K",
            desc: "Zero-latency HLS video delivery with adaptive bitrate for an immersive learning experience.",
            icon: <Play size={32} />,
            accent: "from-orange-500 to-red-600"
        },
        {
            title: "Global Edge Hub",
            desc: "Deploy content across 24 global nodes instantly, ensuring worldwide performance.",
            icon: <Globe size={32} />,
            accent: "from-red-600 to-orange-400"
        },
        {
            title: "Mission Security",
            desc: "Industrial-grade WAF and DDoS protection integrated directly into the core engine.",
            icon: <Shield size={32} />,
            accent: "from-orange-600 to-red-700"
        },
        {
            title: "AI Analysis Ops",
            desc: "Advanced neural networks process student performance for real-time pedagogical insights.",
            icon: <Cpu size={32} />,
            accent: "from-red-500 to-orange-600"
        },
        {
            title: "Marketplace Velocity",
            desc: "High-speed monetization with one-click payment tunnels and automated payouts.",
            icon: <BarChart size={32} />,
            accent: "from-orange-400 to-red-500"
        },
        {
            title: "Mass Concurrency",
            desc: "Architected to handle upwards of 50,000+ simultaneous learners without performance drop.",
            icon: <Users size={32} />,
            accent: "from-red-700 to-orange-600"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-24 relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7c2d12 0%, #111827 100%)" }}>

            {/* Glowing Background Orbs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-12 lg:mb-20 space-y-4">
                    <span className="text-orange-400 font-bold text-sm uppercase tracking-widest block font-medium">Nitro Performance</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                        Propulsion Technology for{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                            Modern Academies.
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 hover:scale-[1.03] hover:border-orange-500/30 overflow-hidden"
                        >
                            {/* Card Glow Effect */}
                            <div className={`absolute -inset-2 w-full h-full bg-gradient-to-br ${feature.accent} opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500`} />

                            <div className="relative z-10 space-y-6">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.accent} flex items-center justify-center text-white shadow-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                    {feature.icon}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl lg:text-2xl font-bold text-white tracking-tight  leading-none">
                                        {feature.title}
                                    </h3>
                                    <p className="text-orange-50/60 text-sm lg:text-base leading-relaxed font-medium">
                                        {feature.desc}
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-2">
                                    <div className="h-1 w-12 bg-orange-600 rounded-full group-hover:w-20 transition-all duration-500" />
                                    <Zap size={14} className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RocketLMSFeatures;
