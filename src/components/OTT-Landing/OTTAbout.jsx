import React from 'react';
import { CheckCircle2, Tv, Globe, Shield, Zap, TrendingUp, Image as ImageIcon } from 'lucide-react';
import aboutImg from '../../assets/ottlanding-img/ottlandingabout.jpg';

const OTTAbout = ({ isLight = false }) => {
    const features = [
        "White-label OTT apps (iOS, Android, TV)",
        "Powerful CMS & Metadata Management",
        "Multi-Bitrate Adaptive Streaming",
        "Multiple Monetization Models (SVOD, AVOD)",
        "DRM & Advanced Piracy Protection",
        "Insightful Real-time Analytics"
    ];

    const textColor = isLight ? "text-gray-900" : "text-white";
    const subTextColor = isLight ? "text-gray-600" : "text-gray-400";
    const bgClass = isLight ? "bg-white" : "bg-[#0A0A0B]";
    const cardBg = isLight ? "bg-gray-50" : "bg-white/5";
    const cardBorder = isLight ? "border-gray-200" : "border-white/5";

    return (
        <section className={`py-24 ${bgClass} relative overflow-hidden`}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Image Placeholder */}
                    <div className="relative group order-2 lg:order-1 animate-fadeInLeft">
                        <div className={`absolute -inset-10 bg-gradient-to-br from-red-600/20 via-purple-600/20 to-transparent rounded-full blur-[100px] ${isLight ? 'opacity-30' : 'opacity-60'} group-hover:opacity-100 transition duration-1000`}></div>

                        {/* Image container */}
                        <div className={`relative z-10 w-full h-auto max-w-[700px] mx-auto ${isLight ? 'bg-gray-100' : 'bg-gradient-to-br from-white/10 to-transparent'} rounded-[30px] md:rounded-[50px] border-4 md:border-8 ${isLight ? 'border-white' : 'border-white/10'} shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]`}>
                            <img
                                src={aboutImg}
                                alt="OTT About"
                                className="w-full h-auto block object-contain"
                            />
                        </div>

                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 order-1 lg:order-2 animate-fadeInRight text-center lg:text-left">
                        <div className="space-y-4">
                            <span className="text-red-500 font-bold text-sm uppercase tracking-[0.3em] block">Future of Video</span>
                            <h2 className={`text-2xl lg:text-3xl font-semibold ${textColor} leading-tight`}>
                                Delivering Excellence <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 font-bold">Across Every Screen</span>
                            </h2>
                            <p className={`${subTextColor} text-lg leading-relaxed max-w-xl mx-auto lg:mx-0`}>
                                Empower your content strategy with a platform that scales automatically. From small creators to massive media houses, we provide the infrastructure needed to dominate the digital screen.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 text-left">
                            {features.map((item, index) => (
                                <div key={index} className={`flex items-center gap-3 p-4 ${cardBg} rounded-2xl hover:bg-red-50 transition-all group cursor-default border ${cardBorder} hover:border-red-100`}>
                                    <CheckCircle2 size={20} className="text-red-500 group-hover:scale-110 transition-transform" />
                                    <span className={`${isLight ? 'text-gray-700' : 'text-gray-300'} font-bold text-sm`}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes fadeInLeft {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out forwards; }

                @keyframes fadeInRight {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                .animate-fadeInRight { animation: fadeInRight 0.8s ease-out forwards; }
            `}</style>
        </section>
    );
};

export default OTTAbout;
