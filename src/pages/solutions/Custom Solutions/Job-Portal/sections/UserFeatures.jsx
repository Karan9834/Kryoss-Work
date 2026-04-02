import React from "react";

const UsersFeature = () => {
  const features = [
    {
      title: "Manage Job Seekers",
      description:
        "Admin is allowed to view a list of job seekers along with the activated and deactivated details quickly and speedily.",
      icon: "👥",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Quick and Easy Launch",
      description:
        "An impressive and feature-rich platform is an amazing choice to invest in; you can launch it quickly for the use of employers and job seekers.",
      icon: "🚀",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Hot Job Search",
      description:
        "Job seekers are facilitated with hot job search options helping them to search and apply for the job of their choice through the platform.",
      icon: "🔥",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Job Listings",
      description:
        "Employers can list single or multiple jobs on the platform, making it easier for them to find the best talent for their company.",
      icon: "📋",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Update Job Details",
      description:
        "Employers are allowed to update job details right on the platform. They can update details such as job location, description, etc.",
      icon: "✏️",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Delete Account",
      description:
        "Job seekers and employers can delete their own accounts if it's not in further use easily with simple taps on the platform.",
      icon: "🗑️",
      gradient: "from-rose-500 to-red-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 py-24 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-600 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 text-xs font-semibold text-indigo-200 bg-indigo-950/50 rounded-full border border-indigo-500/30">
            Premium Features
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mt-6">
            Impressive{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Everything you need to run a successful job portal platform
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6"></div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center shadow-lg">
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mt-5">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          <div className="text-center">
            <div className="text-3xl font-bold text-white">10K+</div>
            <div className="text-slate-500 text-sm mt-1">Active Jobs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">5K+</div>
            <div className="text-slate-500 text-sm mt-1">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">50K+</div>
            <div className="text-slate-500 text-sm mt-1">Job Seekers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-slate-500 text-sm mt-1">Success Rate</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default UsersFeature;