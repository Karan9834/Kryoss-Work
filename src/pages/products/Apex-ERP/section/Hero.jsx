// src/pages/products/Apex-ERP/section/Hero.jsx
import React from "react";
import {
  ArrowRight,
  Play,
  Shield,
  TrendingUp,
  Zap,
  Sparkles,
  Crown,
  Layers,
  Database,
  Star,
  CheckCircle
} from "lucide-react";

const Hero = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/erp-os-best-erp-software-for-store-inventory-and-invoice-management/full_screen_preview/39644625",
      "_blank"
    );
  };

  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  return (
    <section className="relative bg-gradient-to-br from-sky-900 via-sky-800 to-blue-900 px-6 md:px-12 py-16 md:py-20 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Deep Sky Blue Orbs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-emerald-500/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-400/10 rounded-full blur-3xl"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <Crown className="w-16 h-16 text-sky-300" strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Layers className="w-20 h-20 text-emerald-300" strokeWidth={1} />
        </div>

        {/* Stars Effect */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-sky-400/30 shadow-sm">
              <Crown className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-gray-200">Enterprise-Grade ERP Solution</span>
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              <span className="text-white"> ERP OS</span>
              <br />
              <span className="text-emerald-400">
                Peak Financial Performance
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
              Transform your financial operations with the industry's most advanced ERP platform.
              Real-time analytics, intelligent automation, and enterprise-grade security.
            </p>

            {/* Stats */}
            <div className="flex gap-6 pt-2">
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-400">Enterprise Clients</div>
              </div>
              <div className="w-px h-10 bg-sky-500/30"></div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">99.99%</div>
                <div className="text-xs text-gray-400">Uptime SLA</div>
              </div>
              <div className="w-px h-10 bg-sky-500/30"></div>
              <div>
                <div className="text-xl md:text-2xl font-bold text-white">$50B+</div>
                <div className="text-xs text-gray-400">Transactions</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handleLiveDemo}
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-sky-400/30 text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-4 h-4 text-emerald-400" />
                <span>Live Demo</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-sky-500/30">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Apex ERP Dashboard"
                className="w-full h-[280px] md:h-[320px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 via-transparent to-transparent"></div>

              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-sky-950/90 backdrop-blur-sm rounded-lg p-3 shadow-md border border-sky-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400">ROI Increase</p>
                    <p className="text-base font-bold text-emerald-400">+156%</p>
                  </div>
                  <div className="w-px h-8 bg-sky-500/30"></div>
                  <div>
                    <p className="text-xs text-gray-400">Implementation</p>
                    <p className="text-base font-bold text-white">2-4 Weeks</p>
                  </div>
                  <div className="w-px h-8 bg-sky-500/30"></div>
                  <div>
                    <p className="text-xs text-gray-400">Satisfaction</p>
                    <p className="text-base font-bold text-emerald-400">98%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute -bottom-2 -right-2 w-16 h-16 border-r-2 border-b-2 border-sky-500/40 rounded-br-lg"></div>
            <div className="absolute -top-2 -left-2 w-16 h-16 border-l-2 border-t-2 border-emerald-500/40 rounded-tl-lg"></div>

            {/* Badge */}
            <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-2.5 py-1 rounded-full text-xs font-semibold shadow-md">
              ⚡ Enterprise
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;