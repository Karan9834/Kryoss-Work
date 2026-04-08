import { Link } from 'react-router-dom';
import React from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle,
  Zap,
  ShoppingBag,
  Rocket,
  Shield,
} from "lucide-react";

const FinalCTA = () => {
  const benefits = [
    "Multi-Vendor Support",
    "Mobile-Optimized Design",
    "Secure Payment Gateway",
    "Advanced Analytics",
    "SEO Friendly",
    "24/7 Support",
  ];

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
      
      {/* 🔥 Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Dot Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:25px_25px] opacity-30" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 hover:from-orange-500/10 hover:to-yellow-500/10 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20 transition duration-300">
          
          <div className="text-center space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white text-sm font-semibold">
                Limited Time Offer
              </span>
              <Rocket className="w-4 h-4 text-white" />
            </div>

            {/* Heading */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Ready to Launch Your
                <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  {" "}
                  E-commerce Empire?
                </span>
              </h2>

              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of successful store owners using Snapcart — the most powerful 
                mobile-first e-commerce platform. Start building today!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              
              {/* 🔥 Live Demo */}
              <a
                href="https://preview.codecanyon.net/item/snapcart-mobilefocused-laravel-ecommerce-system/full_screen_preview/62455250"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition duration-300" />
                <Play className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">Live Demo</span>
                <ArrowRight className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition" />
              </a>

              {/* Secondary */}
              <Link to="/company/contact" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Get Started Now
              </Link>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-yellow-400 border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">
                  Trusted by 1000+ businesses
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-gray-400 text-sm">4.9/5 Rating</span>
              </div>

              <div className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">
                  50k+ Products Sold
                </span>
              </div>
            </div>

            {/* Guarantee */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-gray-400 text-xs">
                30-day money-back guarantee • No credit card required • Free installation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default FinalCTA;