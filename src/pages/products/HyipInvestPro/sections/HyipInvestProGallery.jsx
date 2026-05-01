import React from "react";

const HyipInvestProGallery = () => {

    const images = [
        "/Products/HyipGallery1.png",
        "/Products/HyipGallery2.png",
        "/Products/HyipGallery3.png",
        "/Products/HyipGallery4.png",
        "/Products/HyipGallery5.png",
        "/Products/HyipGallery6.png"
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
                    Explore the <span className="text-blue-600">InvestPro Interface</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a look at the deeply functional interfaces of our heavy-duty
                    investment schemas and automated user management dashboards.
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
                                alt="Hyip InvestPro View"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default HyipInvestProGallery;
