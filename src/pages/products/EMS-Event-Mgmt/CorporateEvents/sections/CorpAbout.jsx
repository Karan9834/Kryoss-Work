import React from "react";
import corpAboutImg from "../../../../../assets/corporateems-img/corporateemsabout.jpg";
import { CheckCircle, TrendingUp, Award, Clock } from "lucide-react";

const stats = [
    { icon: <TrendingUp size={22} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Award size={22} />, value: "5K+", label: "Events Powered" },
    { icon: <Clock size={22} />, value: "< 2min", label: "Avg. Setup Time" },
    { icon: <CheckCircle size={22} />, value: "99.9%", label: "Platform Uptime" },
];

const CorpAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with overlapping stat cards */}
                    <div className="relative">
                        <div className="relative w-full h-[420px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={corpAboutImg} alt="About Corporate Events" className="w-full h-full object-cover" />
                        </div>
                        {/* Glassmorphic stats cards overlapping */}
                        <div className="absolute -bottom-8 -right-6 grid grid-cols-2 gap-3">
                            {stats.map((s, i) => (
                                <div key={i}
                                    className="bg-white/80 backdrop-blur-md border border-indigo-100 shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-indigo-600"
                                        style={{ background: "linear-gradient(135deg, #e0e7ff, #c7d2fe)" }}>
                                        {s.icon}
                                    </div>
                                    <div>
                                        <p className="text-slate-900 font-bold text-lg leading-none">{s.value}</p>
                                        <p className="text-slate-500 text-xs mt-0.5">{s.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Top floating label */}
                        <div className="absolute -top-5 -left-5 bg-indigo-600 text-white px-5 py-3 rounded-2xl shadow-xl">
                            <p className="text-indigo-200 text-xs font-semibold">Built for</p>
                            <p className="text-white font-bold text-base">Enterprise Scale</p>
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 lg:pl-6">
                        <div className="space-y-3">
                            <span className="inline-block text-indigo-600 font-bold text-sm uppercase tracking-widest">
                                About the Platform
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                                The{" "}
                                <span className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(90deg, #4f46e5, #0891b2)" }}>
                                    All-in-One Hub
                                </span>{" "}
                                for Corporate Event Pros
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our Corporate Events platform brings together every touchpoint of your event lifecycle — from pre-event planning and attendee registration to post-event analytics — into one unified, enterprise-grade workspace.
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                Designed for conference organizers, trade show managers, and enterprise marketing teams who demand precision, scalability, and real-time control over every aspect of their events.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {[
                                "Multi-track session scheduling with conflict detection",
                                "Automated sponsor pipeline and lead capture",
                                "Real-time badge printing and check-in workflows",
                                "Post-event NPS and ROI reporting dashboards",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-indigo-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CorpAbout;
