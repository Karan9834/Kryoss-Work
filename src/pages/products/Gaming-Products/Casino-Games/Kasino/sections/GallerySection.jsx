import React from "react";
import sss1 from "../../../../../../assets/Games-Product/sss1.png";
import sss2 from "../../../../../../assets/Games-Product/sss2.png";
import sss3 from "../../../../../../assets/Games-Product/sss3.png";
import sss4 from "../../../../../../assets/Games-Product/sss4.png";
import sss5 from "../../../../../../assets/Games-Product/sss5.png";
import sss6 from "../../../../../../assets/Games-Product/sss6.png";

const GallerySection = () => {
  const galleryItems = [
    { id: 1, image: sss1 },
    { id: 2, image: sss2 },
    { id: 3, image: sss3 },
    { id: 4, image: sss4 },
    { id: 5, image: sss5 },
    { id: 6, image: sss6 },
  ];

  return (
    <section className="relative w-full py-20 md:py-24 bg-black overflow-hidden">

      {/* Green Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-green-400 text-xs mb-3 tracking-wide">
            ● Gallery
          </p>

          <h2 className="text-[28px] md:text-[36px] font-bold text-white">
            Product{" "}
            <span className="text-green-400">
              Showcase
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
            Explore the Kasino platform interface and gameplay experience.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/40 transition-all duration-300"
            >
              {/* Image Wrapper */}
              <div className="w-full h-64 flex items-center justify-center">
                <img
                  src={item.image}
                  alt="gallery"
                  className="w-full h-full object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-green-500/10 blur-xl"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;