import { Link } from 'react-router-dom';

"use client";

import React, { memo, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { FaGoogle, FaAmazon, FaSlack, FaMicrosoft, FaApple } from "react-icons/fa";
import HeroParticles from "../HeroParticles";

const Hero = () => {
    // Defer HeroParticles rendering until after the hero content has painted
    // This frees up the main thread for LCP (H1 + hero image) to render first
    const [showParticles, setShowParticles] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShowParticles(true), 1500);
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="relative h-auto min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] flex items-center overflow-hidden bg-white">
            {/* LAYER 1: Background Image - fetchpriority="high" signals this as the LCP element */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/hero-visual.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center right",
                    backgroundRepeat: "no-repeat",
                    filter: "brightness(1.05) contrast(1.02)",
                    // Reserve exact layout space to prevent CLS
                    willChange: "transform"
                }}
            />

            {/* LAYER 2: Particles Effect — deferred 1.5s to not compete with LCP */}
            {showParticles && (
                <div className="absolute inset-0 z-[5] pointer-events-none">
                    <HeroParticles />
                </div>
            )}

            {/* LAYER 3: Subtle Gradient Overlay (Above Image & Particles) */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white/60 via-white/20 to-transparent" />

            {/* LAYER 4: Content (Top Layer) */}
            <div className="w-full relative z-20 px-6 lg:pl-20 lg:pr-12">
                <div className="max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* Left Column (Content area) */}
                        <div className="flex flex-col space-y-4 animate-fade-in-left items-center lg:items-start text-center lg:text-left py-12 lg:py-0">
                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 w-fit bg-white/40 backdrop-blur-md shadow-sm transition-all hover:bg-white/60 mb-6">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                <span className="text-xs font-semibold text-slate-900 uppercase tracking-widest">
                                    Showcasing Our Work
                                </span>
                            </div>

                            {/* Heading (H1) */}
                            <h1 className="text-4xl lg:text-5xl font-semibold text-slate-950 leading-[1.15] tracking-tight mb-6">
                                Building Powerful <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">Digital Solutions</span> <br className="hidden sm:block" />
                                That <span className="text-orange-500">Drive Success</span>
                            </h1>

                            {/* Description (Body Text) */}
                            <div className="relative mb-6">
                                <div className="absolute -inset-4 bg-white/20 backdrop-blur-[2px] rounded-2xl pointer-events-none lg:-left-6" />
                                <p className="relative text-lg text-slate-800 max-w-lg font-normal leading-relaxed">
                                    Explore our innovative projects that showcase how we create
                                    impactful web and app solutions tailored to drive growth and
                                    deliver exceptional results for forward-thinking businesses.
                                </p>
                            </div>

                            <div className="flex flex-col space-y-4 pt-2 items-center lg:items-start w-full mb-8">
                                <Link to="/company/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full text-[17.5px] font-light shadow-xl shadow-orange-500/10 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center gap-2.5 group w-fit cursor-pointer">
                                    Consult Our Experts
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                {/* Micro Trust Signals (Small Text) */}
                                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 font-medium">
                                    <div className="flex items-center gap-2 text-base text-slate-700">
                                        <span className="text-orange-500 font-bold">✓</span>
                                        <span>Ready-to-launch solutions</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-base text-slate-700">
                                        <span className="text-orange-500 font-bold">✓</span>
                                        <span>Custom scalable architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-base text-slate-700">
                                        <span className="text-orange-500 font-bold">✓</span>
                                        <span>Built with modern tech</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column (Focus Area for background) */}
                        <div className="hidden lg:block h-full pointer-events-none" />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Hero);
