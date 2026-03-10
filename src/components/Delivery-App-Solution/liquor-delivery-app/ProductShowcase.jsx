import React from "react";

const ProductShowcase = () => {
  const products = [
    {
      title: "Gojek Clone App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-jek.webp",
    },
    {
      title: "Uber Clone App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Taxi.webp",
    },
    {
      title: "Food Delivery App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Food.webp",
    },
    {
      title: "Medicine Delivery App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Medicine.webp",
    },
    {
      title: "Handyman Service App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Handyman.webp",
    },
    {
      title: "Carpool Ride App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Carpool.webp",
    },
    {
      title: "Indrive Clone App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Rental.webp",
    },
    {
      title: "Delivery Anything App",
      image: "https://whitelabelfox.com/assets/images/our-other-product/Fox-Delivery-anything.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-black px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text rounded-full"></span>
            Product Showcase
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Explore  Our <span className="bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text text-transparent bg-clip-text"> On-Demand App Solutions</span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Check out our best-selling on-demand solutions and find the perfect fit for your unique business needs.
          </p>

        </div>

        {/* ===== PRODUCT CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md 
                         p-6 text-center 
                         border border-gray-100
                         hover:shadow-xl 
                         hover:-translate-y-2 
                         transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-32 object-contain mb-6"
              />

              <h3 className="text-lg font-semibold bg-gradient-to-r bg-gradient-to-r from-[#921E4B] to-[#4A011D] text-transparent bg-clip-text text-transparent bg-clip-text">
                {product.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProductShowcase;