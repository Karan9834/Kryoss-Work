import React from 'react';
import { UserPlus, Sliders, HeartHandshake, CalendarCheck } from 'lucide-react';

const MatrimonyHowItWorks = () => {
    const steps = [
        {
            num: "01",
            title: "Profile Creation",
            desc: "Users create detailed profiles covering personal, professional, and cultural backgrounds with guided prompts.",
            icon: UserPlus,
            color: "text-rose-500",
            bg: "bg-rose-50"
        },
        {
            num: "02",
            title: "Set Preferences",
            desc: "Define strict or flexible partner preferences across multiple dimensions including education, location, and astrology.",
            icon: Sliders,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            num: "03",
            title: "AI Suggests Matches",
            desc: "Our engine curates a daily list of highly compatible profiles, ensuring quality over overwhelming quantity.",
            icon: HeartHandshake,
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            num: "04",
            title: "Connect & Meet",
            desc: "Initiate contact securely, utilize video dates, and transition comfortably from online chat to offline meetings.",
            icon: CalendarCheck,
            color: "text-emerald-500",
            bg: "bg-emerald-50"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-rose-600 font-bold text-sm uppercase tracking-widest px-4 py-1 bg-rose-50 rounded-full shadow-sm border border-rose-100">The Journey</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        How Connections Are <span className="text-purple-600">Made</span>
                    </h2>
                </div>

                {/* Staggered Path Layout */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-rose-100 via-purple-200 to-rose-100 -translate-y-1/2 z-0 rounded-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, idx) => (
                            <div key={idx} className={`relative group ${idx % 2 === 0 ? 'lg:-translate-y-12' : 'lg:translate-y-12'}`}>
                                {/* Connector Node */}
                                <div className="hidden lg:block absolute top-[50%] left-[50%] -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-200 rounded-full z-20 group-hover:border-purple-500 transition-colors
                                  cubic-bezier(0.4, 0, 0.2, 1) duration-300"
                                    style={{
                                        transform: `translate(-50%, ${idx % 2 === 0 ? 'calc(50px + 3rem)' : 'calc(-50px - 4rem)'})`
                                    }}>
                                </div>

                                <div className="bg-white p-8 rounded-[2rem] border-2 border-slate-50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 relative overflow-hidden">
                                    {/* Number Watermark */}
                                    <div className="absolute -right-4 -top-8 text-9xl font-black text-slate-50/50 -z-10 select-none">
                                        {step.num}
                                    </div>

                                    <div className={`w-16 h-16 rounded-2xl ${step.bg} text-slate-900 flex items-center justify-center mb-8 relative`}>
                                        <step.icon size={32} className={`${step.color}`} />
                                        <div className="absolute -right-2 -bottom-2 w-8 h-8 rounded-full bg-slate-900 text-white font-black flex items-center justify-center text-xs shadow-md">
                                            {step.num}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed font-medium">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                        Start Building Your Platform
                    </button>
                </div>
            </div>
        </section>
    );
};

export default MatrimonyHowItWorks;
