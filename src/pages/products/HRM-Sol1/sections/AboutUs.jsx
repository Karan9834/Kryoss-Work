import React from 'react'
import { CheckCircle, Award, Users, Rocket, ArrowRight } from 'lucide-react'

const AboutUs = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        
        {/* Soft gradient orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - IMAGE */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="About KryossWork Team"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-4 border-l-4 border-blue-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+ Years</div>
                  <div className="text-xs text-gray-500">of Excellence</div>
                </div>
              </div>
            </div>

            {/* Floating Dot Pattern */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[radial-gradient(#3b82f6_2px,transparent_2px)] bg-[size:10px_10px] opacity-30" />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-blue-600 text-xs font-semibold uppercase tracking-widest">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              We Build Digital Products That{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Make a Difference
              </span>
            </h2>

            {/* Underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              KryossWork is a product engineering company specializing in on-demand app
              development, white-label solutions, and enterprise transformation.
              We've successfully delivered 250+ projects to clients across 70+ countries,
              helping businesses scale and innovate.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Our team of 40+ experts combines deep industry knowledge with cutting-edge technology
              to build scalable, high-performance digital products that actually grow businesses.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">250+</div>
                <div className="text-xs text-gray-500">Projects Delivered</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                <div className="text-2xl font-bold text-purple-600">70+</div>
                <div className="text-xs text-gray-500">Countries Served</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100">
                <div className="text-2xl font-bold text-blue-600">40+</div>
                <div className="text-xs text-gray-500">Expert Team</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs