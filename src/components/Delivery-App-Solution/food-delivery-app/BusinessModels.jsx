import React from 'react';
import { Store, Users, Cloud, Network } from 'lucide-react';

const BusinessModels = () => {
    const models = [
        {
            title: "Single Restaurant",
            desc: "Perfect for local eateries wanting to offer direct online ordering to customers.",
            icon: <Store size={32} />,
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Multi-Vendor Marketplace",
            desc: "An aggregator platform like UberEats or GrubHub connecting multiple restaurants.",
            icon: <Users size={32} />,
            gradient: "from-blue-500 to-indigo-500"
        },
        {
            title: "Cloud Kitchen",
            desc: "Streamlined solutions for dark kitchens focusing solely on delivery operations.",
            icon: <Cloud size={32} />,
            gradient: "from-green-500 to-teal-500"
        },
        {
            title: "Restaurant Chain",
            desc: "Centralized system for managing multiple outlets with unified inventory & data.",
            icon: <Network size={32} />,
            gradient: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-10 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                        Diverse Business Models <span className="text-[#FF5722]">We Support</span>
                    </h2>
                    <div className="w-20 h-1 bg-[#FF5722] mx-auto rounded-full mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto text-base">
                        Our food ordering system is designed to adapt to various business scales and operational styles.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className="group relative bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${model.gradient} opacity-[0.03] rounded-bl-full group-hover:opacity-10 transition-opacity`}></div>

                            <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${model.gradient} text-white mb-4 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                                {model.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#FF5722] transition-colors">
                                {model.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {model.desc}
                            </p>

                            <div className="flex items-center gap-2 font-bold text-[#FF5722] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 cursor-pointer">
                                Get Started <span className="text-xl">→</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-1 bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 rounded-3xl">
                    <div className="bg-white/95 backdrop-blur-sm rounded-[22px] px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="text-center lg:text-left">
                            <h4 className="text-2xl font-bold text-gray-900 mb-2">Have a unique business requirement?</h4>
                            <p className="text-gray-600">Our experts can build a custom solution tailored to your specific needs.</p>
                        </div>
                        <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-[#FF5722] transition-all whitespace-nowrap">
                            Talk to Our Experts
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessModels;
