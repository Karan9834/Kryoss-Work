import React from "react";
import { Link } from "react-router-dom";
import prod1 from "../../assets/HMS-Hotel/image1.png";
import prod2 from "../../assets/HMS-Hotel/image.png";

const HotelProducts = () => {
    const products = [
        {
            title: "Mars Hotel Management System",
            desc: "Complete, all-in-one Hotel Management System for modern hospitality.",
            image: prod1,
            route: "/products/mars",
        },
        {
            title: "TimeStay",
            desc: "Smart Booking & Reservation Engine designed for efficiency.",
            image: prod2,
            route: "/products/TimeStay",
        },
    ];

    return (
        <section id="explore-hotel-solutions" className="py-16 bg-transparent">
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
                        Explore Our <span className="text-orange-600">Hotel Solutions</span>
                    </h2>
                    
                    {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
                    <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
                        Powerful tools designed for modern hospitality businesses to scale and succeed.
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
                        ✦ More hospitality solutions coming soon ✦
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HotelProducts;