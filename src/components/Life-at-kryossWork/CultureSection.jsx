import React, { useState, useEffect } from "react";

// Import images directly
import image1 from "../../assets/Life/companylife-at-kryossone/image1.png";
import image2 from "../../assets/Life/companylife-at-kryossone/image2.png";
import image3 from "../../assets/Life/companylife-at-kryossone/image3.png";

const CultureSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: image1,
      alt: "Team Collaboration"
    },
    {
      src: image2,
      alt: "Office Celebration"
    },
    {
      src: image3,
      alt: "Work Environment"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section
      className="py-14 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      style={{
        backgroundImage: "url(https://whitelabelfox.com/assets/images/life-at-kryossone/life-at-white-label-fox-main-slider-bg.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 border border-gray-300 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm">
            <span className="w-2.5 h-2.5 bg-orange-400 rounded-full animate-pulse"></span>
            Joyful Work Culture
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Our <span className="text-orange-500">Culture</span>
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
          We believe in encouraging our employee to excel in whatever they do in
          the best possible manner with joy. Our culture will give you the space
          to fulfil your dreams and empower excellence.
        </p>

      </div>

      {/* Full Width Image Slider Section */}
      <div className="relative w-full">

        {/* Main Image Container - Reduced Height */}
        <div className="relative w-full">
          <img
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            className="w-full h-[300px] md:h-[350px] lg:h-[380px] object-contain transition-all duration-700 ease-in-out"
          />

          {/* Gradient Overlay - Lighter for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium z-10">
            {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>

          {/* Image Title Overlay */}
          <div className="absolute bottom-8 left-0 right-0 text-center z-10">
            <h3 className="text-lg md:text-xl font-semibold text-white drop-shadow-lg bg-black/40 inline-block px-4 py-1 rounded-full">
              {images[activeIndex].alt}
            </h3>
          </div>
        </div>

        {/* Thumbnail Navigation - Positioned below */}
        <div className="flex justify-center gap-2 md:gap-3 mt-6">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-14 h-14 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-300 ${activeIndex === index
                  ? "ring-2 ring-orange-500 scale-110 shadow-xl"
                  : "opacity-70 hover:opacity-100"
                }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="mt-8 text-center">
        <div className="inline-flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-orange-500" : "w-1.5 bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Auto-slide Indicator */}
      <div className="text-center mt-3">
        <p className="text-xs text-gray-400">
          Auto-sliding every 5 seconds
        </p>
      </div>
    </section>
  );
};

export default CultureSection;