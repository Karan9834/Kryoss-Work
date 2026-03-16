import React from "react";
import cloudAboutimg from "@/assets/cloud-kitchen-img/cloudAbout.jpeg";

const About = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <img src={cloudAboutimg}
                            alt="Carpool App"
                            className="w-full h-full object-cover rounded-3xl" />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About CloudKitchen App
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            What is a <span className="text-blue-600">Cloud Kitchen POS?</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-600 leading-relaxed">
    A Cloud Kitchen POS system is a modern restaurant management platform
    designed specifically for delivery-only kitchens and virtual restaurants.
    It helps manage orders from multiple online platforms, track kitchen
    operations, and streamline the entire food preparation and delivery
    workflow from a single dashboard.
</p>

<p className="text-gray-600 leading-relaxed">
    Our Cloud Kitchen POS solution provides a ready-to-use system for food
    entrepreneurs, restaurant chains, and startups looking to efficiently
    manage online orders. It includes essential features like order
    aggregation, menu management, real-time order tracking, inventory
    control, and secure payment integration.
</p>

<p className="text-gray-600 leading-relaxed">
    With a fully customizable and scalable architecture, the platform can
    easily adapt to different kitchen brands, multiple outlets, and various
    food delivery marketplaces. This allows businesses to operate multiple
    virtual restaurants without increasing operational complexity.
</p>

<p className="text-gray-600 leading-relaxed">
    Whether you are launching a single cloud kitchen, managing multiple
    delivery brands, or expanding a restaurant business into the online
    food delivery market, our Cloud Kitchen POS system helps optimize
    operations, improve efficiency, and scale your food business faster.
</p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;