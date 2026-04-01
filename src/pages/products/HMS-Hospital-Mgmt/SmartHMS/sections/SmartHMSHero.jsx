import React from 'react';
import heroImg from "@/assets/smarthms-img/smarthmshero.jpg";

const SmartHMSHero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-cyan-900 to-indigo-900 pt-32 pb-24 lg:pt-24 lg:pb-32">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Text on Left */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-sm font-semibold tracking-wider font-sans uppercase">Intelligent Healthcare Solution</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-8">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-indigo-300">
                            Smart HMS
                        </span>
                        <br />
                        <span className="text-white text-3xl md:text-4xl lg:text-5xl lg:leading-tight mt-4 block font-bold leading-tight">
                            The Central Nervous System for Hospitals
                        </span>
                    </h1>

                    <p className="text-cyan-100/80 text-lg md:text-xl xl:text-2xl mb-10 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
                        Transform operations with our all-in-one platform. Streamline patient care, automate billing, and enhance medical staff collaboration.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                        <a
                            href="https://preview.codecanyon.net/item/smart-hospital-hospital-management-system/full_screen_preview/23205038"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl font-semibold text-white overflow-hidden  text-lg transition-transform hover:scale-[1.02]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Live Demo
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>
                    </div>
                </div>

                {/* Image on Right */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
                    <div className="relative w-full max-w-lg aspect-video lg:aspect-[4/3] bg-teal-900/40 rounded-[3rem] border border-cyan-500/20 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl mt-12 lg:mt-0">
                        {/* Decorative background gradients for the right image placeholder */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/30 rounded-full blur-[80px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/30 rounded-full blur-[80px]"></div>

                        <div className="relative z-10 w-full h-full overflow-hidden">
                            <img src={heroImg} alt="Smart HMS Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    </div>
                    {/* Floating badge */}
                    {/* <div className="absolute top-1/2 -translate-y-1/2 -left-6 lg:-left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce hover:animate-none">
                        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-bold text-xl">
                            +
                        </div>
                        <div>
                            <p className="text-slate-800 font-bold text-sm">Trusted By</p>
                            <p className="text-cyan-600 font-black text-xl">500+ Clinics</p>
                        </div>
                    </div> */}
                </div>

            </div>
        </section>
    );
};

export default SmartHMSHero;
