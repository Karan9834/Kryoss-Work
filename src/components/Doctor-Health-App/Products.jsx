import React from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import card1 from "../../assets/Doctor-Health-App/product1.jpg";
import card2 from "../../assets/Doctor-Health-App/product2.jpg";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "docrib",
      description: "Book consultations with top specialists instantly",
      image: card1,
      route: "/products/social/appointment-booking",
    },
    {
      id: 2,
      name: "Medix Pro",
      description: "Medicines delivered to your doorstep in minutes",
      image: card2,
      route: "/products/delivery/medicine-delivery",
    },
  ];

  return (
    <section id="explore-health" className="relative w-full overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700 tracking-wide">
              Healthcare Products
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Choose the Perfect{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 text-transparent bg-clip-text">
              Healthcare Solution
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Powerful healthcare solutions designed to simplify patient care and services
          </p>
        </div>

        {/* Grid SAME as Food */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="text-center">

              {/* Clickable Image */}
              <div
                onClick={() => navigate(product.route)}
                className="cursor-pointer group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg border-[6px] border-transparent hover:border-emerald-500 shadow-md transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"
                />
              </div>

              {/* Title Below */}
              <p className="mt-4 text-sm md:text-base">
                <span 
                  onClick={() => navigate(product.route)}
                  className="text-emerald-600 font-semibold cursor-pointer hover:underline"
                >
                  {product.name}
                </span>{" "}
                <span className="text-gray-700">
                  - {product.description}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Click on any product to explore more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;