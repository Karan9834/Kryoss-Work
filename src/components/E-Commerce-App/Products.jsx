import React from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import prod1 from "../../assets/E-Commerce-Product/prod1.jpg";
import prod2 from "../../assets/E-Commerce-Product/prod2.jpg";
const Products = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "SnapCart",
      desc: "Launch your own food delivery platform with real-time tracking and seamless ordering.",
      img: prod1,
      route: "/products/snapcart",
    },
    {
      title: "OmniCart",
      desc: "Empower restaurants with digital menus, order management, and customer engagement tools.",
      img: prod2,
      route: "/products/omnicart",
    },
  ];

  return (
    <section id="products-section" className="relative w-full overflow-hidden bg-white py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf608_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              Our Products
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Choose the perfect solution to launch and scale your business
          </p>
        </div>

        {/* FOOD STYLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="text-center">

              {/* Clickable Image */}
              <div
                onClick={() => navigate(item.route)}
                className="cursor-pointer group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full rounded-lg border-[6px] hover:border-purple-500  border-transparent shadow-md transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"
                />
              </div>

              {/* Text Below */}
              <p className="mt-4 text-sm md:text-base">
                <span className="text-purple-600 font-semibold">
                  {item.title}
                </span>{" "}
                <span className="text-gray-700">
                  - {item.desc}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom */}
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