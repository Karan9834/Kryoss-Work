import React from "react";
import betpro1 from "../../../../../../assets/Games-Product/betpro1.png"
import betpro2 from "../../../../../../assets/Games-Product/betpro2.png"
import betpro3 from "../../../../../../assets/Games-Product/betpro3.png"

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      image: betpro1
    },
    {
      id: 2,
      image: betpro2
    },
    {
      id: 3,
      image: betpro3
    },
  ];

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer"
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;