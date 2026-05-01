import React from 'react';

const OnestCRMFeatures = () => {
    const features = [
        {
            title: "Global Management Hub",
            desc: "A centralized platform that connects every aspect of your enterprise operations.",
            icon: "🪐"
        },
        {
            title: "Workforce Sync",
            desc: "Advanced scheduling and collaboration tools for teams of any size.",
            icon: "🌓"
        },
        {
            title: "Financial Engine",
            desc: "Full-stack invoicing, expense tracking, and revenue forecasting integrated.",
            icon: "🛡️"
        },
        {
            title: "Strategic Analytics",
            desc: "High-level data visualizations to drive your long-term business strategy.",
            icon: "🧪"
        },
        {
            title: "Customer Lifecycle",
            desc: "End-to-end relationship management from lead to brand advocate.",
            icon: "🧬"
        },
        {
            title: "Automated Workflows",
            desc: "Custom triggers and actions that handle your repetitive business tasks.",
            icon: "📡"
        }
    ];

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6 leading-tight font-semibold">
                        Precision <span className="text-emerald-500">Engineering</span> for Business
                    </h2>
                    <p className="text-emerald-100/40 max-w-2xl mx-auto italic font-medium">
                        Onest CRM provides the core technological framework for your company's exponential growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, i) => (
                        <div key={i} className="group relative">
                            {/* Card Glow Effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
                            
                            <div className="relative h-full bg-[#111] p-10 rounded-3xl border border-white/5 transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-emerald-500/20 group-hover:rotate-[15deg] transition-all duration-500 border border-white/10 group-hover:border-emerald-500/50">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-emerald-100/30 text-sm leading-relaxed italic group-hover:text-emerald-100/50 transition-colors">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnestCRMFeatures;
