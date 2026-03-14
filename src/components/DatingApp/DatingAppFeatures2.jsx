import React from "react";
import {
  UserPlus,
  HeartHandshake,
  MessageCircle,
  SlidersHorizontal,
  MapPin,
  Star,
} from "lucide-react";

const features = [
  {
    icon: <UserPlus size={22} />,
    title: "Quick Social Signup",
    desc: "Allow users to join your platform instantly using social media login and start discovering matches.",
    iconColor: "text-pink-500",
  },
  {
    icon: <HeartHandshake size={22} />,
    title: "Smart Match Engine",
    desc: "Advanced algorithms analyze interests and preferences to deliver highly relevant match suggestions.",
    iconColor: "text-purple-500",
  },
  {
    icon: <MessageCircle size={22} />,
    title: "Real-Time Chat",
    desc: "Enable seamless communication between users with built-in messaging and notification systems.",
    iconColor: "text-indigo-500",
  },
  {
    icon: <SlidersHorizontal size={22} />,
    title: "Advanced Filters",
    desc: "Users can refine their search using filters such as interests, distance, and lifestyle preferences.",
    iconColor: "text-orange-500",
  },
  {
    icon: <MapPin size={22} />,
    title: "Location Matching",
    desc: "Connect users based on proximity using intelligent location-based matchmaking technology.",
    iconColor: "text-green-500",
  },
  {
    icon: <Star size={22} />,
    title: "Likes & Superlikes",
    desc: "Boost engagement with swipe interactions and special reactions that highlight strong interest.",
    iconColor: "text-yellow-500",
  },
];

const DatingAppFeatures2 = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0f0225] to-[#1c063a] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* LABEL */}
        <span className="inline-block border border-white/20 px-4 py-1 rounded-full text-sm mb-4">
          Platform Features
        </span>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Modern Features to Build a
          <span className="text-pink-400"> Powerful Dating App</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-16">
          Our dating platform comes with advanced features designed to create
          meaningful connections while delivering a seamless and engaging
          experience for users.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-500 hover:border-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600"
            >
              <div className="flex items-start gap-4">

                {/* ICON */}
                <div
                  className={`p-3 rounded-full bg-white/10 ${feature.iconColor} transition group-hover:bg-white group-hover:text-purple-600`}
                >
                  {feature.icon}
                </div>

                {/* TEXT */}
                <div className="text-left">
                  <h4 className="text-lg font-semibold mb-2 transition group-hover:text-white">
                    {feature.title}
                  </h4>

                  <p className="text-gray-300 text-sm transition group-hover:text-white/90">
                    {feature.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default DatingAppFeatures2;