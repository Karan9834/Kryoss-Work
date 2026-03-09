import React from "react";

const awards = [
  "https://whitelabelfox.com/assets/images/about-us/about-us-page-our-awards-image-1.webp",
  "https://whitelabelfox.com/assets/images/about-us/about-us-page-our-awards-image-2.webp",
  "https://whitelabelfox.com/assets/images/about-us/about-us-page-our-awards-image-3.webp",
  "https://whitelabelfox.com/assets/images/about-us/about-us-page-our-awards-image-4.webp",
];

const AwardsRecognition = () => {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

      
       

            <div className="inline-flex items-center gap-2 border border-[#c9550d] 
                          text-black  px-4 py-1.5 rounded-full text-sm mb-6">
            <span className="w-2 h-2 bg-[#ef990e] rounded-full"></span>
             Awards & Recognition
          </div>

        {/* Subheading */}
        <h3 className="text-5xl font-semibold text-gray-800 mb-4">
          Trusted by <span className="text-orange-500"> Global Review Platforms & Industry Leaders</span>
        </h3>

        {/* Paragraph */}
        <p className="text-gray-600 max-w-7xl mx-auto mb-14">
          We are proud to be recognized by top industry platforms such as
          Trustpilot, Google, Clutch, and GoodFirms. With excellent ratings
          and reviews, our commitment to delivering high-quality, clone app
          development solutions is trusted by businesses and users worldwide.
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center justify-center">

          {awards.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <img
                src={logo}
                alt="award"
                className="h-100 object-contain hover:scale-105 transition"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AwardsRecognition;