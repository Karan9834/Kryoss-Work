import React from 'react';
import { CheckCircle2, Zap, Globe, Smartphone, BarChart3, Users } from 'lucide-react';
import aboutImg from '../../assets/taxi-product/drive your business 2nd image.jpg';

const TaxiAbout = () => {
    const highlights = [
        "Real-time GPS Tracking",
        "Automated Dispatch System",
        "Multiple Payment Options",
        "Driver & Rider App Suite",
        "Advanced Admin Dashboard",
        "Scalable Cloud Infrastructure"
    ];

    const stats = [
        { icon: Zap, label: "Lightning Fast", color: "text-yellow-500" },
        { icon: Globe, label: "Global Reach", color: "text-blue-500" },
        { icon: Smartphone, label: "iOS & Android", color: "text-purple-500" }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Visual representation */}
                    <div className="relative group animate-fadeInLeft order-2 lg:order-1">
                        <div className="absolute -inset-10 bg-yellow-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

                        <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-yellow-50 to-white rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src={aboutImg} alt="Taxi About" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right: Content - Updated Typography */}
                    <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
                        <div className="space-y-4">
                            {/* Badge - Updated: text-[14px] font-bold tracking-[0.3em] uppercase */}
                            <span className="text-orange-600 text-[14px] font-bold tracking-[0.3em] uppercase block">Future of Mobility</span>
                            
                            {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                                Drive Your Business <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-500">Toward Success</span>
                            </h2>
                            
                            {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-[#4A4B5E]">
                                We provide a comprehensive taxi management system designed to streamline your operations and enhance user experience. From real-time tracking to automated billing, our platform handles everything so you can focus on scaling your fleet.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-yellow-50 transition-all group cursor-default border border-transparent hover:border-yellow-100">
                                    <CheckCircle2 size={20} className="text-yellow-600 group-hover:scale-110 transition-transform" />
                                    {/* Highlight text - Updated: text-[14px] md:text-[16px] font-semibold */}
                                    <span className="text-[#1E293B] font-semibold text-[14px] md:text-[16px]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 4s ease-in-out infinite; }
                
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

export default TaxiAbout;