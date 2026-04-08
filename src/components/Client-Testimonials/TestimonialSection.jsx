import React from "react";
import { motion } from "framer-motion";
import { Quote, PlayCircle } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Medyan",
    title: "Food Delivery App Success",
    role: "CEO, Tech Startup",
    image: "https://whitelabelfox.com/assets/images/testimonial/Mr-Medyan.webp",
    text: "Mr. Medyan from Jordan shares his experience working with Kryoss Work after purchasing our food delivery application (Fox-Food) for his business. After collaborating with multiple development companies in the past, he found our approach to be more structured, responsive, and dependable. He highlights our quick response time and clear communication throughout the project. Managing a large logistics-focused operation required a stable and professionally built mobile application. Our team delivered a solution that met his operational needs while maintaining strong performance, usability, and technical reliability.",
    accent: "purple"
  },
  {
    name: "Ms. Emilie",
    title: "Carpool App Revolution",
    role: "Product Manager",
    image: "https://whitelabelfox.com/assets/images/testimonial/Ms-Emilie.webp",
    text: "Ms. Emilie from Costa Rica shares her honest and positive experience working with Kryoss Work for her Carpool App project. She mentions that our pricing was far more competitive compared to other providers, which made it the right choice for launching her carpooling idea in her region. She appreciated how smoothly the entire project was managed — from understanding her requirements to delivering a high-quality, ready-to-launch solution. Our team communicated with her on a daily basis, responded quickly to her questions, and ensured every feature aligned with her expectations.",
    accent: "blue"
  },
  {
    name: "Mr. Tapiwa",
    title: "InDrive Clone Solution",
    role: "Founder",
    image: "https://whitelabelfox.com/assets/images/testimonial/Mr-Tapiwa.webp",
    text: "Mr. Tapiwa from Zimbabwe shares his positive experience collaborating with Kryoss Work for his Fox-Drive (inDrive Clone App) project. He highlights the team’s professionalism, clear communication, and commitment to timely delivery. He appreciated how smoothly the project was handled — from initial setup to final deployment. Our team ensured every feature met his business requirements with full customization and white-label branding. The Fox-Drive app was delivered with essential features like real-time tracking and driver-rider communication tools.",
    accent: "orange"
  },
  {
    name: "Mr. Jacques Rocca Serra",
    title: "Gojek Clone Enterprise App",
    role: "Operations Head",
    image: "https://whitelabelfox.com/assets/images/testimonial/jacques-rocca-serra.webp",
    text: "In this testimonial, Mr. Jacques Rocca Serra shares his smooth and successful experience working with Kryoss Work for his Fox-Jek (Gojek Clone App) project. What makes this testimonial even more special is that Mr. Jacques personally visited our office, giving him direct insight into our development process. He highlights the team's professionalism, responsiveness, and ability to deliver a feature-rich, multi-service super app on time. The Fox-Jek solution included services such as taxi booking, food delivery, and parcel delivery.",
    accent: "teal"
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-900 text-sm font-medium mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-pulse"></span>
            Video Testimonials & Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Real Success <span className="text-purple-600">Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-3xl mx-auto"
          >
            Hear from our visionary clients about their journey with Kryoss Work. We don't just build apps; we forge long-term partnerships.
          </motion.p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-32">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${
                index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-12 items-center`}
            >
              {/* Visual Side */}
              <div className="w-full md:w-1/2 relative group">
                <div className={`absolute -inset-4 bg-gradient-to-tr ${
                  item.accent === 'purple' ? 'from-purple-100 to-pink-100' :
                  item.accent === 'blue' ? 'from-blue-100 to-cyan-100' :
                  item.accent === 'orange' ? 'from-orange-100 to-yellow-100' :
                  'from-teal-100 to-emerald-100'
                } rounded-[2.5rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500 opacity-60`}></div>
                
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                       <PlayCircle size={48} className="fill-white/20" />
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center p-2 hidden lg:flex`}>
                  <div className={`w-full h-full rounded-2xl ${
                    item.accent === 'purple' ? 'bg-purple-50' :
                    item.accent === 'blue' ? 'bg-blue-50' :
                    item.accent === 'orange' ? 'bg-orange-50' :
                    'bg-teal-50'
                  } flex items-center justify-center text-slate-300`}>
                    <Quote size={40} className="opacity-20 translate-y-2" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`h-1 w-12 rounded-full ${
                    item.accent === 'purple' ? 'bg-purple-600' :
                    item.accent === 'blue' ? 'bg-blue-600' :
                    item.accent === 'orange' ? 'bg-orange-600' :
                    'bg-teal-600'
                  }`}></div>
                  <span className={`text-sm font-bold uppercase tracking-widest ${
                    item.accent === 'purple' ? 'text-purple-600' :
                    item.accent === 'blue' ? 'text-blue-600' :
                    item.accent === 'orange' ? 'text-orange-600' :
                    'text-teal-600'
                  }`}>{item.title}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {item.name}
                </h3>
                
                <p className="text-indigo-600 font-semibold text-lg">{item.role}</p>

                <div className="relative">
                  <Quote size={48} className="absolute -top-6 -left-8 text-slate-100 z-0" />
                  <p className="text-slate-600 text-lg leading-relaxed relative z-10 italic">
                    "{item.text}"
                  </p>
                </div>

                <button className={`mt-4 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  item.accent === 'purple' ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/20' :
                  item.accent === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20' :
                  item.accent === 'orange' ? 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg shadow-orange-600/20' :
                  'bg-teal-600 hover:bg-teal-700 text-white shadow-lg shadow-teal-600/20'
                }`}>
                  Read Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;