import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

// Import your gallery images
import gallery1 from "../../../../assets/Product-update/taxiss1.png";
import gallery2 from "../../../../assets/Product-update/taxiss2.png";
import gallery3 from "../../../../assets/Product-update/taxiss3.png";
import gallery4 from "../../../../assets/Product-update/taxiss4.png";
import gallery5 from "../../../../assets/Product-update/taxiss5.png";
import gallery6 from "../../../../assets/Product-update/taxiss6.png";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { id: 1, src: gallery1, alt: "VYOM DRIVE App Interface" },
    { id: 2, src: gallery2, alt: "Fleet of Cars" },
    { id: 3, src: gallery3, alt: "Happy Passengers" },
    { id: 4, src: gallery4, alt: "Driver Partner" },
    { id: 5, src: gallery5, alt: "City Drive" },
    { id: 6, src: gallery6, alt: "Night Ride" }
  ];

  // Duplicate images for infinite loop effect
  const slides = [...images, ...images, ...images];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Orange Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-600 rounded-full blur-[120px] opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-500/10 rounded-full text-sm font-medium text-orange-400 border border-orange-500/20 mb-4">
              <ImageIcon className="w-4 h-4 inline mr-1" />
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Captured{' '}
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Moments
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Glimpses of our journey, happy customers, and the VYOM DRIVE experience
            </p>
          </motion.div>

          {/* Gallery Slider */}
          <div className="relative px-4">
            {/* Main Slider Container */}
            <div className="relative overflow-hidden rounded-2xl">
              <motion.div
                className="flex gap-4"
                animate={{ x: `-${currentIndex * (100 / 3)}%` }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                {slides.map((image, index) => (
                  <div
                    key={`${image.id}-${index}`}
                    className="relative min-w-[calc(33.333%-8px)] aspect-[4/3] rounded-xl overflow-hidden group bg-gray-800"
                  >
                    {/* Image Container with proper object-fit */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Image Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-gray-900 to-transparent">
                      <p className="text-white text-sm font-medium text-center">{image.alt}</p>
                    </div>

                    {/* Orange Border on Hover */}
                    <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-xl transition-all duration-300 pointer-events-none" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors border border-orange-500/30 shadow-lg z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition-colors border border-orange-500/30 shadow-lg z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-orange-500"
                    : "w-4 bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isAutoPlaying ? 1 : 0 }}
            className="text-center mt-4"
          >
            <span className="text-xs text-gray-500 inline-flex items-center gap-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Auto-sliding every 2 seconds
            </span>
          </motion.div>

          {/* Image Counter */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;