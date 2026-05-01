import {
  Truck,
  HeartPulse,
  Store,
  ShieldCheck,
  Landmark,
  Video,
  Leaf,
  Package,
  Wrench,
  Share2,
  Car,
} from "lucide-react";

export default function IndustrySection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="px-4 py-1 text-sm bg-green-100 text-green-600 rounded-full">
            Industry We Serve
          </span>

          <h2 className="text-4xl font-semibold mt-4">
            Versatile White Label{" "}
            <span className="text-green-600">
              Firebase App Development
            </span>{" "}
            Solutions for Every Niche
          </h2>

          <p className="text-gray-500 mt-4">
            Our development expertise spans multiple industries,
            helping businesses launch scalable mobile applications
            tailored to their operational needs.
          </p>

        </div>

        {/* ROW 1 */}

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <Card
            icon={<Truck size={28} />}
            title="Hyperlocal Delivery"
            desc="Build powerful delivery platforms with real-time order tracking, route optimization, and smooth customer experiences."
          />

          <Card
            icon={<HeartPulse size={28} />}
            title="Healthcare"
            desc="Develop healthcare apps for appointments, telemedicine, and patient management with secure medical data handling."
          />

        </div>

        {/* ROW 2 */}

        <div className="grid md:grid-cols-3 gap-8 mb-8">

          <Card
            icon={<Store size={28} />}
            title="Marketplace"
            desc="Launch scalable multi-vendor marketplaces with advanced product discovery, payments, and vendor management."
          />

          <Card
            icon={<ShieldCheck size={28} />}
            title="Insurance"
            desc="Create insurance platforms that simplify policy purchase, claims processing, and customer engagement."
          />

          <Card
            icon={<Landmark size={28} />}
            title="Banking & Finance"
            desc="Design secure fintech applications that support smooth transactions, digital wallets, and financial insights."
          />

        </div>

        {/* ROW 3 */}

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <Card
            icon={<Video size={28} />}
            title="Video Streaming"
            desc="Launch modern streaming apps with adaptive playback, content recommendations, and seamless video delivery."
          />

          <Card
            icon={<Leaf size={28} />}
            title="Agriculture"
            desc="Empower agri-tech businesses with platforms connecting farmers, suppliers, and buyers with digital insights."
          />

        </div>

        {/* ROW 4 */}

        <div className="grid md:grid-cols-2 gap-8 mb-8">

          <Card
            icon={<Package size={28} />}
            title="Logistics"
            desc="Develop logistics platforms that provide shipment tracking, fleet monitoring, and supply chain visibility."
          />

          <Card
            icon={<Wrench size={28} />}
            title="Handyman"
            desc="Create service marketplace apps that help customers easily book local professionals for home services."
          />

        </div>

        {/* ROW 5 */}

        <div className="grid md:grid-cols-2 gap-8">

          <Card
            icon={<Share2 size={28} />}
            title="Social Media"
            desc="Build engaging social platforms with content sharing, messaging, and community interaction."
          />

          <Card
            icon={<Car size={28} />}
            title="Transportation"
            desc="Launch ride-hailing platforms with smart dispatching, driver tracking, and seamless payment systems."
          />

        </div>

      </div>

    </section>
  );
}



function Card({ icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl p-[1px] transition-all duration-300 hover:scale-[1.02]">

      {/* Gradient Border Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-green-400 opacity-0 group-hover:opacity-100 blur-sm transition duration-300"></div>

      {/* Card */}
      <div className="relative bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">

        <div className="flex items-start gap-4">

          {/* Icon */}
          <div className="bg-green-50 p-3 rounded-lg text-green-600 transition-all duration-300 group-hover:bg-green-100 group-hover:scale-110">
            {icon}
          </div>

          {/* Content */}
          <div>
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              {title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {desc}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}