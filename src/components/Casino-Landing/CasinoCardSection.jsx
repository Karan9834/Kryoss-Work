import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import Card1Img from "../../assets/Games-Product/stake.jpeg";
import Card2Img from "../../assets/Games-Product/kasino.jpeg"; // replace if needed

const CasinoCardSection = () => {
  const cards = [
    {
      title: "Stake! Online Casino",
      image: Card1Img,
      path: "/products/casino/stake1",
      description:
        "Real cash multiplayer game with remote gameplay, custom boot values, and seamless experience.",
    },
    {
      title: "Kasino - Online Casino Platform",
      image: Card2Img,
      path: "/products/casino/kasino",
      description:
        "Powerful backend with wallet integration, analytics, secure payments, and scalable infrastructure.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-orange-600" />
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-orange-700">
              Casino Products
            </span>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
            Casino Gaming{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
              Made Powerful
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="mt-6 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
            Build and scale your casino platform with advanced gaming solutions.
          </p>
        </div>

        {/* Grid (Same as OTT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="text-center">
              <Link to={card.path} className="cursor-pointer group block">
                <div className="w-full aspect-video overflow-hidden rounded-lg border-[6px] border-transparent hover:border-orange-500 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] transition-all duration-300 bg-gray-50">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              {/* Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
              <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                <Link to={card.path} className="text-orange-600 font-semibold hover:underline">
                  {card.title}
                </Link>{" "}
                <span className="text-gray-700">- {card.description}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom - Updated typography */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-[12px] md:text-[13px] font-normal">
            Click on any product to explore more
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasinoCardSection;