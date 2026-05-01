import React from 'react'
import { ArrowRight, Play, CheckCircle, MessageCircle } from 'lucide-react'
import hero from "../../../../assets/hrm/1.jpg"
const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Heading - Already has correct typography */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                HR Management
              </span>
              <br />
              with Smart Technology
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed max-w-lg">
              Streamline your HR operations with our all-in-one HRM platform. 
              From recruitment to retirement, manage everything seamlessly with 
              powerful automation and real-time analytics.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300 text-sm">Automated Payroll</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300 text-sm">Attendance Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300 text-sm">Performance Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-500" />
                <span className="text-gray-300 text-sm">Recruitment Portal</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://preview.codecanyon.net/item/hrm-saas-human-resource-management/full_screen_preview/23400912"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 text-sm"
              >
                Live Demo
                <Play className="w-3.5 h-3.5" />
              </a>
              
              <a
                href="/company/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-white/10 hover:border-gray-500 transition-all duration-300 text-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Let's Discuss
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src={hero}
                alt="HRM Dashboard"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero