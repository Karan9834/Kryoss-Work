import {
  Building2,
  ShoppingBag,
  PlayCircle,
  Heart,
  Wheat,
  Truck,
  Car,
  Store,
  Wrench,
  Share2,
  Shield,
  Package
} from
  "lucide-react";

const industries = [
  { label: "Banking & Finance", icon: Building2, color: "text-blue-500", bg: "bg-blue-50" },
  { label: "Hyperlocal Delivery", icon: Package, color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Video Streaming", icon: PlayCircle, color: "text-red-500", bg: "bg-red-50" },
  { label: "Healthcare", icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
  { label: "Agriculture", icon: Wheat, color: "text-green-500", bg: "bg-green-50" },
  { label: "Logistics", icon: Truck, color: "text-purple-500", bg: "bg-purple-50" },
  { label: "Transportation", icon: Car, color: "text-indigo-500", bg: "bg-indigo-50" },
  { label: "Marketplace", icon: Store, color: "text-yellow-500", bg: "bg-yellow-50" },
  { label: "Handyman", icon: Wrench, color: "text-teal-500", bg: "bg-teal-50" },
  { label: "Social Media", icon: Share2, color: "text-sky-500", bg: "bg-sky-50" },
  { label: "Insurance", icon: Shield, color: "text-emerald-500", bg: "bg-emerald-50" },
  { label: "E-Commerce", icon: ShoppingBag, color: "text-rose-500", bg: "bg-rose-50" }];


export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Industries We Serve
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Industry-Focused Digital Solutions for{" "}
            <span className="text-primary italic">Business Success</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We deliver tailored digital solutions across diverse industries, helping businesses
            achieve their unique goals with technology that scales.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {industries.map(({ label, icon: Icon, color, bg }) =>
            <div
              key={label}
              className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all group cursor-pointer">

              <div className={`${bg} p-4 rounded-2xl group-hover:scale-110 transition-all duration-300`}>
                <Icon className={`h-10 w-10 ${color}`} />
              </div>
              <span className="text-xs font-medium text-center text-gray-700 leading-tight">
                {label}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>);

}