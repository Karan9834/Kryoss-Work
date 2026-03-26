import React from 'react';
import {
    BarChart,
    Smartphone,
    Layers,
    ShoppingBag,
    Zap,
    ShieldCheck
} from 'lucide-react';

const RetailFeatures = () => {
    const features = [
        {
            icon: BarChart,
            title: "Multi-Store Reporting",
            desc: "Consolidated sales data and performance analytics for all locations.",
            color: "text-indigo-400",
            bg: "bg-indigo-500/10"
        },
        {
            icon: Smartphone,
            title: "Mobile Point of Sale",
            desc: "Turn any tablet or phone into a powerful checkout terminal.",
            color: "text-emerald-400",
            bg: "bg-emerald-500/10"
        },
        {
            icon: Layers,
            title: "Inventory Sync",
            desc: "Automatic stock updates across physical stores and online shop.",
            color: "text-amber-400",
            bg: "bg-amber-500/10"
        },
        {
            icon: ShoppingBag,
            title: "Customer Loyalty",
            desc: "Integrated CRM with points, rewards, and gift card support.",
            color: "text-rose-400",
            bg: "bg-rose-500/10"
        },
        {
            icon: Zap,
            title: "Offline Mode",
            desc: "Keep selling even when the internet goes down. Sync later.",
            color: "text-blue-400",
            bg: "bg-blue-500/10"
        },
        {
            icon: ShieldCheck,
            title: "Secure Payments",
            desc: "EMV, NFC, and end-to-end encryption for every transaction.",
            color: "text-teal-400",
            bg: "bg-teal-500/10"
        }
    ];

    return (
        <section className="py-24 bg-[#0A0B14] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-indigo-400 font-bold text-sm uppercase tracking-[0.4em] block underline underline-offset-8">Market Dominance</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold pt-4">
                        Features Crafted for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-500">Retail Excellence</span>
                    </h2>
                </div>

                {/* Grid with specialized hover effects */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative group p-10 rounded-[4rem] bg-[#161B22] border border-white/5 hover:bg-[#1C222B] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full group-hover:bg-indigo-500/10 transition-all"></div>
                            <div className="space-y-8 relative z-10">
                                <div className={`w-16 h-16 rounded-3xl ${feature.bg} flex items-center justify-center ${feature.color} group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}>
                                    <feature.icon size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors tracking-tight">{feature.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed font-semibold">
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

export default RetailFeatures;
