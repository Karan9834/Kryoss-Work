import React from 'react';
import ss1 from "../../../../assets/Grocery-Delivery/ss1.png"
import ss2 from "../../../../assets/ss2.png"
import ss3 from "../../../../assets/Grocery-Delivery/ss3.png"
import ss4 from "../../../../assets/Grocery-Delivery/ss4.png"
import ss5 from "../../../../assets/Grocery-Delivery/ss5.png"
import ss6 from "../../../../assets/Grocery-Delivery/ss6.png"
const GroceryGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: ss1,
      title: "Fresh Vegetables",
      category: "Organic"
    },
    {
      id: 2,
      url: ss2,
      title: "Ripe Fruits",
      category: "Seasonal"
    },
    {
      id: 3,
      url: ss3,
      title: "Dairy Products",
      category: "Fresh"
    },
    {
      id: 4,
      url: ss4,
      title: "Organic Grains",
      category: "Healthy"
    },
    {
      id: 5,
      url: ss5,
      title: "Fresh Bakery",
      category: "Daily"
    },
    {
      id: 6,
      url: ss6,
      title: "Premium Meats",
      category: "Fresh"
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-block bg-green-100 rounded-full px-4 py-2 mb-4">
            <span className="text-green-700 text-sm font-medium">Our Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Freshness You Can See
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at the quality of products we deliver
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium bg-green-600 px-2 py-1 rounded-full mb-1 inline-block">
                  {image.category}
                </span>
                <h3 className="text-sm font-semibold">{image.title}</h3>
              </div>

              {/* Category badge (always visible) */}
              <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-green-700 shadow">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-8">
          <a href="#" className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium text-sm">
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GroceryGallery;