import React from "react";
import { MessageCircle } from "lucide-react";

const ElearningHero = () => {

  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/rocket-lms-learning-management-academy-script/full_screen_preview/33120735",
      "_blank"
    );
  };

  return (
    <section className="w-full bg-[#0b1f3a] text-white relative overflow-hidden">

      {/* subtle gradient glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">
              Trusted by 50,000+ learners
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Learn Skills That <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Shape Your Future
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mb-8 max-w-lg">
            Master in-demand skills with expert-led courses, real-world projects,
            and certifications. Build your career with confidence.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleLiveDemo}
              className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              Live Demo
            </button>
            <a
              href="/company/contact"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition shadow-lg backdrop-blur-md"
            >
              <MessageCircle size={18} />
              Let's Discuss
            </a>
          </div>

          {/* stats */}
          <div className="flex gap-8 mt-10 text-sm text-gray-400">
            <div>
              <p className="text-white font-bold text-lg">1K+</p>
              Courses
            </div>
            <div>
              <p className="text-white font-bold text-lg">50K+</p>
              Students
            </div>
            <div>
              <p className="text-white font-bold text-lg">120+</p>
              Experts
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* floating card */}
          <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur rounded-xl px-4 py-2 text-sm">
            🎓 1000+ Courses
          </div>

          <img
            src="https://img.freepik.com/free-vector/online-learning-concept_23-2148521239.jpg"
            alt="E-learning"
            className="rounded-2xl shadow-2xl max-h-[420px] object-cover"
          />

          <div className="absolute -bottom-6 -right-6 bg-white/10 backdrop-blur rounded-xl px-4 py-2 text-sm">
            ⭐ 4.9 Rating
          </div>
        </div>

      </div>
    </section>
  );
};

export default ElearningHero;