import React from "react";
import carpoolaboutimg from "@/assets/carpool-app-img/carpoolabout.webp";

const CarpoolAbout = () => {
    return (
        <section className="py-24 bg-gray-50">

            <div className="max-w-7xl mx-auto px-8">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT IMAGE */}
                    <div className="flex justify-center lg:justify-start">

                        <img src={carpoolaboutimg}
                            alt="Carpool App"
                            className="w-full h-full object-cover rounded-3xl" />

                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="border border-blue-200 rounded-3xl p-8 lg:p-12 bg-white shadow-sm space-y-6">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm px-4 py-2 rounded-full w-fit">
                            ● About CarPool App
                        </div>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-900">
                            What is a <span className="text-blue-600">Carpooling App?</span>
                        </h2>

                        {/* Paragraph */}
                        <p className="text-gray-600 leading-relaxed">
                            A carpooling app is a smart ride-sharing platform that connects
                            people traveling in the same direction. It allows commuters to
                            share rides, split travel costs, and reduce traffic congestion
                            while making transportation more affordable and efficient.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Our Carpool App Script provides a ready-to-launch solution for
                            startups and businesses looking to build their own ride-sharing
                            platform. It includes essential features like ride matching,
                            real-time tracking, secure payments, and user management.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            With a fully customizable architecture, you can easily adapt the
                            platform to match your brand, business model, and regional
                            transportation needs without building everything from scratch.
                        </p>

                        <p className="text-gray-600 leading-relaxed">
                            Whether you're creating a community carpool network, a corporate
                            commuting solution, or a city-wide ride-sharing platform, our
                            scalable carpool system helps you launch faster and grow your
                            user base effortlessly.
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default CarpoolAbout;