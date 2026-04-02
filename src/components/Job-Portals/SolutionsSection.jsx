import React, { useEffect, useRef, useState } from "react";
import { Sparkles, CheckCircle, Zap, TrendingUp, Users, Award, Clock, Target, Rocket } from "lucide-react";
import sol1 from "../../assets/Job-Portals/sol1.png"
import sol2 from "../../assets/Job-Portals/sol2.png"
import sol3 from "../../assets/Job-Portals/sol3.png"
import sol4 from "../../assets/Job-Portals/sol4.png"
import sol5 from "../../assets/Job-Portals/sol5.png"

const SolutionsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const solutionRefs = useRef([]);

  const solutions = [
    {
      id: 1,
      title: "AI-Powered Job Matching",
      description: "Our advanced AI algorithm analyzes your skills, experience, and preferences to match you with the perfect job opportunities. Get personalized recommendations that align with your career goals with 98% accuracy and real-time updates.",
      image: sol1,
      direction: "left",
      icon: <Zap className="w-6 h-6" />,
      hoverEffect: "from-blue-500 to-indigo-600",
    },
    {
      id: 2,
      title: "Streamlined Recruitment",
      description: "For employers, our platform simplifies the hiring process with automated screening, interview scheduling, and candidate tracking. Find the best talent 50% faster with our comprehensive recruitment tools.",
      image: sol2,
      direction: "right",
      icon: <TrendingUp className="w-6 h-6" />,
      hoverEffect: "from-indigo-500 to-purple-600",
    },
    {
      id: 3,
      title: "Career Development Hub",
      description: "Access expert resources, courses, and mentorship programs to advance your career. From resume building to interview preparation, get 1-on-1 mentorship and professional guidance to accelerate your growth.",
      image: sol3,
      direction: "left",
      icon: <Award className="w-6 h-6" />,
      hoverEffect: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      title: "Employer Branding Solutions",
      description: "Build your company's reputation and attract top talent with our employer branding tools. Showcase your culture, values, and career opportunities to stand out in the competitive job market.",
      image: sol4,
      direction: "right",
      icon: <Users className="w-6 h-6" />,
      hoverEffect: "from-pink-500 to-rose-600",
    },
    {
      id: 5,
      title: "Analytics & Insights",
      description: "Make data-driven decisions with comprehensive analytics. Track job postings, applicant metrics, and market trends to optimize your hiring strategy with real-time dashboards and performance metrics.",
      image: sol5,
      direction: "left",
      icon: <Clock className="w-6 h-6" />,
      hoverEffect: "from-rose-500 to-orange-600",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      solutionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      
      {/* ===== Blue Waves at Top ===== */}
      <div className="absolute top-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.08"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* ===== Background Elements ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ===== HEADER SECTION ===== */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-4 border border-blue-200">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">Our Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            for Every Need
          </h2>
          
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Discover how our platform can transform your hiring and job search experience.
          </p>
        </div>

        {/* ===== SOLUTIONS LIST with Scroll-Triggered Animated Line ===== */}
        <div className="relative">
          {/* Continuous Animated Vertical Line - Scroll Triggered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full hidden lg:block">
            {/* Base Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-gray-200 to-blue-200"></div>
            
            {/* Animated Progress Line */}
            <div 
              className="absolute left-0 w-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 transition-all duration-500 ease-out"
              style={{
                height: `${((activeIndex + 1) / solutions.length) * 100}%`,
                boxShadow: "0 0 10px rgba(59,130,246,0.5)"
              }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg animate-pulse"></div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-400/20 via-indigo-400/20 to-purple-400/20 blur-md"></div>
          </div>

          {/* Solutions */}
          <div className="space-y-24">
            {solutions.map((solution, index) => (
              <div
                key={solution.id}
                ref={(el) => (solutionRefs.current[index] = el)}
                className="relative group"
              >
                {/* Timeline Dot - Changes color when active */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-white shadow-lg hidden lg:block z-20 transition-all duration-300 ${
                  activeIndex >= index 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 scale-125" 
                    : "bg-gray-300"
                }`}>
                  <div className={`absolute inset-0 rounded-full animate-ping ${
                    activeIndex === index ? "bg-blue-400" : "hidden"
                  }`}></div>
                </div>
                
                {/* Alternating Layout */}
                <div className={`flex flex-col ${solution.direction === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  
                  {/* Image Side with Hover Effect */}
                  <div className="flex-1 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl group/image">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-[400px] object-fit transition-all duration-700 group-hover/image:scale-110 group-hover/image:rotate-1"
                      />
                      {/* Gradient Overlay on Hover */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${solution.hoverEffect} opacity-0 group-hover/image:opacity-30 transition-opacity duration-500`}></div>
                      
                      {/* Shine Effect on Hover */}
                      <div className="absolute inset-0 translate-x-[-100%] group-hover/image:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"></div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all duration-500"></div>
                  </div>

                  {/* Content Side with Hover Effect */}
                  <div className="flex-1 transform transition-all duration-500 group-hover:translate-x-2">
                    {/* Icon Badge - Animates on Hover */}
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full mb-6 border border-blue-200 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg`}>
                      <div className={`text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                        {solution.icon}
                      </div>
                      <span className="text-blue-700 font-semibold text-sm">Solution {solution.id}</span>
                    </div>

                    {/* Title with Gradient on Hover */}
                    <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transition-all duration-500 group-hover:bg-gradient-to-r ${solution.hoverEffect} group-hover:bg-clip-text group-hover:text-transparent`}>
                      {solution.title}
                    </h3>

                    {/* Description with Hover Effect */}
                    <p className="text-gray-600 text-lg leading-relaxed transition-all duration-500 group-hover:text-gray-800">
                      {solution.description}
                    </p>

                    {/* Decorative Underline on Hover */}
                    <div className={`w-0 h-1 bg-gradient-to-r ${solution.hoverEffect} mt-4 rounded-full group-hover:w-24 transition-all duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Blue Waves at Bottom ===== */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 80" className="w-full">
          <path
            fill="#3b82f6"
            fillOpacity="0.05"
            d="M0,32L80,37.3C160,43,320,53,480,48C640,43,800,21,960,21.3C1120,21,1280,43,1360,53.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default SolutionsSection;