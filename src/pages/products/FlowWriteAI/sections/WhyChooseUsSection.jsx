import React from "react";
import {
  Shield,
  Zap,
  Sparkles,
  Clock,
  Globe,
  Wand2,
} from "lucide-react";

const WhyChooseWriteFlow = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Advanced AI Engine",
      desc: "Powered by cutting-edge AI to generate high-quality and relevant content instantly.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      desc: "Create content in seconds and boost your productivity like never before.",
      gradient: "from-yellow-400 to-amber-500"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      desc: "Your data is protected with enterprise-grade security and reliability.",
      gradient: "from-yellow-400 to-yellow-500"
    },
    {
      icon: Clock,
      title: "Save Hours of Work",
      desc: "Automate repetitive writing tasks and focus on what truly matters.",
      gradient: "from-amber-400 to-yellow-500"
    },
    {
      icon: Globe,
      title: "Multi-language Support",
      desc: "Generate content in multiple languages to reach a global audience.",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Wand2,
      title: "Custom Tone Control",
      desc: "Adjust tone and style based on your brand voice effortlessly.",
      gradient: "from-orange-400 to-yellow-500"
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-50/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"></div>
      
      {/* Soft Yellow Glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-yellow-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl"></div>
      
      {/* Decorative Particles */}
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-yellow-400 rounded-full"></div>
      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-amber-400 rounded-full"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-200/50 shadow-sm mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-transparent bg-clip-text">
              WriteFlow AI
            </span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 mx-auto rounded-full my-6"></div>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Designed to help businesses and creators generate content faster, smarter, and better
          </p>
        </div>

        {/* GRID - Cards with Shadow and Border */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group transform transition-all duration-500 hover:-translate-y-2"
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-yellow-200">
                  
                  {/* Icon Container with Gradient */}
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
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl`}></div>
                  
                  {/* Subtle Glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Trust Indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-600">10,000+ active users</span>
            </div>
            <div className="w-px h-4 bg-gray-200"></div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9/5 (2.1k reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseWriteFlow;