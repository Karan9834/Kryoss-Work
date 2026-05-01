import React from "react";
import qsrHeroImg from "../../../../../assets/qsrfastcasualrms-img/qsrfastcasualrmshero1.jpg";
import { ArrowRight, Zap, Clock, TrendingUp, MessageCircle } from "lucide-react";

const QsrHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center"
            style={{ background: "linear-gradient(135deg, #7c2d12 0%, #c2410c 30%, #ea580c 65%, #f97316 85%, #fbbf24 100%)" }}>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(251,191,36,0.3) 0%, transparent 70%)" }} />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(124,45,18,0.4) 0%, transparent 70%)" }} />
                {/* Moving diagonal speed-lines */}
                {[0, 15, 30, 45, 60, 75].map((left, i) => (
                    <div key={i}
                        className="absolute top-0 bottom-0 w-px opacity-10"
                        style={{ left: `${left}%`, background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.6), transparent)", transform: "skewX(-20deg)" }} />
                ))}
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
                {/* Left */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-300/40 bg-white/10 backdrop-blur-sm">
                        <Zap size={16} className="text-yellow-300" />
                        <span className="text-yellow-100 text-sm font-bold tracking-wide uppercase">QSR & Fast Casual Management</span>
                    </div>

                    {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        Speed. Scale.{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #fef08a, #fbbf24)" }}>
                            Served Hot.
                        </span>
                    </h1>

                    <p className="text-lg text-orange-100 max-w-xl leading-relaxed">
                        Built for the relentless pace of quick-service restaurants and fast casual chains — self-service kiosks, drive-thru sync, digital menu boards, and franchise-wide scaling from one platform.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a
                            href="https://preview.codecanyon.net/item/restaurant-website-management-with-qr-code-menu-food-order/full_screen_preview/28396210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #7c2d12, #ea580c)", boxShadow: "0 8px 30px rgba(234,88,12,0.5)" }}
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
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-25"
                        style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />
                    <div className="relative z-10 w-full max-w-lg">
                        <div className="w-full h-[380px] rounded-[2.5rem] border border-orange-400/20 overflow-hidden shadow-2xl">
                            <img src={qsrHeroImg} alt="QSR Management" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating badges - Removed as requested */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QsrHero;