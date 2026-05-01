import React from 'react';
import { ShieldCheck, Heart, Zap, Globe, Award, Sparkles, TrendingUp, Handshake } from 'lucide-react';

const GroceryWhyUs = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-[150px] -ml-40 opacity-40"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-50 rounded-full blur-[150px] -mr-40 opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header - Updated Typography */}
                <div className="text-center mb-20 space-y-4">
                    {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                        Why Industry <span className="text-emerald-600 font-black">Leaders Choose Us</span>
                    </h2>
                    {/* Description Text - 16px, weight 400, line-height 1.6 */}
                    <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                        We provide the technology that powers millions of deliveries worldwide with unmatched reliability and speed.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid lg:grid-cols-3 gap-6 lg:auto-rows-[250px]">
                    {/* Item 1 - Big Feature */}
                    <div className="lg:col-span-2 lg:row-span-2 p-8 lg:p-10 rounded-[40px] lg:rounded-[50px] bg-[#F0FDF4] border-2 border-emerald-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-emerald-200/20 rounded-full group-hover:scale-110 transition-transform duration-700"></div>
                        <div className="space-y-6 relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                <ShieldCheck size={32} />
                            </div>
                            <div className="space-y-3">
                                {/* Title H3 - 24px mobile, 30px desktop, weight 700, line-height 1.3 */}
                                <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-[#1A1C2C]">Military-Grade Security</h3>
                                {/* Description - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                                <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500 max-w-md">
                                    Your data and transactions are protected by world-class encryption and security protocols, ensuring 100% safety for you and your customers.
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <span className="px-4 py-2 bg-white rounded-full text-[12px] lg:text-[14px] font-bold text-emerald-700 shadow-sm border border-emerald-50 italic">PCI DSS Compliant</span>
                            <span className="px-4 py-2 bg-white rounded-full text-[12px] lg:text-[14px] font-bold text-emerald-700 shadow-sm border border-emerald-50 italic">ISO 27001 Certified</span>
                        </div>
                    </div>

                    {/* Item 2 - Smaller Feature */}
                    <div className="p-8 rounded-[40px] bg-[#FFF7ED] border-2 border-orange-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="space-y-4">
                            <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-lg transition-all duration-500">
                                <Zap size={28} />
                            </div>
                            {/* Title H3 - 24px mobile, 30px desktop */}
                            <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-[#1A1C2C]">Lightning Fast Speed</h3>
                            {/* Description - 14px mobile, 16px desktop */}
                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500">
                                Our optimized architecture ensures sub-second response times across all devices.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 - Smaller Feature */}
                    <div className="p-8 rounded-[40px] bg-indigo-50 border-2 border-indigo-100 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                        <div className="space-y-4">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-lg transition-all duration-500">
                                <Globe size={28} />
                            </div>
                            <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-[#1A1C2C]">Global Scalability</h3>
                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500">
                                Scale to millions of users globally with our cloud-native infrastructure.
                            </p>
                        </div>
                    </div>

                    {/* Item 4 - Wide Feature */}
                    <div className="lg:col-span-3 p-8 lg:p-10 rounded-[40px] lg:rounded-[50px] bg-gradient-to-r from-[#1A1C2C] to-[#2D3142] text-white flex flex-col lg:flex-row items-center justify-between gap-10 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-auto lg:h-auto min-h-[350px] lg:min-h-0">
                        <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-emerald-500 opacity-10 rounded-full blur-3xl"></div>
                        <div className="space-y-4 relative z-10 lg:max-w-xl text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                                <Award className="text-yellow-400" size={32} />
                                <span className="text-yellow-400 font-bold uppercase tracking-widest text-[10px] lg:text-[14px]">Award-Winning Tech</span>
                            </div>
                            <h3 className="text-[24px] md:text-[36px] font-black italic">Transforming the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Future of Delivery</span></h3>
                            <p className="text-gray-400 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                Join 500+ businesses that have successfully launched their grocery delivery brands with kryossone.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-10 opacity-40">
                    <div className="flex items-center gap-2 font-black italic text-[#1A1C2C] text-[14px]"><Heart className="text-rose-500" /> Made for Growth</div>
                    <div className="flex items-center gap-2 font-black italic text-[#1A1C2C] text-[14px]"><Sparkles className="text-yellow-500" /> Premium Design</div>
                    <div className="flex items-center gap-2 font-black italic text-[#1A1C2C] text-[14px]"><TrendingUp className="text-emerald-500" /> ROI Focused</div>
                    <div className="flex items-center gap-2 font-black italic text-[#1A1C2C] text-[14px]"><Handshake className="text-orange-500" /> Partner Oriented</div>
                </div>
            </div>
        </section>
    );
};

export default GroceryWhyUs;