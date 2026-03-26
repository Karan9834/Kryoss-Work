import React from 'react';
import { ArrowRight, BarChart2, Shield, Zap } from 'lucide-react';
import heroImg from "../../../../assets/cryptospot-img/cryptospothero.jpg";

const SpotHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0B14]">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-black uppercase tracking-widest">
                            <BarChart2 size={14} />
                            <span>Institutional Spot Trading</span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight">
                            Build the Next <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                                Crypto Giant.
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            The most powerful, secure, and scalable spot exchange engine on the market. Engineered for high-frequency trading and maximum uptime.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/localcoins-ultimate-peer-to-peer-crypto-exchange-platform/full_screen_preview/34781557"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 group"
                            >
                                Try Live Demo
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest">
                                <Shield className="text-blue-500" size={18} /> Bank-grade Security
                            </div>
                            <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest">
                                <Zap className="text-indigo-500" size={18} /> 100k+ TPS Engine
                            </div>
                        </div>
                    </div>

                    {/* Right: Asset Preview */}
                    <div className="relative animate-float block scale-90 md:scale-100">
                        <div className="absolute -inset-4 bg-blue-500/20 rounded-[4rem] blur-3xl opacity-50"></div>
                        <div className="relative bg-[#161B22] rounded-[4rem] border-2 border-white/10 overflow-hidden shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Spot Exchange Terminal"
                                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default SpotHero;
