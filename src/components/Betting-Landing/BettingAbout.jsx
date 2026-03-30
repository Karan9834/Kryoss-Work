import React from 'react';
import { ShieldCheck, Trophy, Smartphone, BarChart3 } from 'lucide-react';

const BettingAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Bridging the Gap
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] leading-snug">
                        Bridging the Gap Between <br />
                        <span className="text-emerald-600">Gambling & Technology</span>
                    </h2>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed italic border-l-4 border-emerald-500 pl-6 bg-emerald-50 py-4 rounded-r-2xl">
                         "Our betting app provides game lovers on-field betting experience across all mobile devices from any part of the globe."
                    </p>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                        Kryoss develops next-generation sports betting apps backed by a team of young iGaming enthusiasts and experienced professionals. We create applications equipped with state-of-the-art features like one-touch betting and cryptocurrency support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Secure Payouts</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Integration with reliable payment gateways for instant and secure withdrawals.
                        </p>
                    </div>

                    <div className="p-8 bg-green-50 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Trophy className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Live Tournaments</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Organize and manage live tournaments with real-time leaderboard updates.
                        </p>
                    </div>

                    <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                        <Smartphone className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Responsive UI</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Optimized betting experience across all Android and iOS devices.
                        </p>
                    </div>

                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <BarChart3 className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Real-time Analytics</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Live match data and betting odds synchronized with sub-second latency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BettingAbout;
