import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

// You can import your technology logos or use CDN URLs
const techStack = [
  {
    category: "Frontend",
    technologies: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ]
  },
  {
    category: "Mobile",
    technologies: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "iOS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Android", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" }
    ]
  },
  {
    category: "DevOps & Cloud",
    technologies: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
    ]
  }
];

const TechStackSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Orange Background Accents */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-50 rounded-full text-sm font-medium text-orange-600 border border-orange-200 mb-4">
              Powered By
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built with modern, scalable technologies to ensure performance, security, and reliability
            </p>
          </motion.div>

          {/* Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Category Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-orange-200">
                  {category.category}
                </h3>

                {/* Technologies */}
                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      {/* Logo */}
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg p-1 group-hover:scale-110 transition-transform">
                        <img 
                          src={tech.logo} 
                          alt={tech.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      
                      {/* Name */}
                      <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decorative Element */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center items-center gap-2 mt-12 text-sm text-gray-500"
          >
            <Code2 className="w-4 h-4 text-orange-500" />
            <span>Modern, scalable, and production-ready architecture</span>
            <Sparkles className="w-4 h-4 text-orange-500" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;