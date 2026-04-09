import React from 'react';
import { Globe, Shield, Clock, Headphones, TrendingUp, Layers, Zap, Star, Cpu } from 'lucide-react';

const reasons = [
    {
        icon: Globe,
        title: "Global Reach",
        desc: "Connect travelers to 120+ countries with multi-language and multi-currency support built in from day one.",
        gradient: "from-sky-400 to-cyan-500",
        glow: "shadow-sky-200",
        span: "lg:col-span-2",
        tag: "Worldwide",
    },
    {
        icon: Zap,
        title: "Lightning Fast",
        desc: "Sub-100ms search results with real-time availability sync from GDS and supplier APIs.",
        gradient: "from-amber-400 to-orange-500",
        glow: "shadow-amber-200",
        span: "",
        tag: "Performance",
    },
    {
        icon: Shield,
        title: "Secure Payments",
        desc: "PCI-DSS compliant infrastructure with fraud detection and 256-bit encrypted transactions.",
        gradient: "from-teal-400 to-emerald-500",
        glow: "shadow-teal-200",
        span: "",
        tag: "Security",
    },
    {
        icon: Headphones,
        title: "24/7 Expert Support",
        desc: "Round-the-clock support from travel domain specialists and technical engineers — always on standby for you.",
        gradient: "from-indigo-400 to-blue-500",
        glow: "shadow-indigo-200",
        span: "lg:col-span-2",
        tag: "Support",
    },
    {
        icon: TrendingUp,
        title: "Revenue Boosting Tools",
        desc: "Dynamic pricing, upsell modules, and affiliate commission management to maximize every booking.",
        gradient: "from-purple-400 to-violet-500",
        glow: "shadow-purple-200",
        span: "",
        tag: "Growth",
    },
    {
        icon: Layers,
        title: "Scalable Architecture",
        desc: "Microservices-based backend built to handle millions of concurrent search queries without downtime.",
        gradient: "from-rose-400 to-pink-500",
        glow: "shadow-rose-200",
        span: "",
        tag: "Tech",
    },
    {
        icon: Cpu,
        title: "AI Smart Recommendations",
        desc: "Leverage AI-driven insights to deliver personalized travel suggestions, increasing user engagement and bookings.",
        gradient: "from-cyan-400 to-blue-500",
        glow: "shadow-cyan-200",
        span: "",
        tag: "AI",
    },
];

const TourTravelWhyUs = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0C1A2E 100%)' }}>
            {/* Ambient glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500 rounded-full blur-[180px] opacity-5 pointer-events-none -mt-32 -mr-32"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500 rounded-full blur-[160px] opacity-5 pointer-events-none -mb-20 -ml-20"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
                    <div>
                        <span className="text-sky-400 font-bold text-sm uppercase tracking-[0.3em] block mb-4">Why Choose Us</span>
                        <h2 className="text-2xl lg:text-3xl font-semibold text-white leading-tight">
                            Why Top <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Travel Businesses</span><br />
                            Trust Our Platform
                        </h2>
                    </div>
                    <p className="text-slate-400 text-base leading-relaxed lg:max-w-md">
                        From boutique travel agencies to enterprise OTAs, our proven technology helps travel businesses scale faster and serve customers better.
                    </p>
                </div>

                {/* Bento-box colorful grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(180px,auto)]">
                    {reasons.map((r, idx) => (
                        <div
                            key={idx}
                            className={`group relative rounded-3xl overflow-hidden cursor-default ${r.span} shadow-lg ${r.glow} hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01]`}
                        >
                            {/* Vivid gradient background — always visible */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${r.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            {/* Decorative circles */}
                            <div className="absolute -top-8 -right-8 w-40 h-40 bg-white/10 rounded-full group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
                            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/10 rounded-full group-hover:scale-110 transition-transform duration-500 delay-100 pointer-events-none"></div>

                            {/* Card content */}
                            <div className="relative z-10 p-7 h-full flex flex-col justify-between gap-4">
                                {/* Top: tag + icon */}
                                <div className="flex items-start justify-between">
                                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm">
                                        {r.tag}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl bg-white/20 group-hover:bg-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                                        <r.icon size={24} />
                                    </div>
                                </div>

                                {/* Bottom: title + desc */}
                                <div>
                                    <h3 className="text-white text-base font-bold mb-2">{r.title}</h3>
                                    <p className="text-white/75 text-sm leading-relaxed">{r.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom strip */}
                <div className="mt-16 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-10 opacity-40 hover:opacity-70 transition-opacity duration-500">
                    <span className="font-bold text-base uppercase tracking-widest flex items-center gap-2 text-sky-400">
                        <Globe size={18} /> TravelNest
                    </span>
                    <span className="font-bold text-base uppercase tracking-widest flex items-center gap-2 text-amber-400">
                        <Shield size={18} /> SafeFare
                    </span>
                    <span className="font-bold text-base uppercase tracking-widest flex items-center gap-2 text-teal-400">
                        <TrendingUp size={18} /> FlightCore
                    </span>
                    <span className="font-bold text-base uppercase tracking-widest flex items-center gap-2 text-purple-400">
                        <Star size={18} /> JourneyPro
                    </span>
                </div>
            </div>
        </section>
    );
};

export default TourTravelWhyUs;
