import React from "react";
import { CheckCircle, Users, Star, ShieldCheck } from "lucide-react";

const ServiceAbout = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ===== LEFT IMAGE ===== */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80"
            alt="Service professionals"
            className="w-full max-w-lg rounded-2xl object-cover shadow-2xl"
          />
        </div>

        {/* ===== RIGHT CONTENT ===== */}
        <div>

          {/* Tag */}
          <span className="text-sm font-medium text-orange-500 bg-orange-50 px-4 py-1.5 rounded-full">
            About Platform
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Book Trusted{" "}
            <span className="text-orange-500">Professionals</span> with Ease
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our service booking platform connects users with verified professionals
            for home and business services. From repairs to personal care,
            we make booking simple, fast, and reliable.
          </p>

          {/* Extra Info */}
          <p className="mt-4 text-gray-500 leading-relaxed">
            With transparent pricing, real reviews, and instant scheduling,
            you can confidently choose the right service provider without hassle.
          </p>

          {/* Features Points */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            <div className="flex items-start gap-3">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Verified professionals</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Instant booking system</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Transparent pricing</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
              <p className="text-gray-700">Customer reviews & ratings</p>
            </div>

          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-6">

            <div className="flex items-center gap-2">
              <Users className="text-orange-500 w-5 h-5" />
              <span className="text-gray-700 text-sm">100K+ Users</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="text-orange-500 w-5 h-5" />
              <span className="text-gray-700 text-sm">4.9 Avg Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-orange-500 w-5 h-5" />
              <span className="text-gray-700 text-sm">Verified Experts</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAbout;