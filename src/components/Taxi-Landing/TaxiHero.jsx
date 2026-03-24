import React from 'react';
import { ArrowRight, Star, Clock, Shield } from 'lucide-react';
import heroImg from '../../assets/taxilanding-img/taxilandinghero.jpg';

const TaxiHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF9C3]">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FEF9C3] -skew-x-12 translate-x-32 z-0 hidden lg:block opacity-50"></div>
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-yellow-200 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 opacity-40"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-10 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fadeInLeft">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200">
                            <span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span>
                            <span className="text-yellow-800 text-xs font-bold uppercase tracking-widest">Reliable & Fast Rides</span>
                        </div>

                        <h1 className="text-3xl lg:text-4xl font-semibold text-[#1E293B] leading-tight">
                            Smart <span className="text-yellow-600">Taxi Booking</span> Solutions for Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500 font-bold">Mobility</span>
                        </h1>

                        <p className="text-[#4A4B5E] text-lg lg:text-xl max-w-xl leading-relaxed">
                            Revolutionize your transport business with our cutting-edge taxi dispatch software. Scalable, efficient, and built for growth.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button
                                onClick={() => document.getElementById('taxi-products')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-[#1E293B] font-bold rounded-full shadow-xl shadow-yellow-100 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                            >
                                Explore Our Products
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
                            <div>
                                <p className="text-2xl font-black text-[#1E293B]">50k+</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Global Rides</p>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <p className="text-2xl font-black text-[#1E293B]">200+</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Fleet Owners</p>
                            </div>
                            <div className="w-px h-10 bg-gray-100"></div>
                            <div>
                                <p className="text-2xl font-black text-[#1E293B]">4.8/5</p>
                                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">User Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Visuals */}
                    <div className="relative animate-fadeInRight lg:pr-10">
                        <div className="relative group">
                            {/* Decorative Background for Image */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-[60px] blur-2xl opacity-10 group-hover:opacity-20 transition-all duration-700"></div>

                            {/* Main Image Container */}
                            <div className="relative z-10 w-full max-w-[480px] mx-auto aspect-square bg-gradient-to-br from-yellow-100 to-white rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-[1.02] lg:-translate-y-10">
                                <img src={heroImg} alt="Taxi Hero" className="w-full h-full object-cover" />
                            </div>
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

export default TaxiHero;
