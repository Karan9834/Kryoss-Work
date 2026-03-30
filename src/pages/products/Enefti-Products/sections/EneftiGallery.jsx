import React from "react";

const EneftiGallery = () => {

    const images = [
        "/Products/ENEFTI Gallery1.jpg",
        "/Products/ENEFTI Gallery2.png",
        "/Products/ENEFTI Gallery3.png",
        "/Products/ENEFTI Gallery4.png",
        "/Products/ENEFTI Gallery5.png",
        "/Products/ENEFTI Gallery6.png"
    ];

    return (
        <section className="py-24 bg-[#f5f3ff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm">
                        Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Explore the <span className="text-purple-600">Enefti Core Gaming Platform</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a look at the intuitive interface of our Web3-powered engine
                    generation platform designed for gamers, organizers, and developers.
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
                                alt="Enefti Platform Screenshot"
                                className="w-full h-[260px] object-contain bg-white transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default EneftiGallery;
