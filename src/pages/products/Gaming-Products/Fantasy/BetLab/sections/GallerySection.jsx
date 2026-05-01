import React from "react";
import betlab1 from "../../../../../../assets/Games-Product/betlab1.png"
import betlab2 from "../../../../../../assets/Games-Product/betlab2.png"
import betlab3 from "../../../../../../assets/Games-Product/betlab3.png"

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: betlab1
    },
    {
      id: 2,
      image: betlab2
    },
    {
      id: 3,
      image: betlab3
    }
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Explore our latest work and projects
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;