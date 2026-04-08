import React from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import product1 from "../../assets/Food-delivery/product1.jpg";
import product2 from "../../assets/Food-delivery/product2.jpg";

const ProductSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "FoodHat",
      description: "Premium Cloud Kitchen Management",
      image: product1,
      route: "/products/cloud-kitchen",  // Kept original route
    },
    {
      id: 2,
      name: "FoodBite",
      description: "Multi-Restaurant Food Delivery Platform",
      image: product2,
      route: "/products/coming-soon",  // Kept original route
    },
  ];

  const handleProductClick = (route) => {
    navigate(route);
    console.log(`Navigating to product: ${route}`);
  };

  return (
    <section id="explore-food" className="relative w-full overflow-hidden bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-orange-600" />
            <span className="text-sm font-semibold text-orange-700 tracking-wide">
              Our Products
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Choose the Perfect{" "}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 text-transparent bg-clip-text">
              Food Delivery Solution
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Powerful, scalable food delivery solutions designed to streamline your restaurant operations
          </p>
        </div>

        {/* Products Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="text-center">

              {/* Clickable Image */}
              <div
                onClick={() => handleProductClick(product.route)}
                className="cursor-pointer group"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleProductClick(product.route);
                  }
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg border-[6px] border-transparent hover:border-orange-500 shadow-md transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"
                />
              </div>

              {/* Title Below */}
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

export default ProductSection;