import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import card1Img from '../../assets/grocerylanding-img/grocerylandingcard1.jpg';
import card2Img from '../../assets/grocerylanding-img/grocerylandingcard2.jpg';

const GroceryCardSection = () => {
  const cards = [
    {
      title: "DTBasket Grocery App",
      description: "Complete Customer + Driver + Store Grocery Delivery Solution",
      image: card1Img,
      path: "/products/delivery/grocery-delivery",
    },
    {
      title: "Ready Grocery",
      description: "Powerful Admin & Multi-Vendor Grocery Management System",
      image: card2Img,
      path: "/products/grocery-delivery",
    }
  ];

  return (
    <section id="grocery-products" className="relative w-full overflow-hidden bg-white py-24">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-5 py-2 mb-6">
            <Sparkles size={17} className="text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700 tracking-wide uppercase">
              Grocery Solutions
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
              Grocery Solutions
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Pick the ideal platform to transform your grocery business into a modern, efficient digital experience.
          </p>
        </div>

        {/* Products Grid - Simple IMS Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <Link
              to={card.path}
              key={index}
              className="group text-center"
            >
              {/* Clickable Image Card */}
              <div className="cursor-pointer overflow-hidden rounded-2xl border-4 border-emerald-500 shadow-md transition-all duration-300 group-hover:scale-[1.04] group-hover:shadow-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Title & Description Below Image */}
              <div className="mt-6 px-4">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-3 text-gray-600 text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom Hint */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-medium">
            Click on any product image to explore more details
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroceryCardSection;