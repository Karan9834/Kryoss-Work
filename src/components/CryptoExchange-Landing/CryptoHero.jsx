import React from 'react';
import { Rocket, ShieldCheck, Zap, ArrowRight, Coins } from 'lucide-react';
import heroImg from '../../assets/cryptolanding-img/cryptolandinghero.jpg';

const CryptoHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('crypto-products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0B14]">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600 opacity-20 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600 opacity-20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold">
                            <Zap size={16} />
                            <span>Next-Gen Crypto Infrastructure</span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-semibold text-white leading-tight">
                            Build Your Own <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400">
                                Crypto Exchange
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Launch a high-performance, secure, and scalable cryptocurrency exchange platform.
                            Empower your users with institutional-grade trading tools and real-time asset management.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3"
                            >
                                Explore Our Products <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-50">
                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                <ShieldCheck className="text-blue-500" size={18} /> Secure Infrastructure
                            </div>
                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                <Rocket className="text-purple-500" size={18} /> High Performance
                            </div>
                        </div>
                    </div>

                    {/* Right: Actual Hero Image */}
                    <div className="relative animate-float block scale-90 md:scale-100">
                        <div className="relative bg-gradient-to-r from-blue-500 to-purple-500 rounded-[50px] blur opacity-30"></div>
                        <div className="relative bg-[#161B22] h-[400px] md:h-[500px] rounded-[3rem] border border-white/10 overflow-hidden aspect-square shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Crypto Exchange Platform"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B14]/60 to-transparent pointer-events-none"></div>
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
                
                @keyframes spin-slow {
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow { animation: spin-slow 12s linear infinite; }
            `}</style>
        </section>
    );
};

export default CryptoHero;
