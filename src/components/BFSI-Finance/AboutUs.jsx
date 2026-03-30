import React from 'react'
import { Shield, TrendingUp, Users, Award, Sparkles, Heart, Target, Eye } from 'lucide-react'

const AboutUs = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      
      {/* Orange Wave Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg
            className="relative w-full h-24 md:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#f97316"
              fillOpacity="0.05"
            />
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#f59e0b"
              fillOpacity="0.03"
            />
          </svg>
        </div>
        
        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative w-full h-24 md:h-32"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#f97316"
              fillOpacity="0.05"
            />
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#f59e0b"
              fillOpacity="0.03"
            />
          </svg>
        </div>
        
        {/* Decorative Orange Orbs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-amber-100/30 rounded-full blur-3xl"></div>
        
        {/* Subtle Orange Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9731608_1px,transparent_1px),linear-gradient(to_bottom,#f9731608_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Floating Sparkles */}
        <div className="absolute top-1/3 left-1/4 opacity-20">
          <Sparkles className="w-12 h-12 text-amber-400" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 opacity-20">
          <Heart className="w-12 h-12 text-rose-400" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN - Image (Now on Left) */}
          <div className="relative group order-1">
            {/* Orange Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                alt="Financial team analyzing data"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Gradient Overlay - Orange Theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-transparent"></div>
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg border border-amber-100/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Success Rate</p>
                      <p className="text-lg font-bold text-gray-900">99.9%</p>
                    </div>
                  </div>
                  <div className="w-px h-10 bg-amber-200"></div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Happy Clients</p>
                      <p className="text-lg font-bold text-gray-900">500+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Orange Corners */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-amber-300/50 rounded-br-2xl"></div>
            <div className="absolute -top-3 -left-3 w-24 h-24 border-l-2 border-t-2 border-orange-300/50 rounded-tl-2xl"></div>
            
            {/* Orange Accent Dot */}
            <div className="absolute top-1/2 -right-2 w-3 h-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"></div>
            <div className="absolute bottom-1/3 -left-2 w-2 h-2 rounded-full bg-orange-400"></div>
          </div>
          
          {/* RIGHT COLUMN - Text Content (Now on Right) */}
          <div className="space-y-8 order-2">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></div>
              <span className="text-sm font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent uppercase tracking-wider">
                About Us
              </span>
              <div className="w-8 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500"></div>
            </div>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Redefining{" "}
              <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                Financial Intelligence
              </span>
              <br />
              <span className="text-gray-900">for the Digital Age</span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Founded with a mission to transform financial services through cutting-edge technology, 
              we've built a platform where data meets intelligence. Our commitment to innovation and 
              security has made us a trusted partner for financial institutions worldwide.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Every solution we deliver undergoes rigorous testing and validation, ensuring that our 
              clients receive accurate, reliable, and actionable insights. We believe in the power of 
              data to drive better financial decisions and create lasting value.
            </p>
            
            {/* Stats - Clean and Minimal with Orange Accents */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  2018
                </div>
                <div className="text-sm text-gray-500 mt-1 group-hover:text-orange-600 transition-colors">Founded</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-sm text-gray-500 mt-1 group-hover:text-orange-600 transition-colors">Institutions</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-sm text-gray-500 mt-1 group-hover:text-orange-600 transition-colors">Support</div>
              </div>
            </div>
            
            {/* Key Values */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-600">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-600">Real-time Analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-rose-500" />
                <span className="text-sm text-gray-600">Precision Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-gray-600">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission & Vision Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 pt-8 border-t border-orange-100">
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-orange-50/50 to-amber-50/30 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize financial intelligence by providing institutions with powerful, 
              accessible tools that drive better decision-making and create lasting value.
            </p>
          </div>
          
          <div className="group p-6 rounded-2xl bg-gradient-to-br from-orange-50/50 to-rose-50/30 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-orange-500 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the world's most trusted financial intelligence platform, 
              empowering every institution to make data-driven decisions with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs