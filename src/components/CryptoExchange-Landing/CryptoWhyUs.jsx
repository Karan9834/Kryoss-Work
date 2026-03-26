import React from 'react';
import { ShieldCheck, Rocket, Globe, Award } from 'lucide-react';

const CryptoWhyUs = () => {
    const points = [
        {
            icon: ShieldCheck,
            title: "Secure Architecture",
            desc: "Military-grade encryption for all digital transactions.",
            color: "text-blue-500"
        },
        {
            icon: Rocket,
            title: "Scalable Growth",
            desc: "Grows seamlessly as your user base expands to millions.",
            color: "text-purple-500"
        },
        {
            icon: Globe,
            title: "Global Compliance",
            desc: "Ready for institutional-grade regulatory requirements.",
            color: "text-emerald-500"
        },
        {
            icon: Award,
            title: "Industry Leading",
            desc: "Award-winning technology trusted by global brands.",
            color: "text-amber-500"
        }
    ];

    return (
        <section className="py-24 bg-[#0A0B14] text-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-semibold  text-white leading-tight">
                        Why Crypto <span className="text-blue-500">Leaders Trust Us</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
                        We deliver the cutting-edge infrastructure that powers the most reliable and efficient crypto ecosystems worldwide.
                    </p>
                </div>

                {/* Bento Style Grid */}
                <div className="grid lg:grid-cols-4 gap-6">
                    {/* Big Item */}
                    <div className="lg:col-span-2 lg:row-span-2 p-12 rounded-[3rem] bg-white/5 border border-white/10 text-white flex flex-col justify-between group hover:bg-white/10 transition-all">
                        <div className="space-y-8">
                            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">
                                <ShieldCheck size={32} />
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-2xl font-bold">Turnkey Institutional Tech</h3>
                                <p className="text-gray-400 text-lg leading-relaxed">Our platform architecture is built with the same principles as top-tier global stock exchanges, ensuring maximum reliability.</p>
                            </div>
                        </div>
                    </div>

                    {/* Smaller Items */}
                    {points.slice(1).map((point, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                            <div className="space-y-6">
                                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${point.color}`}>
                                    <point.icon size={24} />
                                </div>
                                <div className="space-y-2">
                                    <h4 className="text-lg font-bold">{point.title}</h4>
                                    <p className="text-gray-500 text-sm font-medium">{point.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Wide Item */}
                    <div className="lg:col-span-2 p-10 rounded-3xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-between group">
                        <div className="space-y-2">
                            <h4 className="text-xl font-bold text-blue-400">99.9% Uptime</h4>
                            <p className="text-blue-400/60 font-medium text-sm">Guaranteed for enterprise partners.</p>
                        </div>
                        <div className="w-16 h-16 rounded-full border-4 border-blue-500/20 border-t-blue-500 animate-spin-slow"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
            `}</style>
        </section>
    );
};

export default CryptoWhyUs;
