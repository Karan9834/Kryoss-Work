import React from 'react';
import {
    Navigation,
    CreditCard,
    Smartphone,
    UserCheck,
    ShieldCheck,
    History,
    Star
} from 'lucide-react';
import featuresImg from '../../assets/taxilanding-img/taxilandingfeatures.webp';

const TaxiFeatures = () => {
    const featureGroups = [
        {
            side: "left",
            items: [
                {
                    icon: Navigation,
                    title: "Smart Routing",
                    desc: "Advanced algorithms for the shortest and fastest paths.",
                    color: "text-blue-600",
                    bg: "bg-blue-50"
                },
                {
                    icon: CreditCard,
                    title: "Secure Payments",
                    desc: "Multiple gateways with encrypted transactions.",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50"
                },
                {
                    icon: History,
                    title: "Ride History",
                    desc: "Detailed logs of all past trips and invoices.",
                    color: "text-purple-600",
                    bg: "bg-purple-50"
                }
            ]
        },
        {
            side: "right",
            items: [
                {
                    icon: UserCheck,
                    title: "Driver Verification",
                    desc: "Rigorous background checks for passenger safety.",
                    color: "text-orange-600",
                    bg: "bg-orange-50"
                },
                {
                    icon: ShieldCheck,
                    title: "SOS Support",
                    desc: "In-app emergency button for immediate assistance.",
                    color: "text-red-600",
                    bg: "bg-red-50"
                },
                {
                    icon: Smartphone,
                    title: "Intuitive UI",
                    desc: "User-friendly interface for effortless booking.",
                    color: "text-yellow-600",
                    bg: "bg-yellow-50"
                }
            ]
        }
    ];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(#1E293B 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header - Updated Typography */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-yellow-400"></div>
                        {/* Badge - Updated: text-[14px] font-bold tracking-widest uppercase */}
                        <span className="text-yellow-600 text-[14px] font-bold tracking-widest uppercase">Industry Leading Features</span>
                        <div className="w-8 h-px bg-yellow-400"></div>
                    </div>
                    
                    {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Everything You Need to <span className="text-yellow-600">Scale</span>
                    </h2>
                    
                    {/* Description - 16px, weight 400, line-height 1.6 */}
                    <p className="text-[16px] font-normal leading-[1.6] text-gray-500 max-w-2xl mx-auto">
                        Our platform is packed with powerful features designed to provide a seamless experience for both riders and drivers.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                    {/* Left Features */}
                    <div className="flex-1 space-y-12 w-full order-2 lg:order-1">
                        {featureGroups[0].items.map((item, idx) => (
                            <div key={idx} className="flex items-center lg:items-end flex-col lg:flex-row gap-6 group">
                                <div className="text-center lg:text-right flex-1 order-2 lg:order-1">
                                    {/* Card Title H3 - 24px mobile, 30px desktop, weight 700, line-height 1.3 */}
                                    <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-[#1E293B] mb-2 group-hover:text-yellow-600 transition-colors uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    {/* Card Description - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                                    <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500 max-w-xs ml-auto">
                                        {item.desc}
                                    </p>
                                </div>
                                <div className={`w-16 h-16 shrink-0 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-lg group-hover:scale-110 transition-all duration-500 order-1 lg:order-2 border border-white`}>
                                    <item.icon size={30} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Central Mockup */}
                    <div className="flex-1 max-w-xs w-full order-1 lg:order-2">
                        <div className="relative mx-auto rounded-[2.5rem] border-8 border-[#1E293B] bg-[#1E293B] shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#1E293B] rounded-b-xl z-20"></div>
                            <img src={featuresImg} alt="Taxi Features" className="w-full h-auto block" />
                        </div>
                        {/* Decorative rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-yellow-200 rounded-full -z-10 animate-pulse opacity-50"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-yellow-100 rounded-full -z-10 animate-pulse delay-700 opacity-30"></div>
                    </div>

                    {/* Right Features */}
                    <div className="flex-1 space-y-12 w-full order-3">
                        {featureGroups[1].items.map((item, idx) => (
                            <div key={idx} className="flex items-center lg:items-start flex-col lg:flex-row gap-6 group">
                                <div className={`w-16 h-16 shrink-0 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} shadow-lg group-hover:scale-110 transition-all duration-500 border border-white`}>
                                    <item.icon size={30} />
                                </div>
                                <div className="text-center lg:text-left flex-1">
                                    {/* Card Title H3 - 24px mobile, 30px desktop, weight 700, line-height 1.3 */}
                                    <h3 className="text-[24px] md:text-[30px] font-bold leading-[1.3] text-[#1E293B] mb-2 group-hover:text-yellow-600 transition-colors uppercase tracking-tight">
                                        {item.title}
                                    </h3>
                                    {/* Card Description - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
                                    <p className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-500 max-w-xs">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaxiFeatures;