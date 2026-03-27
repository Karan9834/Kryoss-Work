import React from "react";

const images = [
  "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1495020689067-958852a7765e",
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
];

const GallerySection = () => {
  return (
    <section className="bg-[#f8f7f4] px-6 md:px-16 py-20 md:py-28">
      
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-orange-600 font-medium mb-2">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Our Visual Stories
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A curated collection of moments, insights, and innovation.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;