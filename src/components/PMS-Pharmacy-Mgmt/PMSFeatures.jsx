import React from 'react';
import { Pill, ShoppingCart, Users, BarChart3, ShieldCheck, FileText, Zap, HeartPulse } from 'lucide-react';

const PMSFeatures = () => {
    const features = [
        {
            icon: <Pill size={32} />,
            title: "Inventory Master",
            desc: "Predictive AI-driven stock management with automated reordering and expiration tracking.",
            color: "text-emerald-400",
            border: "border-emerald-500/20"
        },
        {
            icon: <ShoppingCart size={32} />,
            title: "POS Billing",
            desc: "Rapid billing, barcode integration, and unified digital payment gateway for all transactions.",
            color: "text-teal-400",
            border: "border-teal-500/20"
        },
        {
            icon: <Users size={32} />,
            title: "Patient CRM",
            desc: "Secure patient medication history, profiling, and automated refill reminders via SMS.",
            color: "text-[#00BFA5]",
            border: "border-[#00BFA5]/20"
        },
        {
            icon: <FileText size={32} />,
            title: "Refill Automation",
            desc: "Process recurring prescriptions automatically with integrated doctor approval sync.",
            color: "text-emerald-500",
            border: "border-emerald-500/20"
        },
        {
            icon: <BarChart3 size={32} />,
            title: "BI Analytics",
            desc: "Real-time sales tracking, profitability reports, and seasonal stock trends prediction.",
            color: "text-teal-500",
            border: "border-teal-500/20"
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "HIPAA Protected",
            desc: "Advanced end-to-end encryption for patient privacy and institutional data security.",
            color: "text-emerald-200",
            border: "border-emerald-100/20"
        }
    ];

    return (
        <section className="py-24 bg-[#002B2C] relative overflow-hidden text-white">
            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header Phase */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-300 text-[12px] font-medium tracking-[0.05em] uppercase shadow-xl">
                        <HeartPulse size={14} /> Clinical Module Network
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] tracking-tight">
                        Operational{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-100 to-white">
                            Pharmacy Intelligence
                        </span>
                    </h2>
                    
                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-emerald-50/60 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        Our specialized modules are engineered to provide maximum precision, speed, and safety for your clinical operations.
                    </p>
                </div>

                {/* Industrial Bento Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className={`p-10 rounded-[3rem] bg-white/5 border-2 ${feature.border} transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 group shadow-2xl`}
                        >
                            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center ${feature.color} mb-8 border border-white/10 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-inner`}>
                                {feature.icon}
                            </div>
                            {/* Card Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
                            <h3 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-white mb-4 tracking-tighter">
                                {feature.title}
                            </h3>
                            {/* Card Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                            <p className="text-emerald-50/60 text-[14px] md:text-[15px] font-normal leading-[1.6]">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Badge - Updated typography */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl">
                        <Zap size={18} className="text-emerald-400" />
                        <span className="font-semibold text-emerald-100 text-[10px] md:text-[11px] uppercase tracking-[0.05em]">AI-Enhanced Dispensing Integrated as Standard</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PMSFeatures;