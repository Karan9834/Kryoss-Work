import React from 'react';
import {
    BarChart2,
    Wallet,
    RefreshCw,
    Layers,
    ShieldAlert,
    HardDrive
} from 'lucide-react';

const SpotFeatures = () => {
    const features = [
        {
            icon: BarChart2,
            title: "Advanced Trading",
            desc: "Limit, market, stop-loss, and advanced OCO orders for traders.",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: Wallet,
            title: "Wallet Security",
            desc: "MPC technology with cold storage integration for safety.",
            color: "text-indigo-400",
            bg: "bg-indigo-500/10"
        },
        {
            icon: RefreshCw,
            title: "Zero Fee Swaps",
            desc: "Instant conversion between major pairs with no slippage.",
            color: "text-cyan-400",
            bg: "bg-cyan-500/10"
        },
        {
            icon: Layers,
            title: "DeFi Integration",
            desc: "Connect to yield protocols and staking directly.",
            color: "text-purple-400",
            bg: "bg-purple-500/10"
        },
        {
            icon: ShieldAlert,
            title: "AML Monitoring",
            desc: "Automated risk scoring and real-time transaction monitoring.",
            color: "text-rose-400",
            bg: "bg-rose-500/10"
        },
        {
            icon: HardDrive,
            title: "API Ecosystem",
            desc: "High-frequency websocket and REST APIs for bots.",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10"
        }
    ];

    return (
        <section className="py-24 bg-[#0A0B14] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-indigo-400 font-bold text-sm uppercase tracking-[0.4em] block">Platform Core</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                            Everything a Modern Exchange Needs
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6 font-medium">
                        Launch with an institutional-ready feature set and dominate the market from day one.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-10 rounded-[3rem] bg-[#161B22] border border-white/5 hover:border-indigo-500/50 hover:shadow-2xl transition-all duration-500 group"
                        >
                            <div className="space-y-8">
                                <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={32} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors tracking-tight">{feature.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed font-medium">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpotFeatures;
