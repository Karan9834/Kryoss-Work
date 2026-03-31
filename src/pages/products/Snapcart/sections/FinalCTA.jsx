import React from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-yellow-500 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">Ready to Get Started?</span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Launch Your E-commerce Store Today
          </h2>

          {/* Description */}
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8">
            Experience the most powerful mobile-focused Laravel e-commerce system. 
            Start building your online empire now!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Live Demo Button */}
            <a
              href="https://preview.codecanyon.net/item/snapcart-mobilefocused-laravel-ecommerce-system/full_screen_preview/62455250"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-3 bg-white text-orange-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Play className="w-4 h-4 mr-2" />
              Live Demo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>

            
          </div>

          {/* Trust Indicator */}
          <div className="mt-8">
            <p className="text-white/80 text-sm">
              Trusted by 500+ businesses • No credit card required • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;