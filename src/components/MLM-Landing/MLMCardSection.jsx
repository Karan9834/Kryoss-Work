import { Link } from 'react-router-dom';
import React from 'react';

const MLMCardSection = () => {
    const products = [
        {
            title: "Hyip InvestPro",
            desc: "A professional, high-yield investment management system designed for scalability and security.",
            image: "/Products/Hyip Pro.jpg",
            link: "/products/hyip-investpro"
        },
        {
            title: "RevPTC",
            desc: "An advanced multi-level marketing software suite that supports complex plans and automated settlements.",
            image: "/Products/RevPTC.jpg",
            link: "/products/revptc"
        }
    ];

    return (
        <section id="mlm-products" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-blue-400"></div>
                        <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-blue-400"></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
                        Ready-made <span className="text-blue-600">MLM Software</span> Clones
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Highly secure and immutable decentralized MLM scripts for diverse marketing plans.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <div key={index} className="text-center">
                            {/* CLICKABLE IMAGE */}
                            <Link
                                to={product.link}
                                className="cursor-pointer group block"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full rounded-xl border-[5px] border-transparent hover:border-blue-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-contain"
                                />
                            </Link>

                            {/* TITLE AND DESCRIPTION */}
                            <p className="mt-4 text-sm md:text-base">
                                <Link to={product.link} className="text-blue-600 font-semibold hover:underline">
                                    {product.title}
                                </Link>{" "}
                                <span className="text-gray-700">
                                    - {product.desc}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div className="text-center mt-16">
                    <p className="text-sm text-gray-400 font-medium">
                        ✦ More MLM solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MLMCardSection;

