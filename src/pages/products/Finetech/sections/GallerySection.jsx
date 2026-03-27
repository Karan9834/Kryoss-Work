import React from "react";

const gallery = [
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
    title: "Market Insights",
  },
  {
    image: "https://images.unsplash.com/photo-1551281044-8d8d7d3a1f3f?auto=format&fit=crop&w=1200&q=80",
    title: "Analytics Dashboard",
  },
  {
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
    title: "Startup Growth",
  },
  {
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=80",
    title: "Business Strategy",
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    title: "Financial Planning",
  },
  {
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    title: "Digital Innovation",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20 md:py-28">
      
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-yellow-600 font-medium mb-2">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Financial Insights
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover analytics, strategies, and global financial trends through visuals.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
            >
              
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
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