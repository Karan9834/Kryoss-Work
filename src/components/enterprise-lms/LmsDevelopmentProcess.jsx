import React from 'react';


const LmsDevelopmentProcess = () => {
    const steps = [
        {
            num: "01",
            title: "Strategic Discovery",
            desc: "Focusing on your learning goals, target audience, and content requirements for a tailored experience.",
            icon: "🔭"
        },
        {
            num: "02",
            title: "Curriculum Architecture",
            desc: "Designing the course structure and interactive learning elements for maximum student retention.",
            icon: "🏗️"
        },
        {
            num: "03",
            title: "Platform Development",
            desc: "Engineering the custom LMS backbone with integrated modules and specialized educational features.",
            icon: "💻"
        },
        {
            num: "04",
            title: "Global Deployment",
            desc: "Launching your academy with comprehensive training, technical audits, and continuous scaling support.",
            icon: "🚀"
        }
    ];

    return (
        <section className="py-24 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-24">
                    <span className="text-violet-600 font-semibold text-xs uppercase tracking-[0.4em] mb-4 block">Proven Methodology</span>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight">
                        Our <span className="text-violet-700">Refined</span> Development Lifecycle
                    </h2>
                </div>

                {/* Vertical Zig-Zag Layout (Different from ERP 2-column horizontal box) */}
                <div className="relative">
                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-24 relative z-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* TEXT SIDE */}
                                <div className="md:w-1/2 text-center md:text-right px-4 group">
                                    <div className={`${index % 2 !== 0 ? "md:text-left" : "md:text-right"}`}>
                                        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 text-3xl mb-6 group-hover:bg-violet-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-slate-200/50 group-hover:shadow-violet-200`}>
                                            {step.icon}
                                        </div>
                                        <h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight group-hover:text-violet-700 transition-colors">
                                            {step.num}. {step.title}
                                        </h3>
                                        <p className="text-slate-500 text-base leading-relaxed italic max-w-md mx-auto md:ml-auto md:mr-0">
                                            {index % 2 !== 0 ? "" : ""} {step.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Ball */}
                                <div className="relative flex items-center justify-center w-12 h-12 bg-white border-4 border-violet-600 rounded-full shadow-lg z-20 shrink-0 hidden md:flex">
                                    <div className="w-2 h-2 bg-violet-600 rounded-full animate-ping"></div>
                                </div>

                                {/* SIDE SPACE */}
                                <div className="md:w-1/2 p-6 flex justify-center">

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LmsDevelopmentProcess;
