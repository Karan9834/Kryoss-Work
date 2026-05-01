import React from 'react'
import { 
  Cpu, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Cpu,
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge AI to automate repetitive tasks and streamline your workflows with intelligent decision-making.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Built on modern cloud infrastructure ensuring 99.9% uptime, automatic scaling, and global accessibility.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Bank-level encryption, SOC2 compliance, and advanced threat protection to keep your data safe.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized for speed with edge computing, CDN delivery, and sub-second response times globally.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart,
      title: "Real-Time Analytics",
      description: "Gain actionable insights with interactive dashboards, custom reports, and predictive analytics.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Built-in collaboration tools, role-based access, and seamless integration with your existing tools.",
      color: "from-rose-500 to-pink-500"
    }
  ]

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60 animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-pulse delay-700" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-40 animate-pulse delay-1500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3 h-3 text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
              Powerful Features
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Discover the powerful features that make our platform the best choice for modern businesses
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} p-3 mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative Line */}
                <div className={`mt-4 w-12 h-0.5 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-20 transition-all duration-300`} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection