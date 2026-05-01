import React from "react";

const images = [
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1581090700227-1e8a7f46f8f0?auto=format&fit=crop&w=800&q=80",
];

const GallerySection = () => {
  return (
    <section className="bg-[#0B0B0B] py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADING ===== */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Service Gallery
          </h2>
          <p className="mt-4 text-gray-400">
            Explore real service experiences and professional work.
          </p>
        </div>

        {/* ===== GRID ===== */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <img
                src={img}
                alt="gallery"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Text Overlay */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-sm text-orange-400 font-semibold">
                  Service Work
                </p>
                <p className="text-white text-lg font-bold">
                  Professional Quality
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default GallerySection;