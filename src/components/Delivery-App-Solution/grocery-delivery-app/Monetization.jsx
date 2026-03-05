import React from 'react';
import { DollarSign, Tag, Calculator, TrendingUp } from 'lucide-react';

const Monetization = () => {
    const models = [
        { icon: <Tag />, title: "Commission Logic", desc: "Charge a percentage fee from every successful order placed on your platform." },
        { icon: <DollarSign />, title: "Delivery Fees", desc: "Set flat or distance-based delivery fees to cover logistics costs." },
        { icon: <Calculator />, title: "Surge Pricing", desc: "Increase delivery prices during peak hours or high-demand periods." },
        { icon: <TrendingUp />, title: "Store Ads", desc: "Allow grocery stores to promote their listings for a monthly/click fee." }
    ];

    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Illustration */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-emerald-100 rounded-full blur-[100px] -z-10 group-hover:bg-emerald-200 transition-colors"></div>
                        <img
                            src="https://whitelabelfox.com/assets/images/on-demand-grocery-delivery-app/Monetization-image.webp"
                            alt="Monetization Strategy"
                            className="w-full h-auto drop-shadow-2xl rounded-3xl"
                        />
                        {/* Floating Earnings card */}
                        <div className="absolute bottom-10 -right-10 bg-white p-6 rounded-[2rem] shadow-2xl animate-bounce-slow hidden lg:block border border-emerald-50">
                            <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Monthly Earnings</div>
                            <div className="text-4xl font-black text-[#10B981]">$48,260.00</div>
                            <div className="mt-2 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full w-fit">+12.5% from last month</div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Maximize Your <br />
                                <span className="text-[#10B981]">Revenue Potential</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Our platform comes pre-integrated with multiple revenue generation routes,
                                helping you achieve ROI faster.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {models.map((model, idx) => (
                                <div key={idx} className="flex gap-6 p-6 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all group border border-transparent hover:border-emerald-50">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#10B981] shadow-sm group-hover:bg-[#10B981] group-hover:text-white transition-all duration-300">
                                        {React.cloneElement(model.icon, { size: 28 })}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-bold text-gray-900 mb-1">{model.title}</h4>
                                        <p className="text-gray-500 text-sm leading-relaxed">{model.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Monetization;
