import React from 'react';
import { AlignLeft, BarChart3, Mail, MonitorSmartphone, Shield, Megaphone, CheckCircle2, LayoutTemplate } from 'lucide-react';

const WebinarFeatures = () => {
    const features = [
        {
            icon: <AlignLeft size={28} />,
            title: "Live Q&A Module",
            description: "Dedicated moderation tools to approve, dismiss, or highlight attendee questions live on screen.",

        },
        {
            icon: <BarChart3 size={28} />,
            title: "Interactive Polls",
            description: "Launch real-time polls to gauge audience sentiment and display results instantly with dynamic charts."
        },
        {
            icon: <Mail size={28} />,
            title: "Automated Emails",
            description: "Set up branded registration confirmations, reminders, and post-event follow-up sequences."
        },
        {
            icon: <MonitorSmartphone size={28} />,
            title: "Custom Landing Pages",
            description: "Drag-and-drop builder for high-converting registration pages matching your brand aesthetics."
        },
        {
            icon: <Shield size={28} />,
            title: "Paywall & Monetization",
            description: "Integrate ticketing solutions to host paid webinars, masterclasses, or virtual summits securely.",

        },
        {
            icon: <Megaphone size={28} />,
            title: "In-session CTAs",
            description: "Push trackable Call-To-Action buttons directly to attendee screens at pivotal moments."
        },
        {
            icon: <CheckCircle2 size={28} />,
            title: "Automated Recording",
            description: "Instantly generate on-demand replays without rendering time, ready for lead generation."
        },
        {
            icon: <LayoutTemplate size={28} />,
            title: "Simulated Live",
            description: "Play pre-recorded videos as if they were live, complete with timed chat and interactions."
        }
    ];

    return (
        <section className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-sky-600/20 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-sky-400 font-bold text-sm uppercase tracking-widest bg-sky-500/10 px-4 py-2 rounded-full border border-sky-500/20 inline-block">Pro Features</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mt-6">
                        Tools to Drive {""}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Audience Action.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative group p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-sky-500/30 overflow-hidden flex flex-col h-full"
                        >
                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>


                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400/20 to-cyan-400/10 text-sky-400 flex items-center justify-center mb-8 border border-sky-400/20 group-hover:scale-110 transition-transform duration-500">
                                {feature.icon}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-sky-300 transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 text-sm font-medium leading-relaxed flex-1 relative z-10">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WebinarFeatures;
