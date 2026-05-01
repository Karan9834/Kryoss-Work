import React from "react";
import { ArrowRight, Play, MessageCircle } from "lucide-react";
import heroimg from "../../../../assets/SnapCart/snapcarthero.png";
const Hero = () => {
  const demoLink =
    "https://preview.codecanyon.net/item/snapcart-mobilefocused-laravel-ecommerce-system/full_screen_preview/62455250";

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-100">

      {/* 🔥 Soft Glow */}
      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] bg-yellow-300 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] bg-orange-300 rounded-full blur-[120px] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 backdrop-blur border border-orange-200 rounded-full text-sm text-orange-700 mb-5 shadow-sm">
            🚀 Modern E-Commerce Platform
          </div>

          {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
            Launch Your{" "}
            <span className="bg-gradient-to-r from-orange-600 to-yellow-500 bg-clip-text text-transparent">
              Online Store
            </span>{" "}
            Faster
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-gray-600 text-base max-w-md">
            Build powerful mobile-first e-commerce apps with seamless checkout,
            smart inventory, and real-time analytics.
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition"
            >
              <Play size={16} className="fill-white" />
              Live Demo
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="/company/contact"
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-white text-orange-600 border border-orange-500 rounded-lg font-semibold shadow-md hover:bg-orange-50 transition hover:scale-105"
            >
              <MessageCircle size={16} />
              Let's Discuss
              <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* Trust */}
          <p className="mt-3 text-xs text-gray-500">
            No signup required • Mobile optimized • Ready to launch
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow Behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-yellow-300 blur-3xl opacity-20 rounded-xl"></div>

          {/* Image */}
          <div className="relative bg-white/70 backdrop-blur-xl p-3 rounded-xl shadow-xl border border-white/60">
            <img
              src={heroimg}
              alt="E-commerce dashboard"
              className="rounded-lg w-[500px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom Soft Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="w-full h-[90px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,256L80,240C160,224,320,192,480,181.3C640,171,800,181,960,192C1120,203,1280,213,1360,218.7L1440,224V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;