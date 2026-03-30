import React from "react";
import { Ticket, Wifi, CreditCard, BarChart2, Smartphone, Shield } from "lucide-react";

const featureRows = [
    {
        icon: <Ticket size={32} />,
        title: "High-Volume Ticketing",
        desc: "Handle tens of thousands of concurrent ticket purchases without slowdowns. Surge-proof queuing, dynamic pricing, and waitlist automation built in.",
        color: "from-fuchsia-500 to-purple-600",
        shadowColor: "rgba(168,85,247,0.35)",
        align: "left",
    },
    {
        icon: <Wifi size={32} />,
        title: "QR Access Control",
        desc: "Multi-lane QR scanning at entry points with real-time head-count and stage capacity enforcement — even offline.",
        color: "from-pink-500 to-rose-500",
        shadowColor: "rgba(236,72,153,0.35)",
        align: "right",
    },
    {
        icon: <CreditCard size={32} />,
        title: "Cashless Payments",
        desc: "RFID wristband top-ups, NFC tap-to-pay at vendor stalls, and complete cashless zone management with transaction reporting.",
        color: "from-amber-500 to-orange-500",
        shadowColor: "rgba(245,158,11,0.35)",
        align: "left",
    },
    {
        icon: <BarChart2 size={32} />,
        title: "Real-Time Analytics",
        desc: "Live crowd flow maps, per-stage attendance, vendor revenue breakdowns, and safety threshold alerts on a unified dashboard.",
        color: "from-purple-500 to-fuchsia-500",
        shadowColor: "rgba(168,85,247,0.35)",
        align: "right",
    },
    {
        icon: <Smartphone size={32} />,
        title: "Fan Engagement App",
        desc: "Branded fan app with personalized set schedules, artist follows, push notifications, and in-app merch purchasing.",
        color: "from-rose-500 to-pink-600",
        shadowColor: "rgba(244,63,94,0.35)",
        align: "left",
    },
    {
        icon: <Shield size={32} />,
        title: "Multi-Day Check-In",
        desc: "Seamless wristband and ticket validation across multi-day events with re-entry support and day-pass management.",
        color: "from-violet-500 to-purple-500",
        shadowColor: "rgba(139,92,246,0.35)",
        align: "right",
    },
];

const FestFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: "#0f0a1e" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #a21caf, transparent)" }} />
                <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #db2777, transparent)" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-fuchsia-400 font-bold text-sm uppercase tracking-widest block">Features</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Power Every Stage of Your{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #f9a8d4, #fbbf24, #c084fc)" }}>
                            Festival Journey
                        </span>
                    </h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg mt-4">
                        Six core modules designed for the relentless pace of live music and festival operations.
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
                                <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">{f.title}</h3>
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

export default FestFeatures;
