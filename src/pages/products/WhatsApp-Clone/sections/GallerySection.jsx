import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ss1 from "../../../../assets/Socila-media-app/ss1.png"
import ss2 from "../../../../assets/Socila-media-app/ss2.png"
import ss3 from "../../../../assets/Socila-media-app/ss3.png"
import ss4 from "../../../../assets/Socila-media-app/ss4.png"
import ss5 from "../../../../assets/Socila-media-app/ss5.png"
import ss6 from "../../../../assets/Socila-media-app/ss6.png"
import { 
  X, 
  ZoomIn, 
  Heart, 
  MessageCircle, 
  Share2,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Chat Interface",
      description: "Beautiful and intuitive chat interface with dark mode support",
      image: ss1,
      category: "UI Design",
      likes: 1240,
      comments: 89,
    },
    {
      id: 2,
      title: "Video Calling",
      description: "High-quality video calls with screen sharing capabilities",
      image: ss2,
      category: "Features",
      likes: 982,
      comments: 67,
    },
    {
      id: 3,
      title: "Voice Messages",
      description: "Send crystal clear voice messages with ease",
      image: ss3,
      category: "Features",
      likes: 756,
      comments: 45,
    },
    {
      id: 4,
      title: "Group Chats",
      description: "Connect with groups up to 500 members",
      image: ss4,
      category: "Social",
      likes: 2100,
      comments: 156,
    },
    {
      id: 5,
      title: "Media Sharing",
      description: "Share photos, videos, and documents instantly",
      image: ss5,
      category: "Media",
      likes: 1678,
      comments: 234,
    },
    {
      id: 6,
      title: "Security Features",
      description: "End-to-end encryption for your privacy",
      image: ss6,
      category: "Security",
      likes: 845,
      comments: 56,
    },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative w-full bg-white py-24 lg:py-28 overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Soft Green Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[80px]" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Top Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            App{" "}
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-gray-600 text-lg">
            Explore the beautiful interface and powerful features of our platform
          </p>
        </motion.div>

        {/* Gallery Grid - 3x2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="relative rounded-xl overflow-hidden bg-gray-50 shadow-sm hover:shadow-xl transition-all duration-300">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] object-fit group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                    <ZoomIn className="w-4 h-4 text-gray-700" />
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-200 text-xs">{item.category}</p>
                  </div>
                </div>

                {/* Footer Stats */}
                <div className="p-4 flex items-center justify-between border-t border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                      <span className="text-xs text-gray-500">{item.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-green-500 transition-colors" />
                      <span className="text-xs text-gray-500">{item.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Share2 className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto"
              />

              {/* Caption */}
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-3">{selectedImage.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    <span>{selectedImage.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{selectedImage.comments} comments</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;