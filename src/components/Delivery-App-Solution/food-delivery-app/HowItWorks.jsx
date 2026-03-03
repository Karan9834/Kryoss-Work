import React from 'react';

const HowItWorks = () => {
    const steps = [
        { num: "01", title: "Browse Food", desc: "Customers browse various restaurants & cuisines." },
        { num: "02", title: "Add to Cart", desc: "Select favorite meals & add them to the cart." },
        { num: "03", title: "Confirm Order", desc: "Make secure payments via multiple gateways." },
        { num: "04", title: "Processing", desc: "Restaurant receives & prepares the fresh food." },
        { num: "05", title: "Quick Pick-up", desc: "Nearest delivery partner picks up the order." },
        { num: "06", title: "Swift Delivery", desc: "Food reaches customer's doorstep in no time." }
    ];

    return (
        <section className="py-16 px-4 sm:px-10 lg:px-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-4 font-primary">
                        How Does the <span className="text-[#FF5722]">System Work?</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base">
                        A seamless, 6-step journey from craving to satisfaction, meticulously tracked and optimized.
                    </p>
                </div>

                <div className="relative">
                    {/* Centered Graphic */}
                    <div className="hidden lg:block absolute top-[15%] left-[10%] opacity-10 blur-sm pointer-events-none">
                        <div className="w-[1000px] h-[1000px] border-[50px] border-[#FF5722] rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center relative z-10">
                        {/* Left Steps */}
                        <div className="space-y-8">
                            {steps.slice(0, 3).map((step, idx) => (
                                <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-center gap-4 text-center lg:text-right">
                                    <div className="order-2 lg:order-1 flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                                    </div>
                                    <div className="order-1 lg:order-2 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-gray-100 group hover:bg-[#FF5722] transition-colors duration-300">
                                        <span className="text-xl font-black text-[#FF5722] group-hover:text-white">{step.num}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Middle: Illustration */}
                        <div className="flex justify-center">
                            <img
                                src="https://whitelabelfox.com/assets/images/online-food-ordering-app/how-app-works.webp"
                                alt="System Workflow"
                                className="w-full max-w-[350px] h-auto drop-shadow-[0_40px_80px_rgba(255,87,34,0.15)] animate-bounce-slow"
                            />
                        </div>

                        {/* Right Steps */}
                        <div className="space-y-8">
                            {steps.slice(3, 6).map((step, idx) => (
                                <div key={idx} className="flex flex-col lg:flex-row items-center lg:items-center gap-4 text-center lg:text-left">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-gray-100 group hover:bg-[#FF5722] transition-colors duration-300">
                                        <span className="text-xl font-black text-[#FF5722] group-hover:text-white">{step.num}</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
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

export default HowItWorks;
