import React from "react";
import aboutimg from '@/assets/news-magazine-img/about.png';
const AboutUs = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-20 md:py-28 overflow-hidden">

      {/* Wave Decorations */}
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#gradient-wave)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient-wave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="url(#gradient-wave-bottom)"
            opacity="0.1"
          />
          <defs>
            <linearGradient id="gradient-wave-bottom" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Additional Decorative Waves */}
      <div className="absolute top-1/4 right-0 w-64 h-64 opacity-5">
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M0,100 C30,70 50,130 80,100 C110,70 130,130 160,100 C190,70 210,130 240,100"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-0 w-80 h-80 opacity-5">
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M0,100 C30,130 50,70 80,100 C110,130 130,70 160,100 C190,130 210,70 240,100"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Centered Header with Colored Text */}
        <div className="text-center max-w-3xl mx-auto mb-16 order-1 lg:order-2">
          {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            <span className="text-[12px] font-medium tracking-[0.05em] uppercase">
              <span className="text-blue-600">About</span>
              <span className="text-gray-400 mx-1">•</span>
              <span className="text-indigo-600">Us</span>
            </span>
            <div className="w-8 h-[2px] bg-gradient-to-r from-indigo-500 to-blue-500"></div>
          </div>

          {/* H2 Heading - Updated: text-[30px] md:text-[36px] font-bold leading-[1.2] */}
          <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Where Stories
            </span>
            <br />
            <span className="text-gray-900">
              Find Their <span className="text-blue-600 relative">
                Voice
                <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4">
                  <path d="M0,2 L200,2" stroke="url(#gradient-line)" strokeWidth="3" strokeDasharray="5 5" />
                  <defs>
                    <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </span>
          </h2>

          {/* Description Text - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
          <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
            Built on principles of <span className="text-blue-600 font-medium">integrity</span>,
            <span className="text-indigo-600 font-medium"> accuracy</span>, and
            <span className="text-purple-600 font-medium"> innovation</span>
          </p>
        </div>

        {/* Grid Layout - Image Left, Content Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN - Image */}
          <div className="relative order-2 lg:order-1">
            {/* Decorative Wave Behind Image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100/30 to-indigo-100/30 rounded-2xl -z-10"></div>

            <div className="rounded-2xl overflow-hidden shadow-xl relative">
              <img
                src={aboutimg}
                alt="Modern newsroom with journalists at work"
                className="w-full h-auto object-cover"
                loading="lazy"
              />

              {/* Colored Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-indigo-500/5 pointer-events-none"></div>
            </div>

            {/* Decorative Wave Elements */}
            <svg
              className="absolute -bottom-6 -right-6 w-32 h-32 text-blue-200/40"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M10,50 Q30,30 50,50 T90,50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M10,70 Q30,50 50,70 T90,70"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <svg
              className="absolute -top-6 -left-6 w-32 h-32 text-indigo-200/40 rotate-180"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M10,50 Q30,30 50,50 T90,50"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M10,70 Q30,50 50,70 T90,70"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>

          {/* RIGHT COLUMN - Text Content with Colored Highlights */}
          <div className="space-y-8 order-2">
            <div>
              {/* Subheading - Updated: text-[22px] md:text-[24px] font-bold leading-[1.3] */}
              <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.3] mb-3">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Our Mission
                </span>
              </h3>
              {/* Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
              <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                To empower readers with <span className="text-blue-600 font-medium">accurate</span>,
                <span className="text-indigo-600 font-medium"> unbiased</span> news that helps them understand
                the world around them. We're committed to journalistic excellence and
                storytelling that <span className="text-purple-600 font-medium">connects</span>,
                <span className="text-blue-600 font-medium"> informs</span>, and
                <span className="text-indigo-600 font-medium"> inspires</span>.
              </p>
            </div>

            <div>
              {/* Subheading - Updated: text-[22px] md:text-[24px] font-bold leading-[1.3] */}
              <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.3] mb-3">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Our Values
                </span>
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3 group">
                  <span className="text-blue-500 mt-1 text-lg">✦</span>
                  <span className="text-[14px] md:text-[15px] font-normal leading-[1.6]"><strong className="text-gray-800">Truth First:</strong> <span className="text-blue-600">Uncompromising</span> commitment to factual reporting</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-indigo-500 mt-1 text-lg">✦</span>
                  <span className="text-[14px] md:text-[15px] font-normal leading-[1.6]"><strong className="text-gray-800">Diverse Voices:</strong> <span className="text-indigo-600">Amplifying perspectives</span> from around the globe</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-purple-500 mt-1 text-lg">✦</span>
                  <span className="text-[14px] md:text-[15px] font-normal leading-[1.6]"><strong className="text-gray-800">Editorial Independence:</strong> <span className="text-purple-600">Free from external influence</span> or bias</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-cyan-500 mt-1 text-lg">✦</span>
                  <span className="text-[14px] md:text-[15px] font-normal leading-[1.6]"><strong className="text-gray-800">Innovation:</strong> <span className="text-cyan-600">Embracing new ways</span> to tell important stories</span>
                </li>
              </ul>
            </div>

            <div>
              {/* Subheading - Updated: text-[22px] md:text-[24px] font-bold leading-[1.3] */}
              <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.3] mb-3">
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Our Impact
                </span>
              </h3>
              {/* Description - Updated: text-[14px] md:text-[16px] font-normal leading-[1.6] */}
              <p className="text-gray-600 text-[14px] md:text-[16px] font-normal leading-[1.6]">
                Reaching <span className="text-blue-600 font-bold">millions of readers</span> across
                <span className="text-indigo-600 font-bold"> 100+ countries</span>, our journalism has sparked
                meaningful conversations, driven <span className="text-purple-600 font-medium">accountability</span>,
                and helped communities stay informed about the issues that affect their lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;