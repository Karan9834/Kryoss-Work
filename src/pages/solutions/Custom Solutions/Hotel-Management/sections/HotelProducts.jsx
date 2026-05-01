import React from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import prod1 from "../../../../../assets/HMS-Hotel/prod1.jpg";
import prod2 from "../../../../../assets/HMS-Hotel/prod2.png";

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
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-gray-600" />
            <span className="text-sm font-semibold text-gray-700">
              Our Products
            </span>
          </div>

          <h2 className="text-gray-900 text-[30px] md:text-[36px] font-bold leading-[1.2]">
            Explore Our{" "}
            <span className="text-cyan-600">
              Hotel Solutions
            </span>
          </h2>

          <p className="mt-4 text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Powerful tools designed for modern hospitality businesses
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {products.map((product) => (
            <div key={product.id} className="text-center">

              {/* SIMPLE CARD */}
              <div
                onClick={() => handleProductClick(product.route)}
                className="cursor-pointer rounded-xl border border-gray-200 p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg object-cover"
                />
              </div>

              {/* TEXT */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span className="text-cyan-600 font-semibold">
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