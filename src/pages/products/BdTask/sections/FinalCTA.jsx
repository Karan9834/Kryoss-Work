import React from 'react'
import { ArrowRight, Play, Sparkles, CheckCircle, Rocket, Shield, Clock } from 'lucide-react'

const FinalCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      
      {/* Premium Background - Green Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-700 to-emerald-800" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        
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
          <span className="bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
            Business?
          </span>
        </h2>

        {/* Description */}
        <p className="text-green-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Join hundreds of satisfied businesses that have already transformed their operations 
          with our cutting-edge solutions. Start your journey today.
        </p>

        {/* Features List */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-200" />
            <span className="text-green-100 text-sm">No Credit Card Required</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-200" />
            <span className="text-green-100 text-sm">Free 14-Day Trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-200" />
            <span className="text-green-100 text-sm">24/7 Support</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* Live Demo Button - External Link */}
          <a
            href="https://preview.codecanyon.net/item/hr-manager-human-resource-management-system-hr-software-hrms/full_screen_preview/20386502"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <Play className="w-5 h-5 group-hover:animate-pulse" />
            Live Demo
          </a>
          
          {/* Contact Sales Button - Internal Link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300 group"
          >
            Contact Sales
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">250+ Projects</div>
              <div className="text-green-200 text-xs">Successfully Delivered</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">99.9% Uptime</div>
              <div className="text-green-200 text-xs">Guaranteed</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">24/7 Support</div>
              <div className="text-green-200 text-xs">Always Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA