import React from "react";
import corpAboutImg from "../../../../../assets/eventrightems-img/eventrightemsabout1.jpeg";
import { CheckCircle, TrendingUp, Award, Clock } from "lucide-react";

const stats = [
    { icon: <TrendingUp size={22} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Award size={22} />, value: "5K+", label: "Events Powered" },
    { icon: <Clock size={22} />, value: "< 2min", label: "Avg. Setup Time" },
    { icon: <CheckCircle size={22} />, value: "99.9%", label: "Platform Uptime" },
];

const EventRightAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with overlapping stat cards */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative w-full h-[420px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={corpAboutImg} alt="About corporate Events" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 lg:pl-6 order-1 lg:order-2">
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
                                for EventRightorate Event Pros
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Our EventRightorate Events platform brings together every touchpoint of your event lifecycle — from pre-event planning and attendee registration to post-event analytics — into one unified, enterprise-grade workspace.
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

export default EventRightAbout;
