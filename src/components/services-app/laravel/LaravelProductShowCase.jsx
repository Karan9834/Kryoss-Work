import React from "react";
import showcase1 from "../../../assets/homeservice-tutor-img/showcase1.webp";
import showcase2 from "../../../assets/homeservice-tutor-img/showcase2.webp";
import showcase3 from "../../../assets/homeservice-tutor-img/showcase3.webp";
import showcase4 from "../../../assets/homeservice-tutor-img/showcase4.webp";
import showcase5 from "../../../assets/homeservice-tutor-img/showcase5.webp";
import showcase6 from "../../../assets/homeservice-tutor-img/showcase6.webp";
import showcase7 from "../../../assets/homeservice-tutor-img/showcase7.webp";
import showcase8 from "../../../assets/homeservice-tutor-img/showcase8.webp";
const products = [
    { title: "Gojek Clone App", image: showcase1 },
    { title: "Uber Clone App", image: showcase2 },
    { title: "Food Delivery App", image: showcase3 },
    { title: "Medicine Delivery App", image: showcase4 },
    { title: "Handyman Service App", image: showcase5 },
    { title: "Carpool Ride App", image: showcase6 },
    { title: "Indrive Clone App", image: showcase7 },
    { title: "Delivery Anything App", image: showcase8 },
];

const ProductShowcase = () => {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Badge */}
                <div className="flex justify-center mb-4">
                    <span className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-1 text-sm">
                        <span className="w-2 h-2 rounded-full bg-orange-400" />
                        Product Showcase
                    </span>
                </div>

                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-semibold text-gray-800">
                    Industry-Specific{" "}
                    <span className="text-orange-400"> On-Demand Technology Solutions</span>
                </h2>

                {/* Subtext */}
                <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">
                    We build scalable, white-labeled digital platforms tailored to industry-specific business models, enabling faster go-to-market and long-term growth.
                </p>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                        >
                            {/* Image */}
                            <div className="w-full h-48 bg-gray-200">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Title */}
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ProductShowcase;
