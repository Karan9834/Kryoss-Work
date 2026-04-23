import React from "react";
import award1 from "../../assets/award/Screenshot 2026-04-23 130006.png";
import award2 from "../../assets/award/Screenshot 2026-04-23 130020.png";
import award3 from "../../assets/award/Screenshot 2026-04-23 130033.png";
import award4 from "../../assets/award/Screenshot 2026-04-23 130059.png";

const AwardRecognition = () => {
  const platforms = [
    {
      name: "Trustpilot",
      image: award1,
      link: "https://www.trustpilot.com/",
    },
    {
      name: "Google Reviews",
      image: award2,
      link: "https://www.google.com/",
    },
    {
      name: "Clutch",
      image: award3,
      link: "https://clutch.co/",
    },
    {
      name: "GoodFirms",
      image: award4,
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
            <span className="w-2 h-2 bg-gradient-to-r from-[#d46c0a] to-[#e45a09] rounded-full"></span>
            Awards & Recognition
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Recognized by <span className="bg-gradient-to-r from-[#c07025] to-[#e45a09] text-transparent bg-clip-text">Global Review Platforms & Industry Leaders</span>
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            We are proud to be recognized by top industry platforms such as Trustpilot, Google, Clutch, and GoodFirms. With excellent ratings and reviews, our commitment to delivering high-quality, clone app development solutions is trusted by businesses and users worldwide.
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
                         transition duration-300 overflow-hidden"
            >
              <img
                src={platform.image}
                alt={platform.name}
                className="w-full h-auto object-contain scale-[2.2]"
              />
            </a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AwardRecognition;