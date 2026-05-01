import React, { useState } from 'react';
import { Sparkles, ShieldCheck, HeartPulse, Video, MessageCircle, MapPin } from 'lucide-react';
import f1 from '@/assets/matrimonysolution-img/matrimonysolutionfeatures1.jpg';
import f2 from '@/assets/matrimonysolution-img/matrimonysolutionfeatures2.jpg';
import f3 from '@/assets/matrimonysolution-img/matrimonysolutionfeatures3.jpg';
import f4 from '@/assets/matrimonysolution-img/matrimonysolutionfeatures4.jpg';
import f5 from '@/assets/matrimonysolution-img/matrimonysolutionfeatures5.jpg';

const MatrimonyFeatures = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "AI Compatibility Matching",
            desc: "Our engine uses advanced psychological profiling and preference history to suggest matches with over 90% potential compatibility.",
            icon: HeartPulse,
            color: "text-rose-500",
            bg: "bg-rose-50",
            image: f1
        },
        {
            title: "Verified & Secure Profiles",
            desc: "Multi-factor authentication including government ID verification, live selfie checks, and social media validation to ensure a 100% real user base.",
            icon: ShieldCheck,
            color: "text-purple-600",
            bg: "bg-purple-50",
            image: f2
        },
        {
            title: "Virtual Date Rooms",
            desc: "Integrated high-definition video calling with ice-breaker prompts and blurred backgrounds for safe, comfortable first interactions.",
            icon: Video,
            color: "text-blue-500",
            bg: "bg-blue-50",
            image: f3
        },
        {
            title: "Private Messaging",
            desc: "End-to-end encrypted chat with read receipts, disappearing messages, and anti-screenshot technology.",
            icon: MessageCircle,
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            image: f4
        },
        {
            title: "Geographic Filters",
            desc: "Precise location-based searching to find matches within specific neighborhoods, cities, or global communities.",
            icon: MapPin,
            color: "text-amber-500",
            bg: "bg-amber-50",
            image: f5
        }
    ];

    return (
        <section id="matrimony-features" className="py-24 bg-[#FAF5FF] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-purple-600 font-bold text-sm uppercase tracking-widest px-4 py-1 bg-purple-100/50 rounded-full shadow-sm border border-purple-100">Core Capabilities</span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        Features Designed for <span className="text-rose-500">Success</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        Providing the tools necessary to foster trust, encourage interaction, and facilitate meaningful connections.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                    {/* Left: Interactive List */}
                    <div className="w-full lg:w-1/2 space-y-3">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                onClick={() => setActiveFeature(idx)}
                                className={`cursor-pointer transition-all duration-300 rounded-3xl p-6 border-2 
                                ${activeFeature === idx
                                        ? 'bg-white border-purple-200 shadow-xl scale-[1.02]'
                                        : 'bg-white/40 border-transparent hover:bg-white/80 hover:scale-[1.01]'}`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-300
                                        ${activeFeature === idx ? `${feature.bg} ${feature.color} shadow-inner` : 'bg-slate-100 text-slate-400'}`}>
                                        <feature.icon size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className={`text-xl font-bold transition-colors ${activeFeature === idx ? 'text-slate-900' : 'text-slate-600'}`}>
                                            {feature.title}
                                        </h3>
                                        {activeFeature === idx && (
                                            <p className="text-slate-600 text-sm leading-relaxed animate-fadeIn">
                                                {feature.desc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Dynamic Visual */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="aspect-square relative max-w-[500px] mx-auto w-full group">
                            {/* Glow */}
                            <div className={`absolute -inset-4 ${features[activeFeature].bg} rounded-[3rem] blur-2xl opacity-40 transition-colors duration-500`}></div>

                            {/* Mockup Frame */}
                            <div className="relative z-10 w-full h-full bg-white rounded-[3rem] shadow-2xl border-4 border-white flex flex-col overflow-hidden transition-all duration-500 transform hover:-translate-y-2">
                                <div className="flex-1 bg-slate-50 flex items-center justify-center relative">
                                    {/* Feature Image */}
                                    <img
                                        key={activeFeature}
                                        src={features[activeFeature].image}
                                        alt={features[activeFeature].title}
                                        className="w-full h-full object-cover animate-fadeIn"
                                    />

                                    {/* Action Button overlay */}
                                    <div className="absolute bottom-6 right-6">
                                        <div className={`w-14 h-14 rounded-full ${features[activeFeature].bg} ${features[activeFeature].color} shadow-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform`}>
                                            <Sparkles size={24} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default MatrimonyFeatures;
