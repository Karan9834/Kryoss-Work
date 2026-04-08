import React from 'react'
import { CheckCircle, Award, Users, Rocket, Target, Heart } from 'lucide-react'

const AboutUs = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        
        {/* Soft gradient orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT - IMAGE */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="BDTASK Team"
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-lg p-3 border-l-4 border-green-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-900">10+ Years</div>
                  <div className="text-xs text-gray-500">of Excellence</div>
                </div>
              </div>
            </div>

            {/* Decorative Dot Pattern */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-[radial-gradient(#22c55e_2px,transparent_2px)] bg-[size:10px_10px] opacity-30" />
          </div>

          {/* RIGHT - CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-600 text-xs font-semibold uppercase tracking-widest">
                About BDTASK
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              We Build Digital Products That{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                Make a Difference
              </span>
            </h2>

            {/* Underline */}
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" />

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-base">
              BDTASK is a product engineering company specializing in on-demand app
              development, white-label solutions, and enterprise transformation.
              We've successfully delivered 250+ projects to clients across 70+ countries,
              helping businesses scale and innovate.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Our team of 40+ experts combines deep industry knowledge with cutting-edge technology
              to build scalable, high-performance digital products that actually grow businesses.
            </p>

            {/* Key Points Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Our Mission</h4>
                  <p className="text-gray-500 text-xs">Empower businesses with innovative digital solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Our Values</h4>
                  <p className="text-gray-500 text-xs">Integrity, innovation, and client success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs