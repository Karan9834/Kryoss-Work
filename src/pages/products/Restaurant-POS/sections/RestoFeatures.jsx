import React from 'react';
import {
    Layout,
    Smartphone,
    Pizza,
    CreditCard,
    ArrowRight,
    TrendingUp,
    Users
} from 'lucide-react';

const RestoFeatures = () => {
    const features = [
        {
            title: "Interactive Floor Planning",
            desc: "Drag and drop tables, manage reservations in real-time, and optimize your seating capacity with our visual floor designer.",
            icon: Layout,
            color: "emerald"
        },
        {
            title: "Waiter Mobile App",
            desc: "Take orders at the table with any smartphone or tablet, instantly synced with the kitchen display system.",
            icon: Smartphone,
            color: "indigo"
        },
        {
            title: "KDS Integration",
            desc: "Complete paperless kitchen with real-time status updates, timers, and priority alerts for maximum efficiency.",
            icon: Pizza,
            color: "amber"
        },
        {
            title: "Omni-channel Payments",
            desc: "Tap-to-pay, QR payments, and all major credit cards integrated with split-bill and multi-pay support.",
            icon: CreditCard,
            color: "emerald"
        },
        {
            title: "Staff Management",
            desc: "Role-based access, attendance tracking, and performance analytics for your entire hospitality team.",
            icon: Users,
            color: "indigo"
        },
        {
            title: "Advanced Analytics",
            desc: "Inventory alerts, revenue forecasting, and deep insights into your restaurant's performance metrics.",
            icon: TrendingUp,
            color: "amber"
        }
    ];

    return (
        <section className="py-24 bg-indigo-950 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest block">Pro Ecosystem</span>
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold">
                        Powerful Features <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-300">Modern Dining Demands</span>
                    </h2>
                </div>

                {/* Structured 3-Column Grid (Replacing Bento) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="group p-10 bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="space-y-8">
                                <div className={`w-16 h-16 rounded-3xl bg-${feature.color}-500/10 flex items-center justify-center text-${feature.color}-400 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-sm`}>
                                    <feature.icon size={32} />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors uppercaseTracking-tight">{feature.title}</h3>
                                    <p className="text-indigo-100/60 text-base leading-relaxed font-medium">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>

                            {/* <div className="pt-8 text-left">
                                <button className="flex items-center gap-2 text-emerald-400 font-black uppercase tracking-widest text-xs group">
                                    Learn More <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RestoFeatures;
