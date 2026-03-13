import React from "react";

const images = [
  "http://localhost:5173/src/assets/Product-update/bikess1.webp",
  "http://localhost:5173/src/assets/Product-update/bikess2.webp",
  "http://localhost:5173/src/assets/Product-update/bikess3.webp",
   "http://localhost:5173/src/assets/Product-update/bikess1.webp",
  "http://localhost:5173/src/assets/Product-update/bikess2.webp",
  "http://localhost:5173/src/assets/Product-update/bikess3.webp",
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold">
            App Screenshots
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore the intuitive interface and powerful features of our
            Bike Taxi App through these screenshots.
          </p>

        </div>

        {/* Gallery */}
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

      </div>

    </section>
  );
};

export default GallerySection;