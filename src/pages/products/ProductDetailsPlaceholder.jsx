import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "./productsData";
import {
  ArrowLeft,
  CheckCircle2,
  Code2,
  Globe,
  Sparkles,
  Zap,
  Users,
  Star,
  ChevronRight,
  Rocket,
  Eye,
  TrendingUp,, MessageCircle
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

// Tech stack logos with brand colors - COMPLETE with all new technologies
const techLogos = {
  // Frontend
  "React Native": { bg: "#61DAFB", color: "#000000", icon: "⚛️" },
  "React": { bg: "#61DAFB", color: "#000000", icon: "⚛️" },
  "React Native (iOS/Android)": { bg: "#61DAFB", color: "#000000", icon: "⚛️" },
  "Flutter": { bg: "#02569B", color: "#FFFFFF", icon: "🦋" },
  "Flutter (Cross-platform)": { bg: "#02569B", color: "#FFFFFF", icon: "🦋" },
  "jQuery": { bg: "#0769AD", color: "#FFFFFF", icon: "🔶" },
  "Bootstrap": { bg: "#7952B3", color: "#FFFFFF", icon: "🅱️" },

  // Backend
  "Node.js": { bg: "#339933", color: "#FFFFFF", icon: "🟢" },
  "Node.js with Express": { bg: "#339933", color: "#FFFFFF", icon: "🟢" },
  "Express": { bg: "#000000", color: "#FFFFFF", icon: "🚂" },
  "Django": { bg: "#092E20", color: "#FFFFFF", icon: "🎸" },
  "Django (Python Backend)": { bg: "#092E20", color: "#FFFFFF", icon: "🎸" },
  "Python": { bg: "#3776AB", color: "#FFFFFF", icon: "🐍" },
  "Laravel": { bg: "#FF2D20", color: "#FFFFFF", icon: "⚡" },
  "PHP": { bg: "#777BB4", color: "#FFFFFF", icon: "🐘" },
  "RESTful API": { bg: "#25A162", color: "#FFFFFF", icon: "🔗" },
  "GraphQL": { bg: "#E10098", color: "#FFFFFF", icon: "📊" },

  // Databases
  "MongoDB": { bg: "#47A248", color: "#FFFFFF", icon: "🍃" },
  "MongoDB for user data": { bg: "#47A248", color: "#FFFFFF", icon: "🍃" },
  "PostgreSQL": { bg: "#336791", color: "#FFFFFF", icon: "🐘" },
  "MySQL": { bg: "#4479A1", color: "#FFFFFF", icon: "🐬" },
  "Redis": { bg: "#DC382D", color: "#FFFFFF", icon: "📀" },
  "Redis for caching & sessions": { bg: "#DC382D", color: "#FFFFFF", icon: "📀" },
  "Elasticsearch": { bg: "#005571", color: "#FFFFFF", icon: "🔍" },

  // Message Queues
  "Apache Kafka": { bg: "#231F20", color: "#FFFFFF", icon: "⚡" },

  // Real-time
  "Socket.io": { bg: "#010101", color: "#FFFFFF", icon: "🔌" },
  "Socket.io for real-time tracking": { bg: "#010101", color: "#FFFFFF", icon: "🔌" },

  // Maps
  "Google Maps API": { bg: "#4285F4", color: "#FFFFFF", icon: "🗺️" },
  "Google Maps APIs": { bg: "#4285F4", color: "#FFFFFF", icon: "🗺️" },
  "OpenStreetMap API": { bg: "#7EBC6F", color: "#FFFFFF", icon: "🗺️" },

  // Payments
  "Stripe": { bg: "#635BFF", color: "#FFFFFF", icon: "💳" },
  "Stripe & PayPal integration": { bg: "#635BFF", color: "#FFFFFF", icon: "💳" },
  "Stripe & PayPal": { bg: "#635BFF", color: "#FFFFFF", icon: "💳" },
  "PayPal": { bg: "#00457C", color: "#FFFFFF", icon: "🅿️" },
  "Razorpay": { bg: "#0B2B4F", color: "#FFFFFF", icon: "💰" },

  // AI/ML
  "TensorFlow Lite": { bg: "#FF6F00", color: "#FFFFFF", icon: "🤖" },

  // Cloud & Auth
  "Firebase": { bg: "#FFCA28", color: "#000000", icon: "🔥" },
  "Firebase Cloud Messaging": { bg: "#FFCA28", color: "#000000", icon: "🔥" },
  "JWT": { bg: "#000000", color: "#FFFFFF", icon: "🔐" },
  "JWT Authentication": { bg: "#000000", color: "#FFFFFF", icon: "🔐" },
  "AWS S3": { bg: "#FF9900", color: "#000000", icon: "☁️" },
  "AWS S3 for media storage": { bg: "#FF9900", color: "#000000", icon: "☁️" },

  // DevOps & CI/CD
  "Docker": { bg: "#2496ED", color: "#FFFFFF", icon: "🐳" },
  "Docker for containerization": { bg: "#2496ED", color: "#FFFFFF", icon: "🐳" },
  "Kubernetes": { bg: "#326CE5", color: "#FFFFFF", icon: "☸️" },
  "Jenkins": { bg: "#D24939", color: "#FFFFFF", icon: "🔧" },
  "GitHub Actions": { bg: "#2088FF", color: "#FFFFFF", icon: "⚙️" },

  // Monitoring
  "Sentry": { bg: "#362D59", color: "#FFFFFF", icon: "📡" },
  "New Relic": { bg: "#008C99", color: "#FFFFFF", icon: "📈" },

  // Default
  "default": { bg: "#6B7280", color: "#FFFFFF", icon: "🔹" }
};
// Vibrant colors for feature cards - each feature gets a unique color
const featureColors = [
  { bg: "from-purple-500 to-purple-600", light: "bg-purple-50", border: "border-purple-200", icon: "bg-purple-500" },
  { bg: "from-blue-500 to-blue-600", light: "bg-blue-50", border: "border-blue-200", icon: "bg-blue-500" },
  { bg: "from-green-500 to-green-600", light: "bg-green-50", border: "border-green-200", icon: "bg-green-500" },
  { bg: "from-pink-500 to-pink-600", light: "bg-pink-50", border: "border-pink-200", icon: "bg-pink-500" },
  { bg: "from-indigo-500 to-indigo-600", light: "bg-indigo-50", border: "border-indigo-200", icon: "bg-indigo-500" },
  { bg: "from-red-500 to-red-600", light: "bg-red-50", border: "border-red-200", icon: "bg-red-500" },
  { bg: "from-yellow-500 to-yellow-600", light: "bg-yellow-50", border: "border-yellow-200", icon: "bg-yellow-600" },
  { bg: "from-teal-500 to-teal-600", light: "bg-teal-50", border: "border-teal-200", icon: "bg-teal-500" },
  { bg: "from-orange-500 to-orange-600", light: "bg-orange-50", border: "border-orange-200", icon: "bg-orange-500" },
  { bg: "from-cyan-500 to-cyan-600", light: "bg-cyan-50", border: "border-cyan-200", icon: "bg-cyan-500" },
  { bg: "from-emerald-500 to-emerald-600", light: "bg-emerald-50", border: "border-emerald-200", icon: "bg-emerald-500" },
  { bg: "from-rose-500 to-rose-600", light: "bg-rose-50", border: "border-rose-200", icon: "bg-rose-500" },
  { bg: "from-amber-500 to-amber-600", light: "bg-amber-50", border: "border-amber-200", icon: "bg-amber-500" },
  { bg: "from-lime-500 to-lime-600", light: "bg-lime-50", border: "border-lime-200", icon: "bg-lime-500" },
  { bg: "from-fuchsia-500 to-fuchsia-600", light: "bg-fuchsia-50", border: "border-fuchsia-200", icon: "bg-fuchsia-500" },
];

const ProductDetailsPlaceholder = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openDemoInNewTab = () => {
    if (product?.demoUrl) {
      window.open(product.demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Get logo style for tech
  const getTechStyle = (tech) => {
    return techLogos[tech] || techLogos["default"];
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 pt-32 pb-20 flex flex-col items-center justify-center text-center px-4 flex-wrap gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-800 mb-4"
        >
          Product Not Found
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/products"
            className="group px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} | Zryoss Solutions</title>
      </Helmet>

      <main className="bg-gradient-to-br from-amber-50/30 via-white to-orange-50/30 min-h-screen">
        {/* Hero Section */}
        <section className="pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Image Container */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                {/* Decorative blur circles */}
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-amber-200 rounded-full blur-3xl opacity-40"></div>
                <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

                {/* Main image */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative rounded-xl overflow-hidden border border-amber-100 shadow-xl mx-auto"
                  style={{ maxWidth: '500px' }}
                >
                  <div className="relative" style={{ paddingBottom: '75%' }}>
                    {!imageLoaded && (
                      <div className="absolute inset-0 bg-amber-100 animate-pulse flex items-center justify-center flex-wrap gap-4">
                        <span className="text-amber-400">Loading...</span>
                      </div>
                    )}
                    <picture>
                      <source srcSet={product.image} type="image/webp" />
                      <img
                        src={product.image}
                        alt={product.name}
                        onLoad={() => setImageLoaded(true)}
                        className={`absolute inset-0 w-full h-full object-fit transition-opacity duration-500 ${imageLoaded ? 'opacity-100' : 'opacity-0'
                          } group-hover:scale-105 transition-transform duration-500`}
                      />
                    </picture>
                  </div>

                  {/* Badge */}
                  <div className="absolute top-3 right-3 bg-white/90 px-3 py-1.5 rounded-full border border-amber-200 shadow-sm">
                    <span className="text-xs font-medium text-amber-700 flex items-center gap-1">
                      <Sparkles size={12} className="text-amber-500" />
                      Premium
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 bg-amber-100 px-3 py-1.5 rounded-full mb-3">
                  <Code2 size={14} className="text-amber-600" />
                  <span className="text-sm font-medium text-amber-700">
                    {product.type}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-gray-800">
                  {product.name}
                </h1>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex gap-3 mb-6">
                  {product.demoUrl && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={openDemoInNewTab}
                      className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg flex items-center gap-2 font-medium shadow-md hover:shadow-lg transition-all"
                    >
                      <Eye size={18} />
                      Live Demo
                    </motion.button>
                  )}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { icon: Star, value: "4.9", label: "Rating" },
                    { icon: Users, value: "10k+", label: "Users" },
                    { icon: TrendingUp, value: "99.9%", label: "Uptime" },
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -2 }}
                      className="bg-white/60 p-2 rounded-lg border border-amber-100"
                    >
                      <stat.icon size={14} className="text-amber-600 mb-1" />
                      <div className="text-base font-bold text-gray-800">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl border border-amber-100 shadow-md"
            >
              <h2 className="text-xl font-bold text-amber-700 mb-2">About</h2>
              <p className="text-gray-600 leading-relaxed">
                {product.about || "This solution helps businesses launch quickly using a modern, scalable architecture."}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Features Grid - DIFFERENT COLORS FOR EACH CARD */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
              Key Features
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {product.features?.map((feature, i) => {
                const colorIndex = i % featureColors.length;
                const colors = featureColors[colorIndex];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    onHoverStart={() => setHoveredFeature(i)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    className={`bg-white p-6 rounded-xl border-2 ${colors.border} shadow-md hover:shadow-xl transition-all relative overflow-hidden`}
                  >
                    {/* Background gradient on hover */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 hover:opacity-5 transition-opacity duration-300`}
                    />

                    <motion.div
                      animate={{
                        scale: hoveredFeature === i ? 1.15 : 1,
                        rotate: hoveredFeature === i ? 5 : 0,
                      }}
                      className={`w-10 h-10 bg-gradient-to-br ${colors.bg} rounded-xl flex items-center justify-center mb-3 shadow-lg`}
                    >
                      <CheckCircle2 size={20} className="text-white" />
                    </motion.div>
                    <p className="font-semibold text-gray-800 text-base">{feature}</p>

                    {/* Decorative dot pattern */}
                    <div className="absolute bottom-2 right-2 opacity-10">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors.bg}`} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works - Now with different colors for each step */}
        {product.steps && (
          <section className="py-10 bg-amber-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                How It Works
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {product.steps.slice(0, 3).map((step, i) => {
                  const colorIndex = i % featureColors.length;
                  const colors = featureColors[colorIndex];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -6 }}
                      className="relative"
                    >
                      <div className={`absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-r ${colors.bg} rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg`}>
                        {i + 1}
                      </div>
                      <div className={`bg-white p-6 rounded-xl border-2 ${colors.border} shadow-md ml-6 hover:shadow-lg transition-all`}>
                        <p className="text-gray-600 text-sm">{step}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack - WITH LOGOS AND BRAND COLORS (unchanged) */}
        {product.techStack && (
          <section className="py-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Technology Stack
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {product.techStack.map((tech, i) => {
                  const style = getTechStyle(tech);
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="flex items-center gap-3 p-4 rounded-xl border shadow-md transition-all"
                      style={{
                        backgroundColor: style.bg,
                        borderColor: style.bg,
                      }}
                    >
                      <span className="text-2xl">{style.icon}</span>
                      <span className="font-medium text-sm" style={{ color: style.color }}>
                        {tech}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Screenshots Gallery */}
        {product.images && product.images.length > 0 && (
          <section className="py-10 bg-amber-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                Gallery
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {product.images.slice(0, 3).map((img, i) => {
                  const colorIndex = i % featureColors.length;
                  const colors = featureColors[colorIndex];

                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className={`group rounded-xl overflow-hidden border-2 ${colors.border} shadow-md hover:shadow-xl transition-all`}
                    >
                      <div className="relative" style={{ paddingBottom: '75%' }}>
                        <picture>
                          <source srcSet={img} type="image/webp" />
                          <img
                            src={img}
                            alt={`Screenshot ${i + 1}`}
                            className="absolute inset-0 w-full h-full object-fit group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </picture>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">
              Ready to Start?
            </h2>
            <p className="text-white/90 mb-6">
              Join hundreds of businesses already using this solution
            </p>

            {product.demoUrl && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={openDemoInNewTab}
                className="px-6 py-3 bg-white text-amber-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Rocket size={18} />
                Try Live Demo
              </motion.button>
            )}
          </div>
        </section>

        {/* Back Button */}
        <motion.div
          className="fixed bottom-4 left-4 z-40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            to="/products"
            className="flex items-center gap-1 px-3 py-2 bg-white border border-amber-200 rounded-full text-amber-700 shadow-sm hover:shadow-md transition-all text-sm"
          >
            <ArrowLeft size={14} />
            <span>Back</span>
          </Link>
        </motion.div>
      </main>
    </>
  );
};

export default ProductDetailsPlaceholder;