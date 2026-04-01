import React from 'react';
import { ShieldCheck, Zap, DatabaseBackup, Heart } from 'lucide-react';

const HMSWhyUs = () => {
    const reasons = [
        {
            icon: <Heart size={24} />,
            title: "Patient-First Flow",
            desc: "Reduces wait times by 40% with intelligent routing.",
            color: "text-rose-400",
            bg: "bg-rose-900/20 border-rose-500/30"
        },
        {
            icon: <Zap size={24} />,
            title: "Instant Diagnostics",
            desc: "LIS & PACS integration for immediate doctor access.",
            color: "text-amber-400",
            bg: "bg-amber-900/20 border-amber-500/30"
        },
        {
            icon: <DatabaseBackup size={24} />,
            title: "Zero Data Silos",
            desc: "A unified ecosystem eradicating duplicate data entry.",
            color: "text-blue-400",
            bg: "bg-blue-900/20 border-blue-500/30"
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Bulletproof Security",
            desc: "HIPAA-compliant, end-to-end encrypted architecture.",
            color: "text-emerald-400",
            bg: "bg-emerald-900/20 border-emerald-500/30"
        }
    ];

    return (
        <section className="py-24 bg-[#0a192f] relative overflow-hidden">
            {/* Dark background decorations */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    {/* Section Subheading */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-teal-500"></div>
                        <span className="text-teal-400 font-semibold text-sm tracking-wider uppercase">
                            Why Choose Us
                        </span>
                        <div className="w-8 h-px bg-cyan-500"></div>
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-semibold text-white leading-tight">
                        Why Choose Our <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                            Hospital Platform?
                        </span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mt-4">
                        Legacy systems slow you down. Our platform is built on a modern stack designed to increase operational throughput and drastically improve patient satisfaction scores.
                    </p>
                </div>

                {/* 2x2 Grid Layout */}
                <div className="grid md:grid-cols-2 gap-8 z-20 relative max-w-5xl mx-auto">
                    {reasons.map((reason, index) => (
                        <div key={index} className="p-8 rounded-3xl border backdrop-blur-md shadow-xl transition-all hover:-translate-y-2 hover:bg-slate-800/80 bg-slate-900/60 border-slate-700 flex flex-col justify-center items-center text-center">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${reason.bg} ${reason.color}`}>
                                {reason.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{reason.title}</h3>
                            <p className="text-slate-400 text-base">{reason.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HMSWhyUs;
