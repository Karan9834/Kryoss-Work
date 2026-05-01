import React from 'react';
import { Globe, Users, ShieldCheck, Zap, Star } from 'lucide-react';

const VideoWhyUs = () => {
    const benefits = [
        {
            icon: <Globe className="text-white" size={30} />,
            title: "Global Edge Network",
            description: "Over 200+ data centers worldwide ensuring the lowest latency for every participant, regardless of their location.",
            stat: "200+ PoPs",
            color: "from-purple-600 to-indigo-600",
            shadow: "shadow-purple-500/20"
        },
        {
            icon: <Users className="text-white" size={30} />,
            title: "Massive Scalability",
            description: "Host meetings with up to 10,000+ attendees without compromising on video quality or connection stability.",
            stat: "10k+ Attendees",
            color: "from-sky-500 to-blue-600",
            shadow: "shadow-sky-500/20"
        },
        {
            icon: <ShieldCheck className="text-white" size={30} />,
            title: "Zero-Trust Security",
            description: "Advanced security protocols including SSO integration, waiting rooms, and end-to-end encrypted tunnels.",
            stat: "SOC2 Compliant",
            color: "from-emerald-500 to-teal-600",
            shadow: "shadow-emerald-500/20"
        },
        {
            icon: <Zap className="text-white" size={30} />,
            title: "Universal Desktop App",
            description: "One unified experience across Windows, macOS, and mobile. No plugins required for browser participants.",
            stat: "No-Plugin Req",
            color: "from-pink-500 to-rose-600",
            shadow: "shadow-pink-500/20"
        }
    ];

    return (
        <section className="relative py-24 bg-[#0A0B14] overflow-hidden">
            {/* Background Mesh Gradient (Consistent with Features) */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-purple-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[80%] bg-pink-600/20 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Star className="text-amber-400 fill-amber-400" size={14} />
                        <span className="text-purple-400 text-[12px] font-medium tracking-[0.05em] uppercase">Why Choose Us</span>
                        <Star className="text-amber-400 fill-amber-400" size={14} />
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-white mt-6">
                        The Gold Standard in <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-400 to-pink-400">
                            Virtual Communication.
                        </span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group flex flex-col md:flex-row items-center gap-10 p-12 bg-white/5 backdrop-blur-xl rounded-[3.5rem] border border-white/10 hover:border-purple-500/50 shadow-2xl transition-all duration-700 relative overflow-hidden"
                        >
                            {/* Colorful Animated Glow */}
                            <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>

                            <div className={`w-20 h-20 shrink-0 rounded-[2.5rem] bg-gradient-to-br ${benefit.color} shadow-2xl ${benefit.shadow} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
                                {benefit.icon}
                            </div>

                            <div className="flex-1 text-center md:text-left space-y-4 relative z-10">
                                <div className="flex flex-col md:flex-row md:items-center gap-4">
                                    {/* Card Title - Updated: text-[24px] md:text-[28px] font-bold leading-[1.3] */}
                                    <h3 className="text-[24px] md:text-[28px] font-bold leading-[1.3] text-white group-hover:text-purple-300 transition-colors">
                                        {benefit.title}
                                    </h3>
                                    {/* Stat Badge - Updated: text-[10px] font-semibold uppercase tracking-[0.05em] */}
                                    <span className={`w-fit mx-auto md:mx-0 px-4 py-1 rounded-full bg-gradient-to-r ${benefit.color} text-white font-semibold text-[10px] uppercase tracking-[0.05em] shadow-lg shadow-purple-500/20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500`}>
                                        {benefit.stat}
                                    </span>
                                </div>
                                {/* Card Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                                <p className="text-slate-400 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-3xl">
                                    {benefit.description}
                                </p>
                            </div>

                            <div className="hidden lg:flex w-24 h-24 shrink-0 items-center justify-center relative z-10 group-hover:translate-x-2 transition-transform duration-700">
                                <div className="text-5xl font-bold text-white/5 group-hover:text-purple-400/20 transition-colors">0{index + 1}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoWhyUs;