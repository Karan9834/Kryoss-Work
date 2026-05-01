import React, { useRef } from "react";
import { Monitor, Car, Zap, Layers, TrendingUp, Tv } from "lucide-react";

const features = [
    {
        icon: <Monitor size={28} />,
        title: "Self-Service Kiosks",
        desc: "Branded touchscreen ordering with upsell prompts, combo suggestions, and dietary filters. Reduce perceived wait times and increase average order value by 22%.",
        gradient: "from-orange-500 to-amber-400",
        fill: "rgba(249,115,22,0.08)",
    },
    {
        icon: <Car size={28} />,
        title: "Drive-Thru Sync",
        desc: "Dual-screen drive-thru integration with order confirmation displays, kitchen sequencing, and projected wait-timer boards that update in real time.",
        gradient: "from-red-500 to-orange-500",
        fill: "rgba(239,68,68,0.08)",
    },
    {
        icon: <Zap size={28} />,
        title: "Rapid Checkout",
        desc: "One-tap reorder for reward members, contactless tap-to-pay at kiosk and counter, and sub-5-second transaction confirmation.",
        gradient: "from-amber-500 to-yellow-400",
        fill: "rgba(245,158,11,0.08)",
    },
    {
        icon: <Layers size={28} />,
        title: "Combo Management",
        desc: "Build and modify combo meals from HQ, run limited-time offers on a schedule, and synchronize pricing changes across all locations instantly.",
        gradient: "from-orange-600 to-red-500",
        fill: "rgba(234,88,12,0.08)",
    },
    {
        icon: <TrendingUp size={28} />,
        title: "Franchise Scaling",
        desc: "Central HQ dashboard for brand standards enforcement, per-location performance scoring, bulk menu pushes, and consolidated P&L visibility.",
        gradient: "from-yellow-500 to-amber-500",
        fill: "rgba(234,179,8,0.08)",
    },
    {
        icon: <Tv size={28} />,
        title: "Digital Menu Boards",
        desc: "Cloud-controlled digital menu screens that update automatically based on time of day, item availability, and LTO activation schedules.",
        gradient: "from-red-600 to-orange-500",
        fill: "rgba(220,38,38,0.08)",
    },
];

const QsrFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #7c2d12 0%, #c2410c 40%, #ea580c 80%, #f97316 100%)" }}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl"
                    style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-orange-300 font-bold text-sm uppercase tracking-widest block">Features</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Six Tools That{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #fef08a, #fbbf24, #fed7aa)" }}>
                            Run the Rush Hour
                        </span>
                    </h2>
                    <p className="text-orange-100/60 max-w-2xl mx-auto text-lg mt-4">
                        Every feature built for speed, precision and scale — the three pillars of fast-casual success.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="group relative border border-white/10 rounded-3xl p-8 cursor-default overflow-hidden transition-all duration-500 hover:border-orange-300/40 hover:shadow-2xl bg-white/5 backdrop-blur-sm"
                        >
                            {/* Bottom-up fill hover effect */}
                            <div className="absolute inset-0 rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                                style={{ background: f.fill, clipPath: "inset(100% 0 0 0)", animation: "none" }} />
                            <div className="absolute inset-0 rounded-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                                style={{ background: f.fill }}
                            >
                                <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full transition-all duration-500 rounded-3xl"
                                    style={{ background: f.fill }} />
                            </div>

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {f.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                                <p className="text-orange-100/60 text-sm leading-relaxed">{f.desc}</p>
                            </div>

                            {/* Left border accent */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${f.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-l-3xl`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QsrFeatures;
