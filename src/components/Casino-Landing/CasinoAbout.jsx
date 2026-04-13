import React from 'react';
import { ShieldCheck, Gamepad2, Smartphone, Cpu } from 'lucide-react';

const CasinoAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side: content */}
                <div className="space-y-6">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase mb-4">
                        About Our Solutions
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Custom <span className="text-orange-600">Casino Gaming</span> Software for Every Platform
                    </h2>
                    
                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        Kryoss casino game software solutions include popular game types such as slots, bingo, poker, and more, with payment integrations, RNGs, and optimized security features.
                    </p>
                    
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        Engineers sweepstakes software solutions that include sweepstakes apps, game skins, animations, graphics, and more, plus kiosk software integrations with intuitive UX/UI.
                    </p>
                </div>

                {/* Right side: visual stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Optimized Security</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Advanced RNGs and secure payment integrations ensuring fairness and transparency.
                        </p>
                    </div>

                    <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Gamepad2 className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Popular Games</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            A wide range of slots, bingo, poker, and table games designed for high engagement.
                        </p>
                    </div>

                    <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 shadow-sm hover:shadow-md transition-shadow">
                        <Smartphone className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Mobile Gaming</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Fully responsive and optimized mobile gaming experiences across platforms.
                        </p>
                    </div>

                    <div className="p-8 bg-green-50 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Cpu className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Sweepstakes Tech</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Advanced sweepstakes software with custom skins, animations, and kiosk support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CasinoAbout;