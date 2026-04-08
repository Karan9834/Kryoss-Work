import React from "react";
import { ArrowRight } from "lucide-react";
import lmshero from "../../assets/lms-img/lmshero.jpg";

const LmsHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] bg-gradient-to-r from-[#1e1b4b] to-[#0f172a] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-10 pb-0 flex flex-col lg:flex-row lg:items-end justify-between">
                {/* LEFT CONTENT */}
                <div className="w-full lg:w-[50%] text-white pb-12 mt-20 lg:pb-20 lg:pr-10">
                    {/* Logo + Brand */}
                    <div className="flex items-center gap-3 mb-6">
                        {/* Icon */}
                        <div
                            className="w-10 h-10 flex items-center justify-center rounded-lg text-xl
      bg-gradient-to-br from-violet-400 to-indigo-500
      shadow-[0_0_16px_rgba(139,92,246,0.85)]"
                        >
                            <span className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]">
                                🎓
                            </span>
                        </div>

                        {/* Brand */}
                        <span className="text-xl font-semibold tracking-wide uppercase">
                            <span
                                className="text-violet-400 
            drop-shadow-[0_0_8px_rgba(139,92,246,0.9)]"
                            >
                                Vyom
                            </span>

                            <span className="text-white ml-1">LMS</span>
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
                        <span className="text-[#a78bfa]">Learning Management System</span> Product
                        Development
                    </h1>

                    {/* Paragraph */}
                    <p className="text-indigo-100/80 max-w-xl mb-8 leading-relaxed">
                        Revolutionize your educational journey with our custom LMS solutions.
                        Our platform empowers educators and learners with interactive tools,
                        comprehensive tracking, and seamless content delivery for maximum engagement.
                    </p>

                    {/* CTA */}
                    <button className="flex items-center gap-3 bg-[#8b5cf6] text-white font-medium px-6 py-3 rounded-full hover:bg-[#7c3aed] transition shadow-[0_0_15px_rgba(139,92,246,0.5)]" onClick={() => document.getElementById('explore-lms')?.scrollIntoView({ behavior: 'smooth' })}>
                        Explore Products
                        <ArrowRight size={18} />
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full lg:w-[50%] flex justify-center lg:justify-end mt-14 lg:mt-0">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-violet-500/20 blur-3xl rounded-full"></div>
                        <img
                            src={lmshero}
                            alt="LMS App Placeholder"
                            className="relative w-[420px] md:w-[520px] rounded-3xl mb-28 min-h-[300px] bg-indigo-900/40 border border-indigo-500/30 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LmsHero;
