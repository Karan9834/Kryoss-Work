import React from "react";
import { Star, Users, TrendingUp, MessageCircle } from "lucide-react";
import pharmacyheroimg from "@/assets/pharmacy-img/pharmacyhero.jpg";
const PharmacyDeliveryHero = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-rose-50 to-pink-100">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">

                        {/* Premium badge */}
                        <span className="absolute top-4 right-4 bg-white text-rose-600 px-4 py-1 rounded-full text-sm shadow">
                            ✨ Premium
                        </span>

                        {/* Replace with your downloaded image */}
                        <img
                            src={pharmacyheroimg}
                            alt="Pharmacy Delivery App"
                            className="w-full rounded-3xl shadow-xl object-cover"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* Badge */}
                        <span className="inline-block bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm mb-6">
                            &lt;/&gt; Clone Scripts
                        </span>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Pharmacy <span className="text-rose-600">Delivery App</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
                            An on-demand pharmacy delivery platform that allows customers
                            to order medicines online and receive them at their doorstep.
                            Pharmacies can manage orders, prescriptions, and deliveries
                            through a centralized system.
                        </p>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="https://preview.codecanyon.net/item/drmedico-online-healthcare-android-app-with-order-medicine-and-upload-prescription/full_screen_preview/28842064"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-rose-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-rose-700 transition"
                            >
                                Live Demo
                            </a>
                            <a
                                href="/company/contact"
                                className="inline-flex items-center gap-2 bg-white text-rose-600 border border-rose-200 px-7 py-3 rounded-lg font-semibold hover:bg-rose-50 transition shadow-sm"
                            >
                                <MessageCircle size={18} />
                                Let's Discuss
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg">

                            <div className="border border-rose-200 rounded-xl p-4 flex items-center gap-3 bg-white">
                                <Star className="text-rose-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">4.9</p>
                                    <p className="text-sm text-gray-500">Rating</p>
                                </div>
                            </div>

                            <div className="border border-rose-200 rounded-xl p-4 flex items-center gap-3 bg-white">
                                <Users className="text-rose-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">10k+</p>
                                    <p className="text-sm text-gray-500">Users</p>
                                </div>
                            </div>

                            <div className="border border-rose-200 rounded-xl p-4 flex items-center gap-3 bg-white">
                                <TrendingUp className="text-rose-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">99.9%</p>
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

export default PharmacyDeliveryHero;