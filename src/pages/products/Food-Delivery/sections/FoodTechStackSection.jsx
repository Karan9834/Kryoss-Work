import React from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone,
  Server,
  Database,
  Cloud,
  Code2,
  Globe,
  Layout,
  Shield,
  Zap,
  Cpu,
  GitBranch,
  Terminal
} from 'lucide-react';

const FoodTechStackSection = () => {
  const techStack = [
    {
      category: "Frontend",
      icon: Layout,
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" }
      ]
    },
    {
      category: "Mobile Apps",
      icon: Smartphone,
      technologies: [
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "iOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
      ]
    },
    {
      category: "Backend",
      icon: Server,
      technologies: [
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" }
      ]
    },
    {
      category: "Database",
      icon: Database,
      technologies: [
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
      ]
    },
    {
      category: "DevOps & Cloud",
      icon: Cloud,
      technologies: [
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
      ]
    },
    {
      category: "Payments & Maps",
      icon: Globe,
      technologies: [
        { name: "Stripe", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg" },
        { name: "Google Maps", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { name: "PayPal", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg" },
        { name: "Razorpay", logo: "https://razorpay.com/assets/razorpay-logo.svg" }
      ]
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-900 to-black py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Green Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-[120px] opacity-10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-600 rounded-full blur-[120px] opacity-10" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-green-500/10 rounded-full text-sm font-medium text-green-400 border border-green-500/20 mb-4">
              Built With
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Modern{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Scalable, secure, and production-ready technologies powering your food delivery platform
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-700">
                    <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <Icon className="w-5 h-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className="flex items-center gap-2 group/tech"
                      >
                        {/* Logo */}
                        <div className="w-6 h-6 flex items-center justify-center bg-gray-700/50 rounded-md p-1 group-hover/tech:scale-110 transition-transform">
                          <img 
                            src={tech.logo} 
                            alt={tech.name}
                            className="w-4 h-4 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<div class="w-4 h-4 bg-green-500/20 rounded flex items-center justify-center text-[8px] text-green-400">✓</div>';
                            }}
                          />
                        </div>
                        
                        {/* Name */}
                        <span className="text-xs text-gray-300 group-hover/tech:text-green-400 transition-colors">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {[
              { icon: Zap, text: "High Performance" },
              { icon: Shield, text: "Enterprise Security" },
              { icon: GitBranch, text: "Version Controlled" },
              { icon: Cpu, text: "Scalable Architecture" },
              { icon: Terminal, text: "Clean Code" },
              { icon: Code2, text: "Modular Design" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-1.5 bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-700">
                  <Icon className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-gray-300">{item.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Note */}
          <p className="text-center text-xs text-gray-500 mt-8">
            ⚡ Complete source code included • Fully customizable • Regular updates
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoodTechStackSection;