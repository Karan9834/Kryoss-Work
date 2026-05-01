import React from "react";
import aboutimg from "@/assets/academy-tutor-img/about.jpg";
const TutorAbout = () => {
  return (
    <section className="bg-white py-24 relative overflow-hidden">

      {/* subtle background shapes */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative">

        {/* LEFT IMAGE */}
        <div className="relative group order-2 lg:order-1">
          <img
            src={aboutimg}
            alt="Tutor Booking"
            className="rounded-2xl shadow-lg object-cover w-full group-hover:scale-105 transition duration-500"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">

          {/* label */}
          <p className="text-indigo-600 font-semibold mb-3 uppercase tracking-wider text-sm">
            About Tutor Platform
          </p>

          {/* heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Making Learning Personal with
            <span className="block text-indigo-600">
              Smart Tutor Booking
            </span>
          </h2>

          {/* description */}
          <p className="text-gray-600 mb-6">
            Our platform connects students with experienced tutors across multiple
            subjects. With easy scheduling, real-time availability, and secure
            booking, finding the right tutor has never been simpler.
          </p>

          <p className="text-gray-600 mb-10">
            Whether you're preparing for exams, learning new skills, or improving
            your knowledge, our system ensures a smooth and personalized learning
            experience.
          </p>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-2 gap-6">

            {[
              "Instant Tutor Matching",
              "Flexible Scheduling",
              "Verified Profiles",
              "Secure Payments"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 group">
                <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-sm">
                  ✓
                </div>
                <p className="text-gray-700 text-sm font-medium group-hover:text-indigo-600 transition">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default TutorAbout;