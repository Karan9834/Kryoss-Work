import React, { useState } from "react";
import { ChevronDown, LayoutGrid, Calendar, Wine, UtensilsCrossed, Star, BarChart } from "lucide-react";

const features = [
    {
        icon: <LayoutGrid size={26} />,
        title: "Floor Plan Mapping",
        desc: "Drag-and-drop table layout editor. Assign servers to sections, manage table status in real time, and visualize seating capacity at a glance — all from a live digital floor plan.",
        color: "from-amber-600 to-yellow-500",
        iconBg: "bg-amber-50 text-amber-700",
    },
    {
        icon: <Calendar size={26} />,
        title: "Reservation Sync",
        desc: "Unified reservation calendar synced with your website, Google, OpenTable, and Resy. Automated SMS confirmations, waitlist management, and VIP priority queuing built in.",
        color: "from-orange-600 to-amber-500",
        iconBg: "bg-orange-50 text-orange-700",
    },
    {
        icon: <UtensilsCrossed size={26} />,
        title: "Course Pacing",
        desc: "Kitchen display system integration with course-by-course pacing tools. Servers get real-time alerts for optimal course timing, improving kitchen flow and guest experience.",
        color: "from-stone-600 to-amber-600",
        iconBg: "bg-stone-50 text-stone-700",
    },
    {
        icon: <Wine size={26} />,
        title: "Wine Inventory",
        desc: "Full cellar management with vintage tracking, par-level alerts, and automated sommelier pairing suggestions based on ordered dishes. Prevent stockouts on your finest bottles.",
        color: "from-red-700 to-rose-600",
        iconBg: "bg-red-50 text-red-700",
    },
    {
        icon: <Star size={26} />,
        title: "Guest Preferences",
        desc: "Build detailed guest profiles — dietary restrictions, preferred seating, occasion history, and favorite dishes — enabling your team to deliver personalized 5-star service every visit.",
        color: "from-yellow-600 to-amber-500",
        iconBg: "bg-yellow-50 text-yellow-700",
    },
    {
        icon: <BarChart size={26} />,
        title: "Tableside Ordering",
        desc: "Sleek mobile POS for servers to take orders tableside. Modifiers, course splits, and instant kitchen printing — no handwritten tickets, no errors, and faster kitchen response times.",
        color: "from-amber-700 to-orange-600",
        iconBg: "bg-amber-50 text-amber-700",
    },
];

const RestulatorFeatures = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(150deg, #1c1917 0%, #292524 30%, #3b2a00 65%, #78350f 100%)" }}>
            <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-5 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #d97706, transparent)" }} />

            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-amber-400 font-bold text-sm uppercase tracking-widest block">Features</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        Tools That Elevate{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #fcd34d, #fb923c, #fbbf24)" }}>
                            Every Dining Moment
                        </span>
                    </h2>
                    <p className="text-amber-200/60 max-w-2xl mx-auto text-lg mt-4">
                        A curated suite designed for front-of-house precision and kitchen harmony.
                    </p>
                </div>

                {/* Accordion-style expandable features */}
                <div className="space-y-4">
                    {features.map((f, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div key={i}
                                className={`rounded-2xl border transition-all duration-400 cursor-pointer overflow-hidden ${isOpen ? "border-amber-400 shadow-lg bg-white/10" : "border-white/10 shadow-sm hover:border-amber-500/40 hover:shadow-md bg-white/5"}`}
                                onClick={() => setOpenIndex(isOpen ? null : i)}>
                                <div className="flex items-center gap-4 p-5">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${f.iconBg} transition-all duration-300`}>
                                        {f.icon}
                                    </div>
                                    <h3 className="flex-1 font-bold text-white text-lg">{f.title}</h3>
                                    <ChevronDown size={20}
                                        className={`flex-shrink-0 text-amber-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                                </div>
                                {/* Expanding content */}
                                <div className={`overflow-hidden transition-all duration-400 ${isOpen ? "max-h-40" : "max-h-0"}`}>
                                    <div className="px-5 pb-5 pl-[4.75rem]">
                                        <p className="text-amber-100/70 leading-relaxed text-sm">{f.desc}</p>
                                        {/* Gradient bottom bar */}
                                        <div className={`h-0.5 mt-4 w-full rounded-full bg-gradient-to-r ${f.color}`} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default RestulatorFeatures;
