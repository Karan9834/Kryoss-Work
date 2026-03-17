import React from "react";

const ElearningAbout = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      
      {/* subtle background gradient glow */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-purple-200 blur-3xl opacity-30 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">

        {/* IMAGE SIDE */}
        <div className="relative group">
          <img
            src="https://img.freepik.com/free-vector/online-certification-concept_23-2148575636.jpg"
            alt="E-learning platform"
            className="rounded-2xl shadow-xl object-cover w-full group-hover:scale-105 transition duration-500"
          />

          {/* floating stats */}
          <div className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-xl px-5 py-3 border">
            <p className="text-xs text-gray-500">Active Learners</p>
            <p className="text-xl font-bold text-indigo-600">50K+</p>
          </div>

          <div className="absolute -top-6 -right-6 bg-white shadow-xl rounded-xl px-5 py-3 border">
            <p className="text-xs text-gray-500">Courses</p>
            <p className="text-xl font-bold text-purple-600">1,200+</p>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div>
          {/* label */}
          <p className="text-indigo-600 font-semibold mb-3 uppercase tracking-wider text-sm">
            About Platform
          </p>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            A Smarter Way to Learn with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              Modern Digital Education
            </span>
          </h2>

          {/* description */}
          <p className="text-gray-600 mb-6">
            Our e-learning platform combines expert-led courses, real-world projects,
            and interactive learning tools to help you master in-demand skills faster.
          </p>

          <p className="text-gray-600 mb-10">
            Designed for students, professionals, and organizations — learn anytime,
            anywhere with structured content and industry-recognized certifications.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-2 gap-6">

            {[
              "Expert Instructors",
              "Flexible Learning",
              "Real Projects",
              "Certifications"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center text-purple-600 font-bold text-sm">
                  ✓
                </div>
                <p className="text-gray-700 text-sm font-medium group-hover:text-indigo-600 transition">
                  {item}
                </p>
              </div>
            ))}

          </div>

          {/* mini stats row */}
          <div className="flex gap-10 mt-10 text-sm text-gray-500">
            <div>
              <p className="text-xl font-bold text-gray-900">120+</p>
              Experts
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">4.9★</p>
              Rating
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">24/7</p>
              Support
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ElearningAbout;