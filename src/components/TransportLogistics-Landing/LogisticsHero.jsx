import React from 'react';
import { ArrowRight, Truck, BarChart3, Globe2 } from 'lucide-react';
import heroImg from '../../assets/transportlanding-img/transportlandinghero.jpg';

const LogisticsHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('logistics-products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0F172A]">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-orange-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-orange-400 text-xs font-bold uppercase tracking-widest">
                            <Truck size={14} />
                            <span>Next-Gen Logistics Solutions</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tight">
                            Optimize Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-blue-400">
                                Supply Chain Engine.
                            </span>
                        </h1>

                        <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Real-time tracking, intelligent routing, and seamless fleet management. Scale your logistics operations with our enterprise-grade platform.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-5 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-bold rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(234,88,12,0.3)] flex items-center gap-3 group"
                            >
                                Explore Our Products
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest">
                                <Globe2 className="text-orange-500" size={18} /> Global Network
                            </div>
                            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest">
                                <BarChart3 className="text-blue-500" size={18} /> Real-time Analytics
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Preview */}
                    <div className="relative animate-float block scale-90 md:scale-100">
                        <div className="absolute -inset-4 bg-orange-500/20 rounded-[4rem] blur-3xl opacity-50"></div>
                        <div className="relative bg-[#1E293B] h-[400px] md:h-[500px] rounded-[3rem] border-2 border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                            {/* New Hero Image */}
                            <img 
                                src={heroImg} 
                                alt="Transport Logistics" 
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
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

export default LogisticsHero;
