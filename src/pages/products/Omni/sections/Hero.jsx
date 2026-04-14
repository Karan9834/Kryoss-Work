import React from "react";
import { ArrowRight, Play, ShoppingBag, Star, Truck, Shield, MessageCircle } from "lucide-react";
import omnihero from "../../../../assets/Omnicart/omnicarthero.png"
const HeroSection = () => {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-orange-500 via-yellow-400 to-orange-600">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-300/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left space-y-6">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur rounded-full">
            <ShoppingBag className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-xs font-medium">
              Premium E-commerce Solution
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Build Your
            <span className="block">E-commerce Empire</span>
            <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
              With Snapcart
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-white/90 text-base max-w-lg mx-auto lg:mx-0">
            Launch your online store with a powerful mobile-first platform.
            Fast, secure, and built for high conversions.
          </p>

          {/* Features Row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <Truck className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white/90 text-xs">Fast Delivery</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white/90 text-xs">Secure Payments</span>
            </div>

            <div className="flex items-center gap-1.5">
              <div className="flex text-yellow-200">
                {"★★★★★".split("").map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-white/90 text-xs">4.9/5 Rating</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

            <a
              href="https://preview.codecanyon.net/item/omnimart-multipurpose-ecommerce-shopping-platform/full_screen_preview/33771074"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-5 py-2.5 bg-white text-orange-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition text-sm"
            >
              <Play className="w-4 h-4 mr-1.5" />
              Live Demo
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition" />
            </a>
            <a
              href="/company/contact"
              className="group inline-flex items-center justify-center px-5 py-2.5 bg-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition text-sm border border-orange-400"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              Let's Discuss
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-6 justify-center lg:justify-start pt-2">
            <div>
              <div className="text-xl font-bold text-white">1000+</div>
              <div className="text-white/80 text-xs">Stores</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">99.9%</div>
              <div className="text-white/80 text-xs">Uptime</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">24/7</div>
              <div className="text-white/80 text-xs">Support</div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-yellow-300 blur-3xl opacity-20 rounded-2xl"></div>

          {/* Image Card */}
          <div className="relative bg-white/10 backdrop-blur-xl p-2 rounded-xl shadow-2xl border border-white/20">
            <img
              src={omnihero}
              alt="Ecommerce Platform"
              className="rounded-lg w-[500px] object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Floating Tags */}
          <div className="absolute -top-3 left-4 bg-white px-2.5 py-0.5 rounded-md shadow text-xs">
            🛒 Smart Orders
          </div>

          <div className="absolute -bottom-3 right-4 bg-white px-2.5 py-0.5 rounded-md shadow text-xs">
            ⚡ Fast Checkout
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full h-8">
          <path
            fill="white"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;