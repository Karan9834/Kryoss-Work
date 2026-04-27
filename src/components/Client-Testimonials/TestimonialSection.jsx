import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Medyan",
    title: "Food Delivery App Success",
    role: "CEO, Tech Startup",
    image: "https://whitelabelfox.com/assets/images/testimonial/Mr-Medyan.webp",
    text: "Mr. Medyan from Jordan shares his experience working with KryossOne after purchasing our food delivery application. He highlights our quick response time and clear communication throughout the project.",
    rating: 5,
    cardColor: "from-purple-500 to-purple-600",
    badgeColor: "bg-purple-100 text-purple-700 border-purple-200",
    iconColor: "text-purple-200",
    starColor: "fill-purple-400 text-purple-400"
  },
  {
    name: "Ms. Emilie",
    title: "Carpool App Revolution",
    role: "Product Manager",
    image: "https://whitelabelfox.com/assets/images/testimonial/Ms-Emilie.webp",
    text: "Ms. Emilie shares her positive experience and highlights competitive pricing and smooth delivery. Our team communicated daily and ensured every feature aligned with her expectations.",
    rating: 5,
    cardColor: "from-blue-500 to-blue-600",
    badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
    iconColor: "text-blue-200",
    starColor: "fill-blue-400 text-blue-400"
  },
  {
    name: "Mr. Tapiwa",
    title: "InDrive Clone Solution",
    role: "Founder",
    image: "https://whitelabelfox.com/assets/images/testimonial/Mr-Tapiwa.webp",
    text: "Great collaboration experience with clear communication and professionalism. The team ensured every feature met his business requirements with full customization.",
    rating: 5,
    cardColor: "from-emerald-500 to-emerald-600",
    badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
    iconColor: "text-emerald-200",
    starColor: "fill-emerald-400 text-emerald-400"
  },
  {
    name: "Mr. Jacques Rocca Serra",
    title: "Gojek Clone Enterprise App",
    role: "Operations Head",
    image: "https://whitelabelfox.com/assets/images/testimonial/jacques-rocca-serra.webp",
    text: "Smooth and successful experience working with KryossOne. The team delivered a feature-rich, multi-service super app on time with complete professionalism.",
    rating: 5,
    cardColor: "from-orange-500 to-orange-600",
    badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
    iconColor: "text-orange-200",
    starColor: "fill-orange-400 text-orange-400"
  },
  {
    name: "Sarah Johnson",
    title: "E-Learning Platform",
    role: "Education Director",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "The team delivered an exceptional e-learning platform that exceeded our expectations. Students love the intuitive interface and interactive features.",
    rating: 5,
    cardColor: "from-rose-500 to-rose-600",
    badgeColor: "bg-rose-100 text-rose-700 border-rose-200",
    iconColor: "text-rose-200",
    starColor: "fill-rose-400 text-rose-400"
  },
  {
    name: "David Chen",
    title: "Real Estate App",
    role: "Property Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Our real estate app has transformed how we connect with buyers. The features are game-changing for property tours and client engagement.",
    rating: 5,
    cardColor: "from-indigo-500 to-indigo-600",
    badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
    iconColor: "text-indigo-200",
    starColor: "fill-indigo-400 text-indigo-400"
  },
  {
    name: "Maria Garcia",
    title: "Healthcare Platform",
    role: "Medical Director",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The healthcare platform has revolutionized how we manage patient data. Secure, reliable, and user-friendly for both staff and patients.",
    rating: 5,
    cardColor: "from-teal-500 to-teal-600",
    badgeColor: "bg-teal-100 text-teal-700 border-teal-200",
    iconColor: "text-teal-200",
    starColor: "fill-teal-400 text-teal-400"
  },
  {
    name: "James Wilson",
    title: "Logistics Solution",
    role: "Operations Director",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    text: "The logistics solution streamlined our entire supply chain. Real-time tracking and automated dispatch saved us countless hours.",
    rating: 5,
    cardColor: "from-cyan-500 to-cyan-600",
    badgeColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
    iconColor: "text-cyan-200",
    starColor: "fill-cyan-400 text-cyan-400"
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="w-[380px] flex-shrink-0 mx-4 group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-slate-200 transform hover:-translate-y-1">

        {/* TOP SECTION - Different color per card */}
        <div className={`relative h-32 bg-gradient-to-r ${testimonial.cardColor}`}>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 1px)",
            backgroundSize: "20px 20px"
          }}></div>

          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

          {/* PROFILE IMAGE */}
          <div className="absolute -bottom-10 left-6 w-20 h-20 rounded-full border-4 border-white shadow-xl overflow-hidden z-10 bg-white">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/80x80?text=Client";
              }}
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 pt-12">

          {/* STARS - Different color per card */}
          <div className="flex gap-1 mb-3">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} size={16} className={testimonial.starColor} />
            ))}
          </div>

          {/* QUOTE ICON - Different color per card */}
          <Quote size={28} className={`${testimonial.iconColor} mb-3 opacity-60`} />

          {/* TESTIMONIAL TEXT */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-4">
            "{testimonial.text}"
          </p>

          {/* FOOTER */}
          <div className="border-t border-slate-100 pt-4 mt-2">
            <h4 className="font-bold text-slate-900 text-base">{testimonial.name}</h4>
            <p className={`text-xs mt-1 font-medium ${testimonial.badgeColor.split(' ')[0]} ${testimonial.badgeColor.split(' ')[1]}`}>
              {testimonial.role}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${testimonial.badgeColor}`}>
                {testimonial.title}
              </span>
              <ChevronRight size={14} className="text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const duplicated = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">

      {/* Background decorative elements */}
      <div className="relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
          Trusted by 500+ Happy Clients Worldwide
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
        >
          Real Success{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-600">
            Stories
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-lg max-w-2xl mx-auto"
        >
          Hear from our visionary clients who transformed their business with KryossOne.
          We don't just build apps; we forge long-term partnerships.
        </motion.p>
      </div>

      {/* MARQUEE CONTAINER */}
      <div className="relative">

        {/* LEFT FADE */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

        {/* RIGHT FADE */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none"></div>

        {/* FIRST ROW - Left to Right */}
        <div className="flex animate-marquee gap-4 py-6">
          {duplicated.map((t, i) => (
            <TestimonialCard key={`row1-${i}`} testimonial={t} />
          ))}
        </div>

        {/* SECOND ROW - Right to Left (reverse direction) */}
        <div className="flex animate-marquee-reverse gap-4 py-6 mt-4">
          {[...duplicated].reverse().map((t, i) => (
            <TestimonialCard key={`row2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: fit-content;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
          width: fit-content;
        }
        
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;