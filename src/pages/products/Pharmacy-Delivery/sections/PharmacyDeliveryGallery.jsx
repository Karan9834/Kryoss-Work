import React from "react";
import gallery1 from "@/assets/pharmacy-img/pharmacygallery1.jpg";
import gallery2 from "@/assets/pharmacy-img/pharmacygallery2.jpg";
import gallery3 from "@/assets/pharmacy-img/pharmacygallery3.jpg";
import gallery4 from "@/assets/pharmacy-img/pharmacygallery4.jpg";
import gallery5 from "@/assets/pharmacy-img/pharmacygallery5.jpg";
import gallery6 from "@/assets/pharmacy-img/pharmacygallery6.jpg";
const PharmacyDeliveryGallery = () => {

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
    ];

    return (
        <section className="py-24 bg-[#fff1f2]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-rose-100 text-rose-700 px-4 py-1 rounded-full text-sm">
                        Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Explore the <span className="text-rose-600">Pharmacy Delivery Platform</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a look at the intuitive interface of our pharmacy delivery
                    application designed to help users order medicines easily and
                    receive them quickly.
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
                                alt="Pharmacy App Screenshot"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default PharmacyDeliveryGallery;