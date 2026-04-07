import React from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import prod1 from "../../assets/HMS-Hotel/image1.png";
import prod2 from "../../assets/HMS-Hotel/image.png";

const HotelProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Mars Hotel Management System",
      description: "Complete Hotel Management System",
      image: prod1,
      route: "/products/mars",
    },
    {
      id: 2,
      name: "TimeStay",
      description: "Smart Booking & Reservation Engine",
      image: prod2,
      route: "/products/TimeStay",
    },
  ];

  const handleProductClick = (route) => {
    navigate(route);
  };

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden font-['Inter']">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-40"></div>

      {/* 🔥 CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* 🔥 HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-5">
            <Sparkles size={16} className="text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">
              Our Products
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-orange-600 to-cyan-600 text-transparent bg-clip-text">
              Hotel Solutions
            </span>
          </h2>

          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Powerful tools designed for modern hospitality businesses
          </p>
        </div>

        {/* 🔥 PRODUCTS GRID */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {products.map((product) => (
            <div key={product.id} className="text-center">

              {/* CLICKABLE CARD */}
              <div
                onClick={() => handleProductClick(product.route)}
                className="cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleProductClick(product.route);
                  }
                }}
              >
                {/* 🔥 FIXED SIZE IMAGE CONTAINER */}
                <div className="w-full h-[260px] md:h-[300px] rounded-xl overflow-hidden border-[4px] border-transparent group-hover:border-orange-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03]">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                </div>
              </div>

              {/* 🔥 TITLE */}
              <p className="mt-4 text-sm md:text-base">
                <span className="text-orange-600 font-semibold">
                  {product.name}
                </span>{" "}
                <span className="text-gray-700">
                  - {product.description}
                </span>
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default HotelProducts;