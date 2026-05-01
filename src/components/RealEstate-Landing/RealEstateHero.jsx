import React from 'react';
import { ArrowRight, Home, TrendingUp, Key } from 'lucide-react';
import heroImg from '../../assets/realestatelanding-img/realestatelandinghero.jpg';

const RealEstateHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#F0FDF4] via-white to-[#FEF3C7]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#ECFDF5] -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-50"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-200 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
            <div className="absolute bottom-10 right-20 w-48 h-48 bg-yellow-200 rounded-full blur-[80px] opacity-30"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeInLeft">
                        {/* Hero Badge - Updated: font-size: 12px, font-weight: 500, letter-spacing: 0.05em */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full border border-emerald-200">
                            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                            <span className="text-emerald-800 text-[12px] font-medium tracking-[0.05em] uppercase">Smart Property Solutions</span>
                        </div>

                        {/* Hero H1 */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#1E293B]">
                            The Ultimate <span className="text-emerald-600">Real Estate</span> Platform to Buy, Sell & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">Rent Properties</span>
                        </h1>

                        {/* Hero Description - Mobile: 16px, Tablet/Desktop: 18px, weight: 400, line-height: 1.6 */}
                        <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] text-[#4A4B5E] max-w-xl">
                            Launch a feature-rich property portal with advanced search, virtual tours, and smart agent tools — powering the future of real estate transactions.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            {/* Hero Button - font-size: 16px, font-weight: 600, letter-spacing: 0.01em */}
                            <button
                                onClick={() => document.getElementById('realestate-products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-semibold rounded-full shadow-xl shadow-emerald-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group text-[16px] tracking-[0.01em]"
                            >
                                Explore Our Products
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Right Content - Visuals */}
                    <div className="relative animate-fadeInRight lg:pr-10">
                        <div className="relative group">
                            {/* Decorative Background for Image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-amber-400 rounded-[60px] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-emerald-100 to-amber-50 rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-[1.02] lg:-translate-y-10">
                                <img src={heroImg} alt="Real Estate Hero" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }

                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInRight { animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
            `}</style>
        </section>
    );
};

export default RealEstateHero;