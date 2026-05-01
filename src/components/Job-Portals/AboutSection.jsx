import React from "react";
import { CheckCircle, TrendingUp, Award, Users, ArrowRight, Target, Sparkles } from "lucide-react";
import aboutImage from "../../assets/Job-Portals/about.jpg";

const AboutSection = () => {
  return (
    <section className="relative bg-gray-50 py-24 px-6 overflow-hidden">

      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 200" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.1"
            d="M0,128L80,138.7C160,149,320,171,480,170.7C640,171,800,149,960,138.7C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
          <path
            fill="#2563eb"
            fillOpacity="0.1"
            d="M0,160L80,149.3C160,139,320,117,480,117.3C640,117,800,139,960,154.7C1120,171,1280,181,1360,186.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50 to-white"></div>

      {/* Decorative Circles Matching Hero Theme */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      {/* Grid Pattern Matching Hero */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ===== LEFT SIDE - IMAGE (no floating cards) ===== */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image Container with Blue Gradient Border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-blue-100">
              <img
                src={aboutImage}
                alt="Team collaboration in modern office"
                className="w-full h-[500px] object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
                }}
              />
              {/* Overlay Gradient Matching Hero */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-600/10 to-transparent"></div>
            </div>

            {/* Decorative Blue Circles - Kept for aesthetics */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-2xl opacity-30"></div>
          </div>

          {/* ===== RIGHT SIDE - CONTENT ===== */}
          <div className="order-1 lg:order-2">
            {/* Badge Matching Hero Theme */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-6 border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-[12px] font-medium tracking-[0.05em] uppercase">About Our Portal</span>
            </div>

            {/* Section Heading H2 - 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] text-gray-900">
              Helping You Build a{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Brighter Career
              </span>
            </h2>

            {/* Description Text - 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
            <p className="mt-6 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
              We're revolutionizing the way professionals find their dream jobs.
              Our platform connects talented individuals with forward-thinking companies,
              ensuring the perfect match for both sides.
            </p>

            <p className="mt-4 text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-600">
              With cutting-edge AI matching technology and a commitment to transparency,
              we've helped thousands of professionals take the next step in their careers.
            </p>

            {/* Features List */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">AI-powered job matching</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">500+ trusted companies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-blue-600" />
                </div>
                <span className="text-[14px] md:text-[16px] font-normal leading-[1.6] text-gray-700">24/7 career support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Blue Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
          <path
            fill="#2563eb"
            fillOpacity="0.1"
            d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,112C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default AboutSection;