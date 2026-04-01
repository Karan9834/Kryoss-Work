import React from "react";
import { Link } from "react-router-dom";
import prod3 from "../../assets/Products/prod3.png"
import prod4 from "../../assets/Products/prod4.png"
import {
  Shield,
  TrendingUp,
  Sparkles,
  Globe,
  Zap,
  Award
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Ekttor: FinTech Analytics Pro",
    desc: "AI-powered market insights and predictive analytics engine.",
    image: prod3,
    route: "/products/fintech-analytics"
  },
  {
    id: 2,
    title: "TaskHub: Wealth Management Suite",
    desc: "Portfolio optimization and automated client reporting solutions.",
    image: prod4,
    route: "/products/wealth-management"
  }
];

const ProductSection = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden" id="products-section">

      {/* Light Orange Background Decorations */}
      <div className="absolute inset-0">
        {/* Soft Orange Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-50/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-50/60 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-3xl"></div>

        {/* Subtle Orange Wave Pattern */}
        <svg className="absolute top-0 left-0 w-full h-32 opacity-10" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#f97316" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>

        {/* Subtle Orange Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731605_1px,transparent_1px),linear-gradient(to_bottom,#f9731605_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Floating Sparkles */}
        <div className="absolute top-20 right-20 opacity-20">
          <Sparkles className="w-12 h-12 text-amber-400" />
        </div>
        <div className="absolute bottom-20 left-20 opacity-20">
          <TrendingUp className="w-12 h-12 text-orange-400" />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Section Heading in Between */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-orange-400"></div>
            <Sparkles className="w-5 h-5 text-orange-500" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-orange-400"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Financial Intelligence{" "}
            <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>

          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-orange-300"></div>
            <p className="text-gray-600 text-lg">
              Enterprise-grade platforms for modern financial institutions
            </p>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-orange-300"></div>
          </div>
        </div>

        {/* GRID with 2 Products */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto z-10 relative">
          {products.map((product, index) => (
            <div key={index} className="text-center">
              {/* CLICKABLE IMAGE */}
              <Link
                to={product.route}
                className="cursor-pointer group block"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full rounded-xl border-[5px] border-transparent hover:border-orange-500 transition duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.03] object-cover"
                />
              </Link>

              {/* TITLE AND DESCRIPTION */}
              <p className="mt-4 text-sm md:text-base">
                <Link to={product.route} className="text-orange-600 font-semibold hover:underline">
                  {product.title}
                </Link>{" "}
                <span className="text-gray-700">- {product.desc}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge - No Buttons */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 bg-orange-50/30 backdrop-blur-sm border border-orange-100/50 px-8 py-4 rounded-full shadow-sm">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-gray-600">Trusted by 500+ Institutions</span>
            </div>
            <div className="w-px h-4 bg-orange-200"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-gray-600">Bank-Grade Security</span>
            </div>
            <div className="w-px h-4 bg-orange-200"></div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500" />
              <span className="text-xs text-gray-600">24/7 Enterprise Support</span>
            </div>
            <div className="w-px h-4 bg-orange-200"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-orange-500" />
              <span className="text-xs text-gray-600">Global Coverage</span>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-12 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;