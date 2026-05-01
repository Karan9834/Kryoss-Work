import React from "react";
import { Rocket, Users, ShieldCheck, Clock, Plug } from "lucide-react";
import whyImg from "../../../assets/services-laravel-img/laravelwhymatter.webp";

const WhyItMatters = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">
                        <img
                            src={whyImg}
                            alt="Laravel Team"
                            className="w-full max-w-[620px] rounded-[30px] object-cover"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1 text-sm mb-5">
                            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                            Why It Matters
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-snug">
                            We Are the Laravel Team Your{" "}
                            <span className="text-orange-500">
                                Agency Has Been Looking For.
                            </span>
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Custom Laravel applications, SaaS platforms, API integrations,
                            CRM systems – these are high-value projects that agencies win but
                            often struggle to execute. Finding skilled Laravel developers who
                            understand complex architecture, clean code standards, and tight
                            deadlines is genuinely hard.
                        </p>

                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We solve exactly that. With 8+ years of deep Laravel expertise and
                            a dedicated team of 40+ senior developers, we become the
                            technical backbone your agency relies on – quietly building
                            world-class web development solutions that you deliver under your
                            own brand.
                        </p>

                        {/* Bullet Points */}
                        <div className="space-y-4">

                            <div className="flex gap-4">
                                <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                                    <Rocket size={18} />
                                </div>
                                <p>200+ complex Laravel projects successfully delivered across global.</p>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                                    <Users size={18} />
                                </div>
                                <p>40+ senior Laravel developers specializing in SaaS, APIs, CRMs & custom platforms.</p>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                                    <ShieldCheck size={18} />
                                </div>
                                <p>100% white label – your brand on every deliverable, your client never knows we exist.</p>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                                    <Clock size={18} />
                                </div>
                                <p>Deadline-driven delivery culture – we treat your client's timeline like our own reputation.</p>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                                    <Plug size={18} />
                                </div>
                                <p>Plug us into your agency from day one – zero ramp-up time, instant capacity.</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default WhyItMatters;