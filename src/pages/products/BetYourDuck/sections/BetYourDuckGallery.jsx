import React from "react";

const BetYourDuckGallery = () => {

    const images = [
        "/Products/Duck.avif",
        "/Products/DuckGallery1.png",
        "/Products/DuckGallery2.png",
        "/Products/DuckGallery3.jpg",
        "/Products/DuckGallery4.webp",
        "/Products/DuckGallery5.jpg"
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
                    Explore the <span className="text-emerald-600">BetYourDuck Interface</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a look at the deeply functional interfaces of our heavy-duty
                    exchange and peer-to-peer matching engines.
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
                                alt="BetYourDuck View"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default BetYourDuckGallery;
