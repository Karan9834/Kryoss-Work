import React from 'react';
import { ArrowRight, Utensils, ChefHat, Flame } from 'lucide-react';
const heroimg = "/Products/rms/Ultimate Dining Experience.jpg";

const RMSHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('rms-cards');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-red-900 via-rose-800 to-amber-600 text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/30 blur-[130px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-red-500/30 blur-[130px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[12px] font-medium tracking-[0.05em] uppercase backdrop-blur-md shadow-lg">
                            <ChefHat size={14} className="text-amber-300" />
                            <span>Ultimate Dining Experience</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Run Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-amber-200 to-yellow-300">
                                Restaurant
                            </span> <br />
                            <span className="text-white">Like Clockwork</span>
                        </h1>

                        {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
                        <p className="text-red-50 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl mx-auto lg:mx-0">
                            From kitchen operations to front-of-house excellence. Manage tables, orders, inventory, and staff with our comprehensive Restaurant Management System.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-4 bg-white text-rose-800 font-semibold rounded-2xl hover:bg-amber-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-red-900/30 flex items-center gap-3 text-[16px] tracking-[0.01em]"
                            >
                                Explore Our Products <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Feature Badges - Updated: text-[12px] font-semibold uppercase tracking-[0.05em] */}
                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90">
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <Utensils className="text-amber-300" size={18} /> Table Management
                            </div>
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <Flame className="text-red-300" size={18} /> KDS Integrated
                            </div>
                        </div>
                    </div>

                    {/* Right: Actual Hero Image PlaceHolder */}
                    <div className="relative group block scale-90 md:scale-100">
                        <div className="relative -inset-4 bg-gradient-to-r from-red-500 to-amber-400 rounded-[4rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                        <div className="relative bg-white/10 mt-[-70px] h-[400px] md:h-[500px] backdrop-blur-xl rounded-[4rem] border border-white/30 overflow-hidden shadow-2xl flex items-center justify-center">
                            <img
                                src={heroimg}
                                alt="Restaurant Point of Sale Dashboard"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RMSHero;