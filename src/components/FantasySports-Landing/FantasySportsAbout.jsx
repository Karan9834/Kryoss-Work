import React from 'react';
import { Activity, Trophy, ShieldCheck, Globe } from 'lucide-react';

const FantasySportsAbout = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left side: content */}
                <div className="space-y-6">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-[12px] font-medium tracking-[0.05em] uppercase mb-4">
                        Innovative Solutions
                    </div>
                    
                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Innovative <span className="text-green-600">Fantasy Sports</span> App Development
                    </h2>
                    
                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        With a dedicated and creative sports app development team, we are always ahead of the competition, offering top-notch fantasy sports solutions to clients worldwide.
                    </p>
                    
                    <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6]">
                        As a leading fantasy sports app development company, we cooperate in every aspect of a product life cycle, from initial design to final delivery and support.
                    </p>
                </div>

                {/* Right side: visual stats grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                    <div className="p-8 bg-green-50 rounded-3xl border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                        <Activity className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Scalable Tech</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Architecture built to handle millions of active players simultaneously without lag.
                        </p>
                    </div>

                    <div className="p-8 bg-sky-50 rounded-3xl border border-sky-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Trophy className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Multi-Sport support</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Cricket, Football, Soccer, Basketball, Hockey, and many more sports integrated.
                        </p>
                    </div>

                    <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                        <ShieldCheck className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Fully Compliant</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Strict adherence to legal guidelines and regulations for safe and secure play.
                        </p>
                    </div>

                    <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 shadow-sm hover:shadow-md transition-shadow md:translate-y-8">
                        <Globe className="w-12 h-12 text-[#1E293B] mb-6" />
                        {/* Card Title - Updated: text-[18px] md:text-[20px] font-bold leading-[1.3] */}
                        <h4 className="text-[18px] md:text-[20px] font-bold leading-[1.3] text-[#1E293B] mb-2">Global Reach</h4>
                        {/* Card Description - Updated: text-[13px] md:text-[14px] font-normal leading-[1.6] */}
                        <p className="text-gray-500 text-[13px] md:text-[14px] font-normal leading-[1.6]">
                            Solutions designed to cater to various regions with localized content and features.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FantasySportsAbout;