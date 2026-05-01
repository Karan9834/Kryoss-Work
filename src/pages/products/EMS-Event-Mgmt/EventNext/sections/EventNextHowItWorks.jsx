import React from "react";

const timeline = [
    {
        phase: "Phase 1",
        title: "Event Configuration",
        desc: "Define events, onboard vendors, create complex ticket tiers (GA, VIP, early-bird), and configure multivendor dashboards.",
        color: "from-blue-500 to-indigo-500",
        dot: "bg-blue-500",
    },
    {
        phase: "Phase 2",
        title: "Sales & Recruitment",
        desc: "Launch multivendor ticketing pages, activate vendor recruitment portals, and start automated social marketing campaigns.",
        color: "from-blue-400 to-cyan-500",
        dot: "bg-blue-400",
    },
    {
        phase: "Phase 3",
        title: "Operations Ready",
        desc: "Synchronize cross-event scanning apps, activate vendor portals for real-time tracking, and prepare QR-enabled entry gates.",
        color: "from-indigo-500 to-blue-600",
        dot: "bg-indigo-500",
    },
    {
        phase: "Phase 4",
        title: "Multivendor Live Execution",
        desc: "Real-time vendor sales monitoring, unified attendee access control, and instant performance alerts across all zones.",
        color: "from-blue-600 to-indigo-600",
        dot: "bg-blue-600",
    },
    {
        phase: "Phase 5",
        title: "Automated Settlements",
        desc: "Automated vendor revenue splitting, comprehensive attendance analytics, and detailed multi-party financial reports.",
        color: "from-blue-700 to-indigo-800",
        dot: "bg-blue-700",
    },
];

const EventNextHowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block">How It Works</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        From Onboarding to{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #1d4ed8, #3b82f6, #2563eb)" }}>
                            Automated Payouts
                        </span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        A five-phase revolutionary lifecycle that covers every moment of your multivendor event journey.
                    </p>
                </div>

                {/* Vertical timeline */}
                <div className="relative pl-8 md:pl-16">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
                        style={{ background: "linear-gradient(180deg, #1d4ed8, #3b82f6, #60a5fa, #2563eb)" }} />

                    <div className="space-y-12">
                        {timeline.map((step, i) => (
                            <div key={i} className="group relative flex gap-8 items-start">
                                {/* Dot */}
                                <div className={`absolute -left-[1.85rem] md:-left-[2.35rem] top-1.5 w-5 h-5 rounded-full ${step.dot} border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300 z-10`} />

                                {/* Card */}
                                <div className="flex-1 bg-white border border-slate-100 rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-400 group-hover:-translate-y-1">
                                    <span className={`inline-block text-xs font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r ${step.color} mb-2`}>
                                        {step.phase}
                                    </span>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventNextHowItWorks;
