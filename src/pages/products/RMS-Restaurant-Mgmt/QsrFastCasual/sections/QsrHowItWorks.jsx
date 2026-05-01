import React, { useState } from "react";
import { Monitor, Car, Zap, Layers, TrendingUp } from "lucide-react";

const stations = [
    {
        id: "STATION-01",
        icon: <Monitor size={28} />,
        title: "Menu Config",
        shortDesc: "Set menu, pricing & combos from HQ",
        fullDesc: "Configure your entire menu, combo deals, and pricing once from HQ. Instantly push live to all kiosks, POS terminals, and digital menu boards across every location — no per-site setup needed.",
        color: "#f97316",
        glow: "rgba(249,115,22,0.15)",
        bg: "rgba(249,115,22,0.06)",
        tag: "SETUP",
    },
    {
        id: "STATION-02",
        icon: <Car size={28} />,
        title: "Multi-Channel Sync",
        shortDesc: "Kiosk, drive-thru & counter connected",
        fullDesc: "Every ordering touchpoint — self-service kiosk, drive-thru display, and staffed counter POS — syncs to one shared kitchen queue. No duplicate orders, no missed tickets.",
        color: "#eab308",
        glow: "rgba(234,179,8,0.15)",
        bg: "rgba(234,179,8,0.06)",
        tag: "ORDER IN",
    },
    {
        id: "STATION-03",
        icon: <Zap size={28} />,
        title: "Lightning Checkout",
        shortDesc: "Order to receipt in under 90 seconds",
        fullDesc: "Guests pay by tap, card, or kiosk. Payment, digital receipt, and kitchen ticket are generated in a single seamless transaction — completed in under 90 seconds on average.",
        color: "#ef4444",
        glow: "rgba(239,68,68,0.15)",
        bg: "rgba(239,68,68,0.06)",
        tag: "PAID",
    },
    {
        id: "STATION-04",
        icon: <Layers size={28} />,
        title: "KDS Fulfillment",
        shortDesc: "Kitchen sequences & fulfils every order",
        fullDesc: "The Kitchen Display System prioritizes orders by type, urgency and station. Prep timer countdowns, modification alerts, and assembly confirmations keep every line moving at full speed.",
        color: "#a855f7",
        glow: "rgba(168,85,247,0.15)",
        bg: "rgba(168,85,247,0.06)",
        tag: "IN PREP",
    },
    {
        id: "STATION-05",
        icon: <TrendingUp size={28} />,
        title: "HQ Intelligence",
        shortDesc: "Live franchise-wide performance data",
        fullDesc: "HQ sees every location's revenue, throughput speed, waste percentage, and customer scores in real time. Identify underperforming stores and push corrective actions instantly.",
        color: "#22c55e",
        glow: "rgba(34,197,94,0.15)",
        bg: "rgba(34,197,94,0.06)",
        tag: "ANALYTICS",
    },
];

const QsrHowItWorks = () => {
    const [activeStation, setActiveStation] = useState(0);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Faint color wash from active station */}
            <div className="absolute inset-0 pointer-events-none transition-all duration-700"
                style={{ background: `radial-gradient(ellipse at 50% 100%, ${stations[activeStation].glow} 0%, transparent 70%)` }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header — KDS-style label */}
                <div className="text-center mb-14 space-y-3">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border mb-3 transition-all duration-500"
                        style={{ borderColor: `${stations[activeStation].color}30`, background: `${stations[activeStation].color}0a` }}>
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: stations[activeStation].color }} />
                        <span className="text-xs font-black tracking-widest uppercase transition-colors duration-500"
                            style={{ color: stations[activeStation].color }}>
                            KDS — Kitchen Display System
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        How It{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: `linear-gradient(90deg, #ea580c, #d97706)` }}>
                            Works
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-base">
                        Click any station to see how the order flows through your QSR operation.
                    </p>
                </div>

                {/* Station rail — horizontal with conveyor dots */}
                <div className="relative flex items-start justify-between gap-4 mb-10 overflow-x-auto pb-2">
                    {/* Conveyor dashed line */}
                    <div className="absolute top-8 left-[10%] right-[10%] h-px pointer-events-none"
                        style={{ borderTop: "2px dashed rgba(0,0,0,0.06)" }} />

                    {stations.map((s, i) => {
                        const isActive = activeStation === i;
                        return (
                            <button
                                key={i}
                                onClick={() => setActiveStation(i)}
                                className="group relative flex flex-col items-center gap-3 flex-1 min-w-[100px] focus:outline-none"
                            >
                                {/* Station number circle */}
                                <div
                                    className="relative w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-400 z-10"
                                    style={{
                                        borderColor: isActive ? s.color : "rgba(0,0,0,0.08)",
                                        background: isActive ? s.color : "rgba(0,0,0,0.03)",
                                        boxShadow: isActive ? `0 0 24px ${s.glow}` : "none",
                                        color: isActive ? "white" : "rgba(0,0,0,0.25)",
                                        transform: isActive ? "scale(1.15)" : "scale(1)",
                                    }}
                                >
                                    {s.icon}
                                    {/* Ping ring when active */}
                                    {isActive && (
                                        <span className="absolute inset-0 rounded-full animate-ping opacity-20"
                                            style={{ background: s.color }} />
                                    )}
                                </div>

                                {/* Station tag pill */}
                                <span
                                    className="text-[10px] font-black tracking-widest px-3 py-1 rounded-full border transition-all duration-300"
                                    style={{
                                        borderColor: isActive ? s.color : "rgba(0,0,0,0.08)",
                                        color: isActive ? s.color : "rgba(0,0,0,0.3)",
                                        background: isActive ? `${s.color}10` : "transparent",
                                    }}
                                >
                                    {s.tag}
                                </span>

                                {/* Title */}
                                <span className="text-xs font-bold text-center transition-colors duration-300"
                                    style={{ color: isActive ? "#1e293b" : "rgba(0,0,0,0.3)" }}>
                                    {s.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Station Detail Panel — styled like a KDS ticket */}
                <div
                    className="relative rounded-3xl border p-8 md:p-12 transition-all duration-500"
                    style={{
                        borderColor: `${stations[activeStation].color}25`,
                        background: stations[activeStation].bg || `${stations[activeStation].color}08`,
                        boxShadow: `0 0 60px ${stations[activeStation].glow}`,
                    }}
                >
                    {/* Ticket header bar */}
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b transition-colors duration-500"
                        style={{ borderColor: `${stations[activeStation].color}15` }}>
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                            style={{ background: stations[activeStation].color }}>
                            {stations[activeStation].icon}
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-widest mb-0.5 transition-colors duration-500"
                                style={{ color: `${stations[activeStation].color}70` }}>
                                {stations[activeStation].id}
                            </p>
                            <h3 className="text-xl font-bold text-slate-900">{stations[activeStation].title}</h3>
                        </div>
                        <div className="ml-auto px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
                            style={{ background: `${stations[activeStation].color}20`, color: stations[activeStation].color, border: `1px solid ${stations[activeStation].color}40` }}>
                            {stations[activeStation].tag}
                        </div>
                    </div>

                    <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
                        {stations[activeStation].fullDesc}
                    </p>

                    {/* Step indicator dots */}
                    <div className="flex items-center gap-2 mt-8">
                        {stations.map((_, i) => (
                            <button key={i} onClick={() => setActiveStation(i)}
                                className="rounded-full transition-all duration-300"
                                style={{
                                    width: activeStation === i ? "28px" : "8px",
                                    height: "8px",
                                    background: activeStation === i ? stations[activeStation].color : "rgba(0,0,0,0.12)",
                                }} />
                        ))}
                        <span className="ml-auto text-slate-300 text-xs font-mono">
                            {String(activeStation + 1).padStart(2, "0")} / {String(stations.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QsrHowItWorks;
