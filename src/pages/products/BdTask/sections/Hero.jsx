import React from 'react'
import { ArrowRight, Play, CheckCircle, Users, Clock, BarChart, Shield, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-green-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-emerald-400 rounded-full opacity-60 animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-40 animate-pulse delay-1500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
                BDTASK HRM Solution
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                HR Management
              </span>
              <br />
              with BDTASK
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
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">Automated Payroll</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">Attendance Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">Performance Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">Recruitment Portal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">Leave Management</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-gray-300 text-sm">Employee Database</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://preview.codecanyon.net/item/hr-manager-human-resource-management-system-hr-software-hrms/full_screen_preview/20386502"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 transition-all duration-300 text-sm"
              >
                Live Demo
                <Play className="w-3.5 h-3.5" />
              </a>
                    <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
                        <MessageCircle size={18} />
                        Let's Discuss
                    </a>
              
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-600 text-gray-300 rounded-lg font-semibold hover:bg-white/10 hover:border-gray-500 transition-all duration-300 text-sm"
              >
                Contact Sales
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-2xl" />
            
            {/* Main Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="HRM Dashboard"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-4 -left-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-2.5 shadow-xl border border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-green-500/20 flex items-center justify-center flex-wrap gap-4">
                  <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">Today's Attendance</div>
                  <div className="text-xs font-semibold text-white">94% Present</div>
                </div>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -bottom-4 -right-4 bg-gray-800/90 backdrop-blur-sm rounded-lg p-2.5 shadow-xl border border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-wrap gap-4">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-[10px] text-gray-400">New Hires</div>
                  <div className="text-xs font-semibold text-white">+12 This Month</div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-1/2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-md px-2 py-1 shadow-lg">
              <span className="text-white text-[10px] font-semibold">AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero