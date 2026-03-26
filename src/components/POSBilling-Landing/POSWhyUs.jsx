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
                    <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-emerald-400">
                             Why Global Leaders Choose Our POS
                        </span>
                    </h2>
                    <p className="text-indigo-200 text-lg mt-6 max-w-2xl mx-auto font-medium">
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
                            <h3 className="text-2xl font-bold">Gold-Standard Reliability</h3>
                            <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                Our platform consistently outperforms industry standards in checkout speed and transaction success rates.
                            </p>
                        </div>
                        <div className="flex gap-10 pt-6 border-t border-gray-100">
                            <div>
                                <p className="text-4xl font-bold text-indigo-600 italic">99.9%</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Uptime Rate</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-emerald-600 italic">10M+</p>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sales Processed</p>
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
                                    <h4 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-tight">{point.title}</h4>
                                    <p className="text-indigo-200 text-base leading-relaxed font-medium">{point.desc}</p>
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
