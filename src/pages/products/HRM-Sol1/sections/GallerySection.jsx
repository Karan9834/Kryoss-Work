import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import ss1 from "../../../../assets/human-resources/ss1.png"
import ss2 from "../../../../assets/human-resources/ss2.png"
import ss3 from "../../../../assets/human-resources/ss3.png"
import ss4 from "../../../../assets/human-resources/ss4.png"
import ss5 from "../../../../assets/human-resources/ss5.png"

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    {
      id: 1,
      src: ss1,
      category: "Web Application"
    },
    {
      id: 2,
      src: ss2,
      category: "Data Visualization"
    },
    {
      id: 3,
      src: ss3,
      category: "Online Store"
    },
    {
      id: 4,
      src: ss4,
      category: "UI/UX Design"
    },
    {
      id: 5,
      src: ss5,
      category: "Enterprise Solution"
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
    <section className="relative py-24 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/30 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            <span className="text-purple-600 text-xs font-semibold uppercase tracking-widest">
              Our Work
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Project{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
          
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses transform their digital presence
          </p>
        </div>

        {/* Gallery Grid - 3 in first row, 2 centered in second row */}
        <div className="flex flex-col gap-6">
          {/* First Row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {images.slice(0, 3).map((image, idx) => (
              <div
                key={image.id}
                onClick={() => openLightbox(idx)}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 images centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-2xl md:mx-auto">
            {images.slice(3, 5).map((image, idx) => (
              <div
                key={image.id}
                onClick={() => openLightbox(idx + 3)}
                className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-contain transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                    <p className="text-gray-300 text-sm">{image.category}</p>
                  </div>
                </div>
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300 transition"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 transition"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.category}</p>
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