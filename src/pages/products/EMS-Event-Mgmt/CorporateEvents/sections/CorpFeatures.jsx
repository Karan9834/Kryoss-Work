import React from "react";
import { Users, BarChart2, QrCode, Megaphone, Building, FileCheck } from "lucide-react";

const features = [
    {
        icon: <Users size={28} />,
        title: "Smart Registration",
        desc: "Custom-branded reg forms, early-bird pricing, group discounts, and automated confirmation emails.",
        color: "from-indigo-500 to-blue-500",
        light: "bg-indigo-50",
        text: "text-indigo-600",
    },
    {
        icon: <Building size={28} />,
        title: "Sponsor Management",
        desc: "Dedicated sponsor portals, tiered sponsorship packages, and live lead retrieval feeds.",
        color: "from-violet-500 to-purple-500",
        light: "bg-violet-50",
        text: "text-violet-600",
    },
    {
        icon: <QrCode size={28} />,
        title: "QR Check-In & Badge",
        desc: "Instant QR scanning, real-time head-count updates, and on-demand badge printing kiosks.",
        color: "from-cyan-500 to-sky-500",
        light: "bg-cyan-50",
        text: "text-cyan-600",
    },
    {
        icon: <Megaphone size={28} />,
        title: "Speaker & Agenda Hub",
        desc: "Speaker bios, session scheduling across multiple tracks, live session feedback polling.",
        color: "from-blue-500 to-indigo-500",
        light: "bg-blue-50",
        text: "text-blue-600",
    },
    {
        icon: <BarChart2 size={28} />,
        title: "Live Analytics",
        desc: "Real-time session attendance, foot-traffic heatmaps, and engagement scoring dashboards.",
        color: "from-purple-500 to-violet-500",
        light: "bg-purple-50",
        text: "text-purple-600",
    },
    {
        icon: <FileCheck size={28} />,
        title: "Post-Event ROI Reports",
        desc: "Automated NPS surveys, ROI calculation, and exportable executive summary PDFs.",
        color: "from-sky-500 to-cyan-400",
        light: "bg-sky-50",
        text: "text-sky-600",
    },
];

const CorpFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #312e81 100%)" }}>
            {/* subtle bg decor */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #6366f1, transparent)" }} />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-indigo-300 font-bold text-sm uppercase tracking-widest block">Features</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Everything You Need to{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #a5b4fc, #67e8f9, #c4b5fd)" }}>
                            Run Flawless Events
                        </span>
                    </h2>
                    <p className="text-indigo-200/70 max-w-2xl mx-auto text-lg mt-4">
                        End-to-end corporate event tooling crafted to handle thousands of attendees without breaking a sweat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-default"
                        >
                            {/* Color sweep on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className={`w-14 h-14 rounded-2xl ${f.light} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${f.text}`}>
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                            <p className="text-indigo-200/70 leading-relaxed text-sm">{f.desc}</p>

                            {/* Bottom accent bar */}
                            <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${f.color} transition-all duration-500 rounded-b-3xl`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CorpFeatures;
