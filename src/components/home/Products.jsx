import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const products = [
  {
    id: "delivery",
    label: "Delivery Services",
    heading: "On-Demand Delivery App Solutions",
    description:
      "Launch your own delivery platform with our white-label delivery app solutions. From food to groceries and courier services.",
    features: [
      "Food & Grocery Delivery",
      "Courier & Parcel Service",
      "Pharmacy Delivery",
      "Multi-Vendor Marketplace",
      "Real-Time Tracking",
      "Smart Route Optimization"],

    logos: [
      "/whitelabel-assets/assets/images/products/delivery/swiggy.png",
      "/whitelabel-assets/assets/images/products/delivery/zomato.png",
      "/whitelabel-assets/assets/images/products/delivery/doordash.png",
      "/whitelabel-assets/assets/images/products/delivery/ubereats.png",
      "/whitelabel-assets/assets/images/products/delivery/instacart.png",
      "/whitelabel-assets/assets/images/products/delivery/postmates.png"],

    screenshots: [
      "/whitelabel-assets/assets/images/products/delivery/app1.png",
      "/whitelabel-assets/assets/images/products/delivery/app2.png",
      "/whitelabel-assets/assets/images/products/delivery/app3.png",
      "/whitelabel-assets/assets/images/products/delivery/app4.png",
      "/whitelabel-assets/assets/images/products/delivery/app5.png",
      "/whitelabel-assets/assets/images/products/delivery/app6.png"],

    fallbackScreenshots: [
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=200&q=80",
      "https://images.unsplash.com/photo-1576502200916-3808e07386a5?w=200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=200&q=80"]

  },
  {
    id: "transport",
    label: "Transport Services",
    heading: "Ride-Hailing & Transport App Solutions",
    description:
      "Build your own Uber-like app with our feature-rich transport clone solutions. Support taxis, bikes, carpools and more.",
    features: [
      "Cab & Taxi Booking",
      "Bike Taxi Service",
      "Carpool & Ridesharing",
      "Corporate Rides",
      "Scheduled Bookings",
      "Driver Management System"],

    logos: [
      "/whitelabel-assets/assets/images/products/transport/uber.png",
      "/whitelabel-assets/assets/images/products/transport/lyft.png",
      "/whitelabel-assets/assets/images/products/transport/ola.png",
      "/whitelabel-assets/assets/images/products/transport/grab.png",
      "/whitelabel-assets/assets/images/products/transport/gojek.png",
      "/whitelabel-assets/assets/images/products/transport/rapido.png"],

    screenshots: [
      "/whitelabel-assets/assets/images/products/transport/app1.png",
      "/whitelabel-assets/assets/images/products/transport/app2.png",
      "/whitelabel-assets/assets/images/products/transport/app3.png",
      "/whitelabel-assets/assets/images/products/transport/app4.png",
      "/whitelabel-assets/assets/images/products/transport/app5.png",
      "/whitelabel-assets/assets/images/products/transport/app6.png"],

    fallbackScreenshots: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=200&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80",
      "https://images.unsplash.com/photo-1565793979345-c6a14d1a6e25?w=200&q=80",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=200&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&q=80",
      "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=200&q=80"]

  },
  {
    id: "handyman",
    label: "Handyman Services",
    heading: "On-Demand Home Services App",
    description:
      "Launch your own home services marketplace with plumbers, electricians, cleaners and more at users' fingertips.",
    features: [
      "Multi-Category Services",
      "Service Provider Profiles",
      "In-App Booking & Payment",
      "Live Tracking",
      "Review & Rating System",
      "Subscription Plans"],

    logos: [
      "/whitelabel-assets/assets/images/products/handyman/urbanclap.png",
      "/whitelabel-assets/assets/images/products/handyman/taskrabbit.png",
      "/whitelabel-assets/assets/images/products/handyman/thumbtack.png",
      "/whitelabel-assets/assets/images/products/handyman/handy.png",
      "/whitelabel-assets/assets/images/products/handyman/helpr.png",
      "/whitelabel-assets/assets/images/products/handyman/housejoy.png"],

    screenshots: [
      "/whitelabel-assets/assets/images/products/handyman/app1.png",
      "/whitelabel-assets/assets/images/products/handyman/app2.png",
      "/whitelabel-assets/assets/images/products/handyman/app3.png",
      "/whitelabel-assets/assets/images/products/handyman/app4.png",
      "/whitelabel-assets/assets/images/products/handyman/app5.png",
      "/whitelabel-assets/assets/images/products/handyman/app6.png"],

    fallbackScreenshots: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=200&q=80",
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=200&q=80",
      "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=200&q=80",
      "https://images.unsplash.com/photo-1590430232040-7578c3b95e1b?w=200&q=80",
      "https://images.unsplash.com/photo-1617817546849-a95b54e3f4f7?w=200&q=80"]

  },
  {
    id: "foxjek",
    label: "Super App (Fox-Jek)",
    heading: "Fox-Jek — The Ultimate Super App",
    description:
      "Combine delivery, transport, handyman, and more into one powerful super app. Fox-Jek is your all-in-one digital platform.",
    features: [
      "Multi-Service Integration",
      "Unified User Wallet",
      "Cross-Service Loyalty Program",
      "Real-Time Analytics Dashboard",
      "White-Label Ready",
      "Scalable Architecture"],

    logos: [
      "/whitelabel-assets/assets/images/products/foxjek/logo1.png",
      "/whitelabel-assets/assets/images/products/foxjek/logo2.png",
      "/whitelabel-assets/assets/images/products/foxjek/logo3.png",
      "/whitelabel-assets/assets/images/products/foxjek/logo4.png",
      "/whitelabel-assets/assets/images/products/foxjek/logo5.png",
      "/whitelabel-assets/assets/images/products/foxjek/logo6.png"],

    screenshots: [
      "/whitelabel-assets/assets/images/products/foxjek/app1.png",
      "/whitelabel-assets/assets/images/products/foxjek/app2.png",
      "/whitelabel-assets/assets/images/products/foxjek/app3.png",
      "/whitelabel-assets/assets/images/products/foxjek/app4.png",
      "/whitelabel-assets/assets/images/products/foxjek/app5.png",
      "/whitelabel-assets/assets/images/products/foxjek/app6.png"],

    fallbackScreenshots: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&q=80",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&q=80",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&q=80"],

    dark: true
  },
  {
    id: "specialized",
    label: "Specialized Apps",
    heading: "Niche On-Demand Service Solutions",
    description:
      "Target specific markets with our curated niche app solutions. From wellness and laundry to pet care and vehicle recovery.",
    features: [
      "Massage Therapy App",
      "Laundry & Dry Cleaning",
      "Tow-Truck & Roadside",
      "Dog Walking & Pet Care",
      "Snow Removal & Plowing",
      "Pest Control Solutions"],
    logos: [
      "/whitelabel-assets/assets/images/products/specialized/logo1.png",
      "/whitelabel-assets/assets/images/products/specialized/logo2.png",
      "/whitelabel-assets/assets/images/products/specialized/logo3.png",
      "/whitelabel-assets/assets/images/products/specialized/logo4.png",
      "/whitelabel-assets/assets/images/products/specialized/logo5.png",
      "/whitelabel-assets/assets/images/products/specialized/logo6.png"],
    screenshots: [
      "/whitelabel-assets/assets/images/products/specialized/app1.png",
      "/whitelabel-assets/assets/images/products/specialized/app2.png",
      "/whitelabel-assets/assets/images/products/specialized/app3.png",
      "/whitelabel-assets/assets/images/products/specialized/app4.png",
      "/whitelabel-assets/assets/images/products/specialized/app5.png",
      "/whitelabel-assets/assets/images/products/specialized/app6.png"],
    fallbackScreenshots: [
      "https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?w=200&q=80",
      "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=200&q=80",
      "https://images.unsplash.com/photo-1586191582151-f73972d10737?w=200&q=80",
      "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=200&q=80",
      "https://images.unsplash.com/photo-1517204324032-fb3012de9b59?w=200&q=80",
      "https://images.unsplash.com/photo-1587324438673-56c507c6f085?w=200&q=80"]
  }];


export default function Products() {
  const [active, setActive] = useState("delivery");
  const current = products.find((p) => p.id === active);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Our Products
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Ready-to-Launch <span className="text-primary">White-Label</span> Products
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {products.map((p) =>
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${active === p.id ?
                  "bg-primary text-white border-primary" :
                  "bg-white text-foreground border-border hover:border-primary hover:text-primary"}`
              }>

              {p.label}
            </button>
          )}
        </div>

        {/* Tab Content */}
        <div
          className={`rounded-2xl p-8 grid md:grid-cols-2 gap-10 items-start ${current.dark ? "bg-[#1a1a1a]" : "bg-orange-50 border border-orange-100"}`
          }>

          {/* Left */}
          <div className="space-y-5">
            <h3
              className={`text-2xl font-bold ${current.dark ? "text-white" : "text-foreground"}`
              }>

              {current.heading}
            </h3>
            <p className={current.dark ? "text-white/70" : "text-muted-foreground"}>
              {current.description}
            </p>
            <ul className="space-y-2">
              {current.features.map((f) =>
                <li key={f} className="flex items-center gap-2">
                  <CheckCircle
                    className={`h-4 w-4 shrink-0 ${current.dark ? "text-primary" : "text-primary"}`
                    } />

                  <span
                    className={`text-sm ${current.dark ? "text-white/80" : "text-foreground"}`
                    }>

                    {f}
                  </span>
                </li>
              )}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors">

              Get This Product <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — Screenshots */}
          <div className="grid grid-cols-3 gap-3">
            {current.screenshots.map((src, i) =>
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-white/20 shadow-md bg-white aspect-[9/19]">

                <img
                  src={src}
                  alt={`App screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    if (!e.currentTarget.dataset.error) {
                      e.currentTarget.dataset.error = "true";
                      e.currentTarget.src = current.fallbackScreenshots[i];
                    }
                  }} />

              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}