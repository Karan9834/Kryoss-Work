import React from "react";

import ecommerce from "../../../assets/services-laravel-img/ecommerce.svg";
import hyperlocal from "../../../assets/services-laravel-img/hyperlocaldelivery.svg";
import marketplace from "../../../assets/services-laravel-img/marketplace.svg";
import banking from "../../../assets/services-laravel-img/bankingfinancialservice.svg";
import healthcare from "../../../assets/services-laravel-img/healthcare.svg";
import handyman from "../../../assets/services-laravel-img/handyman1.svg";
import logistics from "../../../assets/services-laravel-img/logistics.svg";
import insurance from "../../../assets/services-laravel-img/insurance.svg";

const industries = [
    { title: "eCommerce", img: ecommerce },
    { title: "Hyperlocal Delivery", img: hyperlocal },
    { title: "Marketplace", img: marketplace },
    { title: "Banking & Financial Service", img: banking },
    { title: "Healthcare", img: healthcare },
    { title: "Handyman", img: handyman },
    { title: "Logistics", img: logistics },
    { title: "Insurance", img: insurance },
];

const Industries = () => {
    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* heading */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm mb-4">
                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                        Industries We Serve
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Industries We Serve with Our
                        <span className="text-orange-500">
                            {" "}White Label Laravel Development Solutions
                        </span>
                    </h2>

                    <p className="text-gray-600 max-w-3xl mx-auto">
                        As a global white label laravel development company, we build scalable,
                        secure, and high-performance Laravel applications for startups,
                        agencies, and enterprise IT firms across diverse industries.
                    </p>

                </div>

                {/* grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {industries.map((item, index) => (

                        <div
                            key={index}
                            className="group bg-gray-50 rounded-2xl border border-gray-200 p-6 transition-all duration-300 hover:border-orange-400 hover:shadow-lg"
                        >

                            {/* title */}
                            <h3 className="text-lg font-semibold mb-6 text-gray-800 group-hover:text-orange-500 transition">
                                {item.title}
                            </h3>

                            {/* image */}
                            <div className="flex justify-center">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="max-h-[170px] object-contain transition duration-300 grayscale group-hover:grayscale-0"
                                />
                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Industries;