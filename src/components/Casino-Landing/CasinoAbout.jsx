import React from 'react';
import { ShieldCheck, Gamepad2, Smartphone, Cpu } from 'lucide-react';

const CasinoAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side: content */}
                <div className="space-y-6">
                    <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        About Our Solutions
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#1E293B] leading-snug">
                        Custom <span className="text-orange-600">Casino Gaming</span> Software for Every Platform
                    </h2>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                        Kryoss casino game software solutions include popular game types such as slots, bingo, poker, and more, with payment integrations, RNGs, and optimized security features.
                    </p>
                    <p className="text-[#4A4B5E] text-lg leading-relaxed">
                         Engineers sweepstakes software solutions that include sweepstakes apps, game skins, animations, graphics, and more, plus kiosk software integrations with intuitive UX/UI.
                    </p>
                </div>

                {/* Right side: visual stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Optimized Security</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Advanced RNGs and secure payment integrations ensuring fairness and transparency.
                        </p>
                    </div>

                    <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Gamepad2 className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Popular Games</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            A wide range of slots, bingo, poker, and table games designed for high engagement.
                        </p>
                    </div>

                    <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                        <Smartphone className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Mobile Gaming</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Fully responsive and optimized mobile gaming experiences across platforms.
                        </p>
                    </div>

                    <div className="p-8 bg-green-50 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Cpu className="w-12 h-12 text-[#1E293B] mb-6" />
                        <h4 className="text-xl font-bold text-[#1E293B] mb-2">Sweepstakes Tech</h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Advanced sweepstakes software with custom skins, animations, and kiosk support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasinoAbout;
