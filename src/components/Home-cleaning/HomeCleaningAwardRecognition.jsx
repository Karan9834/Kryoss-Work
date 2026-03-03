import React from "react";

const HomeCleaningAwardRecognition = () => {
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
          "linear-gradient(148.28deg, #00141A 19.1%, #004D65 80.9%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ===== BADGE + HEADING ===== */}
        <div className="text-center max-w-8xl mx-auto mb-16">

          <div className="inline-flex items-center gap-2 border border-[#55D7FF] 
                          text-white px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#55D7FF] rounded-full"></span>
            Awards & Recognition
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold">
            Recognized by <span className="text-[#55D7FF]">Global Review Platforms & Industry Leaders</span>
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

export default HomeCleaningAwardRecognition;