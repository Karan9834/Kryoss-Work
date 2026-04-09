import React from "react";
import { CalendarCheck, UserCheck, UtensilsCrossed, Star } from "lucide-react";

const quadrants = [
    {
        number: "01",
        icon: <CalendarCheck size={28} />,
        title: "Reserve & Plan",
        desc: "Guest makes a reservation online. Our system auto-confirms, assigns a preferred table, and logs any special requests or dietary notes.",
        color: "from-amber-600 to-yellow-500",
        bg: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-700",
    },
    {
        number: "02",
        icon: <UserCheck size={28} />,
        title: "Arrive & Be Recognized",
        desc: "On arrival, the host greets the guest by name, pulls up their profile, assigns their preferred section, and seats them in seconds.",
        color: "from-orange-600 to-amber-500",
        bg: "bg-orange-50",
        border: "border-orange-200",
        text: "text-orange-700",
    },
    {
        number: "03",
        icon: <UtensilsCrossed size={28} />,
        title: "Order & Dine",
        desc: "Servers take orders tableside on handheld POS. Kitchen displays receive instantly, course pacing begins, and wine pairing is suggested automatically.",
        color: "from-stone-600 to-amber-600",
        bg: "bg-stone-50",
        border: "border-stone-200",
        text: "text-stone-700",
    },
    {
        number: "04",
        icon: <Star size={28} />,
        title: "Pay & Return",
        desc: "Split bills, apply loyalty points, and process payment tableside. Post-meal NPS surveys auto-send. Guest profile updates for next visit personalization.",
        color: "from-red-700 to-rose-600",
        bg: "bg-red-50",
        border: "border-red-200",
        text: "text-red-700",
    },
];

const RestulatorHowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-amber-700 font-bold text-sm uppercase tracking-widest block">How It Works</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-stone-900">
                        The Guest Journey,{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #b45309, #d97706)" }}>
                            Reinvented
                        </span>
                    </h2>
                    <p className="text-stone-500 max-w-2xl mx-auto text-lg">
                        Four orchestrated moments that turn first-time visitors into loyal, returning guests.
                    </p>
                </div>

                {/* 2x2 floating quadrant cards with a center decorative element */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {quadrants.map((q, i) => (
                        <div key={i}
                            className={`group relative ${q.bg} border ${q.border} rounded-3xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-400`}>
                            {/* Large faded number */}
                            <div className={`absolute top-4 right-6 text-7xl font-black opacity-5 ${q.text} select-none`}>
                                {q.number}
                            </div>
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${q.color} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                {q.icon}
                            </div>
                            <h3 className={`text-xl font-bold ${q.text} mb-3`}>{q.title}</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">{q.desc}</p>
                        </div>
                    ))}

                    {/* Center connector — visible on sm+ */}
                    {/* <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border-2 border-amber-200 shadow-lg flex items-center justify-center z-10">
                        <div className="w-6 h-6 rounded-full" style={{ background: "linear-gradient(135deg, #d97706, #92400e)" }} />
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default RestulatorHowItWorks;
