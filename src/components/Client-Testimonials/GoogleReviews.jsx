import React from "react";
import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    name: "Mr. Sene",
    date: "13 Jan 2026",
    rating: 4,
    title: "Uber Clone Project Success",
    logo: "https://whitelabelfox.com/assets/images/testimonial/HSI.webp",
    desc: "I worked with Kryoss Work Pvt. Ltd on a ride-hailing project in Africa. The team is very serious, professional, and always attentive. They take the time to understand the project's needs and are constantly available to provide solutions and move things forward.",
  },
  {
    name: "Mr. Stan",
    date: "14 May 2025",
    rating: 5,
    title: "Exceptional Partnership",
    logo: "https://whitelabelfox.com/assets/images/testimonial/mr-stan-icon.webp",
    desc: "Working with Kryoss Work Pvt. Ltd to develop our ride-hailing system has been one of the best decisions we've ever made. From day one, their team went above and beyond to understand our vision, guide us through every step, and deliver a platform that exceeded our expectations.",
  },
  {
    name: "Mr. Jacques Rocca Serra",
    date: "25 April 2025",
    rating: 5,
    title: "Excellent Service Client",
    logo: "https://whitelabelfox.com/assets/images/testimonial/jacques-rocca-serra-icon.webp",
    desc: "Professionnels à l’écoute et réactif, compétences et créativité, tarif raisonnable sans surprise. Mérite les 5 étoiles!! Entreprise à taille humaine avec un excellent service client qui réagi et suit les clients au quotidien.",
  },
  {
    name: "Calvin Mnisi",
    date: "3 September 2023",
    rating: 5,
    title: "Beyond Incredible",
    logo: "https://whitelabelfox.com/assets/images/testimonial/Calvin-Mnisi.webp",
    desc: "I can not say enough great things about WLF. They are absolutely amazing. Viral and Samarth were beyond incredible with our project. I cannot recommend them enough. Best decision for our company.",
  },
  {
    name: "Dridi Melek",
    date: "3 September 2023",
    rating: 5,
    title: "Outstanding Mobile App",
    logo: "https://whitelabelfox.com/assets/images/testimonial/Dridi-Melek.webp",
    desc: "I want to express my utmost satisfaction with this company and their mobile application. The app is outstanding in terms of design and functionality, perfectly meeting my professional needs.",
  },
  {
    name: "Developer EagleSouq",
    date: "3 September 2023",
    rating: 5,
    title: "Highly Recommended",
    logo: "https://whitelabelfox.com/assets/images/testimonial/Developer-EagleSouq.webp",
    desc: "Kryoss Work one of the best companies that I dealt with from my location here in the Middle East. Full commitment at the time of project delivery and very fast maintenance for any new requirements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const GoogleReviews = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4"
            >
              <CheckCircle size={14} />
              Trusted by Businesses Globally
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
            >
              Verified <span className="text-blue-600">Google Reviews</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed"
            >
              Real feedback from real people. We take our reputation seriously and strive to maintain the highest standards of client satisfaction.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-6 bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">4.9</div>
              <div className="flex text-yellow-400 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
            </div>
            <div className="h-10 w-px bg-slate-200"></div>
            <div>
              <div className="text-sm font-bold text-slate-900 whitespace-nowrap">500+ Reviews</div>
              <div className="text-xs text-slate-500">Global Satisfaction</div>
            </div>
          </motion.div>
        </div>

        {/* Standard Grid for Equal Height Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="relative p-8 bg-white rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Review Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                    <img
                      src={review.logo}
                      alt={review.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white rounded-full p-1 border-2 border-white">
                    <CheckCircle size={10} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < review.rating ? "#FACC15" : "none"}
                    className={i < review.rating ? "text-yellow-400" : "text-slate-200"}
                  />
                ))}
              </div>

              {/* Content */}
              <h3 className="font-bold text-slate-900 mb-3 line-clamp-1">
                {review.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
                "{review.desc}"
              </p>

              {/* Genuine Badge - Pushed to bottom */}
              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_Logo.svg" 
                    alt="Google" 
                    className="w-4 h-4"
                  />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Verified Review</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GoogleReviews;