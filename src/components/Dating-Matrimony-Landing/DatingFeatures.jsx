import React from 'react';
import { 
    Heart, 
    ShieldCheck, 
    Sparkles, 
    Zap,
    Smartphone,
    UserCheck,
    MessageCircle,
    ArrowRight
} from 'lucide-react';

const DatingFeatures = () => {
    const features = [
        {
            title: "Smart Discovery",
            desc: "Advanced AI profiling that understands your personality and suggests highly compatible matches.",
            icon: Heart,
            color: "text-rose-500",
            bg: "bg-rose-50",
            border: "group-hover:border-rose-200"
        },
        {
            title: "Verified Trust",
            desc: "Comprehensive ID and social verification to ensure a safe and authentic community.",
            icon: UserCheck,
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "group-hover:border-purple-200"
        },
        {
            title: "Seamless Connection",
            desc: "Encrypted messaging and HD video calls to bridge the gap between interest and meeting.",
            icon: MessageCircle,
            color: "text-blue-500",
            bg: "bg-blue-50",
            border: "group-hover:border-blue-200"
        },
        {
            title: "Real-time Interactions",
            desc: "Instant notifications, read receipts, and typing indicators to keep the conversation flowing naturally.",
            icon: Zap,
            color: "text-amber-500",
            bg: "bg-amber-50",
            border: "group-hover:border-amber-200"
        },
        {
            title: "Mobile First Design",
            desc: "Fully responsive interfaces optimized for tapping, swiping, and seamless mobile engagement.",
            icon: Smartphone,
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            border: "group-hover:border-emerald-200"
        },
        {
            title: "Privacy Controls",
            desc: "Granular controls allowing users to hide profiles, block contacts, and manage data sharing.",
            icon: ShieldCheck,
            color: "text-rose-600",
            bg: "bg-rose-100",
            border: "group-hover:border-rose-300"
        }
    ];

    return (
        <section className="py-24 bg-[#FFF1F2] relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-rose-600 font-bold text-sm uppercase tracking-widest px-4 py-1 bg-white rounded-full shadow-sm border border-rose-100">Premium Capabilities</span>
                    <h2 className="text-3xl lg:text-5xl font-bold text-slate-900">
                        Designed for <span className="text-purple-600">Engagement</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div 
                            key={idx} 
                            className={`group relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] border-2 border-white ${feature.border} shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2`}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 ${feature.bg} transition-opacity duration-500 ease-in-out`}></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-16 h-16 rounded-2xl bg-white shadow-sm border border-slate-50 flex items-center justify-center ${feature.color} mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                                    <feature.icon size={32} />
                                </div>
                                
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                                    {feature.title}
                                </h3>
                                
                                <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                                    {feature.desc}
                                </p>
                                
                                <div className={`mt-auto w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center ${feature.color} border border-slate-50 group-hover:w-full group-hover:justify-between group-hover:px-6 transition-all duration-500 overflow-hidden`}>
                                    <span className="font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-0 group-hover:w-auto">Explore Feature</span>
                                    <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DatingFeatures;
