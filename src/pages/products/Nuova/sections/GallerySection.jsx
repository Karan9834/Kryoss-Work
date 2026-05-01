import React from "react";
import ss1 from "../../../../assets/News-Management/ss1.png"
import ss2 from "../../../../assets/News-Management/ss2.png"
import ss3 from "../../../../assets/News-Management/ss3.png"
const images = [
  ss1,
  ss2,
  ss3
];

const Gallery = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-16">

      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Our{" "}
          <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
            Gallery
          </span>
        </h2>

        <p className="text-gray-600 mt-4">
          A glimpse into our platform and experiences.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {images.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={img}
                alt="gallery"
                className="w-full h-[250px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <p className="text-white text-sm font-semibold tracking-wide">
                  View Preview
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;