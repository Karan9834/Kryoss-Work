import React from "react";

const products = [
  { title: "Gojek Clone App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-jek.webp" },
  { title: "Uber Clone App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Taxi.webp" },
  { title: "Food Delivery App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Food.webp" },
  { title: "Medicine Delivery App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Medicine.webp" },
  { title: "Handyman Service App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Handyman.webp" },
  { title: "Carpool Ride App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Carpool.webp" },
  { title: "Indrive Clone App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Rental.webp" },
  { title: "Delivery Anything App", img: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Delivery-anything.webp" },
];

const ProductShowcase = () => {
  return (
    <section className="py-28 px-6 md:px-16 bg-[#fffaf0]">

      <div className="max-w-7xl mx-auto text-center">

        {/* Badge */}
        <span className="px-4 py-1.5 rounded-full border border-yellow-500 text-yellow-600 text-sm inline-block mb-6">
          Product Showcase
        </span>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Explore Our{" "}
          <span className="text-yellow-600">
            On-Demand App Solutions
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 max-w-3xl mx-auto mb-16">
          Check out our best-selling on-demand solutions and find the perfect fit
          for your unique business needs.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-left">

          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md 
                         hover:shadow-2xl hover:-translate-y-2 
                         transition duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-6">
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-yellow-600 transition">
                  {item.title}
                </h4>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;