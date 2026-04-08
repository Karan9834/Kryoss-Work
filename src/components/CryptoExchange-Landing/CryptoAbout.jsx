import React from 'react';
import { CheckCircle2, Shield, Globe, Cpu } from 'lucide-react';
import aboutImg from '../../assets/cryptolanding-img/cryptolandingabout.jpg';

const CryptoAbout = () => {
    const highlights = [
        "Institutional-grade security layers",
        "Multi-signature wallet integration",
        "Deep liquidity network access",
        "Real-time fraud monitoring",
        "Scalable matching engine",
        "Regulatory compliance tools"
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Actual About Image (Taxi Model) */}
                    <div className="relative group animate-fadeInLeft order-2 lg:order-1">
                        <div className="absolute -inset-10 bg-blue-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative z-10 w-full aspect-square bg-white rounded-[60px] border-8 border-white shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                            <img
                                src={aboutImg}
                                alt="Security Dashboard"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-blue-500/5 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* Right: Content (Taxi Model) */}
                    <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
                        <div className="space-y-4">
                            <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em] block">Our Foundation</span>
                            <h2 className="text-3xl lg:text-4xl font-semibold text-[#1E293B] leading-tight">
                                Architecting the Future of <br />
                                <span className="text-blue-600">Digital Asset Exchange</span>
                            </h2>
                            <p className="text-[#4A4B5E] text-lg leading-relaxed">
                                We provide a comprehensive crypto exchange management system designed to streamline your trading operations and enhance user security. From real-time matching to institutional-grade custody, our platform handles everything so you can focus on scaling your business.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-blue-50/50 rounded-2xl hover:bg-blue-100 transition-all group cursor-default border border-transparent hover:border-blue-100">
                                    <CheckCircle2 size={20} className="text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-[#1E293B] font-semibold text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }

                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default CryptoAbout;
