import React, { useState } from 'react';
import gallery1 from "../../../../assets/Hotel-Management/gallery1.png"
import gallery2 from "../../../../assets/Hotel-Management/gallery2.png"
import gallery3 from "../../../../assets/Hotel-Management/gallery3.png"
import gallery4 from "../../../../assets/Hotel-Management/gallery4.png"
import gallery5 from "../../../../assets/Hotel-Management/gallery5.png"
import gallery6 from "../../../../assets/Hotel-Management/gallery6.png"

const galleryImages = [
  {
    id: 1,
    src: gallery1,
    title: 'Dashboard Overview',
    description: 'Complete hotel management dashboard with real-time analytics',
  },
  {
    id: 2,
    src: gallery2,
    title: 'Booking Management',
    description: 'Efficient booking system with calendar view',
  },
  {
    id: 3,
    src: gallery3,
    title: 'Room Management',
    description: 'Track room status and occupancy in real-time',
  },
  {
    id: 4,
    src: gallery4,
    title: 'Guest Experience',
    description: 'Personalized guest profiles and preferences',
  },
  {
    id: 5,
    src: gallery5,
    title: 'Revenue Analytics',
    description: 'Detailed insights and performance metrics',
  },
  {
    id: 6,
    src: gallery6,
    title: 'Staff Coordination',
    description: 'Efficient staff scheduling and task management',
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = ['all', 'Dashboard', 'Booking', 'Management', 'Analytics'];
  
  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.title.includes(activeFilter));

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 md:py-28 relative overflow-hidden">
        
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              App{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                Screenshots
              </span>
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our platform through stunning visuals
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All' : category}
              </button>
            ))}
          </div>

          {/* Gallery Grid - 3x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => openModal(image)}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-fit group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-gray-200 text-sm mb-3">{image.description}</p>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Click to expand</span>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-semibold rounded-full shadow-md">
                      {image.title.split(' ')[0]}
                    </span>
                  </div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
          onClick={closeModal}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
                setSelectedImage(galleryImages[prevIndex]);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-400 transition-colors duration-300 bg-black/50 rounded-full p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => {
                const currentIndex = galleryImages.findIndex(img => img.id === selectedImage.id);
                const nextIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
                setSelectedImage(galleryImages[nextIndex]);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-purple-400 transition-colors duration-300 bg-black/50 rounded-full p-2"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-2xl font-bold mb-1">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
            
            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              {galleryImages.findIndex(img => img.id === selectedImage.id) + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default GallerySection;