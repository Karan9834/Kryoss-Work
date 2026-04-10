import React from 'react';
import { CheckCircle2, Lightbulb, Target, Rocket } from 'lucide-react';
import aboutImg from '../../assets/grocerylanding-img/grocerylandingabout.jpg';

const GroceryAbout = () => {
    const highlights = [
        "Hyper-local delivery optimization",
        "Real-time inventory management",
        "AI-driven demand forecasting",
        "Multi-vendor & Dark Store support",
        "Seamless Store Onboarding",
        "Advanced Analytics Dashboard"
    ];

    const stats = [
        { icon: Lightbulb, label: "Smart Freshness", color: "text-amber-500" },
        { icon: Target, label: "Precision Delivery", color: "text-emerald-500" },
        { icon: Rocket, label: "Scalable Growth", color: "text-orange-500" }
    ];

    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Single Image Layout */}
                    <div className="relative group animate-fadeInLeft">
                        <div className="absolute -inset-10 bg-emerald-50 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition duration-1000"></div>

                        <div className="relative z-10 w-full aspect-square bg-gradient-to-br from-emerald-50 to-white rounded-[60px] border-8 border-white shadow-2xl flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
                            <img src={aboutImg} alt="Grocery About" className="w-full h-full object-cover" />
                        </div>

                        {/* Interactive Stats Overlay */}
                        <div className="absolute -right-2 top-10 lg:-right-4 lg:top-1/4 space-y-3 lg:space-y-4 z-20">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3 border border-emerald-50 animate-float"
                                    style={{ animationDelay: `${idx * 0.5}s` }}
                                >
                                    <stat.icon className={`${stat.color} w-5 h-5 lg:w-6 lg:h-6`} />
                                    <span className="font-bold text-xs lg:text-sm whitespace-nowrap">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Content - Updated Typography */}
                    <div className="space-y-8 animate-fadeInRight">
                        <div className="space-y-4">
                            {/* Badge - Updated: text-[14px] font-bold tracking-[0.3em] uppercase */}
                            <span className="text-orange-600 text-[14px] font-bold tracking-[0.3em] uppercase block">Our Solutions</span>
                            
                            {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
                                Empowering Your <br />
                                <span className="text-emerald-600">Grocery Empire</span>
                            </h2>
                            
                            {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                            <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-[#4A4B5E]">
                                We don't just build apps; we create seamless shopping experiences. Our grocery delivery solutions are designed to handle peak volumes while ensuring every orange and every loaf of bread reaches your customers in perfect condition.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 p-4 bg-emerald-50/50 rounded-2xl hover:bg-emerald-100 transition-all group cursor-default border border-transparent hover:border-emerald-100">
                                    <CheckCircle2 size={20} className="text-emerald-600 group-hover:scale-110 transition-transform" />
                                    {/* Highlight text - Updated: font-semibold text-[14px] md:text-[16px] */}
                                    <span className="text-[#1A1C2C] font-semibold text-[14px] md:text-[16px]">{item}</span>
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

export default GroceryAbout;