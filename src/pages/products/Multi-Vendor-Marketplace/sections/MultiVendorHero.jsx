import React from "react";
import { Star, Users, TrendingUp } from "lucide-react";
import multivendorheroimg from "@/assets/multivendor-img/multivendorhero.jpg";
const MultiVendorHero = () => {
    return (
        <section className="py-24 bg-[#f7f7f7]">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">

                        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">

                            {/* Replace with your saved image */}
                            <img
                                src={multivendorheroimg}
                                alt="Multi Vendor Marketplace"
                                className="w-full h-full object-cover"
                            />

                        </div>

                        {/* Premium Badge */}
                        <div className="absolute top-4 right-4 bg-white px-4 py-1 rounded-full text-sm shadow">
                            ⭐ Premium
                        </div>

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="space-y-6">

                        {/* Badge */}
                        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                            &lt;/&gt; Web Apps
                        </span>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                            Multi-Vendor Marketplace
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 text-lg max-w-xl">
                            Launch a powerful Amazon-like multi-vendor marketplace where
                            multiple sellers can manage their products, customers, and orders
                            from a single platform while you control the entire ecosystem.
                        </p>

                        {/* CTA */}
                        <div>
                            <a
                                href="https://preview.codecanyon.net/item/eshop-web-multi-vendor-ecommerce-marketplace-cms/full_screen_preview/34380052"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition shadow"
                            >
                                Live Demo
                            </a>
                        </div>

                        {/* STATS */}
                        <div className="grid grid-cols-3 gap-4 pt-4">

                            <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3 items-center">
                                <Star className="text-orange-500" size={22} />
                                <div>
                                    <p className="font-semibold">4.9</p>
                                    <p className="text-sm text-gray-500">Rating</p>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3 items-center">
                                <Users className="text-orange-500" size={22} />
                                <div>
                                    <p className="font-semibold">10k+</p>
                                    <p className="text-sm text-gray-500">Users</p>
                                </div>
                            </div>

                            <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-3 items-center">
                                <TrendingUp className="text-orange-500" size={22} />
                                <div>
                                    <p className="font-semibold">99.9%</p>
                                    <p className="text-sm text-gray-500">Uptime</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default MultiVendorHero;