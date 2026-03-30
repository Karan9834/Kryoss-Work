import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import product1 from "../../assets/Food-delivery/product11.jpg"
import product2 from "../../assets/Food-delivery/product22.jpg"
const ProductSection = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("cloud-kitchen");

  const categories = [
    { id: "cloud-kitchen", name: "Cloud Kitchen 🍽️" },
  ];

  const products = [
    {
      id: 1,
      category: "cloud-kitchen",
      name: "Kryoss Cloud Kitchen",
      description:
        "Premium cloud kitchen delivering chef-crafted meals made with fresh ingredients and authentic flavors.",
      image:
        product1,
      isNew: true,
      route: "/products/cloud-kitchen",
    },
    {
      id: 2,
      category: "cloud-kitchen",
      name: "More Kitchens Coming Soon",
      description:
        "We are expanding with new cuisines and exciting food experiences. Stay tuned!",
      image:
        product2,
      isNew: false,
      route: "/products/coming-soon",
    },
  ];

  const filteredProducts = products.filter(
    (item) => item.category === activeCategory
  );

  const handleViewDetails = (route) => {
    navigate(route);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm text-orange-500 font-semibold tracking-wide">
            OUR PRODUCTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2">
            Explore Our Cloud Kitchen
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Crafted with passion. Delivered with perfection.
          </p>
        </div>

        {/* Category */}
        <div className="flex justify-center mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === cat.id
                ? "bg-orange-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* TOP GLOW */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-100/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* IMAGE */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-fit "
                />

                {/* Badge */}
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow">
                    New
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
              </div>

              {/* CONTENT */}
              <div className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6 text-sm text-gray-500">
                  <p>✔ Freshly prepared meals</p>
                  <p>✔ Premium ingredients</p>
                  <p>✔ Fast delivery</p>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleViewDetails(product.route)}
                  className="relative px-8 py-3 bg-orange-500 text-white rounded-full font-semibold shadow-md overflow-hidden group/btn"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View Details
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>

                  {/* Hover layer */}
                  <div className="absolute inset-0 bg-orange-600 opacity-0 group-hover/btn:opacity-100 transition"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;