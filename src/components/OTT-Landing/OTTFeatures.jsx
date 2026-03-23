import React from 'react';
import { Smartphone, Monitor, Database, Settings, Shield, BarChart2, Star, PlayCircle, ArrowRight } from 'lucide-react';

const OTTFeatures = () => {
    const features = [
        {
            icon: PlayCircle,
            title: "Smart CMS",
            desc: "Advanced video management with automated transcoding.",
            color: "from-red-500 to-rose-600"
        },
        {
            icon: Smartphone,
            title: "Multi-Platform",
            desc: "Native apps for iOS, Android, and all Smart TV platforms.",
            color: "from-purple-500 to-indigo-600"
        },
        {
            icon: Shield,
            title: "Content Security",
            desc: "Multi-level DRM (Widevine, FairPlay) & Piracy protection.",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: Settings,
            title: "Monetization",
            desc: "Flexible SVOD, TVOD, and hyper-targeted AVOD ads.",
            color: "from-amber-500 to-orange-600"
        },
        {
            icon: BarChart2,
            title: "Deep Analytics",
            desc: "Consumer insights, churn prediction, and heatmaps.",
            color: "from-emerald-500 to-teal-600"
        },
        {
            icon: Database,
            title: "Global CDN",
            desc: "Strategic edge locations for zero-buffered playback.",
            color: "from-pink-500 to-red-600"
        }
    ];

    return (
        <section className="py-24 bg-[#0A0A0B] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-red-600/20 rounded-full blur-[200px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-4">
                        <Star size={12} className="text-red-500 fill-red-500" />
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-none pt-0.5">Premium Features</span>
                        <Star size={12} className="text-red-500 fill-red-500" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-semibold text-white">
                        Engineered for <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">High-Stake</span> Streaming
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        We don't just deliver video; we deliver a complete ecosystem for growth.
                    </p>
                </div>

                {/* Fixed Grid Layout (Removed Y Translation to avoid overlap) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full blur-2xl`}></div>
                            
                            <div className="space-y-6 relative z-10">
                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} p-px`}>
                                    <div className="w-full h-full bg-[#0A0A0B] rounded-[15px] flex items-center justify-center text-white scale-[0.98] group-hover:scale-110 transition-transform duration-500">
                                        <feature.icon size={28} />
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-2xl font-black text-white">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>

                                <div className="pt-4 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-600 group-hover:text-red-500 transition-colors">
                                    Full Documentation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OTTFeatures;
