import React from 'react';
import { 
  Zap, 
  WifiOff, 
  Smartphone,
  Languages,
  BadgeDollarSign,
  BarChart4
} from 'lucide-react';

const POSFeatures = () => {
    const features = [
        {
            icon: Zap,
            title: "Fast Checkout",
            desc: "Process sales in seconds for high-volume stores.",
            color: "text-indigo-600",
            iconBg: "bg-indigo-100",
            accent: "bg-amber-400"
        },
        {
            icon: WifiOff,
            title: "Offline Mode",
            desc: "Keep selling even when the internet goes down.",
            color: "text-emerald-600",
            iconBg: "bg-emerald-100",
            accent: "bg-indigo-400"
        },
        {
            icon: Smartphone,
            title: "Mobile POS",
            desc: "Run your store from tablets with full mobility.",
            color: "text-amber-600",
            iconBg: "bg-amber-100",
            accent: "bg-emerald-400"
        },
        {
            icon: BadgeDollarSign,
            title: "Secure Payments",
            desc: "Accept UPI, Wallets, and Cards seamlessly.",
            color: "text-cyan-600",
            iconBg: "bg-cyan-100",
            accent: "bg-indigo-300"
        },
        {
            icon: BarChart4,
            title: "Live Reports",
            desc: "Sales insights delivered directly to your device.",
            color: "text-rose-600",
            iconBg: "bg-rose-100",
            accent: "bg-amber-300"
        },
        {
            icon: Languages,
            title: "Global Ready",
            desc: "Multi-currency and multi-tax support for expansion.",
            color: "text-teal-600",
            iconBg: "bg-teal-100",
            accent: "bg-emerald-300"
        }
    ];

    return (
        <section className="py-24 bg-emerald-50/30 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-[100px] -ml-48 -mb-48"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-emerald-600 to-amber-500">
                            Scale Your Business With Intelligence
                        </span>
                    </h2>
                    <p className="text-[#4A4B5E] text-lg max-w-2xl mx-auto mt-6">
                        Powerful features designed to automate boring tasks and let you focus on what actually matters for your growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="p-10 rounded-[3rem] bg-white border-2 border-transparent hover:border-emerald-100 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Accent Dot */}
                            <div className={`absolute top-6 right-6 w-3 h-3 rounded-full ${feature.accent} opacity-40 group-hover:scale-150 transition-transform`}></div>
                            
                            <div className="space-y-8 relative z-10">
                                <div className={`w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center ${feature.color} group-hover:rotate-6 transition-transform duration-500 shadow-sm`}>
                                    <feature.icon size={32} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-500 text-base leading-relaxed font-medium">
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

export default POSFeatures;
