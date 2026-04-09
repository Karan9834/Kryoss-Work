import React from "react";
import { FileText, Users, BarChart2, Award } from "lucide-react";

const steps = [
    {
        // number: "01",
        icon: <FileText size={26} />,
        title: "Create & Configure",
        desc: "Set up your event in minutes — define sessions, ticket tiers, sponsor packages, and branding all from one dashboard.",
        color: "from-indigo-500 to-blue-500",
        iconBg: "bg-indigo-100 text-indigo-600",
    },
    {
        // number: "02",
        icon: <Users size={26} />,
        title: "Invite & Register",
        desc: "Launch custom registration pages, send personalized invites, and watch real-time RSVPs roll in with smart waitlist management.",
        color: "from-blue-500 to-cyan-500",
        iconBg: "bg-blue-100 text-blue-600",
    },
    {
        // number: "03",
        icon: <BarChart2 size={26} />,
        title: "Run & Engage",
        desc: "Execute flawlessly on event day — QR check-ins, live polls, speaker management, and emergency alerts all in one command center.",
        color: "from-cyan-500 to-purple-500",
        iconBg: "bg-cyan-100 text-cyan-600",
    },
    {
        // number: "04",
        icon: <Award size={26} />,
        title: "Analyze & Report",
        desc: "Collect NPS data instantly post-event, generate ROI summaries, and share polished reports with stakeholders automatically.",
        color: "from-purple-500 to-indigo-500",
        iconBg: "bg-purple-100 text-purple-600",
    },
];

const EventRightHowItWorks = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-3">
                    <span className="text-indigo-600 font-bold text-sm uppercase tracking-widest block">How It Works</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        From{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #4f46e5, #06b6d4)" }}>
                            Idea to Insights
                        </span>{" "}
                        in 4 Steps
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        A streamlined workflow that takes your corporate event from planning to post-event reporting with zero friction.
                    </p>
                </div>

                {/* Horizontal stepper */}
                <div className="relative">
                    {/* Connecting line */}
                    <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5"
                        style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4, #8b5cf6, #6366f1)" }} />

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                        {steps.map((step, i) => (
                            <div key={i} className="group flex flex-col items-center text-center space-y-5">
                                {/* Step bubble */}
                                <div className="relative flex-shrink-0">
                                    <div className={`w-[72px] h-[72px] rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 z-10 relative`}>
                                        {step.icon}
                                    </div>
                                    {/* Step number badge */}
                                    {/* <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-indigo-200 flex items-center justify-center">
                                        <span className="text-indigo-600 text-xs font-black">{i + 1}</span>
                                    </div> */}
                                </div>

                                <div className="space-y-2 px-2">
                                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">{step.title}</h3>
                                    <p className="text-slate-900 text-sm leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventRightHowItWorks;
