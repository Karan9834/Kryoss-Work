import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroImg from '../../assets/grocerylanding-img/grocerylandinghero.jpg';

const GroceryHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#F0FDF4] via-white to-[#FFF7ED]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F0FDF4] -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-100 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeInLeft">
                        {/* Hero Badge - Updated: text-xs font-medium tracking-wider uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 rounded-full border border-emerald-100">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                            <span className="text-emerald-700 text-[12px] font-medium tracking-wider uppercase">Freshness Guaranteed</span>
                        </div>

                        {/* Hero H1 - Updated: text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight */}
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#1A1C2C]">
                            Your Daily <span className="text-emerald-600">Freshness</span>, Delivered in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">Minutes</span>
                        </h1>

                        {/* Hero Description - Updated: text-base md:text-lg font-normal leading-relaxed */}
                        <p className="text-base md:text-lg font-normal leading-relaxed text-[#4A4B5E] max-w-xl">
                            Skip the queues and let us bring the best of the market to your doorstep. Hyper-local, hyper-fresh, and exceptionally fast.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {/* Hero Button - Updated: text-sm md:text-base font-semibold tracking-wide uppercase */}
                            <button
                                onClick={() => document.getElementById('grocery-products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-full shadow-xl shadow-emerald-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-sm md:text-base tracking-wide uppercase"
                            >
                                Explore Our Products
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Trust Badges - Updated Stats Typography */}
                        <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                            <div>
                                {/* Stats Number - Updated: text-xl md:text-2xl font-bold */}
                                <p className="text-xl md:text-2xl font-bold text-[#1A1C2C]">10k+</p>
                                {/* Stats Label - Updated: text-xs font-normal tracking-wider uppercase */}
                                <p className="text-[12px] font-normal tracking-wider uppercase text-gray-400">Active Users</p>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#1A1C2C]">500+</p>
                                <p className="text-[12px] font-normal tracking-wider uppercase text-gray-400">Dark Stores</p>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-[#1A1C2C]">4.9/5</p>
                                <p className="text-[12px] font-normal tracking-wider uppercase text-gray-400">App Ratings</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visuals */}
                    <div className="relative animate-fadeInRight lg:pr-10">
                        <div className="relative group">
                            {/* Decorative Background for Image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-orange-400 rounded-[60px] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-emerald-100 to-white rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-[1.02] lg:-translate-y-10">
                                <img src={heroImg} alt="Grocery Hero" className="w-full h-full object-cover" />
                            </div>
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
                .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
                
                .animate-fadeInLeft {
                    animation: fadeInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }

                .animate-fadeInRight {
                    animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
            `}</style>
        </section>
    );
};

export default GroceryHero;