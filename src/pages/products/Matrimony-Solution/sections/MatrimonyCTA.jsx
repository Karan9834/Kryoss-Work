import React from "react";
import { PlayCircle, MessageCircle } from "lucide-react";

const MatrimonyCTA = () => {
    return (
        <section className="py-24 bg-[#0A0A0B] relative overflow-hidden">
            {/* Background Orbs custom to Matrimony */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center space-y-10">
                <h2 className="text-3xl lg:text-4xl font-semibold text-white leading-tight tracking-tight">
                    Ready to Launch Your <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-400 to-rose-400">Matrimony Platform?</span>
                </h2>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Join leading matchmaking businesses who trust our secure, scalable infrastructure to power millions of connections. Start your journey today.
                </p>

                <div className="flex justify-center pt-8 flex-wrap gap-4">
                    <a
                        href="https://preview.codecanyon.net/item/dating-app-social-match-making-matrimony-theme-react-native-ui-ux-design-tinder-bumble-badoo-clone/full_screen_preview/56904398"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-12 py-5 bg-gradient-to-r from-rose-500 to-purple-600 text-white font-black rounded-full shadow-2xl shadow-rose-500/20 hover:scale-105 hover:shadow-rose-500/40 transition-all duration-300 flex items-center gap-3 group"
                    >
                        Try Live Demo
                        <PlayCircle size={24} className="group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
                </div>

                {/* Footer notes */}
                <div className="pt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500 font-medium text-sm">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> No hidden fees</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> Source code available</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Free deployment</span>
                </div>
            </div>
        </section>
    );
};

export default MatrimonyCTA;
