import React from 'react';

const featuresList = [
    {
        title: "Fast OPD Management",
        desc: "Register patients in seconds. Track token numbers, estimated wait times, and instantly route patients to the correct doctor's queue.",
        color: "from-fuchsia-600/20 to-purple-600/5",
        border: "border-fuchsia-500/30",
        iconColor: "text-fuchsia-400"
    },
    {
        title: "Simplified E-Prescriptions",
        desc: "Doctors can load favorite medicine templates and write prescriptions rapidly. The system learns and suggests frequent prescriptions.",
        color: "from-purple-600/20 to-indigo-600/5",
        border: "border-purple-500/30",
        iconColor: "text-purple-400"
    },
    {
        title: "Integrated Accounting",
        desc: "Manage hospital finances, track income vs expenses, handle doctor commissions, and generate comprehensive daily financial reports.",
        color: "from-indigo-600/20 to-blue-600/5",
        border: "border-indigo-500/30",
        iconColor: "text-indigo-400"
    },
    {
        title: "Multi-branch Network",
        desc: "If you own multiple small clinics, connect them seamlessly. Share patient data across branches while keeping accounting localized.",
        color: "from-blue-600/20 to-cyan-600/5",
        border: "border-blue-500/30",
        iconColor: "text-blue-400"
    }
];

const BdTaskHMSFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950 border-t border-purple-900/50">
            {/* Dark background without images */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-fuchsia-500 font-bold uppercase tracking-widest text-sm mb-4">Features Overview</h2>
                    <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
                        Tools That Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400">Save Time</span>
                    </h3>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        We stripped away all the bloat of enterprise systems, giving you pure execution capabilities designed solely for independent practices.
                    </p>
                </div>

                {/* Unique No-Image Grid Layout */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                    {featuresList.map((feat, idx) => (
                        <div
                            key={idx}
                            className={`relative bg-gradient-to-br ${feat.color} backdrop-blur-md border ${feat.border} p-10 lg:p-14 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 group overflow-hidden`}
                        >
                            {/* Giant background number */}
                            <div className="absolute -bottom-6 -right-6 text-[150px] font-black text-white/5 select-none pointer-events-none group-hover:scale-110 group-hover:text-white/10 transition-all duration-700">
                                0{idx + 1}
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl mb-8 border ${feat.border} shadow-lg ${feat.iconColor}`}>
                                    {/* Generic SVG Icons based on index */}
                                    {idx === 0 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                                    {idx === 1 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                                    {idx === 2 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                    {idx === 3 && <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-4 tracking-wide group-hover:text-fuchsia-300 transition-colors">
                                    {feat.title}
                                </h4>

                                <p className="text-slate-400 font-medium leading-relaxed font-sans text-lg mt-auto pb-6">
                                    {feat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BdTaskHMSFeatures;
