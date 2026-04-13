import React from 'react';
import { ShieldCheck, Rocket, Globe, Award, Zap, BarChart3 } from 'lucide-react';

const CryptoWhyUs = () => {
    const column1 = [
        {
            icon: ShieldCheck,
            title: "Secure Architecture",
            desc: "Military-grade encryption for all digital transactions and cold storage integrations.",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: Globe,
            title: "Global Compliance",
            desc: "Automated KYC/AML procedures integrated for worldwide regulatory alignment.",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10"
        },
        {
            icon: BarChart3,
            title: "99.9% Uptime",
            desc: "Continuous operation guaranteed by redundant server clusters globally.",
            color: "text-cyan-400",
            bg: "bg-cyan-500/10"
        }
    ];

    const column2 = [
        {
            icon: Rocket,
            title: "Scalable Growth",
            desc: "Built to handle millions of transactions per second with low latency.",
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        },
        {
            icon: Zap,
            title: "Turnkey Solutions",
            desc: "Ready-to-deploy institutional technology for rapid market entry.",
            color: "text-amber-400",
            bg: "bg-amber-500/10"
        },
        {
            icon: Award,
            title: "Industry Leading",
            desc: "Pioneering next-gen blockchain infrastructure for global financial giants.",
            color: "text-rose-400",
            bg: "bg-rose-500/10"
        }
    ];

    return (
        <section className="py-24 bg-[#0A0B14] text-white overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Sticky Content */}
                    <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit space-y-6">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[12px] font-medium tracking-[0.05em] uppercase">
                            Why Choose Kryoss
                        </div>
                        
                        {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                        <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                            Powering the Future of <span className="text-blue-500">Digital Finance</span>
                        </h2>
                        
                        {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                        <p className="text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                            Our institutional-grade infrastructure is built for reliability, security, and unprecedented scale. Join the leaders who trust us to power their crypto ecosystems.
                        </p>
                        
                        <div className="pt-8">
                            <div className="flex items-center gap-4 group cursor-pointer">
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                                    <ShieldCheck className="text-white group-hover:text-blue-500 transition-colors" size={20} />
                                </div>
                                <span className="font-semibold text-[14px] md:text-[16px] group-hover:text-blue-400 transition-colors">Enterprise Grade Security</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Grid */}
                    <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                        {[...column1, ...column2].map((item, i) => (
                            <div 
                                key={i} 
                                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                                    <item.icon size={28} />
                                </div>
                                {/* Card Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
                                <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] mb-3">{item.title}</h3>
                                {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                                <p className="text-gray-400 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CryptoWhyUs;