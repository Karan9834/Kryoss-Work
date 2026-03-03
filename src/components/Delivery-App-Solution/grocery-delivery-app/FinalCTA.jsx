import React from 'react';

const FinalCTA = () => {
    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 relative overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/fox-grocery-cta-3.webp"
                    alt="Grocery App CTA"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 to-emerald-900/80"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
                                Ready to <span className="text-[#10B981]">Launch Your</span> <br />
                                Grocery Business Online?
                            </h2>
                            <p className="text-emerald-100/70 text-lg max-w-xl mx-auto lg:mx-0">
                                Don't let your competitors take over the digital space.
                                Secure your on-demand grocery delivery platform today.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            <button className="bg-[#10B981] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-emerald-400 transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/40">
                                GET A CUSTOM QUOTE
                            </button>
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/20 transition-all">
                                SCHEDULE A DEMO
                            </button>
                        </div>

                        <div className="pt-8 flex flex-wrap justify-center lg:justify-start gap-12 border-t border-white/10">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-black text-white">24h</div>
                                <div className="text-xs font-bold text-[#10B981] uppercase tracking-widest">Setup Time</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-black text-white">Full</div>
                                <div className="text-xs font-bold text-[#10B981] uppercase tracking-widest">Ownership</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-black text-white">Lifetime</div>
                                <div className="text-xs font-bold text-[#10B981] uppercase tracking-widest">Updates</div>
                            </div>
                        </div>
                    </div>

                    {/* Optional extra visual */}
                    <div className="hidden lg:flex justify-end">
                        <div className="bg-white/5 p-6 rounded-[3rem] border border-white/10 backdrop-blur-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="w-64 h-64 bg-[#10B981] rounded-[2rem] flex items-center justify-center text-white text-6xl font-black italic">
                                FOX
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
