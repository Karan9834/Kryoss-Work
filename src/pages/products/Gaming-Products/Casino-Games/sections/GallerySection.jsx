import React from "react";
import ss1 from "../../../../../assets/Games-Product/ss1.png";
import ss2 from "../../../../../assets/Games-Product/ss2.png";
import ss3 from "../../../../../assets/Games-Product/ss3.png";
import ss4 from "../../../../../assets/Games-Product/ss4.png";
import ss5 from "../../../../../assets/Games-Product/ss5.png";
import ss6 from "../../../../../assets/Games-Product/ss6.png";

const GallerySection = () => {
  const galleryItems = [
    { id: 1, image: ss1 },
    { id: 2, image: ss2 },
    { id: 3, image: ss3 },
    { id: 4, image: ss4 },
    { id: 5, image: ss5 },
    { id: 6, image: ss6 },
  ];

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-br from-white to-amber-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 px-4 py-2 rounded-full mb-5 text-xs font-semibold uppercase">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
            Our Portfolio
          </div>

          <h2 className="text-[30px] md:text-[36px] font-bold text-gray-900">
            Project{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>

          <p className="mt-4 text-gray-500 text-base max-w-2xl mx-auto">
            Explore our latest casino product experiences
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              {/* IMAGE */}
              <div className="w-full h-64 flex items-center justify-center bg-white">
                <img
                  src={item.image}
                  alt={`Project ${item.id}`}
                  className="w-full h-full object-fit transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* TEXT (VISIBLE ONLY BEFORE HOVER) */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-white/90 backdrop-blur-sm group-hover:opacity-0 transition duration-300">
                <h3 className="text-sm font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {item.category}
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