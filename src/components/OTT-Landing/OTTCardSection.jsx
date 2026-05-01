import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import card1Img from "@/assets/ottlanding-img/ottlandingcard1.jpg";
import card2Img from "@/assets/ottlanding-img/ottlandingcard2.jpg";

const OTTCardSection = () => {
  const cards = [
    {
      title: "StreamIt Video App",
      image: card1Img,
      path: "/products/social/video-app",
      description:
        "White-label apps with Smart TV support, offline viewing, and personalized user experience.",
    },
    {
      title: "StreamIt Streaming Backend",
      image: card2Img,
      path: "/products/our/streaming-solution",
      description:
        "Powerful CMS, auto transcoding, analytics, DRM protection, and scalable backend system.",
    },
  ];

  return (
    <section id="explore-ott" className="relative w-full overflow-hidden bg-white py-24">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef444408_1px,transparent_1px),linear-gradient(to_bottom,#ef444408_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-6">
            <Sparkles size={16} className="text-red-600" />
            <span className="text-sm font-semibold text-red-700 tracking-wide">
              Our Products
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Streaming Solutions{" "}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 text-transparent bg-clip-text">
              Made Simple
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Build and scale your OTT platform with powerful streaming solutions.
          </p>
        </div>

        {/* SAME GRID STYLE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div key={index} className="text-center">

              {/* Clickable Image */}
              <Link to={card.path} className="cursor-pointer group">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full rounded-lg border-[6px] border-transparent hover:border-red-500 shadow-md transition duration-300 group-hover:scale-[1.03] group-hover:shadow-xl"
                />
              </Link>

              {/* Text Below */}
              <p className="mt-4 text-sm md:text-base">
                <Link
                  to={card.path}
                  className="text-red-600 font-semibold hover:underline"
                >
                  {card.title}
                </Link>{" "}
                <span className="text-gray-700">
                  - {card.description}
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

export default OTTCardSection;