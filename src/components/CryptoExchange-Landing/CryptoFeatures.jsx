import React from 'react';
import { 
  BarChart2, 
  Wallet, 
  RefreshCw, 
  Layers,
  ShieldAlert,
  HardDrive
} from 'lucide-react';

const CryptoFeatures = () => {
    const features = [
        {
            icon: BarChart2,
            title: "Advanced Trading",
            desc: "Limit, market, stop-loss, and advanced order types for professional traders.",
            iconColor: "text-blue-400"
        },
        {
            icon: Wallet,
            title: "Wallet Integration",
            desc: "Support for hot, warm, and cold wallets with secure asset management.",
            iconColor: "text-purple-400"
        },
        {
            icon: RefreshCw,
            title: "Instant Swaps",
            desc: "Enable users to swap digital assets instantly with zero slippage.",
            iconColor: "text-emerald-400"
        },
        {
            icon: Layers,
            title: "Staking & Farming",
            desc: "Reward your community with integrated DeFi yield opportunities.",
            iconColor: "text-amber-400"
        },
        {
            icon: ShieldAlert,
            title: "Risk Management",
            desc: "Integrated fraud detection and multi-layer threat monitoring.",
            iconColor: "text-rose-400"
        },
        {
            icon: HardDrive,
            title: "Liquidity Sync",
            desc: "Deep order books by connecting with top-tier liquidity providers.",
            iconColor: "text-indigo-400"
        }
    ];

    return (
        <section className="py-24 bg-[#0F111A] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-semibold">
                        Core Platform <span className="text-blue-500">Capabilities</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                        Launch a feature-rich exchange with tools that professional traders demand and casual investors love.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div 
                                key={index}
                                className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                            >
                                <div className="space-y-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${feature.iconColor}`}>
                                        <Icon size={28} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed font-medium">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CryptoFeatures;
