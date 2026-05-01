import React from 'react';
import { ArrowRight } from "lucide-react";
const TutorBookingCta = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://demo.creativeitem.com/index.php?product=tutor-booking",
    );
  };
  return (
    <section className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-12 px-4 lg:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Content */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Ready to Start Learning?
        </h2>
        <p className="text-indigo-100 text-base mb-5">
          Join thousands of students who found their perfect tutor today
        </p>

        {/* CTA Button */}
        <button
          onClick={handleLiveDemo}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transform hover:scale-105 transition-all duration-300"
        >
          View Live Demo
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Small stats */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-indigo-200">
          <span>✓ 2500+ Tutors</span>
          <span>✓ 100+ Subjects</span>
          <span>✓ 24/7 Support</span>
        </div>
      </div>
    </section>
  );
};

export default TutorBookingCta;