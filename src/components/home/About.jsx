import { CheckCircle, ArrowRight } from "lucide-react";
import aboutImg from "../../assets/Home/about.png";

const pills = [
  "Customer-Centric Approach",
  "Scalable & Secure Apps",
  "Innovative Solutions",
  "Reliable Digital Partner"
];

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">

      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

        {/* Soft gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl" />

        {/* 🔥 TECHNOLOGY NODES & CONNECTING LINES */}

        {/* Node cluster 1 - Top right */}
        <div className="absolute top-10 right-10 opacity-40">
          <svg width="120" height="120" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="4" fill="#F97316" />
            <circle cx="30" cy="30" r="2" fill="#F59E0B" />
            <circle cx="90" cy="30" r="2" fill="#F97316" />
            <circle cx="30" cy="90" r="2" fill="#F59E0B" />
            <circle cx="90" cy="90" r="2" fill="#F97316" />
            <line x1="60" y1="60" x2="30" y2="30" stroke="#F97316" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="60" y1="60" x2="90" y2="30" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="60" y1="60" x2="30" y2="90" stroke="#F97316" strokeWidth="0.5" strokeDasharray="3,3" />
            <line x1="60" y1="60" x2="90" y2="90" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="3,3" />
          </svg>
        </div>

        {/* Node cluster 2 - Bottom left */}
        <div className="absolute bottom-10 left-10 opacity-30">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="3" fill="#F97316" />
            <circle cx="20" cy="20" r="2" fill="#F59E0B" />
            <circle cx="80" cy="80" r="2" fill="#F97316" />
            <circle cx="20" cy="80" r="2" fill="#F59E0B" />
            <circle cx="80" cy="20" r="2" fill="#F97316" />
            <line x1="50" y1="50" x2="20" y2="20" stroke="#F59E0B" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="80" y2="80" stroke="#F97316" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="20" y2="80" stroke="#F59E0B" strokeWidth="0.5" />
            <line x1="50" y1="50" x2="80" y2="20" stroke="#F97316" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Node cluster 3 - Middle left */}
        <div className="absolute top-1/3 left-5 opacity-25">
          <svg width="80" height="80" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="3" fill="#F97316" />
            <circle cx="15" cy="15" r="1.5" fill="#F59E0B" />
            <circle cx="65" cy="15" r="1.5" fill="#F97316" />
            <circle cx="15" cy="65" r="1.5" fill="#F59E0B" />
            <circle cx="65" cy="65" r="1.5" fill="#F97316" />
            <line x1="40" y1="40" x2="15" y2="15" stroke="#F59E0B" strokeWidth="0.5" strokeDasharray="2,2" />
            <line x1="40" y1="40" x2="65" y2="65" stroke="#F97316" strokeWidth="0.5" strokeDasharray="2,2" />
          </svg>
        </div>

        {/* 🔥 DATA POINTS (representing 250+ projects, 70+ countries) */}
        <div className="absolute top-1/4 right-20 opacity-30">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <div className="w-16 h-px bg-gradient-to-r from-green-500 to-transparent" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <div className="w-24 h-px bg-gradient-to-r from-orange-500 to-transparent" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <div className="w-20 h-px bg-gradient-to-r from-amber-500 to-transparent" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <div className="w-28 h-px bg-gradient-to-r from-blue-500 to-transparent" />
            </div>
          </div>
        </div>

        {/* 🔥 GEOMETRIC POLYGONS */}
        <div className="absolute bottom-1/3 right-10 opacity-15">
          <svg width="60" height="60" viewBox="0 0 100 100">
            <polygon points="50,0 93,25 93,75 50,100 7,75 7,25" fill="none" stroke="#F97316" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/4 opacity-10">
          <svg width="40" height="40" viewBox="0 0 100 100">
            <polygon points="50,10 90,35 90,65 50,90 10,65 10,35" fill="none" stroke="#F59E0B" strokeWidth="1" />
          </svg>
        </div>

        {/* 🔥 CIRCUIT TRACE */}
        <div className="absolute bottom-20 right-32 opacity-20">
          <svg width="150" height="80" viewBox="0 0 150 80">
            <path d="M0,40 L20,40 L30,30 L50,30 L60,20 L80,20 L90,10" stroke="#F97316" strokeWidth="1" fill="none" />
            <circle cx="90" cy="10" r="3" fill="#F97316" />
            <circle cx="20" cy="40" r="2" fill="#F59E0B" />
            <circle cx="50" cy="30" r="2" fill="#F59E0B" />
            <circle cx="80" cy="20" r="2" fill="#F59E0B" />
          </svg>
        </div>

        {/* 🔥 RANDOM MICRO DOTS */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange-400/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}

        {/* 🔥 CONCENTRIC CIRCLES (Global reach) */}
        <div className="absolute top-1/3 right-1/4 opacity-10">
          <div className="w-24 h-24 rounded-full border border-orange-500" />
          <div className="absolute top-4 left-4 w-16 h-16 rounded-full border border-amber-500" />
          <div className="absolute top-8 left-8 w-8 h-8 rounded-full border border-orange-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-600 text-xs font-semibold uppercase tracking-widest">
                About kryossone
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Building Digital Products That{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                Make a Difference
              </span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />

            <p className="text-gray-600 leading-relaxed text-base">
              kryossone is a product engineering company specializing in on-demand app
              development, white-label solutions, and enterprise transformation.
              We've successfully delivered 250+ projects to clients across 70+ countries,
              helping businesses scale and innovate.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Our team of 40+ experts combines deep industry knowledge with cutting-edge technology
              to build scalable, high-performance digital products that actually grow businesses.
            </p>

            {/* Pills */}
            <div className="flex flex-wrap gap-3">
              {pills.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-orange-50 hover:border-orange-200 hover:scale-105 transition-all duration-300 cursor-default"
                >
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span className="text-gray-700 font-medium">{p}</span>
                </div>
              ))}
            </div>
            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-red-500/10 rounded-full blur-2xl" />

            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src={aboutImg}
                alt="kryossone Team"
                loading="lazy"
                className="w-full h-[300px] sm:h-[380px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg px-4 py-2 border-l-4 border-orange-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold text-gray-700">10+ Years of Excellence</span>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-[radial-gradient(#f97316_2px,transparent_2px)] bg-[size:12px_12px] opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
}