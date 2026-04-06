import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

import img1 from "../../assets/Games-Product/betpro.jpg";
import img2 from "../../assets/Games-Product/betlab.png";

const FantasyCasinoCardSection = () => {
  const cards = [
    {
      title: "BetPro Fantasy Sports",
      image: img1,
      path: "/products/fantasy/betpro",
      description:
        "Fantasy gaming platform for cricket, football, and more with real-time performance tracking.",
    },
    {
      title: "BetLab Fantasy Sports",
      image: img2,
      path: "/products/fantasy/betlab",
      description:
        "Advanced fantasy sports app with contests, leaderboards, and real-time match updates.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-20">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#22c55e08_1px,transparent_1px),linear-gradient(to_bottom,#22c55e08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-2 mb-5">
            <Sparkles size={14} className="text-green-600" />
            <span className="text-sm font-semibold text-green-700 tracking-wide">
              Fantasy Products
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Fantasy Sports{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-transparent bg-clip-text">
              Made Powerful
            </span>
          </h2>

          <p className="mt-3 text-sm text-gray-600">
            Build and scale your fantasy sports platform with powerful solutions.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="text-center">

              {/* Image */}
              <Link to={card.path} className="cursor-pointer group block">
                <div className="w-full h-[220px] overflow-hidden rounded-lg border-[4px] border-transparent hover:border-green-500 shadow-md transition duration-300">
                  
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                </div>
              </Link>

              {/* Text */}
              <p className="mt-3 text-sm leading-relaxed">
                <span className="text-green-600 font-semibold">
                  {card.title}
                </span>{" "}
                <span className="text-gray-600">
                  - {card.description}
                </span>
              </p>

            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-xs">
            Click on any product to explore more
          </p>
        </div>

      </div>
    </section>
  );
};

export default FantasyCasinoCardSection;