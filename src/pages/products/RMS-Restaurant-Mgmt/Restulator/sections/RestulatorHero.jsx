import React from "react";
import RestulatorHeroImg from "../../../../../assets/resulatorrms-img/resulatorrmshero1.jpg";
import { ArrowRight, UtensilsCrossed, Star, Clock, MessageCircle } from "lucide-react";

const RestulatorHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center"
            style={{ background: "linear-gradient(150deg, #1c1917 0%, #292524 30%, #3b2a00 65%, #78350f 100%)" }}>

            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] right-[-5%] w-[700px] h-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(202,138,4,0.2) 0%, transparent 65%)" }} />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(120,53,15,0.35) 0%, transparent 65%)" }} />
                {/* Elegant thin horizontal lines */}
                {[20, 45, 70].map((top, i) => (
                    <div key={i}
                        className="absolute left-0 right-0 h-px opacity-5"
                        style={{ top: `${top}%`, background: "linear-gradient(90deg, transparent, #d97706, transparent)" }} />
                ))}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "radial-gradient(rgba(202,138,4,0.9) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
                {/* Left */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-700/50 bg-amber-900/20 backdrop-blur-sm">
                        <UtensilsCrossed size={16} className="text-amber-400" />
                        <span className="text-amber-300 text-sm font-bold tracking-wide uppercase">Restulator Restaurant Management</span>
                    </div>

                    {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        Power Your Restaurant with{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #fbbf24, #f59e0b, #d97706)" }}>
                            Restulator.
                        </span>
                    </h1>

                    <p className="text-lg text-amber-100/80 max-w-xl leading-relaxed">
                        A comprehensive restaurant management system with integrated POS and live kitchen tracking — Restulator ensures efficient service, accurate order management, and real-time business insights.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a
                            href="https://preview.codecanyon.net/item/restulator-restaurant-management-system-in-laravel-55-with-pusher-and-jquery/full_screen_preview/20732111"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #b45309, #d97706)", boxShadow: "0 8px 30px rgba(180,83,9,0.5)" }}
                        >
                            Live Demo
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="/company/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                        >
                            <MessageCircle size={20} />
                            Let's Discuss
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                {/* Right */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-20"
                        style={{ background: "radial-gradient(circle, #d97706, transparent)" }} />
                    <div className="relative z-10 w-full max-w-lg">
                        <div className="w-full h-[380px] rounded-[2.5rem] border border-amber-700/30 overflow-hidden shadow-2xl">
                            <img src={RestulatorHeroImg} alt="Fine Dining Management" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating badges - Removed as requested */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RestulatorHero;