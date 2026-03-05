import React from 'react';

const HowItWorks = () => {
    const steps = [
        { num: "01", title: "Login/Register", desc: "Users sign up easily via email, phone, or social media accounts." },
        { num: "02", title: "Choose Store", desc: "Select from nearby grocery stores or search for specific products." },
        { num: "03", title: "Add to Cart", desc: "Pick items, choose quantities, and add them to the virtual shopping cart." },
        { num: "04", title: "Instant Payment", desc: "Pay securely using multiple options like credit cards, wallets, or CoD." },
        { num: "05", title: "Live Tracking", desc: "Track the delivery progress in real-time on an interactive map." },
        { num: "06", title: "Safe Delivery", desc: "Receive fresh groceries at the doorstep and rate the experience." }
    ];

    return (
        <section className="py-24 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Seamless <span className="text-[#10B981]">Delivery Workflow</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg lowercase">
                        A SIMPLE 6-STEP PROCESS THAT ENSURES EFFICIENCY FROM ORDER TO DELIVERY.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative group text-center lg:text-left">
                            {/* Connector Line for Desktop */}
                            {idx % 3 !== 2 && (
                                <div className="hidden lg:block absolute top-12 left-[100%] w-full h-[2px] bg-gradient-to-r from-emerald-200 to-transparent -z-10"></div>
                            )}

                            <div className="flex flex-col items-center lg:items-start gap-6">
                                <div className="w-20 h-20 rounded-3xl bg-emerald-50 text-[#10B981] flex items-center justify-center text-3xl font-black shadow-inner group-hover:bg-[#10B981] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                                    {step.num}
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#10B981] transition-colors">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-xs mx-auto lg:mx-0">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-br from-[#10B981] to-[#059669] text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-500/20">
                    <div className="max-w-xl text-center lg:text-left">
                        <h4 className="text-2xl lg:text-3xl font-bold mb-4">Want a Custom Workflow for Your App?</h4>
                        <p className="text-white/80 whitespace-normal">
                            We can tailor the ordering process to match your specific business logic and customer needs.
                        </p>
                    </div>
                    <button className="bg-white text-emerald-700 font-black px-10 py-5 rounded-2xl hover:bg-emerald-50 transition-all transform hover:scale-105 shadow-xl">
                        Schedule a Consultation
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
