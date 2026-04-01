import React from "react";
import realEstateAbout from "@/assets/real-estate-img/realEstateAbout.png";

const About = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <img src={realEstateAbout}
                            alt="Carpool App"
                            className="w-full h-full object-cover rounded-3xl" />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About Real Estate Agency
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            What is a <span className="text-blue-600">Real Estate Agency?</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-600 leading-relaxed">
                            A Real Estate Agency is a professional service that helps people buy, sell, rent, or invest in properties such as houses, apartments, land, and commercial spaces. It acts as a bridge between property owners and potential buyers or tenants, making the entire process simple, secure, and efficient.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Real estate agencies provide a complete platform where property listings can be showcased with images, descriptions, pricing, and location details. Buyers can easily explore available properties, compare options, and connect directly with agents to schedule visits or get more information.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            With modern digital solutions, real estate platforms also offer advanced features such as smart property search, virtual property tours, secure communication with agents, and streamlined transaction processes. These features help users find the right property faster and make informed decisions with confidence.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;