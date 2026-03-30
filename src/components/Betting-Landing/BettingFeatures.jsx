import React from 'react';
import { 
    Cpu, 
    Trophy, 
    ShieldCheck, 
    Zap, 
    Layers, 
    Globe, 
    BarChart3, 
    Wallet 
} from 'lucide-react';

const BettingFeatures = () => {
    const features = [
        {
            icon: <Zap className="w-8 h-8 text-emerald-600" />,
            title: "Super Speed",
            desc: "Highly-scalable real-time sports betting applications for high engagement."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
            title: "Security Layers",
            desc: "State-of-the-art security features and multi-layer encryption."
        },
        {
            icon: <Trophy className="w-8 h-8 text-emerald-600" />,
            title: "Live Game Stats",
            desc: "Real-time updates and live game statistics for players."
        },
        {
            icon: <Wallet className="w-8 h-8 text-emerald-600" />,
            title: "Secure Wallets",
            desc: "In-app wallet for effortless deposit and withdrawal of wins."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-emerald-600" />,
            title: "Odds Management",
            desc: "Advanced backend for managing betting odds in real-time."
        },
        {
            icon: <Globe className="w-8 h-8 text-emerald-600" />,
            title: "Multi-Bazar Support",
            desc: "Support for diverse betting markets and regional games."
        },
        {
            icon: <Cpu className="w-8 h-8 text-emerald-600" />,
            title: "One-Touch Betting",
            desc: "Intuitive UX designed for rapid and seamless bet placement."
        },
        {
            icon: <Layers className="w-8 h-8 text-emerald-600" />,
            title: "Scalable Backend",
            desc: "Cloud-native architecture to handle millions of simultaneous players."
        }
    ];

    return (
        <section className="py-24" style={{ background: 'linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 50%, #ECFDF5 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Core Features
                    </div>
                    <h2 className="text-4xl font-extrabold text-[#1E293B]">
                        Next-Gen <span className="text-emerald-600">Betting App</span> Capabilities
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 bg-white/60 backdrop-blur-md rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300">
                            <div className="mb-6">{feature.icon}</div>
                            <h4 className="text-xl font-bold text-[#1E293B] mb-3">{feature.title}</h4>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BettingFeatures;
