import React from 'react';
import { DollarSign, ShieldCheck, Zap, Globe, Clock, Headphones } from 'lucide-react';

const WhyChooseUs = () => {
    const revenueStreams = [
        { title: "Commissions", desc: "Earn a percentage from every successful order placed through your platform." },
        { title: "Delivery Fees", desc: "Charge flat or distance-based fees for orders delivered by your partners." },
        { title: "In-App Ads", desc: "Allow restaurants to pay for premium visibility and top-of-search placement." }
    ];

    const valueProps = [
        { icon: <Zap size={24} />, title: "Quick Launch", desc: "Launch your business in as little as 1 week with our pre-built script." },
        { icon: <Globe size={24} />, title: "White Label", desc: "Fully rebranded solution with your logo, colors, and domain name." },
        { icon: <ShieldCheck size={24} />, title: "Full Ownership", desc: "100% source code ownership and intellectual property rights." },
        { icon: <Clock size={24} />, title: "Scalable Tech", desc: "Highly customizable architecture ready to support 1M+ users." },
        { icon: <Headphones size={24} />, title: "24/7 Support", desc: "Dedicated technical support via Skype, WhatsApp, and Email." },
        { icon: <DollarSign size={24} />, title: "Cost Effective", desc: "Competitive pricing without recurring monthly usage fees." }
    ];

    return (
        <section className="py-16 px-4 sm:px-10 lg:px-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Monetization Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-2 lg:order-1 relative">
                        <div className="absolute top-0 left-0 w-48 h-48 bg-[#FF5722]/10 rounded-full blur-[100px] -z-10"></div>
                        <img
                            src="https://whitelabelfox.com/assets/images/online-food-ordering-app/Monetization-image.webp"
                            alt="Monetization Strategy"
                            className="w-full h-auto drop-shadow-2xl rounded-2xl"
                        />
                    </div>
                    <div className="order-1 lg:order-2 space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight font-primary">
                            Maximize Your <br />
                            <span className="text-[#FF5722]">Revenue Potential</span>
                        </h2>
                        <p className="text-gray-600 text-base">
                            Our food delivery script is packed with built-in monetization strategies
                            to ensure your business stays profitable from day one.
                        </p>
                        <div className="space-y-6">
                            {revenueStreams.map((stream, idx) => (
                                <div key={idx} className="flex gap-5 group items-start">
                                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center shrink-0 text-[#FF5722] group-hover:bg-[#FF5722] group-hover:text-white transition-all duration-300">
                                        <DollarSign size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xl text-gray-900 mb-1">{stream.title}</h4>
                                        <p className="text-gray-600 italic">"{stream.desc}"</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-[#FF5722] transition-colors shadow-xl">
                            Start Earning Now
                        </button>
                    </div>
                </div>

                {/* Value Prop Grid */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-[36px] font-bold text-gray-900 mb-4">
                        Why <span className="text-[#FF5722]">Choose Us?</span>
                    </h2>
                    <p className="text-gray-600 text-base max-w-2xl mx-auto">
                        Experience excellence with our world-class food delivery app development solution.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {valueProps.map((prop, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:border-orange-100 transition-all duration-500 group">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#FF5722] mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                {React.cloneElement(prop.icon, { size: 20 })}
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3">{prop.title}</h4>
                            <p className="text-gray-600 leading-relaxed text-xs">
                                {prop.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Branding */}
                <div className="mt-24 flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 px-8 py-12 rounded-3xl bg-white/50 border border-gray-100">
                    <img src="https://whitelabelfox.com/assets/images/online-food-ordering-app/icon/Why-Choose-US/White-Label-Solution.webp" alt="White Label" className="h-14" />
                    <img src="https://whitelabelfox.com/assets/images/online-food-ordering-app/icon/Why-Choose-US/NDA-Protection.webp" alt="NDA Protection" className="h-14" />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
