import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950">
      {/* SVG Background Pattern with job-related icons - darker theme */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="jobPattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              {/* Briefcase / Job Bag Icon */}
              <g transform="translate(15, 15)">
                <rect x="0" y="4" width="24" height="18" rx="3" fill="none" stroke="#A78BFA" strokeWidth="1.2" opacity="0.7"/>
                <path d="M6 4V2C6 1 7 0 9 0h6c2 0 3 1 3 2v2" fill="none" stroke="#A78BFA" strokeWidth="1.2" opacity="0.7"/>
                <path d="M0 10h24" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
                <circle cx="12" cy="13" r="2" fill="none" stroke="#A78BFA" strokeWidth="0.8" opacity="0.5"/>
              </g>
              
              {/* Magnifying Glass (Search Job) */}
              <g transform="translate(75, 20)">
                <circle cx="8" cy="8" r="7" fill="none" stroke="#C4B5FD" strokeWidth="1.2" opacity="0.6"/>
                <line x1="13" y1="13" x2="20" y2="20" stroke="#C4B5FD" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/>
              </g>
              
              {/* Resume/Document Icon */}
              <g transform="translate(50, 75)">
                <rect x="0" y="0" width="16" height="22" rx="2" fill="none" stroke="#67E8F9" strokeWidth="1" opacity="0.5"/>
                <line x1="4" y1="6" x2="12" y2="6" stroke="#67E8F9" strokeWidth="0.8" opacity="0.4"/>
                <line x1="4" y1="10" x2="12" y2="10" stroke="#67E8F9" strokeWidth="0.8" opacity="0.4"/>
                <line x1="4" y1="14" x2="10" y2="14" stroke="#67E8F9" strokeWidth="0.8" opacity="0.4"/>
              </g>
              
              {/* Handshake / Networking */}
              <g transform="translate(90, 70)">
                <path d="M2 12L6 8L10 12" fill="none" stroke="#6EE7B7" strokeWidth="1" opacity="0.5"/>
                <path d="M14 12L10 8L6 12" fill="none" stroke="#6EE7B7" strokeWidth="1" opacity="0.5"/>
                <circle cx="6" cy="6" r="3" fill="none" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.4"/>
                <circle cx="10" cy="6" r="3" fill="none" stroke="#6EE7B7" strokeWidth="0.8" opacity="0.4"/>
              </g>
              
              {/* Star / Featured Job */}
              <g transform="translate(25, 95)">
                <polygon points="8,0 10,5 15,5 11,8 12,13 8,10 4,13 5,8 1,5 6,5" fill="none" stroke="#FBBF24" strokeWidth="0.8" opacity="0.6"/>
              </g>
              
              {/* Chart/ Growth */}
              <g transform="translate(85, 40)">
                <rect x="0" y="12" width="5" height="8" fill="none" stroke="#F472B6" strokeWidth="0.8" opacity="0.5"/>
                <rect x="7" y="6" width="5" height="14" fill="none" stroke="#F472B6" strokeWidth="0.8" opacity="0.5"/>
                <rect x="14" y="0" width="5" height="20" fill="none" stroke="#F472B6" strokeWidth="0.8" opacity="0.5"/>
              </g>
              
              {/* User / Candidate */}
              <g transform="translate(0, 40)">
                <circle cx="8" cy="5" r="4" fill="none" stroke="#60A5FA" strokeWidth="0.8" opacity="0.6"/>
                <path d="M1 18C1 12 5 10 8 10s7 2 7 8" fill="none" stroke="#60A5FA" strokeWidth="0.8" opacity="0.6"/>
              </g>
            </pattern>
            
            {/* Second pattern with floating elements */}
            <pattern id="floatingDots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1.5" fill="#A78BFA" opacity="0.4"/>
              <circle cx="25" cy="20" r="1" fill="#C4B5FD" opacity="0.3"/>
              <circle cx="10" cy="35" r="1.2" fill="#67E8F9" opacity="0.35"/>
              <circle cx="35" cy="8" r="0.8" fill="#6EE7B7" opacity="0.3"/>
            </pattern>
          </defs>
          
          {/* Apply the job pattern across the background */}
          <rect width="100%" height="100%" fill="url(#jobPattern)" />
          <rect width="100%" height="100%" fill="url(#floatingDots)" />
        </svg>
      </div>
      
      {/* Dark animated floating shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Medium sized hero section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Small badge / chip - dark theme */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-xs md:text-sm font-medium text-indigo-300 tracking-tight">🔥 10,000+ new opportunities</span>
            </div>

            {/* Main Heading - light text for dark bg */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight md:leading-tight lg:leading-tight">
              Find your{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  dream job
                </span>
                <svg
                  className="absolute bottom-1 left-0 w-full -z-10"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 6.5C70 3.5 160 2 298 6.5"
                    stroke="url(#gradientLine)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    className="opacity-60"
                  />
                  <defs>
                    <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#818CF8" />
                      <stop offset="50%" stopColor="#C084FC" />
                      <stop offset="100%" stopColor="#818CF8" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              with the smartest job portal.
            </h1>

            {/* Description - lighter text */}
            <p className="mt-4 text-base md:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AI-powered matches, instant alerts, and seamless applications — join thousands of professionals who landed their next big role through JobPortal.
            </p>

            {/* Feature list (mini) - dark theme */}
            <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium">
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-slate-300">15k+ companies</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-slate-300">AI smart matching</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs text-slate-300">instant apply</span>
              </div>
            </div>

            {/* Explore Button & Stats row */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0">
                <span>Explore opportunities</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <div className="flex -space-x-2">
                  {['https://randomuser.me/api/portraits/women/68.jpg', 'https://randomuser.me/api/portraits/men/32.jpg', 'https://randomuser.me/api/portraits/women/44.jpg'].map((img, idx) => (
                    <img key={idx} src={img} alt="user" className="w-7 h-7 rounded-full border-2 border-slate-700 object-cover shadow-sm" />
                  ))}
                </div>
                <span className="font-medium text-slate-300 text-sm">+2k+ <span className="text-slate-400">hired this week</span></span>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Main image card with glassy effect - dark theme */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/30 ring-1 ring-white/20 bg-white/5 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=900&fit=crop" 
                  alt="Job portal illustration - professional team meeting" 
                  className="w-full h-auto object-cover scale-105 hover:scale-100 transition-transform duration-700 opacity-90"
                />
                {/* Overlay gradient to blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating stats card (overlay) - dark theme */}
              <div className="absolute -bottom-5 -left-5 md:-left-6 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-xl p-3 flex items-center gap-3 border border-white/20">
                <div className="bg-indigo-500/20 rounded-full p-2">
                  <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Open positions</p>
                  <p className="text-xl font-bold text-white">12,384+</p>
                </div>
              </div>

              {/* Second floating card - top right - dark theme */}
              <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 bg-slate-800/90 backdrop-blur-md rounded-xl shadow-xl p-2.5 flex items-center gap-2 border border-white/20">
                <div className="bg-emerald-500/20 rounded-full p-1.5">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-xs font-medium text-slate-400">match rate</p>
                  <p className="text-base font-bold text-white">94% <span className="text-xs font-normal text-emerald-400">↑12%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;