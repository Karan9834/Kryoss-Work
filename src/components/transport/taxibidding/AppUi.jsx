import React, { useState } from "react";

// Passenger images
import p1 from "../../../assets/phone2.webp";
import p2 from "../../../assets/phone3.webp";
import p3 from "../../../assets/phone4.webp";
import p4 from "../../../assets/phone6.webp";
import p5 from "../../../assets/phone5.webp";
import p6 from "../../../assets/phone7.webp";

// Driver images
import d1 from "../../../assets/phone3.webp";
import d2 from "../../../assets/phone3.webp";
import d3 from "../../../assets/phone4.webp";
import d4 from "../../../assets/phone5.webp";
import d5 from "../../../assets/phone6.webp";
import d6 from "../../../assets/phone7.webp";

const passengerImages = [p1, p2, p3, p4, p5, p6];
const driverImages = [d1, d2, d3, d4, d5, d6];

const AppUISnapsSection = () => {
  const [mode, setMode] = useState("passenger");

  const images = mode === "passenger" ? passengerImages : driverImages;

  return (
    <section
      className="w-full py-20 md:py-24 bg-cover bg-center flex justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://whitelabelfox.com/assets/images/indriver-clone-app/fox-drive-app-ui-bg.webp')",
      }}
    >
      <div className="w-full max-w-7xl px-4 md:px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Interface Showcase: Our{" "}
          <span className="text-[#7CFC00]">
            inDrive Replica
          </span>
        </h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setMode("passenger")}
            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
              mode === "passenger"
                ? "bg-[#6dbb1a] text-black shadow-lg shadow-[#6dbb1a]/20"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Rider Mode
          </button>
          <button
            onClick={() => setMode("driver")}
            className={`px-8 py-2.5 rounded-full text-sm font-medium transition-all ${
              mode === "driver"
                ? "bg-[#6dbb1a] text-black shadow-lg shadow-[#6dbb1a]/20"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            Partner Mode
          </button>
        </div>

        {/* Infinite Loop Slider */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-[scroll_30s_linear_infinite]">
            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[170px] md:w-[210px]"
              >
                <img
                  src={img}
                  alt="App UI"
                  className="w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AppUISnapsSection;