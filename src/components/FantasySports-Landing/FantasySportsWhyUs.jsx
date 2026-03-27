import React from 'react';
import { CheckCircle, Zap, Shield, Trophy } from 'lucide-react';

const FantasySportsWhyUs = () => {
    const reasons = [
        {
            icon: Shield,
            title: "Safe & Reliable",
            desc: "Our platform ensures the highest level of security for players and transactions."
        },
        {
            icon: Zap,
            title: "Real-time Action",
            desc: "Ultra-low latency scores and multiplayer experience for seamless gameplay."
        },
        {
            icon: Trophy,
            title: "Expert Development",
            desc: "10+ years of experience in creating top-tier sports gaming products."
        },
        {
            icon: CheckCircle,
            title: "Full Customization",
            desc: "Tailor every aspect of the game to fit your sports brand identity."
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.1),transparent)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8 animate-fadeInLeft">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-green-400 text-xs font-bold uppercase tracking-widest">Why Choose Kryoss</span>
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                            Build Your <span className="text-green-500">Fantasy Sports League</span> with Absolute Confidence
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            We provide end-to-end fantasy sports software development services, from conceptualization and design to deployment and post-launch support. Our solutions are built to scale and dominate.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20 group-hover:bg-green-600 transition-colors duration-300">
                                        <reason.icon className="w-6 h-6 text-green-500 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-1">{reason.title}</h4>
                                        <p className="text-sm text-gray-500">{reason.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative animate-fadeInRight translate-y-10">
                        <div className="relative z-10 rounded-[40px] overflow-hidden border-8 border-white/5 shadow-2xl">
                             <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800" alt="Fantasy Tech" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FantasySportsWhyUs;
