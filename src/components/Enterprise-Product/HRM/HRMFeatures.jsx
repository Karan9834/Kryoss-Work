import React from "react";
import { Users, Clock, BarChart3, Shield, CreditCard, Sparkles } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    desc: "Easily manage employee data, onboarding, and roles in a centralized system.",
  },
  {
    icon: Clock,
    title: "Attendance Tracking",
    desc: "Track working hours, leaves, and shifts with real-time accuracy.",
  },
  {
    icon: CreditCard,
    title: "Payroll Automation",
    desc: "Automate salary calculations, tax handling, and payslip generation.",
  },
  {
    icon: BarChart3,
    title: "Performance Insights",
    desc: "Analyze employee performance with smart reports and analytics.",
  },
  {
    icon: Shield,
    title: "Secure Data",
    desc: "Ensure enterprise-grade security and compliance for HR data.",
  },
  {
    icon: Sparkles,
    title: "Smart Automation",
    desc: "Reduce manual tasks with AI-powered workflows and automation.",
  },
];

const HRMFeatures = () => {
  return (
    <section className="w-full bg-[#050816] py-24 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-indigo-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADING */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Modern HR Teams
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Everything you need to manage your workforce efficiently — all in one powerful platform.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl border border-white/10 
                           bg-white/5 backdrop-blur-xl 
                           hover:border-purple-400/40 
                           transition duration-300"
              >

                {/* Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 
                                bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl blur-xl"></div>

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl mb-4
                                bg-gradient-to-br from-purple-500 to-indigo-500
                                shadow-[0_0_20px_rgba(139,92,246,0.6)]">
                  <Icon className="text-white" size={20} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default HRMFeatures;