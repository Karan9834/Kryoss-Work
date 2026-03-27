import React from 'react';
import { Video, Globe, Mic, Share2, MessageSquare, Shield, Monitor, LayoutGrid, Calendar } from 'lucide-react';

const ZoomFeatures = () => {
    const features = [
        {
            icon: <Video size={32} />,
            title: "HD Video & Audio",
            description: "Crystal clear transmission with automated bandwidth optimization and noise cancellation.",
            color: "purple"
        },
        {
            icon: <Globe size={32} />, // Replaced globe with layout since Globe wasn't imported initially, let's use LayoutGrid
            title: "Virtual Backgrounds",
            description: "AI-powered background blur and custom image replacement for professional settings.",
            color: "indigo"
        },
        {
            icon: <Share2 size={32} />,
            title: "Screen Sharing",
            description: "Share your entire screen, a specific window, or a tab with high-frame-rate support.",
            color: "sky"
        },
        {
            icon: <MessageSquare size={32} />,
            title: "In-Meeting Chat",
            description: "Direct and group messaging capabilities during live sessions with file sharing.",
            color: "pink"
        },
        {
            icon: <Shield size={32} />,
            title: "Waiting Rooms",
            description: "Control attendee entry with secure waiting rooms and host approval workflows.",
            color: "emerald"
        },
        {
            icon: <Monitor size={32} />,
            title: "Session Recording",
            description: "Cloud and local recording options with automated transcription services.",
            color: "amber"
        },
        {
            icon: <LayoutGrid size={32} />,
            title: "Breakout Rooms",
            description: "Split your main meeting into smaller, dedicated sessions for group work.",
            color: "rose"
        },
        {
            icon: <Calendar size={32} />,
            title: "Smart Scheduling",
            description: "Integrated calendar bindings with Outlook, Google, and Apple ecosystems.",
            color: "blue"
        }
    ];

    const getColorClasses = (color) => {
        const classes = {
            purple: "hover:border-purple-300 hover:shadow-purple-500/20 text-purple-600 bg-purple-50",
            indigo: "hover:border-indigo-300 hover:shadow-indigo-500/20 text-indigo-600 bg-indigo-50",
            sky: "hover:border-sky-300 hover:shadow-sky-500/20 text-sky-600 bg-sky-50",
            pink: "hover:border-pink-300 hover:shadow-pink-500/20 text-pink-600 bg-pink-50",
            emerald: "hover:border-emerald-300 hover:shadow-emerald-500/20 text-emerald-600 bg-emerald-50",
            amber: "hover:border-amber-300 hover:shadow-amber-500/20 text-amber-600 bg-amber-50",
            rose: "hover:border-rose-300 hover:shadow-rose-500/20 text-rose-600 bg-rose-50",
            blue: "hover:border-blue-300 hover:shadow-blue-500/20 text-blue-600 bg-blue-50",
        };
        return classes[color] || classes.purple;
    };

    return (
        <section className="py-24 bg-[#0B0D17] relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600 blur-[150px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-purple-400 font-bold text-sm uppercase tracking-widest bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20 inline-block">Core Capabilities</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight mt-6">
                        Everything You Need to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400">Connect Seamlessly.</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => {
                        const colorProps = getColorClasses(feature.color);
                        const [hoverBorder, hoverShadow, textColor, bgColor] = colorProps.split(' ');

                        return (
                            <div
                                key={index}
                                className={`p-8 rounded-[2.5rem] bg-white/5 backdrop-blur-md border border-white/10 ${hoverBorder} ${hoverShadow} transition-all duration-500 group hover:-translate-y-2 cursor-default flex flex-col`}
                            >
                                <div className={`w-16 h-16 rounded-2xl ${bgColor} ${textColor} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                                <p className="text-slate-400 text-sm font-medium leading-relaxed flex-1">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ZoomFeatures;
