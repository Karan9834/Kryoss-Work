// src/pages/products/Apex-ERP/section/AboutUs.jsx
import React from "react";
import { 
  Target, 
  Eye, 
  Shield, 
  TrendingUp, 
  Users, 
  Award,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  Clock
} from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative bg-white px-6 md:px-12 py-16 md:py-20 overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0">
        {/* Soft Light Decorations */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-50/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-50/60 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-50/50 rounded-full blur-3xl"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">About Apex ERP</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Powering Financial Excellence
            <span className="block text-emerald-600">Since 2018</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're on a mission to transform how businesses manage their financial operations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              Founded with a vision to democratize enterprise technology, <span className="font-semibold text-emerald-600">Apex ERP</span> has grown into a trusted partner for businesses worldwide. Our platform combines cutting-edge technology with deep financial expertise to deliver unparalleled value.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Every solution we deliver undergoes rigorous testing and validation, ensuring our clients receive accurate, reliable, and actionable insights. We believe in the power of data to drive better financial decisions and create lasting value.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center p-3 rounded-xl bg-gray-50">
                <div className="text-2xl font-bold text-emerald-600">2018</div>
                <div className="text-xs text-gray-500">Founded</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-gray-50">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-xs text-gray-500">Enterprise Clients</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-gray-50">
                <div className="text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-xs text-gray-500">Support</div>
              </div>
            </div>
            
            {/* Key Values */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Dedicated Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-gray-600">Global Operations</span>
              </div>
            </div>
          </div>
          
          {/* RIGHT - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Apex ERP Team"
                className="w-full h-[280px] md:h-[320px] object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-3 -right-3 w-20 h-20 border-r-2 border-b-2 border-emerald-200 rounded-br-xl"></div>
            <div className="absolute -top-3 -left-3 w-20 h-20 border-l-2 border-t-2 border-sky-200 rounded-tl-xl"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-50 to-white border border-emerald-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To empower businesses with intelligent ERP solutions that streamline operations, 
              drive growth, and deliver measurable results.
            </p>
          </div>
          
          <div className="p-6 rounded-xl bg-gradient-to-br from-sky-50 to-white border border-sky-100">
            <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-sky-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the world's most trusted financial management platform, 
              empowering organizations of all sizes to achieve peak performance.
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-gray-500">Best ERP 2024</span>
          </div>
          <div className="w-px h-3 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-gray-500">ISO 27001 Certified</span>
          </div>
          <div className="w-px h-3 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-gray-500">500+ Enterprise Clients</span>
          </div>
          <div className="w-px h-3 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-emerald-500" />
            <span className="text-xs text-gray-500">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;