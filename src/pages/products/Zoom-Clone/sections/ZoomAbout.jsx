import React from 'react';
import { ShieldCheck, Video, Users, Sparkles } from 'lucide-react';
import aboutImg from "@/assets/zoomclone-img/zoomcloneabout.jpg";

const ZoomAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-50/50 rounded-l-[100px] opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-50 rounded-full blur-[100px] opacity-50 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Unique Visual Structure */}
                    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
                        <div className="absolute inset-0 bg-purple-100 rounded-[3rem] blur-[50px] opacity-50"></div>
                        <div className="relative w-full max-w-md aspect-square bg-slate-100 flex-shrink-0 rounded-[3rem] border-8 border-white shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                            <img src={aboutImg} alt="Zoom Clone Capabilities" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100">
                            <span className="text-purple-600 font-bold text-sm uppercase tracking-widest">About The Platform</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 leading-tight">
                            More Than Just <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Video Meetings.</span>
                        </h2>

                        <p className="text-slate-600 text-lg leading-relaxed font-medium">
                            We provide a robust, white-labeled video conferencing solution that mirrors the capabilities of industry leaders while giving you complete control over your data, branding, and user experience.
                        </p>

                        <div className="space-y-4 pt-4">
                            {[
                                "Customizable UI/UX to match your corporate identity.",
                                "On-premise deployment options for strict compliance.",
                                "Comprehensive admin dashboard for user and meeting management."
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-2 h-2 rounded-full bg-purple-500 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
                                    <p className="text-slate-700 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ZoomAbout;
