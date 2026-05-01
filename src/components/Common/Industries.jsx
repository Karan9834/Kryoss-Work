import React from "react";
import {
  HeartPulse,
  Plane,
  Landmark,
  Truck,
  Film,
  GraduationCap,
} from "lucide-react";

const industries = [
  { icon: HeartPulse, title: "Healthcare" },
  { icon: Plane, title: "Travel & Tourism" },
  { icon: Landmark, title: "Banking & Finance" },
  { icon: Truck, title: "Logistics & Transport" },
  { icon: Film, title: "Media & Entertainment" },
  { icon: GraduationCap, title: "Education & E-Learning" },
];

const Industries = ({
  theme = {
    bg: "bg-[#f8eaea]",
    primary: "text-red-500",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
}) => {
  return (
    <section className={`w-full py-20 px-6 md:px-16 ${theme.bg}`}>
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          <span className={theme.primary}>Industries</span> We Serve
        </h2>

        {/* Underline */}
        <div className={`w-16 h-[2px] mx-auto mt-3 ${theme.primary.replace("text", "bg")}`} />

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          As one of the top mobile apps development companies, we provide custom mobile app
          development solutions for various industries catering startups, software product
          development companies, digital agencies, and enterprises.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10 mt-12">
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center space-y-3 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-xl transition duration-300 ${theme.iconBg} group-hover:scale-110`}
                >
                  <Icon className={`${theme.iconColor}`} size={28} />
                </div>

                {/* Title */}
                <p className="text-sm font-medium text-gray-800 group-hover:text-black">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Industries;