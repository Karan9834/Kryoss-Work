import React from "react";

const BetLabGallery = () => {

    const images = [
        "/Products/BetLabGallery.png",
        "/Products/BetLabGallery1.png",
        "/Products/BetLabGallery3.jpg",
        "/Products/BetLabGallery2.png",
        "/Products/BetLabGallery4.jpg",
        "/Products/BetLabGallery5.png"
    ];

    return (
        <section className="py-24 bg-[#f0fdfa]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full text-sm">
                        Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Explore the <span className="text-emerald-600">BetLab Interfaces</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a look at the deeply functional interfaces of our heavy-duty
                    sportsbook and automated odds management software.
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
                                alt="BetLab Backend View"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default BetLabGallery;
