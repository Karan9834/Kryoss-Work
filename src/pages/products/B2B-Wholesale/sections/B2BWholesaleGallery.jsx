import React from "react";
import gallery1 from "@/assets/b2bwholesale-img/b2bwholesalegallery1.jpg"
import gallery2 from "@/assets/b2bwholesale-img/b2bwholesalegallery2.jpg"
import gallery3 from "@/assets/b2bwholesale-img/b2bwholesalegallery3.jpg"
import gallery4 from "@/assets/b2bwholesale-img/b2bwholesalegallery4.jpg"
import gallery5 from "@/assets/b2bwholesale-img/b2bwholesalegallery5.jpg"
import gallery6 from "@/assets/b2bwholesale-img/b2bwholesalegallery6.jpg"

const B2BGallery = () => {

    const images = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6
    ];

    return (
        <section className="py-24 bg-[#f7f9ff]">

            <div className="max-w-7xl mx-auto px-6">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">
                        Gallery
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-4xl font-bold text-gray-900">
                    Explore the <span className="text-blue-600">B2B Wholesale Platform</span>
                </h2>

                <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4">
                    Take a closer look at the powerful interface designed for managing
                    wholesale products, bulk orders, pricing tiers, and business customers.
                </p>

                {/* Images */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                        >

                            <img
                                src={img}
                                alt="B2B Platform Screenshot"
                                className="w-full h-[260px] object-cover transform group-hover:scale-105 transition duration-500"
                            />

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
};

export default B2BGallery;