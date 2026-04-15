import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import heroimg from '@/assets/news-magazine-img/hero.jpeg';
const NewsHero = () => {
  const navigate = useNavigate();

  const handleExploreNews = () => {
    // Scroll to the ProductSection by id
    const productSection = document.getElementById("products-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // If no element with id, navigate to products page
      navigate("/products");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-white px-6 md:px-16 py-20 md:py-28">

      {/* ✨ Glowing Corner Effects */}
      {/* Top Left Corner Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Top Right Corner Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

      {/* Bottom Left Corner Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>

      {/* Bottom Right Corner Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-400/25 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

      {/* Center Blueish Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-200/20 rounded-full blur-[150px]"></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Light Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/10 via-transparent to-indigo-50/10"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT COLUMN */}
        <div className="space-y-8">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2 rounded-full border border-blue-100 shadow-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-gray-700">Trusted News Platform</span>
          </div>

          {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
          <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-gray-900">
            Stories That
            <br />
            <span className="relative inline-block mt-2">
              {/* Highlighted Text - Same typography as H1 with gradient */}
              <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
                Shape Our World
              </span>
              {/* Subtle underline */}
              <div className="absolute bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full opacity-60"></div>
            </span>
          </h1>

          {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl">
            Breaking news, expert insights, and global coverage curated for modern readers.
            Get the stories that matter, delivered fresh every day.
          </p>

          {/* CTA Buttons - Updated button typography */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={handleExploreNews}
              className="group flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-3.5 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl text-[16px] tracking-[0.01em] font-semibold"
            >
              Explore News
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust Indicators - Updated typography */}
          <div className="flex flex-wrap items-center gap-8 pt-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span className="text-[13px] md:text-[14px] font-normal text-gray-600">50K+ Daily Readers</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              <span className="text-[13px] md:text-[14px] font-normal text-gray-600">100+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              <span className="text-[13px] md:text-[14px] font-normal text-gray-600">Award-Winning</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Image Only */}
        <div className="relative">
          {/* Subtle Glow Behind Image */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur-xl"></div>

          {/* Main Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroimg}
              alt="Modern news and journalism concept"
              className="w-full h-auto object-cover"
              loading="eager"
            />
            {/* Light Gradient Overlay on Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none"></div>
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-blue-200 rounded-br-2xl"></div>
          <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-indigo-200 rounded-tl-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;