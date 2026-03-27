import React from 'react';
import { Activity, Trophy, ShieldCheck, Globe } from 'lucide-react';

const FantasySportsAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side: content */}
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Innovative Solutions
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] leading-snug">
                         Innovative <span className="text-green-600">Fantasy Sports</span> App Development
                    </h2>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                        With a dedicated and creative sports app development team, we are always ahead of the competition, offering top-notch fantasy sports solutions to clients worldwide.
                    </p>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                        As a leading fantasy sports app development company, we cooperate in every aspect of a product life cycle, from initial design to final delivery and support.
                    </p>
                </div>

                {/* Right side: visual stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-green-50 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                        <Activity className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Scalable Tech</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                             Architecture built to handle millions of active players simultaneously without lag.
                        </p>
                    </div>

                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Trophy className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Multi-Sport support</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Cricket, Football, Soccer, Basketball, Hockey, and many more sports integrated.
                        </p>
                    </div>

                    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Fully Compliant</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                             Strict adherence to legal guidelines and regulations for safe and secure play.
                        </p>
                    </div>

                    <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Globe className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Global Reach</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Solutions designed to cater to various regions with localized content and features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FantasySportsAbout;
