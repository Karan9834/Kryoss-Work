import React from "react";

const GallerySection = () => {
  const items = [
    {
      title: "AI Blog Writer",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
      description: "Generate engaging blog posts in minutes with AI-powered writing"
    },
    {
      title: "Ad Copy Generator",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
      description: "Create high-converting ad copies for any platform"
    },
    {
      title: "Email Assistant",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
      description: "Craft professional emails that get results"
    },
    {
      title: "Product Descriptions",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1200",
      description: "Write compelling product descriptions that sell"
    },
    {
      title: "Social Media Content",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
      description: "Create engaging posts for all social platforms"
    },
    {
      title: "SEO Optimization",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      description: "Optimize content for better search rankings"
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-50/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"></div>
      
      {/* Soft Yellow Glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>
      
      {/* Decorative Particles */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-amber-400 rounded-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200/50 shadow-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Gallery
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore What You Can Create with{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-transparent bg-clip-text">
              WriteFlow AI
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full my-6"></div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            From marketing copy to business content — everything powered by AI
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden h-[280px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* HOVER CONTENT - Title and Description */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.description}
                </p>
              </div>
              
              {/* Title Badge - Visible on Normal State */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-sm font-semibold text-gray-900">{item.title}</span>
              </div>
              
              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-400/50 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>
        
       
      </div>
    </section>
  );
};

export default GallerySection;