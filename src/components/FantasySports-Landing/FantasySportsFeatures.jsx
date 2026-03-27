import React from 'react';
import { Activity, Trophy, ShieldCheck, Gamepad2, Smartphone, Users } from 'lucide-react';

const FantasySportsFeatures = () => {
    const features = [
        {
            icon: Activity,
            title: "Live Stats Engine",
            desc: "Real-time performance metrics and scores for accurate fantasy calculation.",
            color: "text-green-600",
            bg: "bg-green-100"
        },
        {
            icon: Trophy,
            title: "Multiple Leagues",
            desc: "Create daily, weekly, and seasonal fantasy contests and leagues.",
            color: "text-amber-600",
            bg: "bg-amber-100"
        },
        {
            icon: ShieldCheck,
            title: "Secure Payments",
            desc: "Highly integrated and secure payment gateways for cash contests.",
            color: "text-emerald-600",
            bg: "bg-emerald-100"
        },
        {
            icon: Gamepad2,
            title: "Interactive UI",
            desc: "Sleek and responsive user interface designed for hardcore sports fans.",
            color: "text-sky-600",
            bg: "bg-sky-100"
        },
        {
            icon: Smartphone,
            title: "Cross-Platform",
            desc: "Fully optimized mobile apps for both iOS and Android platforms.",
            color: "text-orange-600",
            bg: "bg-orange-100"
        },
        {
            icon: Users,
            title: "Social Experience",
            desc: "Integrate social features like chat, leaderboards, and groups.",
            color: "text-purple-600",
            bg: "bg-purple-100"
        }
    ];

    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
                <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                    Our Features
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold text-[#1E293B]">
                    Built for the <span className="text-green-600">Ultimate Win</span> in Fantasy Sports
                </h2>
                <div className="w-20 h-1.5 bg-green-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="group p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 hover:-translate-y-2"
                    >
                        <div className={`w-16 h-16 ${feature.bg} rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 duration-500`}>
                            <feature.icon className={`w-8 h-8 ${feature.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1E293B] mb-4">{feature.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-lg">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FantasySportsFeatures;
