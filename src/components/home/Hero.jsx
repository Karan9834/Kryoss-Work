import { ArrowRight, Star } from "lucide-react";

const reviewBadges = [
  {
    name: "Google Review",
    rating: "4.9",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    border: "border-orange-500/30",
    color: "text-orange-600"
  },
  {
    name: "Goodfirm Review",
    rating: "4.9",
    logo: "https://cdn.iconscout.com/icon/free/png-256/free-goodfirms-logo-icon-download-in-svg-png-gif-file-formats--brand-brands-pack-logos-icons-2630044.png",
    border: "border-blue-500/30",
    color: "text-blue-600"
  },
  {
    name: "Clutch Review",
    rating: "4.9",
    logo: "https://clutch.co/sites/all/themes/clutch/logo.svg",
    border: "border-red-500/30",
    color: "text-red-600"
  },
  {
    name: "Trustpilot Review",
    rating: "4.3",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968936.png",
    border: "border-green-500/30",
    color: "text-green-600"
  }
];


const floatingTags = [
  { label: "Enterprise Solutions", icon: "🏢" },
  { label: "Urban E-Commerce", icon: "🛒" },
  { label: "On-Demand Apps", icon: "📱" },
  { label: "Custom Development", icon: "⚙️" },
  { label: "Digital Products", icon: "💡" },
  { label: "Software Consultancy", icon: "🤝" }];


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden py-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-full mx-auto px-4 sm:px-10 lg:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:max-w-2xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              <span className="text-sm font-semibold text-gray-700">Digital Solutions</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl lg:text-[48px] font-semibold text-gray-900 leading-[1.1] tracking-tight">
              Transforming Ideas With <br />
              <span className="text-primary">Product Engineering</span>
            </h1>

            <p className="text-[15px] lg:text-[16px] text-gray-600 font-normal leading-[1.5] max-w-xl">
              As a leading clone app development company, we provide scalable product engineering services & deliver ready-to-launch or custom app, Website & Software for diverse industries. Our high-performance enterprise solutions are tailored to your business needs, driving efficiency and sustainable growth.
            </p>

            {/* CTA */}
            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-bold text-[16px] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
              >
                Consult Our Experts
                <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center ml-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
            </div>

            {/* Review Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg pt-4">
              {reviewBadges.map((badge) => (
                <div
                  key={badge.name}
                  className={`flex items-center gap-4 bg-white border-2 ${badge.border} rounded-2xl p-4 shadow-sm hover:shadow-md transition-all group`}
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img src={badge.logo} alt={badge.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-bold text-gray-800">{badge.name}</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[15px] font-bold text-gray-900">{badge.rating}</span>
                      <Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side — Hero Image Composition */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[550px]">
              {/* Main Image Mask/Shape */}
              <div className="aspect-square rounded-full border-[1px] border-gray-100 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <img
                    src="https://img.freepik.com/free-photo/diverse-business-people-meeting-modern-office_53876-103975.jpg"
                    alt="Product Engineering"
                    className="w-full h-full object-cover scale-150"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* Floating Tags */}
              {floatingTags.map((tag, i) => {
                const positions = [
                  "top-[5%] left-[5%]",
                  "top-[10%] right-[5%]",
                  "top-[35%] -left-[15%]",
                  "bottom-[20%] -right-[15%]",
                  "bottom-[5%] left-[10%]",
                  "bottom-[0%] right-[30%]"
                ];

                return (
                  <div
                    key={tag.label}
                    className={`absolute ${positions[i]} bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3 border border-gray-50 animate-bounce-slow`}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  >
                    <span className="text-xl bg-gray-50 w-8 h-8 flex items-center justify-center rounded-lg">{tag.icon}</span>
                    <span className="text-[14px] font-bold text-gray-800 whitespace-nowrap">
                      {tag.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>);

}