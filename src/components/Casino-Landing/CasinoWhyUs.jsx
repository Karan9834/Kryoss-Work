import React from 'react';
import { CheckCircle, Zap, Shield, Trophy } from 'lucide-react';
import bootImg from '../../assets/Casino games/landing page in place of boot image.jpg';

const CasinoWhyUs = () => {
    const reasons = [
        {
            icon: Shield,
            title: "Safe & Reliable",
            desc: "Our platform ensures the highest level of security for players and transactions."
        },
        {
            icon: Zap,
            title: "Real-time Action",
            desc: "Ultra-low latency multiplayer experience for seamless gameplay."
        },
        {
            icon: Trophy,
            title: "Expert Development",
            desc: "10+ years of experience in creating top-tier casino gaming products."
        },
        {
            icon: CheckCircle,
            title: "Full Customization",
            desc: "Tailor every aspect of the game to fit your brand identity."
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(249,115,22,0.1),transparent)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8 animate-fadeInLeft">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <span className="text-orange-400 text-[12px] font-medium tracking-[0.05em] uppercase">Why Choose Kryoss</span>
                        </div>

                        {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                        <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                            Build Your <span className="text-orange-500">Casino Empire</span> with Confidence
                        </h2>

                        {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                        <p className="text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                            We provide end-to-end casino game development services, from conceptualization and design to deployment and post-launch support. Our solutions are built to scale and perform.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-600 transition-colors duration-300">
                                        <reason.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        {/* Reason Title - Updated: text-[16px] md:text-[18px] font-bold */}
                                        <h4 className="text-[16px] md:text-[18px] font-bold mb-1">{reason.title}</h4>
                                        {/* Reason Description - Updated: text-[12px] md:text-[13px] font-normal */}
                                        <p className="text-gray-500 text-[12px] md:text-[13px] font-normal">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative animate-fadeInRight translate-y-10">
                        <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl">
                            <img src={bootImg} alt="Casino Tech" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasinoWhyUs;