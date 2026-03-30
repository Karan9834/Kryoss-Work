import React, { useState } from "react";
import { Sparkles, X, ZoomIn, ArrowLeft, ArrowRight, Image as ImageIcon } from "lucide-react";
import sss1 from "../../../../assets/HMS-Hotel/sss1.png"
import sss2 from "../../../../assets/HMS-Hotel/sss2.png"
import sss3 from "../../../../assets/HMS-Hotel/sss3.png"
import sss4 from "../../../../assets/HMS-Hotel/sss4.png"
import sss5 from "../../../../assets/HMS-Hotel/sss5.png"
import ss6 from "../../../../assets/HMS-Hotel/ss6.png"


const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: sss1,
      title: "Analytics Dashboard",
      category: "Dashboard",
      description: "Real-time analytics and performance metrics at your fingertips"
    },
    {
      id: 2,
      src: sss2,
      title: "Content Studio",
      category: "Editor",
      description: "AI-powered content creation and editing workspace"
    },
    {
      id: 3,
      src: sss3,
      title: "Performance Metrics",
      category: "Analytics",
      description: "Comprehensive engagement and reach tracking"
    },
    {
      id: 4,
      src: sss4,
      title: "Team Collaboration",
      category: "Collaboration",
      description: "Real-time co-editing and team communication"
    },
    {
      id: 5,
      src: sss5,
      title: "Distribution Network",
      category: "Distribution",
      description: "Multi-channel publishing automation"
    },
    {
      id: 6,
      src: ss6,
      title: "Security Dashboard",
      category: "Security",
      description: "Enterprise-grade protection and compliance"
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
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
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 lg:py-32">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      
      {/* Decorative Orbs */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <ImageIcon size={16} className="text-blue-500" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text">
              Product Gallery
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Visual Tour of{" "}
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 text-transparent bg-clip-text">
              Our Platform
            </span>
          </h2>
          
          <p className="mt-4 text-lg text-gray-600">
            Explore our intuitive interface and powerful features through these screenshots
          </p>
        </div>

        {/* 3x2 Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-fit transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs">
                      {image.category}
                    </span>
                  </div>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                  <ZoomIn size={18} className="text-blue-600" />
                </div>
                
                {/* Category Badge (Mobile) */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs font-medium lg:hidden">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm">
            <span className="text-sm text-gray-600">📸 {galleryImages.length} Screenshots</span>
            <span className="w-px h-4 bg-gray-300"></span>
            <span className="text-sm text-gray-600">✨ Click any image to enlarge</span>
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
              <h3 className="text-white font-bold text-2xl mb-2">{selectedImage.title}</h3>
              <p className="text-white/80 text-base">{selectedImage.description}</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/80 text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
          
          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;