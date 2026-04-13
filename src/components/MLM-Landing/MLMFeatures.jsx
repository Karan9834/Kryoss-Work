import React from 'react';
import { 
    Zap, 
    ShieldCheck, 
    Users, 
    Network, 
    Wallet, 
    BarChart3, 
    Smartphone, 
    Globe 
} from 'lucide-react';

const MLMFeatures = () => {
    const features = [
        {
            icon: <Zap className="w-8 h-8 text-blue-600" />,
            title: "Dynamic Tracking",
            desc: "Automated tracking for dynamic compression and network growth."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
            title: "Secure E-Wallets",
            desc: "Highly secure digital wallets for managing funds and withdrawals."
        },
        {
            icon: <Network className="w-8 h-8 text-blue-600" />,
            title: "Matrix Structures",
            desc: "Flexible support for binary, unilevel, and matrix marketing plans."
        },
        {
            icon: <Wallet className="w-8 h-8 text-blue-600" />,
            title: "Payout Automation",
            desc: "Seamless automated commission processing and payouts."
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
            title: "Sales Analytics",
            desc: "Comprehensive insights into sales volume and network performance."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: "Distributor Portal",
            desc: "Self-service back-office for members to manage their business."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-blue-600" />,
            title: "Mobile App Support",
            desc: "Fully-featured Android and iOS apps for on-the-go management."
        },
        {
            icon: <Globe className="w-8 h-8 text-blue-600" />,
            title: "Global Scalability",
            desc: "Built to handle millions of members across multi-national networks."
        }
    ];

    return (
        <section className="py-24" style={{ background: 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #F0F9FF 100%)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase mb-4">
                        Powerful Features
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Scalable <span className="text-blue-600">MLM Software</span> Capabilities
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

export default MLMFeatures;