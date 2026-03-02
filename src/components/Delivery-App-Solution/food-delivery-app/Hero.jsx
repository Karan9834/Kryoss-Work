import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] flex items-center bg-[#1A1A1A] overflow-hidden py-12 px-4 sm:px-10 lg:px-20">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://whitelabelfox.com/assets/images/online-food-ordering-app/fox-food-main-slider-bg.webp")' }}
            ></div>

            <div className="max-w-[1400px] mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white space-y-8 animate-fade-in-left">
                        <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
                            Food Ordering App <br />
                            <span className="text-[#FF5722]">Development Company</span> <br />
                            for Startups & Enterprises
                        </h1>
                        <p className="text-base text-gray-300 max-w-xl leading-relaxed">
                            Comprehensive solution for restaurants, cloud kitchens, and food aggregators.
                            Launch your white-label food delivery platform today.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#FF5722] hover:bg-[#E64A19] text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:scale-105 flex items-center gap-2">
                                Consult Our Experts
                                <ArrowRight size={20} />
                            </button>
                            <button className="border-2 border-white/20 hover:border-white text-white px-8 py-4 rounded-lg font-bold transition-all hover:bg-white/5">
                                View Live Demo
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative animate-fade-in-right">
                        <img
                            src="https://whitelabelfox.com/assets/images/online-food-ordering-app/fox-food-main-slider-mockup.webp"
                            alt="Food Delivery App Mockup"
                            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(255,87,34,0.15)]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
