import React from "react";
import { Star, Users, TrendingUp } from "lucide-react";
import b2bwholesaleheroimg from "@/assets/b2bwholesale-img/b2bwholesalehero.jpg";
const B2BWholesaleHero = () => {
    return (
        <section className="py-20 bg-[#eef2ff]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div className="space-y-8">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            {"</>"} Enterprise Solution
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Powerful <span className="text-blue-600">B2B Wholesale Portal</span>
                            <br />
                            for Bulk Commerce
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                            A modern B2B ordering platform designed for wholesalers,
                            distributors, and retailers. Manage bulk orders, custom
                            pricing tiers, inventory, and business customers with a
                            streamlined digital portal built for enterprise growth.
                        </p>

                        {/* CTA */}
                        <div>
                            <a
                                href="https://preview.codecanyon.net/item/wholesale-b2b-wholesale-pricing-customer-groups-for-botble-ecommerce/full_screen_preview/61763729"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
                            >
                                Live Demo
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 pt-6">

                            <div className="flex items-center gap-3">
                                <Star className="text-blue-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">4.9</p>
                                    <p className="text-sm text-gray-500">Rating</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Users className="text-blue-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">10k+</p>
                                    <p className="text-sm text-gray-500">Users</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <TrendingUp className="text-blue-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">99.9%</p>
                                    <p className="text-sm text-gray-500">Uptime</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        <div className="absolute -top-6 -right-6 bg-white border border-blue-200 text-blue-600 text-sm px-4 py-1 rounded-full shadow">
                            ✨ Premium
                        </div>

                        <img
                            src={b2bwholesaleheroimg}
                            alt="B2B Wholesale Portal"
                            className="w-full max-w-md rounded-3xl shadow-2xl object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
};

export default B2BWholesaleHero;