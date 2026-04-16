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

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Speed. Scale.{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #fef08a, #fbbf24)" }}>
                            Served Hot.
                        </span>
                    </h1>

                    <p className="text-lg text-orange-100 max-w-xl leading-relaxed">
                        Built for the relentless pace of quick-service restaurants and fast casual chains — self-service kiosks, drive-thru sync, digital menu boards, and franchise-wide scaling from one platform.
                    </p>

                    <div className="flex flex-wrap gap-6 py-4 border-t border-white/10">
                        {[
                            { icon: <Zap size={18} />, value: "< 90s", label: "Avg. Order Time" },
                            { icon: <Clock size={18} />, value: "2,500+", label: "QSR Chains" },
                            { icon: <TrendingUp size={18} />, value: "+40%", label: "Revenue per Location" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-orange-900/40 border border-orange-400/30 flex items-center justify-center text-yellow-300">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-xl leading-none">{stat.value}</p>
                                    <p className="text-orange-300 text-xs mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

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
                        <div className="absolute -bottom-4 -right-4 flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-xl">
                            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-slate-800 text-sm font-bold">Kiosk Active — Order #1,284</span>
                        </div>
                        <div className="absolute -top-4 -left-4 bg-orange-500 text-white px-4 py-3 rounded-2xl shadow-xl">
                            <p className="text-xs font-semibold text-orange-200">Orders Today</p>
                            <p className="text-2xl font-black">4,720</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QsrHero;
