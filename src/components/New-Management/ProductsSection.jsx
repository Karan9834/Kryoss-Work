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
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-8 h-px bg-orange-400"></div>
                        <span className="text-orange-600 font-bold text-sm tracking-wider uppercase">
                            Our Products
                        </span>
                        <div className="w-8 h-px bg-orange-400"></div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-semibold text-[#1E293B]">
                        Choose the Perfect <span className="text-orange-600">Solution for Your Newsroom</span>
                    </h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
                                    className="w-full rounded-xl border-[5px] border-transparent hover:border-orange-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover aspect-[16/9]"
                                />
                            </Link>

                            {/* TITLE AND DESCRIPTION */}
                            <p className="mt-4 text-sm md:text-base">
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

                {/* Bottom note */}
                <div className="text-center mt-16">
                    <p className="text-sm text-gray-400 font-medium">
                        ✦ More newsroom solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;