import React from "react";

const timeline = [
    {
        phase: "Phase 1",
        title: "Event Setup & Configuration",
        desc: "Define stages, create ticket types (GA, VIP, multi-day), set capacities, configure cashless zones and upload artist lineups.",
        color: "from-fuchsia-500 to-purple-500",
        dot: "bg-fuchsia-500",
    },
    {
        phase: "Phase 2",
        title: "Ticket Sales & Marketing",
        desc: "Launch public ticket pages, integrate with social promotions, activate early-bird waves and group discount codes.",
        color: "from-pink-500 to-rose-500",
        dot: "bg-pink-500",
    },
    {
        phase: "Phase 3",
        title: "Pre-Event Operations",
        desc: "Distribute RFID wristbands, onboard entry gate staff with mobile scanning apps, activate cashless top-up stations.",
        color: "from-rose-500 to-orange-400",
        dot: "bg-rose-500",
    },
    {
        phase: "Phase 4",
        title: "Live Event Management",
        desc: "Real-time crowd monitoring, instant alerts for capacity breaches, cashless transaction oversight and fan push notifications.",
        color: "from-amber-500 to-yellow-400",
        dot: "bg-amber-500",
    },
    {
        phase: "Phase 5",
        title: "Post-Event Reporting",
        desc: "Revenue breakdown by zone, attendance totals per stage, NPS results from in-app surveys and cashless settlement reports.",
        color: "from-violet-500 to-fuchsia-500",
        dot: "bg-violet-500",
    },
];

const FestHowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-fuchsia-600 font-bold text-sm uppercase tracking-widest block">How It Works</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        From Pre-Sale to{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #a21caf, #db2777, #d97706)" }}>
                            Post-Show Reports
                        </span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        A five-phase lifecycle that covers every moment of your festival — defined and executed flawlessly.
                    </p>
                </div>

                {/* Vertical timeline */}
                <div className="relative pl-8 md:pl-16">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5"
                        style={{ background: "linear-gradient(180deg, #a21caf, #db2777, #d97706, #8b5cf6)" }} />

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

export default FestHowItWorks;
