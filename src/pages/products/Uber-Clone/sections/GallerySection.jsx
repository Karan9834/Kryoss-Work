import React from "react";

const images = [
  "http://localhost:5173/src/assets/Product-update/uberss1.png",
  "http://localhost:5173/src/assets/Product-update/uberss2.png",
  "http://localhost:5173/src/assets/Product-update/uberss3.png",
 "http://localhost:5173/src/assets/Product-update/uberss1.png",
  "http://localhost:5173/src/assets/Product-update/uberss2.png",
  "http://localhost:5173/src/assets/Product-update/uberss3.png",
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Gallery</h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our Uber clone platform through screenshots that highlight
            the rider app, driver app, and admin dashboard experience.
          </p>
        </div>

      </div>

      {/* Moving Cards */}
      <div className="relative w-full overflow-hidden">

        <div className="flex gap-6 animate-scroll">

          {[...images, ...images].map((img, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[200px] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default GallerySection;