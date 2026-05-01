import React from "react";
import corporateEmsHero from "../../../../../assets/eventrightems-img/eventrightemshero1.jpg";
import { ArrowRight, Shield, Calendar, Users, MessageCircle } from "lucide-react";

const EventRightHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] overflow-hidden flex items-center"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 30%, #312e81 70%, #4c1d95 100%)" }}>

            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[700px] h-[700px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
                {/* Diagonal lines */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "24px 24px" }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
                {/* Left Content */}
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-400/40 bg-white/10 backdrop-blur-sm">
                        <Shield size={16} className="text-indigo-300" />
                        <span className="text-indigo-200 text-sm font-bold tracking-wide uppercase">Enterprise Event Management</span>
                    </div>

                    {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                        Power Your{" "}
                        <span className="text-transparent bg-clip-text"
                            style={{ backgroundImage: "linear-gradient(90deg, #a5b4fc, #67e8f9)" }}>
                            EventRight Pro
                        </span>{" "}
                        SaaS Platform.
                    </h1>

                    <p className="text-lg text-indigo-100 max-w-xl leading-relaxed">
                        An advanced SaaS-based ticket sales and event booking management system built for scalability — from seamless registrations and QR verification to real-time analytics.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                        <a
                            href="https://preview.codecanyon.net/item/eventright-pro-ticket-sales-and-event-booking-management-system-with-website-web-panels-saas/full_screen_preview/43938835"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                            style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4)", boxShadow: "0 8px 30px rgba(99,102,241,0.4)" }}
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
                        style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }} />
                    <div className="relative z-10 w-full max-w-lg">
                        {/* Hero image placeholder */}
                        <div className="w-full h-[380px] rounded-[2.5rem] border-8 border-white/10 overflow-hidden shadow-2xl">
                            <img src={corporateEmsHero} alt="corporate Events Dashboard" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating badges - Removed as requested */}
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </section>
    );
};

export default EventRightHero;