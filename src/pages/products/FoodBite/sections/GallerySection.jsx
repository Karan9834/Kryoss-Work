import React from "react";
import ss11 from "../../../../assets/Food-Delivery_product/ss11.png"
import ss22 from "../../../../assets/Food-Delivery_product/ss22.png"
import ss33 from "../../../../assets/Food-Delivery_product/ss33.png"
import ss44 from "../../../../assets/Food-Delivery_product/ss44.png"
import ss55 from "../../../../assets/Food-Delivery_product/ss55.png"
import ss66 from "../../../../assets/Food-Delivery_product/ss66.png" 
const GallerySection = () => {
  const images = [
    ss11,
    ss22,
    ss33,
    ss44,
    ss55,
    ss66
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm bg-blue-100 text-blue-700 rounded-full mb-4 font-medium">
            Product Preview
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            See Gallery in Action
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Explore powerful features and intuitive dashboards designed for seamless inventory management.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              {/* Image */}
              <img
                src={img}
                alt="IMS Screenshot"
                className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Label */}
              <div className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition">
                Feature Preview
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;