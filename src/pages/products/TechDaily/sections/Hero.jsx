import React from "react";
import {
  ArrowRight,
  Zap,
  Sparkles,
  TrendingUp,
  Shield,
  MessageCircle,
  Play,
  Star,
  Globe,
  Smartphone,
} from "lucide-react";

const TechDailyHero = () => {
  const stars = Array.from({ length: 50 }).map(() => ({
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5,
  }));

  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/news-flutter-news-full-app/full_screen_preview/32062835",
      "_blank"
    );
  };

  return (
    <section className="relative bg-black px-6 md:px-16 pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/20 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731620_1px,transparent_1px),linear-gradient(to_bottom,#f9731620_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-20 left-10 opacity-10">
          <TrendingUp className="w-16 h-16 text-orange-500" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Zap className="w-20 h-20 text-orange-400" />
        </div>

        {/* stars */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                animationDelay: `${star.delay}s`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-orange-500/30">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">
              AI-Powered Tech News Platform
            </span>
          </div>

          {/* Heading - Updated: text-3xl md:text-4xl lg:text-5xl font-bold leading-tight */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Stay Ahead with</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
              Tech Daily
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-xl">
            Your daily dose of technology news, AI insights, and startup trends.
          </p>

          {/* BUTTON with Live Demo */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleLiveDemo}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-lg text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Live Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="/company/contact"
              className="flex items-center gap-2 bg-white text-orange-600 border border-orange-500 px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Let's Discuss
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Shield size={14} /> Verified
            </span>
            <span className="flex items-center gap-1">
              <Globe size={14} /> Global
            </span>
            <span className="flex items-center gap-1">
              <Smartphone size={14} /> Mobile
            </span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            className="rounded-2xl shadow-xl"
            alt="tech"
          />
        </div>
      </div>
    </section>
  );
};

export default TechDailyHero;