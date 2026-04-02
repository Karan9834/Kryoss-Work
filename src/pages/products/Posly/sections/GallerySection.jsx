import React, { useState } from "react";
import {
  X,
  ZoomIn,
  ArrowLeft,
  ArrowRight
} from "lucide-react";
import ss1 from "../../../../assets/IMS/ss1.png";
import ss2 from "../../../../assets/IMS/ss2.png";
import ss3 from "../../../../assets/IMS/ss3.png";
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Dashboard Overview",
      description: "Real-time inventory dashboard with key metrics, stock levels, and sales insights",
      category: "Dashboard",
      image: ss1
    },
    {
      id: 2,
      title: "Inventory Management",
      description: "Track stock levels, manage products, and automate reordering process",
      category: "Inventory",
      image: ss2
    },
    {
      id: 3,
      title: "POS System Integration",
      description: "Seamless point of sale integration with real-time payment processing",
      category: "POS",
      image: ss3
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(galleryItems[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryItems[prevIndex]);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="gallery-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle fill="#3b82f6" cx="2" cy="2" r="1"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-dots)"></rect>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-5 border border-blue-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-semibold text-blue-700">Screenshots</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            See POSly in Action
          </h2>

          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore our powerful features through real screenshots of the POSly dashboard
          </p>
        </div>

        {/* Gallery Grid - 3 items per line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={24} className="text-gray-900" />
                  </div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1 text-xs font-semibold text-gray-900">
                  {item.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
            >
              <X size={24} className="text-white" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
            >
              <ArrowLeft size={24} className="text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300"
            >
              <ArrowRight size={24} className="text-white" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            {/* Caption */}
            <div className="p-6 bg-white">
              <div className="mb-2">
                <span className="text-sm font-semibold text-blue-600">
                  {selectedImage.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-600">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Gallery;