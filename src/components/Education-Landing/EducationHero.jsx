import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Users } from 'lucide-react';
import heroImg from '../../assets/educationlanding-img/educationlandinghero.webp';

const EducationHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-br from-[#F0F4FF] via-[#F8FAFC] to-[#F0FFF4] overflow-hidden flex items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-200/40 rounded-full blur-[120px] -mr-64 -mt-64 opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-100/40 rounded-full blur-[100px] -ml-32 -mb-32 opacity-50"></div>

      {/* Floating Icons */}
      <div className="absolute top-24 left-4 lg:top-20 lg:left-10 p-3 lg:p-4 bg-white rounded-2xl shadow-xl animate-float text-indigo-600 z-20">
        <BookOpen size={24} className="lg:w-[30px] lg:h-[30px]" />
      </div>
      <div className="absolute bottom-32 right-4 lg:bottom-40 lg:right-10 p-3 lg:p-4 bg-white rounded-2xl shadow-xl animate-float-delayed text-teal-600 z-20">
        <GraduationCap size={28} className="lg:w-[35px] lg:h-[35px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-20">

        {/* Left Content */}
        <div className="text-left space-y-8 animate-fadeInLeft">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-indigo-50">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-widest">Future of Learning</span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-semibold text-[#1A1C2C] leading-[1.2]">
            Empower Minds with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">Education App</span> Solutions
          </h1>

          <p className="text-[#4A4B5E] text-lg lg:text-xl max-w-xl leading-relaxed">
            Transform traditional learning into an interactive digital experience.
            Our solutions offer seamless student engagement, expert tutoring, and effortless management.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => document.getElementById('education-products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-teal-500 text-white font-bold rounded-full shadow-xl shadow-indigo-200 hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Our Products
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-3 px-6 py-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">
                    <Users size={16} />
                  </div>
                ))}
              </div>
              <span className="text-sm font-semibold text-gray-600">10k+ Active Students</span>
            </div>
          </div>
        </div>

        {/* Right Content - Image Placeholder */}
        <div className="relative flex justify-center items-center animate-fadeInRight">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-teal-400 rounded-[50px] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <img
              src={heroImg}
              alt="Education App Hero"
              className="w-[450px] h-[450px] object-contain relative z-10 drop-shadow-2xl group-hover:rotate-2 transition-transform duration-700"
            />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 6s ease-in-out 3s infinite; }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default EducationHero;
