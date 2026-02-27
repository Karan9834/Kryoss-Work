import React from "react";

const products = [
  {
    title: "Gojek Clone App",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216"
  },
  {
    title: "Uber Clone App",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d"
  },
  {
    title: "Food Delivery App",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    title: "Medicine Delivery App",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88"
  },
  {
    title: "Handyman Service App",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
  },
  {
    title: "Carpool Ride App",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
  {
    title: "Indrive Clone App",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763"
  },
  {
    title: "Delivery Anything App",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a"
  }
];

const ProductShowcase = () => {
  return (
    <section className="w-full py-24 bg-[#f5f6f7]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 border border-[#d9e6c7] bg-white px-4 py-1 rounded-full text-sm text-gray-700 mb-6">
          <span className="w-2 h-2 bg-[#6dbb1a] rounded-full"></span>
          Product Showcase
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Explore Our{" "}
          <span className="text-[#6dbb1a]">
            On-Demand App Solutions
          </span>
        </h2>

        <p className="text-gray-600 mb-16">
          Check out our best-selling on-demand solutions and find the perfect fit
          for your unique business needs.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-5 text-left">
                <h3 className="font-semibold text-gray-800">
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

export default ProductShowcase;