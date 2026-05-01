import React from "react";
import { CheckCircle2, Tv, Image as ImageIcon } from "lucide-react";
import aboutImg from "@/assets/streaming-img/streamingabout1.webp";

const StreamingAbout = () => {
    const points = [
        "White-label Backend Infrastructure",
        "Multi-player HLS/DASH Support",
        "Real-time Content Transcoding",
        "Advanced Session Management",
        "Enterprise-grade Security (DRM)",
        "Global Edge Delivery (CDN)"
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Image */}
                    <div className="relative group animate-fadeInLeft">
                        <div className="absolute -inset-10 bg-gradient-to-br from-red-600/10 via-purple-600/10 to-transparent rounded-full blur-[100px] opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto bg-gray-50 rounded-[60px] border-8 border-white shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src={aboutImg} alt="Streaming About" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 animate-fadeInRight">
                        <div className="space-y-4">
                            <span className="text-red-500 font-bold text-sm uppercase tracking-[0.3em] block">The Technology Behind</span>
                            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight">
                                Experience the Power of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 font-bold">Cloud-Ready Streaming</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                Our streaming backend is built for performance and scalability. We handle the heavy lifting of video processing so you can focus on building your brand.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {points.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 group transition-all">
                                    <CheckCircle2 size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-700 font-bold text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StreamingAbout;
