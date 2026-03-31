import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { X, ZoomIn, ChevronLeft, ChevronRight, ShoppingBag, Smartphone, Layout, BarChart, Users, CreditCard } from "lucide-react";
import ss1 from "../../../../assets/Omnicart/ss1.png"
import ss2 from "../../../../assets/Omnicart/ss2.png"
import ss3 from "../../../../assets/Omnicart/ss3.png"
import ss4 from "../../../../assets/Omnicart/ss4.png"
import ss5 from "../../../../assets/Omnicart/ss5.png"
import ss6 from "../../../../assets/Omnicart/ss6.png"

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      url: ss1,
      thumbnail: ss1,
      title: "Modern Dashboard",
      category: "Analytics",
      icon: <BarChart size={16} />
    },
    {
      id: 2,
      url: ss2,
      thumbnail: ss2,
      title: "Mobile Shopping",
      category: "Mobile App",
      icon: <Smartphone size={16} />
    },
    {
      id: 3,
      url: ss3,
      thumbnail: ss3,
      title: "Product Management",
      category: "Inventory",
      icon: <ShoppingBag size={16} />
    },
    {
      id: 4,
      url: ss4,
      thumbnail: ss4,
      title: "Analytics Dashboard",
      category: "Reports",
      icon: <BarChart size={16} />
    },
    {
      id: 5,
      url: ss5,
      thumbnail: ss5,
      title: "User Management",
      category: "Customers",
      icon: <Users size={16} />
    },
    {
      id: 6,
      url: ss6,
      thumbnail: ss6,
      title: "Payment Gateway",
      category: "Transactions",
      icon: <CreditCard size={16} />
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
              Visual Showcase of
              <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent"> OmniMart</span>
            </h2>
            
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore the powerful features and stunning interface of our multipurpose e-commerce platform
            </p>
          </div>

          {/* Gallery Grid - 3x2 Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3] shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => openModal(index)}
              >
                {/* Thumbnail Image */}
                <img
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  {image.icon}
                  <span className="text-white text-xs font-medium">{image.category}</span>
                </div>
                
                {/* Overlay - Only visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    {/* Zoom Icon */}
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ZoomIn className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    
                    {/* Title and Category */}
                    <div className="text-center mt-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm flex items-center justify-center gap-1">
                        {image.icon}
                        <span>{image.category}</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
              View All Features
              <ArrowRight className="w-4 h-4" />
            </button>
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
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-flex items-center gap-1">
                      {selectedImage.icon}
                      <span className="text-white/90 text-sm">{selectedImage.category}</span>
                    </div>
                  </div>
                  <h3 className="text-white text-xl font-semibold">
                    {selectedImage.title}
                  </h3>
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