import React from "react";

const RevPTCGallery = () => {

    const images = [
        "/Products/RevPTCGallery1.png",
        "/Products/RevPTCGallery2.png",
        "/Products/RevPTCGallery3.png",
        "/Products/RevPTCGallery4.png",
        "/Products/RevPTCGallery5.png",
        "/Products/RevPTCGallery6.png"
    ];

    return (
        <section className="py-24 bg-[#f4f7ff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Explore the <span className="text-blue-600">revPTC Interfaces</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a look at the deeply functional interfaces of our scalable
                    referral tracking systems and automated user management dashboards.
                </p>

                {/* Images Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >

                            <img
                                src={img}
                                alt="revPTC View"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default RevPTCGallery;
