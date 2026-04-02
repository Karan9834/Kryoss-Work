import React, { useState } from "react";
import { X, ZoomIn, ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import sss1 from "../../../../assets/News-Management/sss1.png";
import sss2 from "../../../../assets/News-Management/sss2.png";
import sss3 from "../../../../assets/News-Management/sss3.png";

const images = [
  { id: 1, src: sss1, title: "News Dashboard", category: "Dashboard" },
  { id: 2, src: sss2, title: "Content Editor", category: "Editor" },
  { id: 3, src: sss3, title: "Analytics View", category: "Analytics" }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "Escape") closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 py-20 lg:py-28">
      
      {/* Purple/Blue Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f708_1px,transparent_1px),linear-gradient(to_bottom,#a855f708_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-fuchsia-400/10 rounded-full blur-3xl"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-fuchsia-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-indigo-400/30 rounded-full animate-float animation-delay-2000"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-full px-4 py-2 mb-4 shadow-sm">
            <ImageIcon size={16} className="text-purple-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-fuchsia-600 text-transparent bg-clip-text">
              Visual Showcase
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Product{" "}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-transparent bg-clip-text">
              Gallery
            </span>
          </h2>
          
          <p className="mt-3 text-gray-600">
            Explore our interface through these screenshots
          </p>
        </div>

        {/* Gallery Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.category}</p>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                  <ZoomIn size={18} className="text-purple-600" />
                </div>
                
                {/* Category Badge (Mobile) */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600/80 backdrop-blur-sm rounded-full text-white text-xs font-medium lg:hidden">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-5 py-2 border border-purple-100 shadow-sm">
            <span className="text-xs text-gray-600">📸 {images.length} Screenshots</span>
            <span className="w-px h-3 bg-gray-300"></span>
            <span className="text-xs text-gray-600">✨ Click any image to enlarge</span>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
          >
            <X size={24} className="text-white" />
          </button>
          
          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
          >
            <ArrowLeft size={24} className="text-white" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
          >
            <ArrowRight size={24} className="text-white" />
          </button>
          
          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-1">{selectedImage.title}</h3>
              <p className="text-white/70 text-sm">{selectedImage.category}</p>
            </div>
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50% { transform: translateY(-10px) translateX(5px); opacity: 0.6; }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Gallery;