import React from "react";

const Solutions = () => {
  const products = [
    {
      title: "Grocery Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/grocery-delivery.webp",
    },
    {
      title: "Medicine Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/medicine-delivery.webp",
    },
    {
      title: "flower Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/flower-delivery.webp",
    },
    {
      title: "courier Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/courier-delivery.webp",
    },
    {
      title: "meat Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/meat-delivery.webp",
    },
    {
      title: "fuel Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/fuel-delivery.webp",
    },
    {
      title: "stationary Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/stationary-delivery.webp",
    },
    {
      title: "Alcohol Delivery",
      image: "https://whitelabelfox.com/assets/images/online-food-ordering-app/alcohol-delivery.webp",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-black px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#003C52] to-[#01B49E] rounded-full"></span>
            Other Delivery Anything Solutions
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
           Versatile Delivery App{" "}
            <span className="bg-gradient-to-r from-[#003C52] to-[#01B49E] text-transparent bg-clip-text">
             Solutions for Your Startup
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
           If you are looking for other similar on-demand delivery solutions like grocery, flower, medicine, etc. We customize the food app to other delivery app solutions for your business startup.
          </p>

        </div>

        {/* ===== PRODUCT CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-md group cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition duration-300"></div>

              {/* TITLE INSIDE IMAGE */}
              <h3 className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10">
                {product.title}
              </h3>

              {/* LOGO BOTTOM RIGHT (SHOW ON HOVER) */}
              <img
                src="https://whitelabelfox.com/assets/images/logo.webp"
                alt="logo"
                className="absolute bottom-4 right-4 w-10 opacity-0 group-hover:opacity-100 transition duration-300 z-10"
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Solutions;