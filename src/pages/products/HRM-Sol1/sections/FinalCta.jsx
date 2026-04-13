import React from 'react'
import { ArrowRight, Play, Sparkles, CheckCircle, Rocket, MessageCircle } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-1500" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-500" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <Sparkles className="w-3 h-3 text-white" />
          <span className="text-white text-xs font-semibold uppercase tracking-widest">
            Ready to Get Started?
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          Ready to Transform Your{' '}
          <span className="bg-gradient-to-r from-purple-200 to-indigo-200 bg-clip-text text-transparent">
            Business?
          </span>
        </h2>

        {/* Description */}
        <p className="text-purple-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Join hundreds of satisfied businesses that have already transformed their operations 
          with our cutting-edge solutions. Start your journey today.
        </p>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-200" />
            <span className="text-purple-100 text-sm">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-200" />
            <span className="text-purple-100 text-sm">Free 14-Day Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-purple-200" />
            <span className="text-purple-100 text-sm">24/7 Support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Live Demo Button */}
          <a
            href="https://preview.codecanyon.net/item/hrm-saas-human-resource-management/full_screen_preview/23400912"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Play className="w-5 h-5 group-hover:animate-pulse" />
            Live Demo
          </a>
          
          {/* Contact Button */}
          <a
            href="/company/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
          >
            <MessageCircle className="w-5 h-5" />
            Let's Discuss
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA