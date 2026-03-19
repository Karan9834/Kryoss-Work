import React from 'react';

const LmsBenifits = () => {
    const benefits = [
        {
            title: "50% Higher Learner Engagement",
            desc: "Interactive modules and gamification keep students motivated and focused on their goals.",
            stat: "50%",
            color: "text-violet-400"
        },
        {
            title: "Zero Content Fragmentation",
            desc: "Centralize all your educational assets in one secure, organized repository for easy access.",
            stat: "100%",
            color: "text-indigo-400"
        },
        {
            title: "Automated Certification",
            desc: "Save time with automatic grading and instant issuance of digital certificates globally.",
            stat: "24/7",
            color: "text-emerald-400"
        }
    ];

    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background decorative text */}
            <div className="absolute -bottom-10 -left-10 text-[200px] font-black text-white/5 select-none leading-none pointer-events-none">
                STATS
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Heading */}
                <div className="mb-20 text-center">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-violet-400/30 bg-white/5 text-xs font-semibold text-violet-300 uppercase tracking-widest mb-6">
                        The Vyom Advantage
                    </span>
                    <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight mb-8">
                        Why Choose <span className="text-violet-400 italic">Custom LMS?</span>
                    </h2>
                </div>

                {/* 3-Column Benefit Cards Layout (Different from ERP horizontal view) */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {benefits.map((item, i) => (
                        <div key={i} className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[48px] hover:bg-violet-600/10 hover:border-violet-500 transition-all duration-700">
                            {/* Large Stat in background */}
                            <div className={`absolute top-10 right-10 text-7xl font-semibold opacity-10 group-hover:opacity-30 transition-all duration-700 grayscale group-hover:grayscale-0`}>
                                {item.stat}
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center text-white mb-8 shadow-xl shadow-violet-900/40">
                                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 stroke-current stroke-3">
                                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                <h4 className="text-2xl font-semibold text-white mb-6 group-hover:text-violet-300 transition-colors leading-tight">
                                    {item.title}
                                </h4>

                                <p className="text-indigo-100/60 text-base leading-relaxed italic">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Mockup indicator */}

            </div>
        </section>
    );
};

export default LmsBenifits;
