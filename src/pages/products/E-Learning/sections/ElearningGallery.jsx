import React, { useState, useEffect, useRef } from 'react';

const ElearningGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timeoutRef = useRef(null);

  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/4143790/pexels-photo-4143790.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Interactive Learning",
      category: "Online Classes",
      instructor: "Dr. Sarah Johnson",
      students: "2,500+ enrolled"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Expert Mentorship",
      category: "1-on-1 Sessions",
      instructor: "Prof. Michael Chen",
      students: "1,800+ enrolled"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Group Discussions",
      category: "Community Learning",
      instructor: "Emily Rodriguez",
      students: "3,200+ enrolled"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/4143792/pexels-photo-4143792.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Hands-on Projects",
      category: "Practical Work",
      instructor: "David Kim",
      students: "1,900+ enrolled"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/4143793/pexels-photo-4143793.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Certification Prep",
      category: "Exam Ready",
      instructor: "Lisa Thompson",
      students: "2,100+ enrolled"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/4143794/pexels-photo-4143794.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Virtual Labs",
      category: "Hands-on Experience",
      instructor: "James Wilson",
      students: "1,600+ enrolled"
    }
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => {
      resetTimeout();
    };
  }, [currentIndex, isAutoPlaying, galleryImages.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    // Resume auto-play after manual navigation
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gallery-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"/>
            </svg>
            Gallery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Campus
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              In Action
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Experience our vibrant learning community through these moments
          </p>
        </div>

        {/* Main slider container */}
        <div className="relative overflow-hidden rounded-3xl">
          {/* Images container with sliding animation */}
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="min-w-[33.333%] px-3"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 group-hover:translate-y-[-8px] transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold mb-3">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm mb-2">{image.instructor}</p>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      {image.students}
                    </div>
                  </div>

                  {/* Premium badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Featured
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500' 
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-slide indicator */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <span className="text-white/40 text-sm">
            {isAutoPlaying ? 'Auto-sliding every 2 seconds' : 'Auto-slide paused'}
          </span>
          <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
            {isAutoPlaying && (
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{
                  animation: 'progress 2s linear infinite'
                }}
              ></div>
            )}
          </div>
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <button className="group inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
            View Full Gallery
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Keyframes for animations */}
      <style>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ElearningGallery;