import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Shield, TrendingUp, BarChart3, Building2, Sparkles, Wallet, LineChart } from 'lucide-react'
import heroimg from '@/assets/bfsi-finance-img/hero.png'
const Hero = () => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
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
    <section className="relative bg-gradient-to-br from-amber-50/50 via-rose-50/30 to-orange-50/40 px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Warm Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/30 rounded-full blur-3xl"></div>

        {/* Warm Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f59e0b08_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Decorative Elements - Warm Colors */}
        <div className="absolute top-20 left-10 opacity-20">
          <TrendingUp className="w-16 h-16 text-amber-500" strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <BarChart3 className="w-20 h-20 text-rose-400" strokeWidth={1} />
        </div>

        {/* Floating Sparkles */}
        <div className="absolute top-1/4 right-1/4 opacity-30 animate-pulse">
          <Sparkles className="w-8 h-8 text-amber-400" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-200/50 shadow-sm">
              <Shield className="w-4 h-4 text-amber-600" />
              <span className="text-[12px] font-medium tracking-[0.05em] uppercase text-gray-700">Trusted by Leading Financial Institutions</span>
              <Sparkles className="w-3 h-3 text-rose-400" />
            </div>

            {/* H1 - Updated: text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] */}
            <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
              <span className="text-gray-900">Intelligent </span>
              <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 bg-clip-text text-transparent text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em]">
                Financial Intelligence
              </span>
              <br />
              <span className="text-gray-900">for Modern Banking</span>
            </h1>

            {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
            <p className="text-gray-600 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl">
              Transform your financial operations with real-time insights, predictive analytics,
              and enterprise-grade security. Powering decisions for banks, insurers, and investment firms worldwide.
            </p>

            {/* CTA Button - Updated typography */}
            <button
              onClick={handleExploreNow}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 via-rose-500 to-orange-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-[16px] tracking-[0.01em]"
            >
              <span>Explore Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group">
            {/* Glow Effect - Warm */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-rose-500/20 to-orange-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroimg}
                alt="Financial dashboard and analytics"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Gradient Overlay - Warm */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
            </div>

            {/* Decorative Corners - Warm */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-amber-300/50 rounded-br-2xl"></div>
            <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-rose-300/50 rounded-tl-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero