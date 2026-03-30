import React from "react";

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    title: "Global Market Trends",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "AI & Technology",
  },
  {
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e",
    title: "Startup Ecosystem",
  },
  {
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620",
    title: "Business Strategy",
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    title: "Corporate Insights",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Digital Innovation",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20 md:py-28">
      
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-green-600 font-medium mb-2">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Our Insights
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of business trends, innovation, and global insights.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
            >
              
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* TITLE */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-lg font-semibold text-center px-4">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GallerySection;