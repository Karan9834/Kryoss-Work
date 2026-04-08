import React from "react";
import festAboutImg from "../../../../../assets/festivalconcertems-img/festivalconcertemsabout.jpg";
import { CheckCircle } from "lucide-react";

const EventNextAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Image with decorative frame */}
                    <div className="relative">
                        <div className="relative w-full h-[420px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={festAboutImg} alt="About Event Next" className="w-full h-full object-cover" />
                        </div>
                        {/* Decorative corner frames */}
                        <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-blue-400 rounded-tl-2xl" />
                        <div className="absolute bottom-4 right-4 w-16 h-16 border-b-4 border-r-4 border-blue-600 rounded-br-2xl" />
                        {/* Floating label */}
                        <div className="absolute -bottom-5 left-8 bg-gradient-to-r from-blue-700 to-indigo-600 text-white px-6 py-3 rounded-2xl shadow-xl">
                            <p className="text-xs text-blue-200 font-semibold">Powered By</p>
                            <p className="text-white font-bold text-sm">KRYOSSEvents™</p>
                        </div>
                    </div>

                    {/* Right: Text */}
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <span className="inline-block text-blue-600 font-bold text-sm uppercase tracking-widest">
                                About the Platform
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                                Built for the{" "}
                                <span className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)" }}>
                                    Next Generation of Events
                                </span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Event Next is not just another event platform — it's a revolutionary multivendor ecosystem built for scale and seamless interaction. Our solution handles high-concurrent ticket sales, multivendor management, and advanced ticketing analytics effortlessly.
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                From large-scale conferences to distributed multivendor festivals, Event Next provides the tools to manage every vendor and attendee with precision.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {[
                                "Multivendor event management with dedicated dashboards",
                                "Intelligent ticketing engine for high-traffic environments",
                                "Unified access control and QR-based verification",
                                "Real-time vendor sales and performance tracking",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-blue-500 mt-0.5 flex-shrink-0" />
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

export default EventNextAbout;
