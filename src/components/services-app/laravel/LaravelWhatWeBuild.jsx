import React from "react";
import {
    MonitorCheck,
    CloudCog,
    ServerCog,
    ShoppingCart,
    Network,
    RefreshCcw
} from "lucide-react";

const services = [
    {
        icon: MonitorCheck,
        title: "Laravel Web App Development",
        desc: "We build custom Laravel web applications tailored to your client's business needs - clean code, scalable architecture, delivered under your brand without mentioning us."
    },
    {
        icon: CloudCog,
        title: "Laravel SaaS App Development",
        desc: "From multi-tenant platforms to subscription-based SaaS products, we design and develop robust Laravel SaaS applications your agency can confidently deliver."
    },
    {
        icon: ServerCog,
        title: "Laravel API Development",
        desc: "We develop secure RESTful and GraphQL APIs using Laravel and integrate payment gateways, CRMs, ERPs, and external platforms."
    },
    {
        icon: ShoppingCart,
        title: "Laravel eCommerce Development",
        desc: "We design and develop high-converting online stores built to sell - fully white labeled, scalable, and performance optimized."
    },
    {
        icon: Network,
        title: "Laravel CRM & ERP Development",
        desc: "We develop custom CRM & ERP systems on Laravel that help manage operations, automate workflows, and scale business."
    },
    {
        icon: RefreshCcw,
        title: "Laravel Migration & Modernization",
        desc: "We migrate legacy platforms to Laravel smoothly with zero downtime, improved performance, and stronger security."
    }
];

const WhatWeBuild = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-4">
                    <div className="border rounded-full px-4 py-1 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        What We Build
                    </div>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-6">
                    Our White Label{" "}
                    <span className="text-orange-500">
                        Laravel Development Solutions
                    </span>
                </h2>

                <p className="text-center text-gray-600 max-w-4xl mx-auto mb-16">
                    Whether you're a solo agency owner or managing a full client portfolio
                    — we step in as your silent Laravel development team. More delivery
                    capacity, stronger profit margins, happier clients, and zero hiring
                    headaches.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {services.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={index}
                                className="group relative border border-orange-200 rounded-[30px] p-10 text-center bg-[#fbf6f1] hover:bg-[#fff7ef] hover:border-orange-400 transition-all duration-300"
                            >

                                {/* Icon */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-md">
                                    <Icon
                                        size={28}
                                        className="text-orange-500"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold mb-4 mt-6 group-hover:text-orange-500 transition">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    {item.desc}
                                </p>

                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default WhatWeBuild;