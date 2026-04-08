import { Link } from 'react-router-dom';
import React from 'react';

const EMSWhyUs = () => {
    const data = [
        {
            stat: "10K+",
            label: "Events Hosted",
            color: "text-fuchsia-600",
            bg: "bg-fuchsia-50",
            border: "group-hover:border-fuchsia-400"
        },
        {
            stat: "99.9%",
            label: "Server Uptime",
            color: "text-orange-500",
            bg: "bg-orange-50",
            border: "group-hover:border-orange-400"
        },
        {
            stat: "500M",
            label: "Tickets Sold",
            color: "text-pink-600",
            bg: "bg-pink-50",
            border: "group-hover:border-pink-400"
        },
        {
            stat: "24/7",
            label: "Dedicated Support",
            color: "text-purple-600",
            bg: "bg-purple-50",
            border: "group-hover:border-purple-400"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-fuchsia-900">
            {/* Darker background with rich colorful gradients in EMS design language */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full blur-[100px]"></div>
                <div className="absolute top-40 right-10 w-80 h-80 bg-orange-600 rounded-full blur-[100px]"></div>
                <div className="absolute -bottom-20 left-1/2 w-[500px] h-[500px] bg-pink-600 rounded-full blur-[120px] -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Heading & text */}
                    <div className="space-y-6 text-center lg:text-left">
                        <span className="text-white font-semibold text-sm tracking-widest uppercase mb-2 inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm">
                            Why Choose EMS Platform?
                        </span>

                        <h2 className="text-3xl lg:text-5xl font-bold leading-tight text-white mb-6">
                            Scalability You Request. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-300">
                                Reliability You Demand.
                            </span>
                        </h2>

                        <p className="text-fuchsia-100 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Stop worrying about system crashes during high-traffic ticket sales.
                            Our infrastructure is battle-tested. Enjoy seamless performance, advanced routing,
                            and peace of mind knowing your event management system is bulletproof.
                        </p>
                        {/* 
                        <div className="mt-8 flex justify-center lg:justify-start">
                             <Link to="/company/contact" className="px-8 py-4 bg-orange-500 text-white rounded-xl shadow-lg shadow-orange-500/30 hover:bg-white hover:text-fuchsia-900 transition-colors font-bold flex items-center gap-2">
                                Request a Consultation
                             </Link>
                        </div> */}
                    </div>

                    {/* Right: Zigzag Stat Cards */}
                    <div className="grid grid-cols-2 gap-6 pt-10 px-4">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`group p-8 rounded-3xl bg-white shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-b-4 border-transparent ${item.border}`}
                            >
                                <div className={`w-16 h-16 rounded-full ${item.bg} flex items-center justify-center mb-6`}>
                                    <h3 className={`text-2xl font-black ${item.color}`}>{item.stat}</h3>
                                </div>
                                <h4 className="text-lg font-bold text-gray-800">{item.label}</h4>
                                <div className="h-1 w-0 bg-gradient-to-r from-fuchsia-400 to-orange-400 group-hover:w-full transition-all duration-500 mt-4 rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EMSWhyUs;
