import React from 'react';
import {
    Zap,
    ShieldCheck,
    Repeat,
    ArrowRight,
    Target
} from 'lucide-react';

const DerivFeatures = () => {
    const featureItems = [
        {
            title: "Perpetual Swaps",
            desc: "Trade perpetual contracts with up to 100x leverage across multiple asset classes with deep liquidity pools.",
            icon: Repeat,
            color: "purple"
        },
        {
            title: "Dynamic Risk Engine",
            desc: "Intelligent insurance funds and partial liquidation systems designed for total safety and market stability.",
            icon: ShieldCheck,
            color: "blue"
        },
        {
            title: "Advanced Order Types",
            desc: "Trailing stops, limit orders, and algorithmic trading tools built out of the box for professional execution.",
            icon: Target,
            color: "indigo"
        }
    ];

    return (
        <section className="py-24 bg-[#0A0B14] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-purple-400 font-bold text-sm uppercase tracking-widest block">Core Features</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                        Elite Tools for <span className="text-purple-400">Complex Trading</span>
                    </h2>
                </div>

                {/* Card Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featureItems.map((item, idx) => (
                        <div key={idx} className="group p-10 bg-[#161B22] rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/5 hover:border-purple-500/50 flex flex-col justify-between">
                            <div className="space-y-8">
                                <div className={`w-16 h-16 rounded-3xl bg-${item.color}-500/10 flex items-center justify-center text-${item.color}-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-sm`}>
                                    <item.icon size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-purple-400 transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed font-semibold">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 text-left">
                                <button className={`text-${item.color}-400 font-black flex items-center gap-2 group text-sm uppercase tracking-widest`}>
                                    Details <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DerivFeatures;
