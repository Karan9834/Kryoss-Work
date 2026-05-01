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
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase mb-4">
                        Core Features
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Next-Gen <span className="text-emerald-600">Betting App</span> Capabilities
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="p-8 bg-white/60 backdrop-blur-md rounded-[32px] border border-white/40 shadow-sm hover:shadow-xl hover:bg-white transition-all duration-300">
                            <div className="mb-6">{feature.icon}</div>
                            {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                            <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-3">
                                {feature.title}
                            </h4>
                            {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                            <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BettingFeatures;