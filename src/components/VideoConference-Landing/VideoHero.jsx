import React from 'react';
import { Video, Mic, Share2, ArrowRight, ShieldCheck } from 'lucide-react';
import heroImg from '../../assets/videolanding-img/videolandinghero.jpg';

const VideoHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('video-products');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#1A1C3C]">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-600/10 blur-[120px] rounded-full"></div>
                <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-sky-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sky-400 text-[12px] font-medium tracking-[0.05em] uppercase">
                            <Video size={14} />
                            <span>Enterprise Video Collaboration</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
                            Connect the World <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-sky-400">
                                Seamlessly & Securely.
                            </span>
                        </h1>

                        {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
                        <p className="text-slate-300 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl mx-auto lg:mx-0">
                            Ultra-HD video, crystal-clear audio, and real-time collaboration tools designed for the modern workspace. Scalable for any team size.
                        </p>

                        {/* CTA Button - Updated typography */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-5 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-600 text-white font-semibold rounded-2xl hover:scale-105 transition-all shadow-[0_0_30px_rgba(124,58,237,0.3)] flex items-center gap-3 group text-[16px] tracking-[0.01em]"
                            >
                                Explore Our Products
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* Trust Badges - Updated typography */}
                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-60">
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em]">
                                <ShieldCheck className="text-sky-500" size={18} /> End-to-End Encryption
                            </div>
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em]">
                                <Share2 className="text-pink-500" size={18} /> HD Screen Sharing
                            </div>
                        </div>
                    </div>

                    {/* Right: Asset Preview */}
                    <div className="relative animate-float block scale-90 md:scale-100">
                        <div className="absolute -inset-4 bg-purple-500/20 rounded-[4rem] blur-3xl opacity-50"></div>
                        <div className="relative bg-[#2D305E] h-[400px] md:h-[500px] rounded-[3rem] border-2 border-white/10 overflow-hidden shadow-2xl flex items-center justify-center">
                            <img
                                src={heroImg}
                                alt="Video Conference"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

export default VideoHero;