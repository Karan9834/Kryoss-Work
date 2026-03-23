import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      title: "Lightning Fast Delivery",
      description: "Average delivery time under 30 minutes with real-time tracking from kitchen to your doorstep.",
      stat: "30 min",
      statLabel: "Avg Delivery",
      color: "from-orange-500 to-red-500",
      bg: "bg-orange-50"
    },
    {
      id: 2,
      title: "Quality Guaranteed",
      description: "Every meal is carefully prepared and quality checked to ensure freshness and taste.",
      stat: "100%",
      statLabel: "Satisfaction",
      color: "from-emerald-500 to-teal-500",
      bg: "bg-emerald-50"
    },
    {
      id: 3,
      title: "Wide Restaurant Network",
      description: "Access 1000+ restaurants ranging from local favorites to premium dining experiences.",
      stat: "1000+",
      statLabel: "Restaurants",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50"
    },
    {
      id: 4,
      title: "Best Price Promise",
      description: "Enjoy exclusive discounts and deals with maximum savings on every order.",
      stat: "50%",
      statLabel: "Savings",
      color: "from-purple-500 to-pink-500",
      bg: "bg-purple-50"
    },
    {
      id: 5,
      title: "24/7 Support",
      description: "Our support team is always available to assist you anytime, anywhere.",
      stat: "24/7",
      statLabel: "Support",
      color: "from-amber-500 to-orange-500",
      bg: "bg-amber-50"
    },
    {
      id: 6,
      title: "Easy Reordering",
      description: "Reorder your favorite meals instantly with just one click.",
      stat: "1-Click",
      statLabel: "Reorder",
      color: "from-rose-500 to-red-500",
      bg: "bg-rose-50"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            <span className="text-gray-900">Why Choose </span>
            <span className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
              Us
            </span>
          </h2>
          <p className="text-gray-500 mt-4">
            Experience food delivery like never before
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item) => (
            <div
              key={item.id}
              className={`group relative p-8 rounded-3xl ${item.bg} border border-white/60 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2`}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition`}></div>

              {/* Icon */}
              <div className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-md mb-6 group-hover:scale-110 transition`}>
                ⚡
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Stat */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-semibold shadow`}>
                <span>{item.stat}</span>
                <span className="text-sm opacity-90">{item.statLabel}</span>
              </div>

              {/* Glow */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 blur-2xl transition`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;