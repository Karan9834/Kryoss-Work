import React from "react";

const AwardRecognition = () => {
  const platforms = [
    {
      name: "Trustpilot",
      image: "https://whitelabelfox.com/assets/images/gojek-clone-app/Trustpilot-new.webp",
      link: "https://www.trustpilot.com/",
    },
    {
      name: "Google Reviews",
      image: "https://whitelabelfox.com/assets/images/gojek-clone-app/Google.webp",
      link: "https://www.google.com/",
    },
    {
      name: "Clutch",
      image: "https://whitelabelfox.com/assets/images/gojek-clone-app/Clutch.webp",
      link: "https://clutch.co/",
    },
    {
      name: "GoodFirms",
      image: "https://whitelabelfox.com/assets/images/gojek-clone-app/Goodfirms.webp",
      link: "https://www.goodfirms.co/",
    },
  ];

  return (
    <section
      className="py-20 text-white"
      style={{
        background:
          "linear-gradient(94.46deg, #33091C 0%, #1D0509 99.92%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-8xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-gray-200 
                          text-white px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-gradient-to-r from-[#FF2485] to-[#C739FF] rounded-full"></span>
            Industry Commendations
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Validated by <span className="bg-gradient-to-r from-[#FF2485] to-[#C739FF] text-transparent bg-clip-text">Premier Global Analytics & Market Authorities</span>
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Our architectural excellence is acknowledged by elite sector 
            platforms including Clutch, Trustpilot, and GoodFirms. Maintaining 
            superior evaluation metrics, our dedication to constructing 
            high-integrity, versatile framework solutions is prioritized by 
            global enterprises and startup founders.
          </p>

        </div>

        {/* ===== PLATFORM LOGOS ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">

          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white backdrop-blur-md 
                         rounded-2xl p-14 flex items-center justify-center
                         hover:bg-white/20 
                         hover:scale-105 
                         transition duration-300"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="h-10 md:h-12 object-contain"
              />
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AwardRecognition;