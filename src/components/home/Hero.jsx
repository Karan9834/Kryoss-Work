"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { FaGoogle, FaAmazon, FaSlack, FaMicrosoft, FaApple } from "react-icons/fa";
import HeroParticles from "../HeroParticles";

const Hero = () => {
    return (
        <section className="relative h-auto min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] lg:min-h-0 flex items-center bg-gradient-to-r from-white to-slate-100 overflow-hidden py-12 lg:py-12">
            {/* Particle Canvas Layer */}
            <HeroParticles />

            {/* Readability Mask Overlay (Fix for text area) */}
            <div className="absolute top-0 left-0 w-full h-full z-[1] bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_60%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Column (Content) */}
                    <div className="flex flex-col space-y-3 lg:space-y-4 animate-fade-in-left items-center lg:items-start text-center lg:text-left">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 w-fit bg-white/50 backdrop-blur-sm shadow-sm mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
                                Showcasing Our Work
                            </span>
                        </div>

                        {/* Heading (H1) */}
                        <h1 className="text-4xl lg:text-5xl font-semibold text-slate-900 leading-[1.15] tracking-tight mb-6">
                            Building Powerful <br className="hidden sm:block" />
                            Digital Solutions <br className="hidden sm:block" />
                            That <span className="text-orange-500">Drive Success</span>
                        </h1>

                        {/* Description (Body Text) */}
                        <p className="text-base text-slate-600 max-w-lg leading-relaxed mb-6">
                            Explore our innovative projects that showcase how we create
                            impactful web and app solutions tailored to drive growth and
                            deliver exceptional results for forward-thinking businesses.
                        </p>

                        <div className="flex flex-col space-y-4 pt-2 items-center lg:items-start w-full mb-8">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-[17.5px] font-light shadow-xl shadow-orange-500/10 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2.5 group w-fit cursor-pointer">
                                Consult Our Experts
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Micro Trust Signals (Small Text) */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 opacity-90">
                                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                                    <span className="text-orange-500">✓</span>
                                    <span>Ready-to-launch solutions</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                                    <span className="text-orange-500">✓</span>
                                    <span>Custom scalable architecture</span>
                                </div>
                                <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                                    <span className="text-orange-500">✓</span>
                                    <span>Built with modern tech</span>
                                </div>
                            </div>
                        </div>

                        {/* Trusted Brands */}
                        <div className="pt-6 space-y-4 w-full">
                            <p className="text-[10px] lg:text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] text-center lg:text-left">
                                Trusted by top brands
                            </p>
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 lg:gap-x-10 gap-y-6">
                                {[
                                    { Icon: FaGoogle, color: "hover:text-blue-500" },
                                    { Icon: FaAmazon, color: "hover:text-orange-500" },
                                    { Icon: FaSlack, color: "hover:text-purple-500" },
                                    { Icon: FaMicrosoft, color: "hover:text-blue-600" },
                                    { Icon: FaApple, color: "hover:text-slate-900" }
                                ].map(({ Icon, color }, index) => (
                                    <Icon
                                        key={index}
                                        className={`text-2xl lg:text-3xl text-slate-400/60 transition-all duration-300 cursor-pointer ${color} hover:opacity-100 hover:scale-110 grayscale hover:grayscale-0`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center animate-fade-in-right mt-8 lg:mt-0">
                        <img
                            src="/images/hero-visual.png"
                            alt="Developer illustration"
                            className="relative z-10 w-full max-w-lg lg:max-w-xl h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;