import React from "react";
import { Link } from "react-router-dom";
import card1Img from "../../../assets/human-resources/prod1.png";
import card2Img from "../../../assets/human-resources/prod2.jpg";

const ProductsSection = () => {
  const cards = [
    {
      title: "HRM",
      image: card1Img,
      path: "/products/home-service/HRM",
      desc: "Complete management platform with video integration.",
    },
    {
      title: "BdTask",
      image: card2Img,
      path: "/products/bdtask",
      desc: "Comprehensive online management solution.",
    },
  ];

  return (
    <section
      id="education-products"
      className="relative py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* 🔥 Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-300/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-300/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 space-y-4">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-purple-300"></div>
            <span className="text-purple-600 text-[12px] font-medium tracking-[0.05em] uppercase">
              Our Products
            </span>
            <div className="w-8 h-px bg-purple-300"></div>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-[#1A1C2C]">
            Our Premium{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Education Solutions
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-500 text-[14px] md:text-[16px] font-normal leading-[1.6] max-w-2xl mx-auto">
            Pick the ideal platform to transform your traditional teaching into a
            modern, interactive digital learning experience.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="text-center">

              {/* IMAGE */}
              <Link to={card.path} className="group block">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-72 object-cover rounded-xl border-[5px] border-transparent 
                  hover:border-purple-500 transition duration-300 
                  shadow-md group-hover:shadow-xl group-hover:scale-[1.03]"
                />
              </Link>

              {/* TEXT - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <Link
                  to={card.path}
                  className="text-purple-600 font-semibold hover:underline"
                >
                  {card.title}
                </Link>{" "}
                <span className="text-gray-700">- {card.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* FOOTER NOTE - Updated typography */}
        <div className="text-center mt-16">
          <p className="text-[12px] font-medium uppercase tracking-[0.05em] text-gray-400">
            ✦ More educational products coming soon ✦
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;