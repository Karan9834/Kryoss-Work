import React from "react";
import { Sparkles, Eye, ZoomIn, Heart, ArrowRight } from "lucide-react";

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Business Networking Event",
      category: "Events",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Professionals connecting and building meaningful relationships",
    },
    {
      id: 2,
      title: "Modern Office Space",
      category: "Workspaces",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Inspiring work environments for productive teams",
    },
    {
      id: 3,
      title: "Customer Support Team",
      category: "Services",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Dedicated professionals ready to assist you",
    },
    {
      id: 4,
      title: "Business Conference",
      category: "Events",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Industry leaders sharing insights and knowledge",
    },
    {
      id: 5,
      title: "Retail Store",
      category: "Shopping",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Premium shopping experiences with top brands",
    },
    {
      id: 6,
      title: "Tech Innovation Hub",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      description: "Cutting-edge technology and innovation spaces",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      
      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Our Gallery</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Explore{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Business Moments
            </span>
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover the vibrant world of businesses through our curated gallery.
          </p>
        </div>

        {/* ===== GALLERY GRID 3x2 ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 z-10">
                  {item.category}
                </div>
                
                {/* Content on Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {item.description}
                  </p>
                  
                  
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ===== Blue Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default GallerySection;