import React from 'react';

const TutorBookingCta = () => {
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
        <button className="bg-white text-indigo-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105">
          Find a Tutor Now
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