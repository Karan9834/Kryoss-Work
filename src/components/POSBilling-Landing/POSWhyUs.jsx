import React from 'react';
import { Award, Zap, ShieldCheck, Clock } from 'lucide-react';

const POSWhyUs = () => {
    const points = [
        {
            icon: Zap,
            title: "API-First Infrastructure",
            desc: "Connect with any ERP or accounting software seamlessly with our robust API layer."
        },
        {
            icon: ShieldCheck,
            title: "Advanced Security",
            desc: "PCI-DSS compliant architecture ensuring every transaction and record is safe."
        },
        {
            icon: Clock,
            title: "24/7 Priority Support",
            desc: "Our technical experts are available around the clock to ensure your business never stops."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-[#1A1C2C] to-indigo-900 text-white overflow-hidden relative">
             {/* Decorative Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                 <div className="absolute top-0 px-20 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20 space-y-4">
                    {/* Optional Badge - Add if needed */}
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                        <span className="text-white text-[12px] font-medium tracking-[0.05em] uppercase">Why Choose Us</span>
                    </div> */}
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-emerald-400">
                            Why Global Leaders Choose Our POS
                        </span>
                    </h2>
                    
                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-indigo-200 text-[14px] md:text-[16px] font-normal leading-[1.6] mt-6 max-w-2xl mx-auto">
                        Combining retail expertise with cutting-edge architecture to give you the competitive edge in modern commerce.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                     {/* Left: Main Card */}
                     <div className="p-12 rounded-[3rem] bg-white text-[#1A1C2C] space-y-8 relative overflow-hidden shadow-2xl group transition-transform hover:-rotate-1">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 via-emerald-500 to-amber-500 flex items-center justify-center shadow-xl text-white group-hover:scale-110 transition-transform">
                            <Award size={32} />
                        </div>
                        <div className="space-y-4 relative z-10">
                            {/* Card Title - Updated: text-[24px] md:text-[28px] font-bold leading-[1.3] */}
                            <h3 className="text-[24px] md:text-[28px] font-bold leading-[1.3]">Gold-Standard Reliability</h3>
                            {/* Card Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                            <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                Our platform consistently outperforms industry standards in checkout speed and transaction success rates.
                            </p>
                        </div>
                        <div className="flex gap-10 pt-6 border-t border-gray-100">
                            <div>
                                <p className="text-4xl font-bold text-indigo-600 italic">99.9%</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-gray-400">Uptime Rate</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-emerald-600 italic">10M+</p>
                                <p className="text-[10px] font-bold uppercase tracking-[0.05em] text-gray-400">Sales Processed</p>
                            </div>
                        </div>
                     </div>

                     {/* Right: List of points */}
                     <div className="space-y-10">
                        {points.map((point, i) => (
                            <div key={i} className="flex gap-6 group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-indigo-600 transition-all shadow-lg">
                                    <point.icon size={28} />
                                </div>
                                <div className="space-y-2">
                                    {/* Point Title - Updated: text-[20px] md:text-[22px] font-bold leading-[1.3] */}
                                    <h4 className="text-[20px] md:text-[22px] font-bold leading-[1.3] text-white group-hover:text-emerald-400 transition-colors">{point.title}</h4>
                                    {/* Point Description - Updated: text-[14px] md:text-[15px] font-normal leading-[1.6] */}
                                    <p className="text-indigo-200 text-[14px] md:text-[15px] font-normal leading-[1.6]">{point.desc}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>
        </section>
    );
};

export default POSWhyUs;