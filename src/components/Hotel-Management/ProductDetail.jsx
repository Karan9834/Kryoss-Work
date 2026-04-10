import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import product1 from "../../assets/Hotel-Management_product/prod1.jpg";
import product2 from "../../assets/Hotel-Management_product/prod2.jpg";

const ProductsSection = () => {
  const navigate = useNavigate();

  const category = {
    id: 1,
    name: "Hotel Management Solutions",
  };

  const products = [
    {
      id: 1,
      name: "Tourex-Travel",
      route: "/product/booking-engine",
      description:
        "Complete all-in-one solution for hotels of all sizes. Includes booking engine, PMS, and guest tools.",
      image: product1,
    },
    {
      id: 2,
      name: "Xian-Solutions",
      route: "/product/booking-engine",
      description:
        "Cloud-based platform with analytics, automated check-in, and intelligent room management.",
      image: product2,
    },
  ];

  // ✅ SAME LOGIC (unchanged)
  const handleViewDetails = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section id="explore-hotel-products" className="relative w-full overflow-hidden bg-white py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#14b8a608_1px,transparent_1px),linear-gradient(to_bottom,#14b8a608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Header - Updated Typography */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-teal-600" />
            <span className="text-[14px] font-semibold text-teal-700 tracking-wide uppercase">
              Our Products
            </span>
          </div>

          {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Hotel Solutions{" "}
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 text-transparent bg-clip-text">
              Made Simple
            </span>
          </h2>

          {/* Description - 16px, weight 400, line-height 1.6 */}
          <p className="mt-6 text-[16px] font-normal leading-[1.6] text-gray-600">
            Innovative solutions designed for modern hospitality
          </p>
        </div>

        {/* Category Button */}
        <div className="flex justify-center mb-12">
          <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-xl shadow-md text-sm md:text-base tracking-wide uppercase">
            {category.name}
          </button>
        </div>

        {/* FOOD STYLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="text-center">

              {/* Clickable Image */}
              <div
                onClick={() => handleViewDetails(product.id)}
                className="cursor-pointer group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg border-[6px] border-transparent hover:border-teal-500 shadow-md transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"
                />
              </div>

              {/* Text - Updated Typography */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <span 
                  onClick={() => handleViewDetails(product.id)}
                  className="text-teal-600 font-semibold cursor-pointer hover:underline"
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

        {/* Bottom - Updated Typography */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-[14px] font-normal leading-[1.6]">
            Click on any product to explore more
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;