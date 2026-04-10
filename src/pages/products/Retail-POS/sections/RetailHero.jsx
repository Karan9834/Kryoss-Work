import React from 'react';
import { ArrowRight, ShoppingBag, BarChart, Zap, MessageCircle } from 'lucide-react';
import heroImg from "../../../../assets/retailpos-img/retailposhero.jpg";

const RetailHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0B14]">
            {/* Background Soft Orbs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-black uppercase tracking-widest">
                            <ShoppingBag size={14} />
                            <span>Premium Retailing Software</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight tracking-tighter">
                            Modern Commerce <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-indigo-400 to-amber-400">
                                Starts Here.
                            </span>
                        </h1>

                        <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-semibold">
                            Unified cloud-based POS for retail brands that want to grow. Manage inventory, sales, and customers across multiple locations from one powerful dashboard.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/point-of-sale-billing-and-stock-management-system/full_screen_preview/38661505"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white font-black rounded-3xl hover:scale-105 transition-all shadow-xl flex items-center gap-3 group"
                            >
                                Try Live Demo
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="/company/contact"
                                className="px-10 py-5 bg-white/5 text-white font-black rounded-3xl border border-white/10 hover:bg-white/10 hover:scale-105 transition-all shadow-xl flex items-center gap-3 group backdrop-blur-sm"
                            >
                                <MessageCircle size={24} />
                                Let's Discuss
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest">
                                <BarChart className="text-indigo-400" size={18} /> Multi-Store
                            </div>
                            <div className="flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest">
                                <Zap className="text-emerald-400" size={18} /> Cloud Sync
                            </div>
                        </div>
                    </div>

                    {/* Right: Asset Placeholder */}
                    <div className="relative animate-float block scale-90 md:scale-100">
                        <div className="relative -inset-1 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-[60px] blur opacity-20"></div>
                        <div className="relative bg-[#161B22] h-[400px] md:h-[500px] rounded-[60px] border-4 border-white/5 overflow-hidden aspect-square flex items-center justify-center">
                            <img
                                src={heroImg}
                                alt="Retail POS Terminal"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
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

export default RetailHero;
