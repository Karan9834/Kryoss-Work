import React from "react";
import {
  Shield,
  Zap,
  BarChart3,
  Clock,
  Database,
  Users,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Enterprise Security",
      desc: "Advanced encryption and compliance-ready systems to keep your data safe with bank-grade protection.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Zap,
      title: "Automation First",
      desc: "Automate repetitive tasks and boost productivity across operations with intelligent workflows.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50"
    },
    {
      icon: BarChart3,
      title: "Real-Time Insights",
      desc: "Make smarter decisions with powerful analytics and interactive dashboards that update instantly.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Clock,
      title: "Time Saving",
      desc: "Reduce manual effort and speed up workflows with smart processes that work for you 24/7.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: Database,
      title: "Centralized System",
      desc: "Manage all business operations from one unified platform with complete visibility and control.",
      gradient: "from-amber-500 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      desc: "Enable seamless communication and coordination across teams with built-in collaboration tools.",
      gradient: "from-rose-500 to-red-500",
      bgGradient: "from-rose-50 to-red-50"
    }
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-blue-50/50 via-white to-blue-50/30 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Floating Blue Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl"></div>
      
      {/* Decorative Particles */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-400 rounded-full"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-indigo-400 rounded-full"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
      
      {/* 🔝 Premium Top Wave - Blue Theme */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-auto min-h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#gradient-top-blue)" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
          <defs>
            <linearGradient id="gradient-top-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6"/>
              <stop offset="100%" stopColor="#8b5cf6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200/50 shadow-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              Performance & Reliability
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full my-6"></div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Everything you need to scale your business with confidence and efficiency
          </p>
        </div>

        {/* Grid - Each Card Different Color */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card Container */}
                <div className="relative h-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent">
                  
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px' }}>
                    <div className="absolute inset-0 bg-white rounded-2xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-6 z-10">
                    {/* Icon with Card's Gradient */}
                    <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r ${item.gradient} mb-5 shadow-lg transform group-hover:scale-110 transition-all duration-300`}>
                      <Icon className="text-white w-7 h-7" />
                    </div>

                    {/* Title with Hover Gradient */}
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:bg-gradient-to-r ${item.gradient} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Decorative Bottom Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                  
                  {/* Glow Effect with Card's Color */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 🔻 Premium Bottom Wave - Blue Theme */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180">
        <svg className="relative block w-full h-auto min-h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="url(#gradient-bottom-blue)" fillOpacity="0.4" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,160C960,149,1056,171,1152,186.7C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
          <defs>
            <linearGradient id="gradient-bottom-blue" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6"/>
              <stop offset="100%" stopColor="#3b82f6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;