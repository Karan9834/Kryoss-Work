import React from 'react';
import { ArrowRight, Zap, ShieldCheck, TrendingUp, MessageCircle } from "lucide-react";
import heroImg from "../../../../assets/cryptoderivatives-img/cryptoderivativeshero.jpg";

const DerivHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0B14]">
            {/* Animated Background Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-black uppercase tracking-widest">
                            <Zap size={14} />
                            <span>Institutional Derivatives Engine</span>
                        </div>

                        {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                            The Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">
                                Leverage Trading.
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Launch your perpetuals and futures exchange with confidence. High-throughput matching engine with multi-asset margin support.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/tradexpro-demo-trading-crypto-exchange-addon/full_screen_preview/46940765"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-black rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(147,51,234,0.3)] flex items-center gap-3 group"
                            >
                                Try Live Demo
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                                <MessageCircle size={18} />
                                Let's Discuss
                            </a>
                        </div>
                    </div>

                    {/* Right: Asset Preview */}
                    <div className="relative animate-float block scale-90 md:scale-100">
                        <div className="absolute -inset-4 bg-purple-500/20 rounded-[4rem] blur-3xl opacity-50"></div>
                        <div className="relative bg-[#161B22] rounded-[3rem] border-2 border-white/10 overflow-hidden shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Derivatives Trading Terminal"
                                className="w-full h-[250px] md:h-[500px] object-cover opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default DerivHero;