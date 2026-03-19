import React from "react";
import lmsworkflow from "../../assets/lms-img/lmsworkflow.jpg";

const LmsAppWorkflow = () => {
    const steps = [
        {
            title: "Content Setup",
            desc: "Upload videos, PDFs, and interactive SCORM packages to your secure repository.",
            icon: "📁"
        },
        {
            title: "Curriculum Map",
            desc: "Structure courses into logical modules and lessons aligned with goals.",
            icon: "🏗️"
        },
        {
            title: "User Roles",
            desc: "Manage student and instructor accounts with automated permissions.",
            icon: "👥"
        },
        {
            title: "Learning Paths",
            desc: "Create personalized journeys with drip-content scheduling.",
            icon: "🛤️"
        },
        {
            title: "Live Classroom",
            desc: "Host real-time webinars and interactive group sessions via video.",
            icon: "🎥"
        },
        {
            title: "Interactive Quiz",
            desc: "Create diverse assessment formats to evaluate learner understanding.",
            icon: "✍️"
        },
        {
            title: "Rich Analytics",
            desc: "Track performance through heatmaps and completion rates.",
            icon: "📊"
        },
        {
            title: "Certifications",
            desc: "Automatically issue branded certificates upon course completion.",
            icon: "📜"
        },
        {
            title: "Continuous Feedback",
            desc: "Collect surveys and ratings to improve course delivery.",
            icon: "⭐"
        },
    ];

    return (
        <section className="py-24 bg-[#0f172a] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 border border-violet-400 rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 border border-violet-400 rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Headings */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-violet-400/30 bg-violet-400/5 text-xs font-bold text-violet-300 uppercase tracking-[0.2em] mb-6">
                        Operational Excellence
                    </span>
                    <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
                        Our <span className="text-violet-400">Streamlined</span> Workflow
                    </h2>
                    <p className="text-indigo-100/60 max-w-2xl mx-auto text-lg leading-relaxed italic">
                        Experience a modernized approach to education. We've optimized every phase
                        from content ingestion to final certification.
                    </p>
                </div>

                {/* Grid of cards instead of scrollable list */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[40px] hover:bg-violet-600/10 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2">
                            {/* Step Number Badge */}
                            <div className="absolute top-6 right-6 text-4xl font-semibold text-white/5 group-hover:text-violet-500/20 transition-colors">
                                {(index + 1).toString().padStart(2, "0")}
                            </div>

                            <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-xl shadow-violet-900/20 transform group-hover:rotate-12 transition-transform">
                                {step.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-indigo-100/50 text-sm leading-relaxed italic">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Center Image/Mockup Indicator */}
                <div className="mt-20 flex justify-center">
                    <div className="relative group max-w-4xl w-full">
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-[48px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative overflow-hidden rounded-[48px] border-8 border-white/5 bg-[#1e1b4b]">
                            <img
                                src={lmsworkflow}
                                alt="Platform Workflow Visual Placeholder"
                                className="w-full h-auto min-h-[300px] object-cover opacity-50 group-hover:opacity-80 transition duration-1000"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LmsAppWorkflow;
