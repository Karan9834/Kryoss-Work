import React from "react";
import { ArrowRight, Globe, Users, PlayCircle, BarChart } from "lucide-react";
import heroImg from "@/assets/webinar-img/webinarhero.jpg";

const WebinarHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] bg-slate-50 overflow-hidden flex items-center">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-200/50 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-200/50 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
                {/* Left Content */}
                <div className="space-y-8 animate-fadeInLeft">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-200 bg-white shadow-sm">
                        <Globe size={16} className="text-sky-500" />
                        <span className="text-sky-600 text-sm font-bold tracking-wide uppercase">Global Event Platform</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                        Host Massive <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-cyan-500">Virtual Events.</span>
                    </h1>

                    <p className="text-lg text-slate-600 max-w-xl font-medium leading-relaxed">
                        A dedicated webinar streaming engine designed for scale. Deliver high-quality broadcasts, engage thousands in real-time, and analyze audience behavior instantly.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="https://preview.codecanyon.net/item/webinar-info-plugin-for-elementor/full_screen_preview/39949366"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-xl shadow-sky-500/20 hover:-translate-y-1"
                        >
                            Live Demo
                            <ArrowRight size={20} />
                        </a>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center gap-6 pt-8 mt-4 border-t border-slate-200">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden`}>
                                    <div className="w-full h-full bg-gradient-to-br from-sky-100 to-cyan-100"></div>
                                </div>
                            ))}
                        </div>
                        <div className="text-sm font-medium text-slate-500">
                            Trusted by <span className="text-slate-900 font-bold">500+</span> Event Organizers
                        </div>
                    </div>
                </div>

                {/* Right Visual Image */}
                <div className="relative animate-fadeInRight">
                    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                        {/* Central Element */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-cyan-400 rounded-full blur-3xl opacity-20"></div>

                        {/* Hero Image */}
                        <div className="relative z-10 w-full h-[200px] md:h-[400px] max-w-lg bg-white rounded-[2rem] shadow-2xl border-8 border-white overflow-hidden">
                            <img src={heroImg} alt="Global Webinar Engine" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />

                            {/* Decorative Badge */}
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                                <span className="text-white text-sm font-semibold tracking-wide">LIVE • 4,502 Viewers</span>
                            </div>
                        </div>

                        {/* Ancillary Floating Elements */}
                        {/* <div className="absolute -right-6 top-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[bounce_4s_infinite]">
                            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600">
                                <Users size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold mb-1">Peak Attendance</p>
                                <p className="text-xl font-black text-slate-800">10k+</p>
                            </div>
                        </div>

                        <div className="absolute -left-8 bottom-16 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-[bounce_5s_infinite_reverse]">
                            <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                                <BarChart size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-semibold mb-1">Engagement</p>
                                <p className="text-xl font-black text-slate-800">87%</p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fadeInLeft {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                @keyframes fadeInRight {
                    from { opacity: 0; transform: translateX(30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInLeft {
                    animation: fadeInLeft 1s ease-out forwards;
                }
                .animate-fadeInRight {
                    animation: fadeInRight 1s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default WebinarHero;
