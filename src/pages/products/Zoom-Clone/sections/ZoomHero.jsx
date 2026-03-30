import React from "react";
import { ArrowRight, Video, Mic, Share2 } from "lucide-react";
import heroImg from "@/assets/zoomclone-img/zoomclonehero.jpg";

const ZoomHero = () => {
    return (
        <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#0B0D17] via-[#1A1C3C] to-[#2D1B4E] overflow-hidden flex items-center">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/20 blur-[150px] rounded-full"></div>
                <div className="absolute top-[30%] right-[20%] w-[30%] h-[30%] bg-sky-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center py-20">
                {/* Left Content */}
                <div className="space-y-8 animate-fadeInLeft">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="flex h-2.5 w-2.5 bg-purple-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                        <span className="text-purple-300 text-sm font-semibold tracking-wide uppercase">Enterprise Grade Video Setup</span>
                    </div>

                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                        Build Your Own <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-sky-400 to-indigo-400">Zoom Alternative</span>
                    </h1>

                    <p className="text-lg text-slate-300 max-w-xl font-medium leading-relaxed">
                        Deploy a highly scalable, secure, and feature-rich video conferencing platform. Perfect for enterprise meetings, virtual classrooms, and global collaboration.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <a
                            href="https://preview.codecanyon.net/item/jupitermeet-pro-video-conference/full_screen_preview/37367339"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1"
                        >
                            Live Demo
                            <ArrowRight size={20} />
                        </a>
                    </div>

                    {/* Stats/badges */}
                    <div className="flex items-center gap-8 pt-6 border-t border-white/10 mt-8">
                        <div>
                            <p className="text-3xl font-bold text-white">1000+</p>
                            <p className="text-slate-400 text-sm">Active Participants</p>
                        </div>
                        <div className="w-px h-10 bg-white/10"></div>
                        <div>
                            <p className="text-3xl font-bold text-white"><span>&#60;</span>50ms</p>
                            <p className="text-slate-400 text-sm">Ultra-low Latency</p>
                        </div>
                    </div>
                </div>

                {/* Right Visual Image */}
                <div className="relative animate-fadeInRight group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-sky-600/30 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
                    <div className="relative border-[12px] border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center backdrop-blur-sm">
                        <img src={heroImg} alt="Zoom Clone Platform" className="w-full h-auto object-cover rounded-[1.5rem] transition-transform duration-700 hover:scale-110" />
                    </div>
                </div>
            </div>

            <style jsx>{`
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

export default ZoomHero;
