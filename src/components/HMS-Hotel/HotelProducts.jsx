import React from "react";
import { Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom"; // For React Router
// OR for Next.js: import { useRouter } from "next/router";
import prod1 from "../../assets/HMS-Hotel/prod1.jpg";
import prod2 from "../../assets/HMS-Hotel/prod2.png";

const HotelProducts = () => {
  // For React Router
  const navigate = useNavigate();
  
  // OR for Next.js:
  // const router = useRouter();

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

  // Proper navigation function
  const handleProductClick = (route) => {
    console.log("Navigating to:", route);
    
    // For React Router:
    navigate(route);
    
    // OR for Next.js:
    // router.push(route);
  };

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden">

      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">
              Our Products
            </span>
          </div>

          <h2 className="text-4xl font-bold text-gray-900">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-orange-600 to-teal-600 text-transparent bg-clip-text">
              Hotel Solutions
            </span>
          </h2>

          <p className="mt-4 text-gray-600">
            Powerful tools designed for modern hospitality businesses
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {products.map((product) => (
            <div key={product.id} className="text-center">

              {/* CLICKABLE IMAGE */}
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
                  className="w-full rounded-xl border-[5px] border-transparent group-hover:border-orange-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </div>

              {/* TITLE */}
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