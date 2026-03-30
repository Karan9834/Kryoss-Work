import React from "react";
import { ArrowRight } from "lucide-react";

const QsrCTA = () => {
    return (
        <section className="relative py-28 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #7c2d12 0%, #c2410c 40%, #ea580c 80%, #f97316 100%)" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, #fbbf24, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
                    style={{ background: "radial-gradient(circle, #7c2d12, transparent 70%)" }} />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
                <span className="inline-block text-yellow-200 font-bold text-sm uppercase tracking-widest">
                    Launch Your QSR Platform
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Serve More Customers,{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #fef08a, #fbbf24)" }}>
                        Faster Than Ever
                    </span>
                </h2>
                <p className="text-orange-100 text-lg max-w-2xl mx-auto leading-relaxed">
                    Join 2,500+ QSR chains and fast casual brands who boosted throughput, cut wait times, and scaled profitably with our platform. See it live.
                </p>
                <div className="pt-4">
                    <a
                        href="https://preview.codecanyon.net/item/restaurant-website-management-with-qr-code-menu-food-order/full_screen_preview/28396210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-slate-900 text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: "linear-gradient(90deg, #fbbf24, #f59e0b)", boxShadow: "0 8px 40px rgba(251,191,36,0.4)" }}
                    >
                        Live Demo
                        <ArrowRight size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default QsrCTA;
