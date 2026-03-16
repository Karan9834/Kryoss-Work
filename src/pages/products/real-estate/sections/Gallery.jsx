import React from "react";
import gallery1 from "@/assets/real-estate-img/gallery1.jpeg";
import gallery2 from "@/assets/real-estate-img/gallery2.jpeg";
import gallery3 from "@/assets/real-estate-img/gallery3.jpeg";
import gallery4 from "@/assets/real-estate-img/gallery4.jpeg";
import gallery5 from "@/assets/real-estate-img/gallery5.jpeg";
import gallery6 from "@/assets/real-estate-img/gallery6.jpeg";

const Gallery = () => {

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ];

    return (
        <section className="py-24 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="border border-gray-300 px-4 py-1 rounded-full text-sm">
                        ● Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-800">
                    Explore Our <span className="text-blue-600">Real Estate CRM Gallery</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a closer look at our modern cloud kitchen platform interface designed
                    to make ride sharing simple, efficient, and convenient for both
                    riders and drivers.
                </p>

                {/* Image Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >

                            <img
                                src={img}
                                alt="Carpool App Screenshot"
                                className="w-full h-[260px] object-cover transform group-hover:scale-110 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Gallery;