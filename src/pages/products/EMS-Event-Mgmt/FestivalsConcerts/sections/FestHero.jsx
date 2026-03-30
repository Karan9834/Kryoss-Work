import React from "react";
import festHeroImg from "../../../../../assets/festivalconcertems-img/festivalconcertemshero.jpg";
import { ArrowRight, Music, Zap, Star } from "lucide-react";

const FestHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center"
            style={{ background: "linear-gradient(135deg, #4a044e 0%, #6b21a8 35%, #be185d 70%, #db2777 100%)" }}>

            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-5%] left-[-8%] w-[700px] h-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(192,38,211,0.35) 0%, transparent 70%)" }} />
                <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)" }} />
                {/* Spotlight streaks */}
                {/* {[15, 35, 55, 75].map((left, i) => (
                    <div key={i}
                        className="absolute top-0 w-px h-full opacity-10"
                        style={{ left: `${left}%`, background: "linear-gradient(180deg, white, transparent 70%)" }} />
                ))} */}
                {/* Diagonal lines */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-400/40 bg-white/10 backdrop-blur-sm">
                        <Music size={16} className="text-pink-200" />
                        <span className="text-pink-100 text-sm font-bold tracking-wide uppercase">Festival & Concert Management</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        The Stage is Set.{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #f9a8d4, #fbbf24)" }}>
                            Your Events, Amplified.
                        </span>
                    </h1>

                    <p className="text-lg text-pink-100 max-w-xl leading-relaxed">
                        High-volume ticketing, QR access control, cashless festival payments, and fan engagement tools — everything you need to make every live event legendary.
                    </p>

                    {/* Live energy indicators */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        {[
                            { icon: <Zap size={16} />, label: "50K+ Tickets Sold / hr" },
                            { icon: <Star size={16} />, label: "4.9★ Organizer Rating" },
                            { icon: <Music size={16} />, label: "1,200+ Festivals Managed" },
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
                            href="https://preview.codecanyon.net/item/event-and-human-resource-management-system/full_screen_preview/32286548"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #ec4899, #f59e0b)", boxShadow: "0 8px 30px rgba(236,72,153,0.45)" }}
                        >
                            Live Demo
                            <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                        style={{ background: "linear-gradient(135deg, #db2777, #f59e0b)" }} />
                    <div className="relative z-10 w-full max-w-lg">
                        <div className="w-full h-[380px] rounded-[2.5rem] border-8 border-white/10 overflow-hidden shadow-2xl">
                            <img src={festHeroImg} alt="Festival & Concert Management" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating badges */}
                        <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-xl">
                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-slate-800 text-sm font-bold">LIVE • 48,200 Fans</span>
                        </div>
                        <div className="absolute -top-4 -left-4 bg-fuchsia-600 text-white px-4 py-3 rounded-2xl shadow-xl">
                            <p className="text-xs font-semibold text-fuchsia-200">Today's Shows</p>
                            <p className="text-2xl font-black">14</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FestHero;
