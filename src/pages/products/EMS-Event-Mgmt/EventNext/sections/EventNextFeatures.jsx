import React from "react";
import { Ticket, Wifi, CreditCard, BarChart2, Smartphone, Shield } from "lucide-react";

const featureRows = [
    {
        icon: <Ticket size={32} />,
        title: "Intelligent Ticketing",
        desc: "Revolutionary ticketing engine with dynamic pricing, vendor-specific allocations, and waitlist automation built in.",
        color: "from-blue-500 to-indigo-600",
        shadowColor: "rgba(37,99,235,0.35)",
        align: "left",
    },
    {
        icon: <Wifi size={32} />,
        title: "Revolutionary Access",
        desc: "Multi-lane QR scanning at entry points with real-time head-count and vendor-specific gate management — even offline.",
        color: "from-indigo-500 to-blue-500",
        shadowColor: "rgba(79,70,229,0.35)",
        align: "right",
    },
    {
        icon: <CreditCard size={32} />,
        title: "Multivendor Management",
        desc: "Onboard and manage multiple vendors with individual performance tracking, automated revenue splitting, and payouts.",
        color: "from-cyan-500 to-blue-500",
        shadowColor: "rgba(6,182,212,0.35)",
        align: "left",
    },
    {
        icon: <BarChart2 size={32} />,
        title: "Unified CRM & Analytics",
        desc: "Advanced unified CRM for attendees and vendors with real-time sales maps, per-vendor attendance, and revenue alerts.",
        color: "from-blue-400 to-indigo-400",
        shadowColor: "rgba(96,165,250,0.35)",
        align: "right",
    },
    {
        icon: <Smartphone size={32} />,
        title: "Branded Vendor Portal",
        desc: "Dedicated dashboard for vendors with real-time sales reporting, ticket management, and attendee engagement tools.",
        color: "from-blue-600 to-indigo-700",
        shadowColor: "rgba(30,58,138,0.35)",
        align: "left",
    },
    {
        icon: <Shield size={32} />,
        title: "Global Event Sync",
        desc: "Seamless ticket validation and data synchronization across distributed multivendor locations with cross-event support.",
        color: "from-indigo-400 to-blue-400",
        shadowColor: "rgba(129,140,248,0.35)",
        align: "right",
    },
];

const EventNextFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: "#0c0a1a" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #2563eb, transparent)" }} />
                <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #1d4ed8, transparent)" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-blue-400 font-bold text-sm uppercase tracking-widest block">Features</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Power Every Stage of Your{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #fbbf24, #1d4ed8)" }}>
                            Event Next Journey
                        </span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg mt-4">
                        Six revolutionary modules designed for the future of multivendor event management.
                    </p>
                </div>

                <div className="space-y-6">
                    {featureRows.map((f, i) => (
                        <div
                            key={i}
                            className={`group flex flex-col ${f.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500 cursor-default`}
                            style={{ "--shadow-color": f.shadowColor }}
                        >
                            {/* Icon box */}
                            <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                style={{ boxShadow: `0 8px 30px ${f.shadowColor}` }}>
                                {f.icon}
                            </div>
                            {/* Text */}
                            <div className="flex-1 text-center md:text-left space-y-2">
                                <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">{f.title}</h3>
                                <p className="text-white/60 leading-relaxed">{f.desc}</p>
                            </div>
                            {/* Glow hover line */}
                            <div className={`hidden md:block w-1 h-16 rounded-full bg-gradient-to-b ${f.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventNextFeatures;
