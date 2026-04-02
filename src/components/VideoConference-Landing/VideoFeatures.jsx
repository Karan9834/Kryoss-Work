import React from 'react';
import { Video, Shield, Monitor, MessageSquare, Image, MicOff, Sparkles, Zap, Smartphone } from 'lucide-react';
import featuresImg from '../../assets/videolanding-img/videolandingfeatures.jpg';

const VideoFeatures = () => {
    const features = [
        {
            title: "4K Adaptive Stream",
            description: "Ultra-HD quality with zero-latency adaptive bitrates.",
            icon: <Video size={24} className="text-purple-400" />,
            color: "border-purple-500/30 bg-purple-500/5"
        },
        {
            title: "AI Voice Isolation",
            description: "Intelligent noise cancellation for crystal clear audio.",
            icon: <MicOff size={24} className="text-sky-400" />,
            color: "border-sky-500/30 bg-sky-500/5"
        },
        {
            title: "Multi-Platform Sync",
            description: "Seamless transitions between desktop, web, and mobile app.",
            icon: <Smartphone size={24} className="text-pink-400" />,
            color: "border-pink-500/30 bg-pink-500/5"
        }
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-[#0A0B14]">
            {/* Background Mesh Gradient */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-purple-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-blue-600/20 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Content Area */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <span className="text-purple-400 font-bold text-sm uppercase tracking-[0.3em] flex items-center gap-2">
                                <Sparkles size={18} /> Technical Excellence
                            </span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white leading-tight">
                                Built for High-Stakes <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-400 to-pink-400">Collaboration.</span>
                            </h2>
                            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-xl">
                                We've re-engineered the video engine from the ground up to support massive scale without sacrificing a single frame of quality.
                            </p>
                        </div>

                        {/* Interactive Feature List (Non-Card) */}
                        <div className="grid gap-6">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`group flex items-start gap-6 p-6 rounded-[2.5rem] border ${feature.color} backdrop-blur-md transition-all duration-500 hover:scale-[1.02] cursor-default`}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                                        {feature.icon}
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                                        <p className="text-slate-400 text-sm font-medium leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Integrated Visual Showcase */}
                    <div className="relative group ">
                        <div className="absolute -inset-10 bg-purple-500/20 rounded-full blur-[100px] group-hover:bg-purple-500/30 transition-colors duration-1000"></div>
                        <div className="relative bg-[#1A1C3C] p-8 rounded-[4rem] border border-white/10 shadow-2xl overflow-hidden aspect-square flex items-center justify-center">
                            <img
                                src={featuresImg}
                                alt="Video Features"
                                className="w-full h-full object-cover rounded-[3rem] transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default VideoFeatures;
