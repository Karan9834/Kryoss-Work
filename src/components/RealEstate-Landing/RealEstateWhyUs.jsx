import React from 'react';
import { Award, Shield, Zap, Headphones, BarChart3, Globe } from 'lucide-react';

const RealEstateWhyUs = () => {
    const reasons = [
        {
            icon: Award,
            title: "Proven Track Record",
            desc: "Powering 100+ real estate platforms globally with billions in managed property value.",
            gradient: "from-emerald-500 to-teal-500",
        },
        {
            icon: Shield,
            title: "Enterprise Security",
            desc: "Bank-grade encryption, GDPR compliance, and fraud detection built at every layer.",
            gradient: "from-teal-500 to-cyan-500",
        },
        {
            icon: Zap,
            title: "Blazing Fast Search",
            desc: "Sub-100ms property search powered by ElasticSearch for a frictionless UX.",
            gradient: "from-amber-500 to-yellow-500",
        },
        {
            icon: Headphones,
            title: "Dedicated Support",
            desc: "24/7 technical support and a dedicated account manager for every client.",
            gradient: "from-indigo-500 to-blue-500",
        },
        {
            icon: BarChart3,
            title: "Data-Driven Insights",
            desc: "Real-time market intelligence, pricing trends, and ROI analytics at your fingertips.",
            gradient: "from-orange-500 to-rose-500",
        },
        {
            icon: Globe,
            title: "Multi-City Scalability",
            desc: "Built to scale from a single city launch to a nationwide property marketplace.",
            gradient: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-[140px] opacity-10 -mt-20 -mr-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-[140px] opacity-10 -mb-20 -ml-20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-[0.3em] block mb-4">Why Choose Us</span>
                    <h2 className="text-2xl lg:text-3xl font-semibold leading-tight mb-4">
                        Why Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Property Developers</span> &{" "}
                        <span className="text-amber-400">Agencies</span> Choose Us
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        We combine cutting-edge technology with deep real estate domain expertise to deliver platforms that agents and buyers love.
                    </p>
                </div>

                {/* Gradient icon cards — different look from taxi's number cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((r, idx) => (
                        <div
                            key={idx}
                            className="group p-7 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 cursor-default"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${r.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                <r.icon size={26} />
                            </div>
                            <h3 className="text-base font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{r.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom partners */}
                <div className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-12 opacity-40 hover:opacity-70 transition-opacity duration-500">
                    <span className="font-bold text-lg uppercase tracking-widest flex items-center gap-2 text-emerald-400">
                        <Award size={20} /> PropElite
                    </span>
                    <span className="font-bold text-lg uppercase tracking-widest flex items-center gap-2 text-amber-400">
                        <Globe size={20} /> LandVault
                    </span>
                    <span className="font-bold text-lg uppercase tracking-widest flex items-center gap-2 text-teal-400">
                        <BarChart3 size={20} /> EstateIQ
                    </span>
                </div>
            </div>
        </section>
    );
};

export default RealEstateWhyUs;
