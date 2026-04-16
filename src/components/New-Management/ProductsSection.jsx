import React from "react";
import { Link } from "react-router-dom";
import prod1 from "../../assets/News-Management/nova.jpg";
import prod2 from "../../assets/News-Management/ess.jpg";

const ProductsSection = () => {
    const products = [
        {
            title: "Nuova",
            desc: "Nouva News & Magazines solution for digital publications.",
            image: prod1,
            route: "/products/nuova",
        },
        {
            title: "Essential Plugins",
            desc: "Flutter News Full App with comprehensive plugin support.",
            image: prod2,
            route: "/products/essential-plugins",
        },
    ];

    return (
        <section id="explore-news" className="py-16 bg-transparent">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-orange-400"></div>
                        <span className="text-orange-600 text-[12px] font-medium tracking-[0.05em] uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-orange-400"></div>
                    </div>

                    {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
                    <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1E293B]">
                        Choose the Perfect <span className="text-orange-600">Solution for Your Newsroom</span>
                    </h2>

                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
                        Powerful, scalable products designed to transform how you create and distribute news.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {products.map((product, index) => (
                        <div key={index} className="text-center">
                            {/* CLICKABLE IMAGE */}
                            <Link
                                to={product.route}
                                className="cursor-pointer group block"
                            >
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full rounded-xl border-[5px] border-transparent hover:border-orange-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-contain "
                                />
                            </Link>

                            {/* TITLE AND DESCRIPTION - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                            <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                                <Link to={product.route} className="text-orange-600 font-semibold hover:underline">
                                    {product.title}
                                </Link>{" "}
                                <span className="text-gray-700">
                                    - {product.desc}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom note - Updated typography */}
                <div className="text-center mt-16">
                    <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-gray-400">
                        ✦ More newsroom solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;