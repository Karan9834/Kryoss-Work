import React from "react";
import { Sparkles, Zap, Shield, Globe, Award, Heart, ChevronRight, Users, Clock, CheckCircle } from "lucide-react";
import about from "../../../../assets/Timestay/2.jpg"

const AboutUs = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 lg:py-28">
      
      {/* Subtle Green Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-50 to-teal-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-teal-50 to-emerald-50 rounded-full blur-3xl opacity-40"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#14b8a608_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 border border-emerald-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 border border-teal-100 rounded-full opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT - IMAGE */}
          <div className="relative order-2 lg:order-1">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-2xl blur-2xl"></div>
            
            {/* Image Container */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-gray-100">
                <img
                  src={about}
                  alt="Team collaboration in modern workspace"
                  className="w-full rounded-xl shadow-lg transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-tr from-emerald-500/10 via-transparent to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT - TEXT with Green Theme */}
          <div className="order-1 lg:order-2">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-6">
              <Heart size={16} className="text-emerald-500" />
              <span className="text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
                About TimeStay
              </span>
            </div>

            {/* Heading with Green Gradient */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Revolutionizing How{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
                Time & Stay Management Works
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              TimeStay is the world's first intelligent time and stay management platform designed for modern hospitality businesses. We combine cutting-edge technology with intuitive workflows to help hotels, co-working spaces, and service providers optimize their operations.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded by hospitality experts and tech innovators, we understand the unique challenges of managing time, bookings, and guest experiences. Our platform empowers over 500 businesses across 40 countries to deliver exceptional service while reducing operational complexity.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;