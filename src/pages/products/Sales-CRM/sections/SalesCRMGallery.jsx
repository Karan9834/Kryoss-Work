import React from "react";
import gallery1 from "@/assets/salescrm-img/salescrmgallery1.jpg";
import gallery2 from "@/assets/salescrm-img/salescrmgallery2.jpg";
import gallery3 from "@/assets/salescrm-img/salescrmgallery3.jpg";
import gallery4 from "@/assets/salescrm-img/salescrmgallery4.jpg";
import gallery5 from "@/assets/salescrm-img/salescrmgallery5.jpg";
import gallery6 from "@/assets/salescrm-img/salescrmgallery6.jpg";

const CRMGallery = () => {

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ];

    return (
        <section className="py-24 bg-[#eef2ff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm">
                        Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Explore the <span className="text-indigo-600">CRM Platform</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a closer look at our CRM dashboard designed to manage leads,
                    track sales, and streamline your business operations efficiently.
                </p>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >

                            <img
                                src={img}
                                alt="CRM Screenshot"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default CRMGallery;