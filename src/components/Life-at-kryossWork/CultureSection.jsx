import React from "react";

const CultureSection = () => {
  return (
    <section className="py-14 "
    
    style={{
        backgroundImage: "url(https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-main-slider-bg.webp)",
        backgroundRepeat: "no-repeat"
    }}
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-300 px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full"></span>
            Joyful Work Culture
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-orange-500">Culture</span> 
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          We believe in encouraging our employee to excel in whatever they do in
          the best possible manner with joy. Our culture will give you the space
          to fulfil your dreams and empower excellence.
        </p>

      </div>

      {/* Full Width Image */}
      <div className="w-full">
        <img
          src="https://whitelabelfox.com/assets/images/life-at-whitelabelfox/life-at-white-label-fox-main-slider-graphic.webp"
          alt="Work Culture"
          className="w-full h-[500px] object-cover"
        />
      </div>

    </section>
  );
};

export default CultureSection;