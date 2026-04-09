import React from "react";
import { Rocket, Smile, MapPin, Shield } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-7 h-7 text-purple-600" />,
    title: "50,000+ Start-ups",
    desc: "We have helped 50,000+ start-ups all around the world and help them to reach new heights in minimal time.",
  },
  {
    icon: <Smile className="w-7 h-7 text-purple-600" />,
    title: "8+ Years of Experience",
    desc: "We are experts in our field, our team has over 8 years of experience.",
  },
  {
    icon: <MapPin className="w-7 h-7 text-purple-600" />,
    title: "250+ Locations",
    desc: "We are located in 250+ different locations in India.",
  },
  {
    icon: <Shield className="w-7 h-7 text-purple-600" />,
    title: "Privacy & Security",
    desc: "We ensure your payment, company & personal details are protected at the highest level.",
  },
];

const FeatureSection = ({
  title = "Our Product",
  highlight = "Impact",
  description = "Scaling businesses with top-tier application solutions.",
  featuresData
}) => {
  const displayFeatures = featuresData || features;
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Heading - Mobile: 30px, Desktop: 36px, Weight: 700 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[1.875rem] md:text-[2.25rem] font-bold text-gray-900 mb-3">
            {title} <span className="text-purple-600">{highlight}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-normal">
            {description}
          </p>
        </div>
        
        {/* GRID - Fixed shape cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {displayFeatures.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-100 rounded-2xl p-6 shadow-md hover:shadow-purple-200/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[280px] flex flex-col"
            >
              
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* ICON BOX */}
              <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-xl bg-white shadow-md mb-5 group-hover:scale-110 group-hover:shadow-purple-200 transition-all duration-300">
                {item.icon}
              </div>

              {/* Project Title - Mobile: 24px, Desktop: 30px, Weight: 700 */}
              <h3 className="relative z-10 text-2xl md:text-[1.875rem] font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description - Mobile: 14px, Desktop: 16px, Weight: 400 */}
              <p className="relative z-10 text-sm md:text-base font-normal text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-grow">
                {item.desc}
              </p>

              {/* Bottom border animation on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
              
              {/* Shine effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeatureSection;