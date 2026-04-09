import React from "react";
import corporateEmsHero from "../../../../../assets/eventrightems-img/eventrightemshero.jpg";
import { ArrowRight, Shield, Calendar, Users } from "lucide-react";

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

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
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

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-8 py-4 border-t border-white/10">
                        {[
                            { icon: <Calendar size={18} />, label: "Events Managed", value: "5,000+" },
                            { icon: <Users size={18} />, label: "Attendees Tracked", value: "2M+" },
                            { icon: <Shield size={18} />, label: "Enterprise Clients", value: "300+" },
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-indigo-200">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-xl leading-none">{stat.value}</p>
                                    <p className="text-indigo-300 text-xs mt-1">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-2">
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
                    </div>
                </div>

                {/* Right Visual */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full blur-3xl opacity-30"
                        style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }} />
                    <div className="relative z-10 w-full max-w-lg">
                        {/* Hero image placeholder */}
                        <div className="w-full h-[380px] rounded-[2.5rem] border-8 border-white/10 overflow-hidden shadow-2xl">
                            <img src={corporateEmsHero} alt="corporate Events Dashboard" className="w-full h-full object-cover" />
                        </div>
                        {/* Floating badge */}
                        <div className="absolute -bottom-4 -left-6 flex items-center gap-2 bg-white px-5 py-3 rounded-2xl shadow-xl">
                            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-slate-800 text-sm font-bold">Live Event Active</span>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-indigo-600 text-white px-4 py-3 rounded-2xl shadow-xl">
                            <p className="text-xs font-semibold text-indigo-200">Registered</p>
                            <p className="text-2xl font-black">12,840</p>
                        </div>
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
