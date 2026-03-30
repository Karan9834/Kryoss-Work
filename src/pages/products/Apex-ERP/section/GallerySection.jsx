// src/pages/products/Apex-ERP/section/Gallery.jsx
import React, { useState } from "react";
import { 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Image,
  LayoutGrid
} from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      title: "Financial Dashboard",
      description: "Real-time analytics and portfolio overview",
      category: "Dashboard"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      title: "Analytics Center",
      description: "Advanced reporting and data visualization",
      category: "Analytics"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=80",
      title: "Portfolio Management",
      description: "Asset allocation and performance tracking",
      category: "Portfolio"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
      title: "Risk Analytics",
      description: "Real-time risk assessment and monitoring",
      category: "Risk"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1200&q=80",
      title: "Wealth Management",
      description: "Client reporting and goal planning",
      category: "Wealth"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      title: "Trading Platform",
      description: "Automated execution and market analysis",
      category: "Trading"
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 px-6 md:px-12 py-16 md:py-20 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-emerald-50/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-50/40 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
            <LayoutGrid className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Platform Gallery</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            See Apex ERP in Action
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
              Powerful Interface, Seamless Experience
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our intuitive dashboard and powerful features designed for modern financial management
          </p>
        </div>

        {/* Gallery Grid - 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openModal(index)}
              className="group cursor-pointer relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {image.category}
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <ZoomIn className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-gradient-to-t from-black/80 to-transparent p-4 rounded-t-xl">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-emerald-400 transition-colors bg-white/10 rounded-full p-2 hover:bg-white/20"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="max-w-5xl mx-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-h-[80vh] w-auto rounded-2xl shadow-2xl"
              />
              <div className="text-center mt-6">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-400">{selectedImage.description}</p>
                <span className="inline-block mt-3 px-4 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;