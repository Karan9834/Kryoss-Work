import React from "react";
import { Star, Users, TrendingUp } from "lucide-react";
import telemedicineheroimg from "@/assets/telemedicine-img/telemedicinehero.jpg";
const TelemedicineHero = () => {
    return (
        <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-100">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative">

                        {/* Premium badge */}
                        <span className="absolute top-4 right-4 bg-white text-teal-600 px-4 py-1 rounded-full text-sm shadow">
                            ✨ Premium
                        </span>

                        {/* Replace image */}
                        <img
                            src={telemedicineheroimg}
                            alt="Telemedicine Platform"
                            className="w-full rounded-3xl shadow-xl object-cover"
                        />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* Badge */}
                        <span className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm mb-6">
                            &lt;/&gt; Mobile Apps
                        </span>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Telemedicine <span className="text-teal-600">Healthcare App</span>
                        </h1>

                        {/* Description */}
                        <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
                            A modern telemedicine platform that enables patients to consult
                            doctors online through secure video calls, messaging, and digital
                            prescriptions — making healthcare accessible anytime, anywhere.
                        </p>

                        {/* CTA */}
                        <div className="mt-8">
                            <a
                                href="https://preview.codecanyon.net/item/eyecare-pro-complete-eye-treatment-hospital-management-system/full_screen_preview/62156186"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-teal-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                            >
                                Live Demo
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg">

                            <div className="border border-teal-200 rounded-xl p-4 flex items-center gap-3 bg-white">
                                <Star className="text-teal-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">4.9</p>
                                    <p className="text-sm text-gray-500">Rating</p>
                                </div>
                            </div>

                            <div className="border border-teal-200 rounded-xl p-4 flex items-center gap-3 bg-white">
                                <Users className="text-teal-600" size={20} />
                                <div>
                                    <p className="font-semibold text-gray-900">10k+</p>
                                    <p className="text-sm text-gray-500">Users</p>
                                </div>
                            </div>

                            <div className="border border-teal-200 rounded-xl p-4 flex items-center gap-3 bg-white">
                                <TrendingUp className="text-teal-600" size={20} />
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

export default TelemedicineHero;