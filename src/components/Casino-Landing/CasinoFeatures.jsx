import React from 'react';
import { ShieldCheck, Zap, Globe, Users, PenTool, Database } from 'lucide-react';

const CasinoFeatures = () => {
    const features = [
        {
            icon: ShieldCheck,
            title: "Security & RNG",
            desc: "Highly secure algorithms and Random Number Generators (RNGs) for fairness across all games.",
            color: "text-amber-600",
            bg: "bg-amber-100"
        },
        {
            icon: Zap,
            title: "Fast Integration",
            desc: "Seamlessly integrate with your existing platforms and payment systems quickly.",
            color: "text-orange-600",
            bg: "bg-orange-100"
        },
        {
            icon: Globe,
            title: "Global Compliance",
            desc: "Games designed to comply with international gaming regulations and standards.",
            color: "text-sky-600",
            bg: "bg-sky-100"
        },
        {
            icon: Users,
            title: "Multiplayer Engine",
            desc: "Support for real-time multiplayer gaming with hundreds of simultaneous players.",
            color: "text-green-600",
            bg: "bg-green-100"
        },
        {
            icon: PenTool,
            title: "Custom Design",
            desc: "Full UI/UX customization to match your brand and gaming platform aesthetics.",
            color: "text-purple-600",
            bg: "bg-purple-100"
        },
        {
            icon: Database,
            title: "Analytics Hub",
            desc: "Detailed insights and analytics for player behavior, revenue, and game performance.",
            color: "text-indigo-600",
            bg: "bg-indigo-100"
        }
    ];

    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
                {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                <div className="inline-block px-4 py-1.5 bg-sky-100 text-sky-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase">
                    Our Features
                </div>
                
                {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                    A Powerful Engine for <span className="text-sky-600">Casino Gaming</span> Excellence
                </h2>
                
                <div className="w-20 h-1.5 bg-sky-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="group p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-sky-100 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500`}>
                            <feature.icon className={`w-8 h-8 ${feature.color}`} />
                        </div>
                        {/* Card Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
                        <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-[#1E293B] mb-4">
                            {feature.title}
                        </h3>
                        {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CasinoFeatures;