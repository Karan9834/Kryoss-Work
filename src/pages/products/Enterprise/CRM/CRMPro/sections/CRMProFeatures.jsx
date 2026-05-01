import React from 'react';

const CRMProFeatures = () => {
    const features = [
        {
            title: "Contact Management",
            desc: "Keep all your customer information in one place, organized and accessible.",
            icon: "👤"
        },
        {
            title: "Lead Scoring",
            desc: "Identify high-value opportunities with automated lead scoring algorithms.",
            icon: "🎯"
        },
        {
            title: "Email Integration",
            desc: "Sync your emails directly into the CRM for complete communication history.",
            icon: "📧"
        },
        {
            title: "Task Automation",
            desc: "Automate repetitive tasks and focus on building relationships.",
            icon: "⚡"
        },
        {
            title: "Sales Pipe",
            desc: "Visualize your sales funnel and track deals through every stage.",
            icon: "📈"
        },
        {
            title: "Ticketing System",
            desc: "Provide world-class support with an integrated helpdesk and ticket tool.",
            icon: "🎫"
        }
    ];

    return (
        <section className="py-24 bg-slate-900 border-y border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-6">
                        Advanced <span className="text-blue-500">Feature Set</span> for Modern Teams
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto italic">
                        Everything you need to manage your business growth in a single, unified platform.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-500">
                            <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-blue-900/40 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed italic">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CRMProFeatures;
