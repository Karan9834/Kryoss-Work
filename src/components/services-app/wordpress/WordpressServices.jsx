import React from "react";
import {
    LayoutTemplate,
    Puzzle,
    ShoppingCart,
    Layers,
    Figma,
    Settings
} from "lucide-react";

const services = [
    {
        title: "Custom Theme Development",
        desc: "We build pixel-perfect, fully responsive WordPress themes from scratch tailored to your client's brand, not recycled from a template marketplace.",
        icon: LayoutTemplate
    },
    {
        title: "WordPress Plugin Development",
        desc: "Need functionality that off-the-shelf plugins can't deliver? We develop custom WordPress plugins built around your client's exact business requirements.",
        icon: Puzzle
    },
    {
        title: "WooCommerce Store Development",
        desc: "We design and develop high-converting WooCommerce stores from product setup and payment gateway integration to custom checkout flows.",
        icon: ShoppingCart
    },
    {
        title: "Headless WordPress Development",
        desc: "We decouple the WordPress backend from the frontend using React or Next.js giving your clients faster load times and better scalability.",
        icon: Layers
    },
    {
        title: "Figma/PSD to WordPress Conversion",
        desc: "We convert your design files into clean, standards-compliant WordPress websites pixel-accurate and optimized for performance.",
        icon: Figma
    },
    {
        title: "WordPress Maintenance & Support",
        desc: "We provide ongoing WordPress maintenance covering updates, security patches, performance monitoring, and bug fixes under your brand.",
        icon: Settings
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-20">

                    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Our Services
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        White Label WordPress Development
                        <span className="text-orange-500"> Services We Deliver</span>
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto">
                        From custom WordPress builds to full WooCommerce stores we handle the development,
                        you handle the client. Every project delivered under your brand on time every time.
                    </p>

                </div>

                {/* cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

                    {services.map((service, index) => {

                        const Icon = service.icon;

                        return (

                            <div
                                key={index}
                                className="group relative bg-[#f9f6f1] border border-orange-300 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-[#fff6ea] hover:border-orange-500"
                            >

                                {/* icon */}
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-md">

                                    <Icon
                                        size={30}
                                        className="text-orange-500"
                                    />

                                </div>

                                {/* title */}
                                <h3 className="text-xl font-semibold mt-6 mb-4 text-gray-800 group-hover:text-orange-500 transition">

                                    {service.title}

                                </h3>

                                {/* description */}
                                <p className="text-gray-600 leading-relaxed text-sm">

                                    {service.desc}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
};

export default Services;