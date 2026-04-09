import React from "react";
import { ArrowRight } from "lucide-react";

const RestulatorCTA = () => {
    return (
        <section className="relative py-28 overflow-hidden"
            style={{ background: "linear-gradient(150deg, #1c1917 0%, #3b2a00 50%, #78350f 100%)" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #d97706, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #b45309, transparent 70%)" }} />
            </div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
                <span className="inline-block text-amber-400 font-bold text-sm uppercase tracking-widest">
                    Elevate Your Service
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Serve Unforgettable Experiences,{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #fcd34d, #f59e0b)" }}>
                        Every Night
                    </span>
                </h2>
                <p className="text-amber-200/80 text-lg max-w-2xl mx-auto leading-relaxed">
                    Over 800 fine dining and casual restaurants trust our platform to run smoother services, retain loyal guests, and drive higher per-cover revenue. See why.
                </p>
                <div className="pt-4">
                    <a
                        href="https://preview.codecanyon.net/item/restulator-restaurant-management-system-in-laravel-55-with-pusher-and-jquery/full_screen_preview/20732111"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: "linear-gradient(90deg, #b45309, #d97706)", boxShadow: "0 8px 40px rgba(180,83,9,0.5)" }}
                    >
                        Live Demo
                        <ArrowRight size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default RestulatorCTA;
