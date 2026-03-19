import React from 'react'
import solution1 from "../../assets/Doctor-Health-App/solution1.png"
import solution2 from "../../assets/Doctor-Health-App/solution2.png"
import solution3 from "../../assets/Doctor-Health-App/solution3.jpg"
import solution4 from "../../assets/Doctor-Health-App/solution4.jpg"

const Solutions = () => {
  const solutions = [
    {
      id: 1,
      title: "Virtual Consultations",
      description: "Connect with specialists from anywhere through our secure video platform. No travel, no waiting rooms—just quality healthcare at your fingertips.",
      points: [
        "HD video quality with clear audio",
        "Secure and encrypted connections",
        "Screen sharing for better diagnosis",
        "Record and save consultations"
      ],
      image: solution1,
      imageSide: "right",
      color: "emerald"
    },
    {
      id: 2,
      title: "Emergency Care Access",
      description: "Immediate medical attention when you need it most. Our emergency network ensures you're connected with available doctors within minutes.",
      points: [
        "24/7 emergency hotline",
        "Priority routing to available specialists",
        "Ambulance coordination",
        "Emergency room wait times"
      ],
      image: solution2,
      imageSide: "left",
      color: "amber"
    },
    {
      id: 3,
      title: "Health Monitoring",
      description: "Track your vital signs, medications, and health metrics all in one place. Share real-time data with your doctors for better care.",
      points: [
        "Connect with wearable devices",
        "Medication reminders",
        "Symptom tracking",
        "Progress reports and insights"
      ],
      image: solution3,
      imageSide: "right",
      color: "emerald"
    },
    {
      id: 4,
      title: "Family Health Management",
      description: "Manage your entire family's health from a single dashboard. Perfect for parents caring for children and adults managing elderly parents.",
      points: [
        "Multiple family member profiles",
        "Shared access with doctors",
        "Appointment coordination",
        "Family health history tracking"
      ],
      image: solution4,
      imageSide: "left",
      color: "amber"
    }
  ]

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L30 55 M5 30 L55 30' stroke='%2310B981' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-emerald-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-amber-100 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-200"></div>
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
              Our Solutions
            </span>
            <div className="w-8 h-px bg-amber-200"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Healthcare Solutions
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored approaches to meet your unique healthcare needs, combining technology with compassionate care.
          </p>
        </div>

        {/* Solutions timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-200 via-amber-200 to-emerald-200 hidden lg:block"></div>

          {/* Solution items */}
          <div className="space-y-20 lg:space-y-32">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                className="relative group"
              >
                {/* Timeline dot with hover effect */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 w-4 h-4 rounded-full bg-white border-2 border-emerald-400 z-10 hidden lg:block group-hover:scale-150 group-hover:border-amber-400 transition-all duration-300"></div>
                
                {/* Content grid - alternates left/right */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  solution.imageSide === 'left' ? '' : ''
                }`}>
                  
                  {/* Left side - Content or Image based on alternation */}
                  {solution.imageSide === 'left' ? (
                    <>
                      {/* Image - Left side */}
                      <div className="order-1 group/image">
                        <div className="relative">
                          {/* Hover effect line for image */}
                          <div className={`absolute -inset-1 bg-gradient-to-r from-${solution.color}-200 to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 blur-md transition-opacity duration-500`}></div>
                          
                          {/* Image container */}
                          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform group-hover/image:scale-105 transition-transform duration-500">
                            <div className={`absolute inset-0 bg-gradient-to-tr from-${solution.color}-500/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500`}></div>
                            <img 
                              src={solution.image}
                              alt={solution.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          
                          {/* Floating line effect */}
                          <div className={`absolute top-1/2 -right-4 w-8 h-0.5 bg-${solution.color}-400 transform -translate-y-1/2 opacity-0 group-hover/image:opacity-100 group-hover/image:translate-x-2 transition-all duration-500 hidden lg:block`}></div>
                        </div>
                      </div>

                      {/* Content - Right side */}
                      <div className="order-2 group/content">
                        <div className="relative pl-0 lg:pl-8">
                          {/* Connecting line from timeline to content */}
                          <div className={`absolute left-0 top-8 w-8 h-0.5 bg-${solution.color}-400 opacity-0 group-hover/content:opacity-100 transition-opacity duration-500 hidden lg:block`}></div>
                          
                          {/* Number badge */}
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${solution.color}-50 text-${solution.color}-600 font-bold text-lg mb-6 group-hover/content:scale-110 group-hover/content:rotate-3 transition-all duration-300`}>
                            0{solution.id}
                          </div>
                          
                          <h3 className={`text-3xl font-bold text-gray-900 mb-4 group-hover/content:text-${solution.color}-600 transition-colors duration-300`}>
                            {solution.title}
                          </h3>
                          
                          <p className="text-lg text-gray-600 mb-6">
                            {solution.description}
                          </p>
                          
                          {/* Points list */}
                          <ul className="space-y-3">
                            {solution.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3 group/point">
                                <span className={`inline-flex mt-1 w-5 h-5 rounded-full bg-${solution.color}-100 text-${solution.color}-600 items-center justify-center text-xs group-hover/point:scale-110 transition-transform duration-300`}>
                                  ✓
                                </span>
                                <span className="text-gray-700 group-hover/point:text-gray-900 transition-colors duration-300">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Hover underline effect */}
                          <div className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-${solution.color}-400 group-hover/content:w-full transition-all duration-500`}></div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Content - Left side */}
                      <div className="order-2 lg:order-1 group/content">
                        <div className="relative pr-0 lg:pr-8">
                          {/* Connecting line from timeline to content */}
                          <div className={`absolute right-0 top-8 w-8 h-0.5 bg-${solution.color}-400 opacity-0 group-hover/content:opacity-100 transition-opacity duration-500 hidden lg:block`}></div>
                          
                          {/* Number badge */}
                          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${solution.color}-50 text-${solution.color}-600 font-bold text-lg mb-6 group-hover/content:scale-110 group-hover/content:-rotate-3 transition-all duration-300`}>
                            0{solution.id}
                          </div>
                          
                          <h3 className={`text-3xl font-bold text-gray-900 mb-4 group-hover/content:text-${solution.color}-600 transition-colors duration-300`}>
                            {solution.title}
                          </h3>
                          
                          <p className="text-lg text-gray-600 mb-6">
                            {solution.description}
                          </p>
                          
                          {/* Points list */}
                          <ul className="space-y-3">
                            {solution.points.map((point, idx) => (
                              <li key={idx} className="flex items-start gap-3 group/point">
                                <span className={`inline-flex mt-1 w-5 h-5 rounded-full bg-${solution.color}-100 text-${solution.color}-600 items-center justify-center text-xs group-hover/point:scale-110 transition-transform duration-300`}>
                                  ✓
                                </span>
                                <span className="text-gray-700 group-hover/point:text-gray-900 transition-colors duration-300">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                          
                          {/* Hover underline effect */}
                          <div className={`absolute -bottom-2 right-0 w-0 h-0.5 bg-${solution.color}-400 group-hover/content:w-full transition-all duration-500`}></div>
                        </div>
                      </div>

                      {/* Image - Right side */}
                      <div className="order-1 lg:order-2 group/image">
                        <div className="relative">
                          {/* Hover effect line for image */}
                          <div className={`absolute -inset-1 bg-gradient-to-l from-${solution.color}-200 to-transparent rounded-2xl opacity-0 group-hover/image:opacity-100 blur-md transition-opacity duration-500`}></div>
                          
                          {/* Image container */}
                          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden transform group-hover/image:scale-105 transition-transform duration-500">
                            <div className={`absolute inset-0 bg-gradient-to-tl from-${solution.color}-500/10 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500`}></div>
                            <img 
                              src={solution.image}
                              alt={solution.title}
                              className="w-full h-auto object-cover"
                            />
                          </div>
                          
                          {/* Floating line effect */}
                          <div className={`absolute top-1/2 -left-4 w-8 h-0.5 bg-${solution.color}-400 transform -translate-y-1/2 opacity-0 group-hover/image:opacity-100 group-hover/image:-translate-x-2 transition-all duration-500 hidden lg:block`}></div>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Connecting line between sections (for animation) */}
                {index < solutions.length - 1 && (
                  <div className={`absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0.5 h-16 bg-gradient-to-b from-${solution.color}-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500 hidden lg:block`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-0.5 bg-emerald-200"></div>
            <span className="text-sm text-gray-400">Complete care solutions for every need</span>
            <div className="w-12 h-0.5 bg-amber-200"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions