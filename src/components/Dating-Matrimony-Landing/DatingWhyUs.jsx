import React from 'react';
import { ShieldCheck, Zap, Users, Globe, Heart, Award } from 'lucide-react';

const DatingWhyUs = () => {
    const reasons = [
        {
            icon: ShieldCheck,
            title: "Advanced Safety Suite",
            desc: "Industry-leading privacy controls and multi-step profile verification.",
            color: "text-rose-500",
            glow: "group-hover:shadow-rose-500/20"
        },
        {
            icon: Zap,
            title: "AI-Powered Matching",
            desc: "Custom-built algorithms that learn user preferences for better pairing.",
            color: "text-purple-500",
            glow: "group-hover:shadow-purple-500/20"
        },
        {
            icon: Users,
            title: "Engagement Boosters",
            desc: "Interactive features designed to keep users returning to your platform.",
            color: "text-amber-500",
            glow: "group-hover:shadow-amber-500/20"
        },
        {
            icon: Globe,
            title: "Global Scalability",
            desc: "Cloud-native infrastructure that grows seamlessly with your user base.",
            color: "text-blue-500",
            glow: "group-hover:shadow-blue-500/20"
        }
    ];

    return (
        <section className="py-24 bg-[#0F172A] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-600/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Left: Content Card - Updated Heading */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-rose-400 font-bold text-xs uppercase tracking-widest">
                            <Award size={14} />
                            The Industry Standard
                        </div>
                        
                        {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                        <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white">
                            Build Your Legacy <br />
                            In the <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500">Love Tech</span> Market
                        </h2>
                        
                        <p className="text-slate-400 text-lg leading-relaxed">
                            We don't just provide code; we provide a complete business ecosystem. Our matchmaking solutions are battle-tested and designed for maximum retention.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-8">
                            <div className="space-y-1">
                                <p className="text-3xl font-black text-white">99.9%</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Uptime Guarantee</p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-3xl font-black text-rose-500">24/7</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-tighter">Technical Support</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Feature Grid - Fonts KEPT ORIGINAL */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {reasons.map((item, idx) => (
                            <div 
                                key={idx} 
                                className={`group p-8 bg-white/5 border border-white/10 rounded-3xl transition-all duration-500 hover:bg-white/10 hover:border-white/20 ${item.glow} hover:shadow-2xl relative overflow-hidden`}
                            >
                                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${item.color} mb-6 group-hover:scale-110 transition-transform`}>
                                    <item.icon size={24} />
                                </div>
                                {/* Card Title - ORIGINAL FONT (unchanged) */}
                                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                                {/* Card Description - ORIGINAL FONT (unchanged) */}
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                
                                {/* Background Number Overlay */}
                                <span className="absolute -right-2 -bottom-4 text-7xl font-black text-white/5 pointer-events-none group-hover:text-white/10 transition-all">
                                    0{idx + 1}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DatingWhyUs;