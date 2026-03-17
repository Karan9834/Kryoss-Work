import React from 'react';

const TutorBookingGallery = () => {
  const galleryImages = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Math Tutoring",
      category: "Mathematics"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/4143790/pexels-photo-4143790.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Science Lab",
      category: "Science"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/4143800/pexels-photo-4143800.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Language Learning",
      category: "Languages"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Music Session",
      category: "Music"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/4143792/pexels-photo-4143792.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Coding Class",
      category: "Computer Science"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/4143793/pexels-photo-4143793.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Test Prep",
      category: "Exam Preparation"
    }
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white to-indigo-50/20 py-16 px-4 lg:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-indigo-100 rounded-full px-4 py-2 mb-4">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            <span className="text-indigo-700 text-sm font-medium">Gallery</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Moments from Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Tutoring Sessions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A glimpse into our engaging learning environment
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-medium bg-indigo-600 px-2 py-1 rounded-full mb-2 inline-block">
                  {image.category}
                </span>
                <h3 className="text-lg font-semibold">{image.title}</h3>
              </div>

              {/* Category badge (always visible) */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-indigo-600 shadow">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg">
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TutorBookingGallery;