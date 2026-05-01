import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Image as ImageIcon, Star } from 'lucide-react';

// Import your gallery images
import gallery1 from "../../../../assets/Product-update/foodss1.png";
import gallery2 from "../../../../assets/Product-update/foodss2.png";
import gallery3 from "../../../../assets/Product-update/foodss3.png";
import gallery4 from "../../../../assets/Product-update/foodss4.png";
import gallery5 from "../../../../assets/Product-update/foodss5.png";
import gallery6 from "../../../../assets/Product-update/food.jpg";

const FoodGallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = [
    { id: 1, src: gallery1, alt: "Delicious Pizza", rating: "4.9", category: "Italian" },
    { id: 2, src: gallery2, alt: "Fresh Burgers", rating: "4.8", category: "Fast Food" },
    { id: 3, src: gallery3, alt: "Sushi Platter", rating: "4.9", category: "Japanese" },
    { id: 4, src: gallery4, alt: "Indian Curry", rating: "4.7", category: "Indian" },
    { id: 5, src: gallery5, alt: "Mexican Tacos", rating: "4.8", category: "Mexican" },
    { id: 6, src: gallery6, alt: "Desserts", rating: "4.9", category: "Desserts" }
  ];

  // Duplicate images for infinite loop effect
  const slides = [...images, ...images, ...images];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, images.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
      {/* Green Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-20 w-96 h-96 bg-green-500 rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-green-600 rounded-full blur-[120px] opacity-10" />
      </div>

      {/* Food Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 text-4xl">
        <div className="absolute top-20 left-[10%]">🍕</div>
        <div className="absolute top-60 right-[15%]">🍔</div>
        <div className="absolute bottom-40 left-[20%]">🌮</div>
        <div className="absolute bottom-60 right-[10%]">🍜</div>
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
            <span className="inline-block px-4 py-1.5 bg-green-500/10 rounded-full text-sm font-medium text-green-400 border border-green-500/20 mb-4">
              <ImageIcon className="w-4 h-4 inline mr-1" />
              Food Gallery
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Visual{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Delights
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A glimpse of the delicious meals available on our platform
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
                    className="relative min-w-[calc(33.333%-8px)] aspect-square rounded-xl overflow-hidden group cursor-pointer"
                  >
                    {/* Image */}
                    <div className="absolute inset-0 bg-gray-800">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {/* Category */}
                      <span className="text-xs text-green-400 font-medium mb-1">
                        {image.category}
                      </span>
                      
                      {/* Title */}
                      <h4 className="text-white font-medium text-sm mb-2">
                        {image.alt}
                      </h4>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-xs text-white">{image.rating}</span>
                      </div>
                    </div>

                    {/* Green Border on Hover */}
                    <div className="absolute inset-0 border-2 border-green-500/0 group-hover:border-green-500/50 rounded-xl transition-all duration-300" />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors border border-green-500/30 shadow-lg z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-gray-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-colors border border-green-500/30 shadow-lg z-10"
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
                    ? "w-8 bg-green-500"
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Auto-sliding every 2.5 seconds
            </span>
          </motion.div>

          {/* Counter */}
          <div className="text-center mt-2">
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Categories Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mt-8"
          >
            {["Italian", "Fast Food", "Japanese", "Indian", "Mexican", "Desserts"].map((cat) => (
              <span key={cat} className="px-3 py-1.5 bg-gray-800/80 backdrop-blur-sm rounded-full text-xs text-gray-300 border border-gray-700">
                {cat}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoodGallerySection;