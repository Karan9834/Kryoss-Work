import React from 'react';
import { 
    Cpu, 
    Palette, 
    ShieldCheck, 
    Zap, 
    Layers, 
    Globe, 
    BarChart3, 
    Wallet 
} from 'lucide-react';

const NFTFeatures = () => {
    const features = [
        {
            icon: <Cpu className="w-8 h-8 text-violet-600" />,
            title: "Smart Contract Integration",
            desc: "Secure and self-executing contracts for automated transactions."
        },
        {
            icon: <Palette className="w-8 h-8 text-violet-600" />,
            title: "Custom Minting",
            desc: "Enable creators to mint their digital assets into non-fungible tokens."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-violet-600" />,
            title: "Security & Transparency",
            desc: "Blockchain-backed record keeping for clear ownership proof."
        },
        {
            icon: <Zap className="w-8 h-8 text-violet-600" />,
            title: "Real-time Auctions",
            desc: "Dynamic bidding system for high-value NFT sales."
        },
        {
            icon: <Layers className="w-8 h-8 text-violet-600" />,
            title: "Multi-Chain Support",
            desc: "Deploy on Ethereum, Polygon, Solana, Binance, and more."
        },
        {
            icon: <Globe className="w-8 h-8 text-violet-600" />,
            title: "Global Reach",
            desc: "Connect creators and collectors from around the world."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-violet-600" />,
            title: "Advanced Analytics",
            desc: "Insights into market trends, price history, and trading volume."
        },
        {
            icon: <Wallet className="w-8 h-8 text-violet-600" />,
            title: "Multi-Wallet Support",
            desc: "Integration with MetaMask, Coinbase, Trust Wallet, and more."
        }
    ];

    return (
        <section className="py-24" style={{ background: 'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 50%, #F5F3FF 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-block px-4 py-1.5 bg-violet-100 text-violet-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase mb-4">
                        Advanced Features
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Powerful Features for Your <span className="text-violet-600">NFT Marketplace</span>
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

export default NFTFeatures;