import React from 'react'
import { 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart, 
  Users, 
  Sparkles,
  Clock,
  Headphones
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge AI to automate repetitive tasks and streamline your workflows with intelligent decision-making.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Built on modern cloud infrastructure ensuring 99.9% uptime, automatic scaling, and global accessibility.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, SOC2 compliance, and advanced threat protection to keep your data safe.",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with edge computing, CDN delivery, and sub-second response times globally.",
      color: "from-emerald-500 to-green-500"
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Gain actionable insights with interactive dashboards, custom reports, and predictive analytics.",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in collaboration tools, role-based access, and seamless integration with your existing tools.",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient Orbs - Green Theme */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-60 animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-green-400 rounded-full opacity-60 animate-pulse delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-40 animate-pulse delay-1500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
              Powerful Features
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base">
            Discover the powerful features that make our platform the best choice for modern businesses
          </p>
        </div>

        {/* Features Grid - Glassmorphism Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/30 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Glassmorphism Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container */}
                <div className={`relative w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-2.5 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative Line */}
                <div className={`mt-4 w-10 h-0.5 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-16 transition-all duration-300`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection