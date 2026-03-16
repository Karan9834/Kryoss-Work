import React from "react";
import gallery1 from "@/assets/telemedicine-img/telemedicinegallery1.jpg";
import gallery2 from "@/assets/telemedicine-img/telemedicinegallery2.jpg";
import gallery3 from "@/assets/telemedicine-img/telemedicinegallery3.jpg";
import gallery4 from "@/assets/telemedicine-img/telemedicinegallery4.jpg";
import gallery5 from "@/assets/telemedicine-img/telemedicinegallery5.jpg";
import gallery6 from "@/assets/telemedicine-img/telemedicinegallery6.jpg";
const TelemedicineGallery = () => {

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ];

    return (
        <section className="py-24 bg-[#f0fdfa]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm">
                        Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Explore the <span className="text-teal-600">Telemedicine Platform</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Discover the intuitive interface of our telemedicine solution
                    designed to connect patients and doctors seamlessly through
                    digital healthcare services.
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
                                alt="Telemedicine App Screenshot"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default TelemedicineGallery;