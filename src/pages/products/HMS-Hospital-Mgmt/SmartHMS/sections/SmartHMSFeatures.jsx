import React from 'react';

const features = [
    {
        title: "Intelligent Dashboard",
        desc: "Role-based intelligent dashboards for Doctors, Nurses, and Administrators providing critical KPIs at a glance.",
        icon: "📊"
    },
    {
        title: "Advanced EMR",
        desc: "Centralized Electronic Medical Records with full patient history, lab results, and timeline views.",
        icon: "📋"
    },
    {
        title: "Ward & Bed Management",
        desc: "Real-time occupancy tracking, bed allocations, and instant ward transfer workflows across departments.",
        icon: "🛏️"
    },
    {
        title: "Integrated Pharmacy",
        desc: "Automated stock tracking, auto-reordering intelligence, and direct prescription bridging to the pharmacy.",
        icon: "💊"
    },
    {
        title: "Laboratory & Radiology",
        desc: "Instant sample tagging, diagnostic equipment integrations, and fast report delivery to portals.",
        icon: "🔬"
    },
    {
        title: "Automated Billing",
        desc: "Smart invoicing, insurance reconciliations, and multiple payment gateways built right in.",
        icon: "💳"
    }
];

const SmartHMSFeatures = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-indigo-900 via-slate-900 to-teal-950">
            {/* Dynamic Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">Core Ecosystem</h2>
                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                        Powering Every Department <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Seamlessly</span>
                    </h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {features.map((feat, idx) => (
                        <div key={idx} className="group relative bg-slate-800/40 backdrop-blur-xl border border-slate-700/60 p-8 rounded-[2.5rem] hover:bg-slate-800/80 hover:border-teal-500/50 transition-all duration-500 overflow-hidden">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>

                            <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{feat.title}</h4>
                                    <p className="text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SmartHMSFeatures;
