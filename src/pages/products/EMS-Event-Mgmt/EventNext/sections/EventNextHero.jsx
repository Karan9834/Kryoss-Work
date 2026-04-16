import React from "react";
import festHeroImg from "../../../../../assets/eventnextems-img/eventnextemshero1.jpeg";
import { ArrowRight, Zap, Star, MessageCircle } from "lucide-react";

const EventNextHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 35%, #2563eb 70%, #1d4ed8 100%)" }}>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] left-[-8%] w-[700px] h-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)" }} />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)" }} />
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/40 bg-white/10 backdrop-blur-sm">
                        <Zap size={16} className="text-blue-200" />
                        <span className="text-blue-100 text-sm font-bold tracking-wide uppercase">Event Next Management</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        The Stage is Set.{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #fbbf24)" }}>
                            Event Next: Your Events, Reimagined.
                        </span>
                    </h1>

                    <p className="text-lg text-blue-100 max-w-xl leading-relaxed">
                        Multivendor event management, intelligent ticketing, and revolutionary access control for the next generation of live experiences.
                    </p>

                    {/* Performance indicators */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        {[
                            { icon: <Zap size={16} />, label: "High-Volume Ticketing" },
                            { icon: <Star size={16} />, label: "Multivendor Support" },
                        ].map((tag, i) => (
                            <div key={i}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-semibold">
                                {tag.icon}
                                {tag.label}
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
                        <a
                            href="https://preview.codecanyon.net/item/eventnext-revolutionizing-multivendor-event-management-and-ticketing/full_screen_preview/55771342"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #2563eb, #fbbf24)", boxShadow: "0 8px 30px rgba(37,99,235,0.45)" }}
                        >
                            Live Demo
                            <ArrowRight size={20} />
                        </a>
                        <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                            <MessageCircle size={18} />
                            Let's Discuss
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative flex items-center justify-center flex-wrap gap-4">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                        style={{ background: "linear-gradient(135deg, #2563eb, #fbbf24)" }} />
                    <div className="relative z-10 w-full max-w-lg">
                        <div className="w-full h-[380px] rounded-[2.5rem] border-8 border-white/10 overflow-hidden shadow-2xl">
                            <img src={festHeroImg} alt="Event Next Management" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating badges */}
                        <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-xl">
                            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-slate-800 text-sm font-bold">READY • Next Gen Events</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventNextHero;
