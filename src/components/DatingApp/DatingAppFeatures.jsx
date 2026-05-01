import React from "react";
import {
  Bell,
  Search,
  Image,
  Users,
  Filter,
  Heart,
  Zap,
  Compass,
} from "lucide-react";

const features = [
  {
    icon: <Bell size={22} />,
    title: "Smart Notifications",
    desc: "Users instantly receive alerts when they get new matches, likes, or messages on the platform.",
    hover: "hover:bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    icon: <Search size={22} />,
    title: "Discover Matches",
    desc: "Search and explore profiles around you with intelligent discovery and location filters.",
    hover: "hover:bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: <Image size={22} />,
    title: "Profile Media Upload",
    desc: "Users can upload photos and create engaging dating profiles that attract more matches.",
    hover: "hover:bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    icon: <Users size={22} />,
    title: "Age & Interest Match",
    desc: "Advanced algorithms match people based on interests, location, and preferences.",
    hover: "hover:bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: <Filter size={22} />,
    title: "Advanced Filters",
    desc: "Apply smart filters like age range, distance, interests, and lifestyle preferences.",
    hover: "hover:bg-green-50",
    iconColor: "text-green-500",
  },
  {
    icon: <Heart size={22} />,
    title: "Instant Connections",
    desc: "When two people like each other, they can instantly start chatting and building connections.",
    hover: "hover:bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: <Zap size={22} />,
    title: "Unlimited Swipes",
    desc: "Premium users can explore unlimited profiles and discover more potential matches.",
    hover: "hover:bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    icon: <Compass size={22} />,
    title: "Profile Discovery",
    desc: "Explore curated profiles recommended by the platform's intelligent matching system.",
    hover: "hover:bg-indigo-50",
    iconColor: "text-indigo-500",
  },
];

const DatingAppFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#fff7fa] to-[#f9f9ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* LABEL */}
        <span className="inline-block px-4 py-1 text-sm border rounded-full mb-4 bg-white">
          Features & Components
        </span>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Powerful <span className="text-pink-500">Dating App Features</span>
          for a Modern Experience
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-16">
          Our platform includes a wide range of advanced features designed
          to create meaningful connections while delivering a seamless
          user experience.
        </p>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-8 rounded-2xl shadow-md bg-white transition duration-300 min-h-[150px] ${feature.hover}`}
            >

              {/* ICON */}
              <div className={`p-3 rounded-full bg-gray-100 ${feature.iconColor}`}>
                {feature.icon}
              </div>

              {/* TEXT */}
              <div className="text-left">
                <h4 className="font-semibold text-lg mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default DatingAppFeatures;