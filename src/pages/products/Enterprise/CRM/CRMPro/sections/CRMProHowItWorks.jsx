import React from 'react';

const CRMProHowItWorks = () => {
    const steps = [
        {
            title: "Data Integration",
            desc: "Import your existing contact lists from Excel, CSV, or other CRM systems seamlessly.",
            icon: "📥"
        },
        {
            title: "Pipeline Configuration",
            desc: "Define your unique sales stages and lead status categories to match your business logic.",
            icon: "⚙️"
        },
        {
            title: "Automated Workflows",
            desc: "Set up auto-responders, task reminders, and deal-stage triggers to automate your sales.",
            icon: "🔄"
        },
        {
            title: "Live Operations",
            desc: "Start managing deals in real-time with full visibility across your entire sales organization.",
            icon: "🚀"
        }
    ];

    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
                        The <span className="text-blue-600">Blueprint</span> for Success
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto italic text-lg leading-relaxed">
                        A structured approach to transforming your customer relationships in four simple phases.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-blue-100 hidden md:block -translate-x-1/2"></div>
                    
                    <div className="space-y-24 relative">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Step Content */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white shadow-xl shadow-blue-900/5 text-4xl mb-6 transform group-hover:rotate-12 transition-transform`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed italic max-w-md mx-auto md:mx-0">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Step Number */}
                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold text-xl shadow-lg shadow-blue-600/30">
                                    {index + 1}
                                </div>

                                {/* Spacer for zig-zag */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CRMProHowItWorks;
