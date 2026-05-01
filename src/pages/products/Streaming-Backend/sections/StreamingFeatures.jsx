import React from "react";
import { Zap, Shield, Globe, Cpu, BarChart3, Cloud, Tv, Laptop, Smartphone, Check } from "lucide-react";

const StreamingFeatures = () => {
    const features = [
        {
            icon: <Zap size={24} />,
            title: "Ultra-Low Latency",
            desc: "Powered by WebRTC & LL-HLS to achieve sub-second delay, critical for live interactions and gaming.",
            color: "red"
        },
        {
            icon: <Shield size={24} />,
            title: "Multi-DRM",
            desc: "Protect with Widevine, FairPlay and PlayReady. Enterprise-level encryption for all content.",
            color: "purple"
        },
        {
            icon: <Globe size={24} />,
            title: "Global Edge Network",
            desc: "Strategic 200+ edge nodes globally to deliver high-quality video instantly, anywhere at anytime.",
            color: "orange"
        },
        {
            icon: <BarChart3 size={24} />,
            title: "Real-time QoS",
            desc: "Instant metrics on buffering, quality and viewer dropouts. Know your audience exactly.",
            color: "red"
        },
        {
            icon: <Cpu size={24} />,
            title: "Video Transcoding",
            desc: "Massive parallel processing to deliver at any quality level for every possible device and speed.",
            color: "purple"
        }
    ];

    return (
        <section className="py-24 bg-[#0A0A0B] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-12 gap-16">

                    {/* LEFT COLUMN: Sticky Content */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 self-start space-y-8 h-fit">
                        <div className="space-y-4">
                            <span className="text-red-500 font-bold text-sm uppercase tracking-[0.3em] block">Technical Edge</span>
                            <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-[1.1]">
                                Built for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600">Scale.</span>
                            </h2>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                            Our architecture is designed for extreme loads and zero failure, ensuring your users never see a loading spinner again.
                        </p>

                        <div className="pt-4 flex flex-col gap-4">
                            {['Enterprise Ready', 'Cloud Optimized', 'Secure Infrastructure'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/60 text-sm font-bold uppercase tracking-widest">
                                    <div className="w-5 h-5 rounded-full bg-red-600/20 border border-red-500/30 flex items-center justify-center">
                                        <Check size={12} className="text-red-500" />
                                    </div>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Scrolled Feature Slats */}
                    <div className="lg:col-span-7 space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-red-500/20 transition-all duration-500 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden"
                            >
                                {/* Background Accent */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-${feature.color}-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                                <div className={`w-14 h-14 shrink-0 rounded-2xl bg-${feature.color}-600 text-white flex items-center justify-center shadow-lg shadow-${feature.color}-600/20 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                                    {feature.icon}
                                </div>

                                <div className="space-y-3 relative z-10">
                                    <h3 className="text-2xl font-black text-white group-hover:text-red-500 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-400 leading-relaxed text-base">
                                        {feature.desc}
                                    </p>
                                </div>

                                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/20 group-hover:text-red-500 group-hover:border-red-500/30 transition-all duration-500 absolute top-8 right-8">
                                    <span className="text-xs font-bold leading-none">0{index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StreamingFeatures;
