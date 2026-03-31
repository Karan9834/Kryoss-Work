import React, { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import ss1 from "../../../../assets/SnapCart/ss1.png";
import ss2 from "../../../../assets/SnapCart/ss2.png";
import ss3 from "../../../../assets/SnapCart/ss3.png";
import ss4 from "../../../../assets/SnapCart/ss4.png";
import ss5 from "../../../../assets/SnapCart/ss5.png";
import ss6 from "../../../../assets/SnapCart/ss6.png";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: ss1,
      thumbnail: ss1,
      title: "Dashboard Analytics",
      category: "Web App"
    },
    {
      id: 2,
      url: ss2,
      thumbnail: ss2,
      title: "Code Development",
      category: "Development"
    },
    {
      id: 3,
      url: ss3,
      thumbnail: ss3,
      title: "Data Visualization",
      category: "Analytics"
    },
    {
      id: 4,
      url: ss4,
      thumbnail: ss4,
      title: "Code Editor",
      category: "Development"
    },
    {
      id: 5,
      url: ss5,
      thumbnail: ss5,
      title: "Team Collaboration",
      category: "Business"
    },
    {
      id: 6,
      url: ss6,
      thumbnail: ss6,
      title: "Mobile App",
      category: "Mobile"
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium mb-5">
              Our Gallery
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Visual Showcase of Our
              <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent"> Work</span>
            </h2>
            
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio and see the quality of work we deliver
            </p>
          </div>

          {/* Gallery Grid - 3x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]"
                onClick={() => openModal(index)}
              >
                {/* Thumbnail Image */}
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay - Only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    {/* Zoom Icon */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Title and Category */}
                    <div className="text-center mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
            
            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scaleIn"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="text-center">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {selectedImage.category}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      {/* Add custom CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default GallerySection;