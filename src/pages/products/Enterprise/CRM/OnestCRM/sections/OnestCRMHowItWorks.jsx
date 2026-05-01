import React from 'react';

const OnestCRMHowItWorks = () => {
    const steps = [
        {
            title: "Business Onboarding",
            desc: "Setup your central hub and define your organizational structure.",
            icon: "🏢"
        },
        {
            title: "System Synchronization",
            desc: "Integrate your existing data and team calendars into the ecosystem.",
            icon: "📅"
        },
        {
            title: "Process Activation",
            desc: "Launch your custom sales pipelines and automated workflows.",
            icon: "🔓"
        },
        {
            title: "Enterprise Scaling",
            desc: "Monitor performance through unified dashboards and grow your operations.",
            icon: "💰"
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Texture - Minimal */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-6 leading-tight font-semibold">
                        Success in <span className="text-emerald-600">Four Simple</span> Steps
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto italic text-lg leading-relaxed">
                        Deploying your enterprise-grade Onest CRM ecosystem is efficient and streamlined.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="group relative">
                            {/* Step Number Backdrop */}
                            <div className="absolute -top-10 -left-6 text-[120px] font-bold text-slate-100 group-hover:text-emerald-50 transition-colors pointer-events-none">
                                {i + 1}
                            </div>
                            
                            <div className="relative bg-white border border-slate-100 p-8 rounded-[40px] hover:border-emerald-200 hover:bg-emerald-50/30 transition-all duration-500 h-full shadow-sm">
                                <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-xl shadow-emerald-900/10 transform group-hover:rotate-12 transition-transform">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-slate-500 text-sm leading-relaxed italic">
                                    {step.desc}
                                </p>
                                
                                {i < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 text-2xl text-slate-200 group-hover:text-emerald-300 transition-colors">
                                        →
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OnestCRMHowItWorks;
