import React from 'react';
import { CheckCircle2, Store } from 'lucide-react';
import aboutImg from '../../assets/poslanding-img/poslandingabout.jpg';

const POSAbout = () => {
    const highlights = [
        "Multi-store inventory sync",
        "Offline billing capability",
        "Employee performance tracking",
        "Automated Tax (GST) reports",
        "Customer loyalty programs",
        "Seamless hardware integration"
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Actual About Image */}
                    <div className="relative group animate-fadeInLeft order-2 lg:order-1">
                        <div className="absolute -inset-10 bg-indigo-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                        <div className="relative z-10 w-full aspect-square bg-white rounded-[60px] border-8 border-white shadow-2xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                            <img
                                src={aboutImg}
                                alt="Retail Management Dashboard"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-emerald-500/5 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-8 animate-fadeInRight order-1 lg:order-2">
                        <div className="space-y-4">
                            {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                            <span className="text-indigo-600 text-[12px] font-medium tracking-[0.05em] uppercase block mb-2">
                                Architecting Growth
                            </span>
                            
                            {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2]">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-emerald-600 to-amber-500">
                                    Empowering Your Retail Excellence
                                </span>
                            </h2>
                            
                            {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                            <p className="text-[#4A4B5E] text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                We provide a robust point-of-sale system designed to automate your billing, manage your stock levels, and provide deep insights into your sales performance. Whether you're a single boutique or a nationwide chain, our platform scales with you.
                            </p>
                        </div>

                        {/* Feature List Items - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-indigo-50/30 rounded-2xl hover:bg-emerald-50 transition-all group cursor-default border border-transparent hover:border-emerald-100">
                                    <CheckCircle2 size={20} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-[#1E293B] font-normal text-[14px] md:text-[16px] leading-[1.6]">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
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

export default POSAbout;