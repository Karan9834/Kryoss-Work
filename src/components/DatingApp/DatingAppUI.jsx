import React from "react";
import Screen1 from "../../assets/DatingApp/ui1.webp";
import Screen2 from "../../assets/DatingApp/ui2.webp";
import Screen3 from "../../assets/DatingApp/ui3.webp";
import Screen4 from "../../assets/DatingApp/ui4.webp";
import Screen5 from "../../assets/DatingApp/ui5.webp";

const screens = [Screen1, Screen2, Screen3, Screen4, Screen5];

const DatingAppUI = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#1b0b36] via-[#2a0f4f] to-[#0c061f] text-white py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* LABEL */}
        <span className="inline-block border border-pink-400 text-pink-400 text-sm px-4 py-1 rounded-full mb-4">
          App Interface Preview
        </span>

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Modern and Engaging <span className="text-pink-400">User Experience</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Explore beautifully designed screens that deliver smooth navigation
          and seamless user interaction across the platform.
        </p>
      </div>

      {/* INFINITE SLIDER */}
      <div className="overflow-hidden w-full">

        <div className="flex animate-scroll gap-10 w-max">

          {[...screens, ...screens].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="app screen"
              className="w-[180px] md:w-[220px] rounded-2xl shadow-2xl"
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default DatingAppUI;