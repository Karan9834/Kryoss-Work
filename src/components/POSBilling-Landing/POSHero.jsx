import React from 'react';
import { ShoppingCart, CreditCard, PieChart, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import heroImg from '../../assets/poslanding-img/poslandinghero.jpg';

const POSHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('pos-products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-indigo-600 via-emerald-600 to-amber-500 text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/10 opacity-60 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/10 opacity-30 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                            <Zap size={14} className="text-amber-300" />
                            <span>Premium Retail Experience</span>
                        </div>

                        <h1 className="text-3xl lg:text-5xl font-semibold leading-tight">
                            Smart & Seamless <br />
                            <span className="text-white">POS Billing</span> <br />
                            <span className="text-amber-200">Architecture</span>
                        </h1>

                        <p className="text-indigo-50 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                            Empower your business with an all-in-one point of sale system. Built for speed, security, and the ultimate customer experience.
                        </p>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-4 bg-white text-indigo-700 font-bold rounded-2xl hover:bg-amber-400 hover:text-white hover:scale-105 transition-all shadow-xl flex items-center gap-3"
                            >
                                Explore Our Products <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Feature Badges */}
                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90">
                            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <ShieldCheck className="text-amber-300" size={18} /> Secure Payments
                            </div>
                            <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <PieChart className="text-emerald-300" size={18} /> Deep Analytics
                            </div>
                        </div>
                    </div>

                    {/* Right: Actual Hero Image */}
                    <div className="relative group block scale-90 md:scale-100">
                        <div className="relative -inset-4 bg-white/20 rounded-[4rem] blur-2xl opacity-50"></div>
                        <div className="relative bg-white/20 h-[400px] md:h-[500px] backdrop-blur-xl rounded-[4rem] border-4 border-white/30 overflow-hidden aspect-square shadow-2xl">
                            <img
                                src={heroImg}
                                alt="POS Billing System"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default POSHero;
