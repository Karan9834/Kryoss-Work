import React from 'react'
import { 
  Award, 
  Clock, 
  Users, 
  Rocket, 
  Shield, 
  Headphones,
  CheckCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: "10+ Years of Excellence",
      description: "Over a decade of experience delivering high-quality digital solutions to businesses worldwide.",
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600"
    },
    {
      icon: Users,
      title: "Expert Team of 40+",
      description: "Dedicated professionals including developers, designers, and strategists ready to bring your vision to life.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      icon: Rocket,
      title: "250+ Projects Delivered",
      description: "Successfully delivered projects across 70+ countries with proven track record of excellence.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with international security standards for your peace of mind.",
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support and dedicated account managers for seamless operations.",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600"
    },
    {
      icon: Headphones,
      title: "Client-Centric Approach",
      description: "We prioritize your needs with personalized solutions and transparent communication throughout.",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600"
    }
  ]

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />
        
        {/* Soft gradient orbs - Purple theme */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-100/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-100/10 rounded-full blur-3xl" />
        
        {/* Decorative dots - Purple theme */}
        <div className="absolute top-20 left-10 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-indigo-400 rounded-full opacity-30" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-40" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Purple theme */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-3 h-3 text-purple-500" />
            <span className="text-purple-600 text-xs font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why We Are the{' '}
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Best Choice
            </span>{' '}
            for Your Digital Solution?
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
          
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover what makes us the trusted partner for businesses worldwide
          </p>
        </div>

        {/* Premium Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Premium Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${reason.color} opacity-5 rounded-bl-2xl`} />
                </div>
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-xl ${reason.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${reason.textColor}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {reason.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
                
                {/* Decorative Line */}
                <div className={`mt-4 w-12 h-0.5 bg-gradient-to-r ${reason.color} rounded-full group-hover:w-20 transition-all duration-300`} />
                
                {/* Checkmark Badge */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">98% Client Satisfaction</div>
              <div className="text-xs text-gray-500">Based on 200+ reviews</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">4-6 Week Delivery</div>
              <div className="text-xs text-gray-500">Average project timeline</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm font-semibold text-gray-900">Dedicated Support</div>
              <div className="text-xs text-gray-500">24/7 assistance available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs