import React from "react";

const gallery = [
  {
    image: "https://picsum.photos/1200/800?1",
    title: "Portfolio Growth",
  },
  {
    image: "https://picsum.photos/1200/800?2",
    title: "Wealth Analytics",
  },
  {
    image: "https://picsum.photos/1200/800?3",
    title: "Investment Strategy",
  },
  {
    image: "https://picsum.photos/1200/800?4",
    title: "Market Insights",
  },
  {
    image: "https://picsum.photos/1200/800?5",
    title: "Financial Planning",
  },
  {
    image: "https://picsum.photos/1200/800?6",
    title: "Global Investments",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-white px-6 md:px-16 py-20 md:py-28">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm text-cyan-600 font-medium mb-2">
            Gallery
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore Wealth Insights
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover strategies, analytics, and global financial trends.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
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