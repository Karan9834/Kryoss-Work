import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Image as ImageIcon } from 'lucide-react'
import bd1 from "../../../../assets/human-resources/bd1.jpg"
import bd2 from "../../../../assets/human-resources/bd2.jpg"
import bd3 from "../../../../assets/human-resources/bd3.jpg"
import bd4 from "../../../../assets/human-resources/bd4.jpg"
import bd5 from "../../../../assets/human-resources/bd5.jpg"
import bd6 from "../../../../assets/human-resources/bd6.jpg"

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      id: 1,
      src: bd1,
      title: "HRM Dashboard",
      category: "Web Application",
      description: "Complete HR management solution with real-time analytics"
    },
    {
      id: 2,
      src: bd2,
      title: "Analytics Platform",
      category: "Data Visualization",
      description: "Interactive dashboards with predictive analytics"
    },
    {
      id: 3,
      src: bd3,
      title: "E-commerce Solution",
      category: "Online Store",
      description: "Feature-rich e-commerce platform with payment integration"
    },
    {
      id: 4,
      src: bd4,
      title: "Mobile App Design",
      category: "UI/UX Design",
      description: "Beautiful and intuitive mobile application design"
    },
    {
      id: 5,
      src: bd5,
      title: "CRM Software",
      category: "Enterprise Solution",
      description: "Customer relationship management for growing businesses"
    },
    {
      id: 6,
      src: bd6,
      title: "Project Management Tool",
      category: "Productivity",
      description: "Streamline team collaboration and project tracking"
    }
  ]

  const openLightbox = (index) => {
    setCurrentIndex(index)
    setSelectedImage(images[index])
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length
    setCurrentIndex(nextIndex)
    setSelectedImage(images[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length
    setCurrentIndex(prevIndex)
    setSelectedImage(images[prevIndex])
  }

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50/50 via-white to-emerald-50/30 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-600 text-xs font-semibold uppercase tracking-widest">
              Our Work
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Project{' '}
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Gallery Grid - 3x2 (6 images) with object-contain */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={image.id}
              onClick={() => openLightbox(idx)}
              className="group relative bg-white rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Container with object-contain */}
              <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                    <p className="text-gray-400 text-xs mt-1 line-clamp-1">{image.description}</p>
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300 transition z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 transition z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full">
            <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.category}</p>
              <p className="text-gray-500 text-sm mt-2">{selectedImage.description}</p>
            </div>
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-gray-500 text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  )
}

export default GallerySection