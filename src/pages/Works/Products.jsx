import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* -----------------------------
   CATEGORY LIST
------------------------------*/

const categories = [
  "Ecommerce Solutions",
  "Taxi & Transportation",
  "Food Delivery Systems",
  "Grocery Delivery",
  "Healthcare Apps",
  "Real Estate Platforms",
  "Education Platforms",
  "On-Demand Services",
  "Business CRM Tools",
  "AI Solutions",
];

/* -----------------------------
   PRODUCT GENERATOR
   creates 10 products per category
   scalable to 200+
------------------------------*/

// const createProducts = () => {
//   let id = 1;
//   const list = [];

//   categories.forEach((cat) => {
//     for (let i = 1; i <= 10; i++) {
//       list.push({
//         id: id++,
//         name: `${cat.split(" ")[0]} Product ${i}`,
//         category: cat,
//         type:
//           i % 4 === 0
//             ? "SaaS Products"
//             : i % 3 === 0
//             ? "Mobile Apps"
//             : i % 2 === 0
//             ? "Web Solutions"
//             : "AI Tools",
//         badge: i % 3 === 0 ? "BEST SELLER" : i % 2 === 0 ? "POPULAR" : "NEW",
//         desc: `Scalable ${cat.toLowerCase()} solution designed for startups and enterprises to launch faster and grow efficiently.`,
//         image: "https://via.placeholder.com/500x300",
//         features: [
//           "Admin dashboard",
//           "Analytics & reports",
//           "Secure payment integration",
//         ],
//         tech: ["React", "Node.js", "MongoDB"],
//       });
//     }
//   });

//   return list;
// };

const specificProducts = [
  {
    id: "sp1",
    name: "Massage Therapy App",
    category: "On-Demand Services",
    type: "Mobile Apps",
    badge: "POPULAR",
    desc: "On-demand wellness and massage service platform.",
    image: "https://images.unsplash.com/photo-1544161515-4ae6ce6ca8b8?auto=format&fit=crop&q=80&w=500",
    features: ["Expert Booking", "Real-time Tracking", "Safe Payments"],
    tech: ["React Native", "Node.js", "PostgreSQL"],
    detailsLink: "/products/home-service/massage",
    demoLink: "/products/home-service/massage"
  },
  {
    id: "sp2",
    name: "Laundry Service App",
    category: "On-Demand Services",
    type: "Mobile Apps",
    badge: "NEW",
    desc: "Pickup and delivery-based laundry app solution.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=500",
    features: ["Pickup Scheduling", "Order Tracking", "Secure Payment"],
    tech: ["Flutter", "Firebase", "Node.js"],
    detailsLink: "/products/home-service/laundry",
    demoLink: "/products/home-service/laundry"
  },
  {
    id: "sp3",
    name: "Tow-Truck Service App",
    category: "On-Demand Services",
    type: "Mobile Apps",
    badge: "POPULAR",
    desc: "On-demand vehicle towing service platform.",
    image: "https://images.unsplash.com/photo-1586191582151-f73972d10737?auto=format&fit=crop&q=80&w=500",
    features: ["GPS Location", "Emergency Dispatch", "Driver Tracking"],
    tech: ["React Native", "Go", "Redis"],
    detailsLink: "/products/home-service/tow-truck",
    demoLink: "/products/home-service/tow-truck"
  },
  {
    id: "sp4",
    name: "Dog Walking App",
    category: "On-Demand Services",
    type: "Mobile Apps",
    badge: "NEW",
    desc: "Local pet care and dog walking marketplace.",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=500",
    features: ["Walker Profiles", "Live Tracking", "Pet Updates"],
    tech: ["React Native", "Node.js", "MongoDB"],
    detailsLink: "/products/home-service/dog-walking",
    demoLink: "/products/home-service/dog-walking"
  },
  {
    id: "sp5",
    name: "Snow Removal App",
    category: "On-Demand Services",
    type: "Mobile Apps",
    badge: "NEW",
    desc: "On-demand snow plowing service platform.",
    image: "https://images.unsplash.com/photo-1517204324032-fb3012de9b59?auto=format&fit=crop&q=80&w=500",
    features: ["Service Request", "Weather Alerts", "Driver Tracking"],
    tech: ["Flutter", "Node.js", "PostgreSQL"],
    detailsLink: "/products/home-service/snow-removal",
    demoLink: "/products/home-service/snow-removal"
  },
  {
    id: "sp6",
    name: "Pest Control Service App",
    category: "On-Demand Services",
    type: "Mobile Apps",
    badge: "NEW",
    desc: "Online pest control booking solution.",
    image: "https://images.unsplash.com/photo-1587324438673-56c507c6f085?auto=format&fit=crop&q=80&w=500",
    features: ["Service Booking", "Inspection Reports", "Secure Payment"],
    tech: ["React Native", "Node.js", "MongoDB"],
    detailsLink: "/products/home-service/pest-control",
    demoLink: "/products/home-service/pest-control"
  },
  {
    id: "sp7",
    name: "Liquor Delivery App",
    category: "Food Delivery Systems",
    type: "Mobile Apps",
    badge: "POPULAR",
    desc: "On-demand alcohol delivery solution.",
    image: "https://images.unsplash.com/photo-1569058242252-62324e68884c?auto=format&fit=crop&q=80&w=500",
    features: ["Age Verification", "Live Tracking", "Multiple Stores"],
    tech: ["React Native", "Elixir", "PostgreSQL"],
    detailsLink: "/products/delivery/liquor-delivery",
    demoLink: "/products/delivery/liquor-delivery"
  },
  {
    id: "sp8",
    name: "Cannabis Delivery App",
    category: "Food Delivery Systems",
    type: "Mobile Apps",
    badge: "NEW",
    desc: "Cannabis delivery app for regulated markets.",
    image: "https://images.unsplash.com/photo-1548366086-7f1b76106622?auto=format&fit=crop&q=80&w=500",
    features: ["Compliance Checks", "Live Tracking", "Wallet System"],
    tech: ["Flutter", "Python", "MongoDB"],
    detailsLink: "/products/delivery/cannabis-delivery",
    demoLink: "/products/delivery/cannabis-delivery"
  },
  {
    id: "sp9",
    name: "Uber-Clone",
    category: "taxi & transportation",
    type: "Ride-Hailing Apps",
    badge: "NEW",
    desc: "A clone of the popular Uber app for ride-hailing services.",
    image: "https://images.unsplash.com/photo-1548366086-7f1b76106622?auto=format&fit=crop&q=80&w=500",
    features: ["Compliance Checks", "Live Tracking", "Wallet System"],
    tech: ["Flutter", "Python", "MongoDB"],
    detailsLink: "/products/transport/uber-clone",
    demoLink: "/products/Uber-Clone"
  }
];

const createProducts = () => {
  let id = 1;
  const list = [];

  categories.forEach((cat) => {
    for (let i = 1; i <= 10; i++) {

      const slug = `${cat.split(" ")[0].toLowerCase()}-product-${i}`;

      list.push({
        id: id++,
        name: `${cat.split(" ")[0]} Product ${i}`,
        category: cat,
        type:
          i % 4 === 0
            ? "SaaS Products"
            : i % 3 === 0
              ? "Mobile Apps"
              : i % 2 === 0
                ? "Web Solutions"
                : "AI Tools",

        badge: i % 3 === 0 ? "BEST SELLER" : i % 2 === 0 ? "POPULAR" : "NEW",

        desc: `Scalable ${cat.toLowerCase()} solution designed for startups and enterprises.`,

        image: "https://via.placeholder.com/500x300",

        features: [
          "Admin dashboard",
          "Analytics & reports",
          "Secure payment integration",
        ],

        tech: ["React", "Node.js", "MongoDB"],

        // 🔥 LINKS
        detailsLink: `/products/transport/${slug}`,
        demoLink: `/products/${slug}`,
      });
    }
  });

  return list;
};


const products = [...specificProducts, ...createProducts()];

export default function Products() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((p) => {
    // const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "All" || p.type === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="font-sans bg-white">

      {/* HERO SECTION */}

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Explore Our Digital Product Solutions
            </h1>

            <p className="text-base sm:text-lg mb-8 opacity-90">
              Discover 200+ ready‑made solutions for web development, mobile
              apps, SaaS platforms and AI tools designed to help startups and
              enterprises launch products faster.
            </p>

            <input
              type="text"
              placeholder="Search products (Taxi App, Ecommerce, Grocery...)"
              className="w-full max-w-md px-6 py-4 rounded-xl text-black shadow-lg bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* RIGHT IMAGE */}

          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREoIdrRNPC9DJpCTYVWzTosg4YdDG60oD1lQ&s"
              alt="products"
              className="rounded-2xl shadow-2xl h-100"
            />
          </div>
        </div>
      </section>


      {/* CATEGORY NAVIGATION */}

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            Browse Product Categories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {categories.map((cat, i) => (
              <a
                key={i}
                href={`#${cat.replace(/\s+/g, "-")}`}
                className="bg-white rounded-xl shadow hover:shadow-lg p-4 sm:p-6 text-center font-semibold hover:bg-indigo-50 transition border text-sm sm:text-base"
              >
                {cat}
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* FILTERS */}

      <section className="bg-white py-12 border-t border-b">
        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-xl font-semibold mb-6">Filter Products</h3>

          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              "All",
              "Web Solutions",
              "Mobile Apps",
              "SaaS Products",
              "AI Tools",
              "Clone Scripts",
            ].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 sm:px-5 py-2 rounded-full border transition text-sm sm:text-base ${filter === f
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
                  }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-gray-500 text-lg">
          This product is not available.
        </div>
      )}

      {/* CATEGORY PRODUCT SECTIONS */}
      {categories.map((category, index) => {
        const categoryProducts = filteredProducts.filter(
          (p) => p.category === category
        );

        if (categoryProducts.length === 0) return null;

        return (
          <section
            key={category}
            id={category.replace(/\s+/g, "-")}
            className={`${index % 2 === 0 ? "bg-gray-50/50" : "bg-white"} py-24`}
          >
            <div className="max-w-7xl mx-auto px-6">

              {/* CATEGORY TITLE */}
              <div className="mb-16">
                <div className="flex items-center gap-4 mb-4">
                  <span className="h-px bg-indigo-600 w-12 opacity-50"></span>
                  <span className="text-indigo-600 font-bold tracking-widest text-sm uppercase">{category.split(' ')[0]} Solutions</span>
                </div>
                <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                  {category}
                </h2>
              </div>

              {/* PRODUCTS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-[24px] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_50px_-12px_rgba(79,70,229,0.15)] transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2 flex flex-col h-full relative"
                  >
                    {/* Image Area */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full backdrop-blur-md shadow-sm border border-white/20 uppercase tracking-wider ${product.badge === 'BEST SELLER' ? 'bg-orange-500 text-white' :
                          product.badge === 'POPULAR' ? 'bg-blue-500 text-white' : 'bg-indigo-600 text-white'
                          }`}>
                          {product.badge}
                        </span>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-7 flex flex-col flex-grow">
                      <div className="mb-2 text-[11px] font-bold text-indigo-600 uppercase tracking-widest opacity-80">
                        {product.type}
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">
                        {product.name}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-2">
                        {product.desc}
                      </p>

                      <div className="space-y-3 mb-8 mt-auto">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3 text-[13px] text-gray-600 font-medium">
                            <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="line-clamp-1">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-3 mt-auto">
                        <button
                          onClick={() => navigate(product.demoLink)}
                          className="w-full flex items-center justify-center text-[13px] font-bold text-gray-700 bg-gray-50 hover:bg-gray-100 hover:text-gray-900 py-3 rounded-xl transition-all border border-transparent hover:border-gray-200 order-2 sm:order-1"
                        >
                          Live Demo
                        </button>
                        <button
                          onClick={() => navigate(product.detailsLink)}
                          className="w-full flex items-center justify-center text-[13px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 active:scale-95 order-1 sm:order-2"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}


      {/* PRODUCT MODAL */}

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-6 z-50">

          <div className="bg-white max-w-2xl w-full rounded-xl p-8">

            <h3 className="text-2xl font-bold mb-4">
              {selectedProduct.name}
            </h3>

            <img
              src={selectedProduct.image}
              alt=""
              className="mb-6"
            />

            <p className="text-gray-600 mb-6">
              {selectedProduct.desc}
            </p>

            <h4 className="font-semibold mb-2">Key Features</h4>

            <ul className="mb-6">
              {selectedProduct.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>

            <h4 className="font-semibold mb-2">Technology Stack</h4>

            <div className="flex gap-2 flex-wrap mb-6">
              {selectedProduct.tech.map((t, i) => (
                <span
                  key={i}
                  className="bg-gray-100 px-3 py-1 rounded text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">

              <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                Request Demo
              </button>

              <button className="border px-4 py-2 rounded">
                Get This Product
              </button>

              <button
                className="ml-auto text-gray-500"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}


      {/* CTA SECTION */}

      <section className="bg-indigo-600 text-white text-center py-24">

        <h2 className="text-4xl font-bold mb-6">
          Didn’t find what you're looking for?
        </h2>

        <p className="mb-10 text-lg">
          We build custom digital solutions tailored specifically to your
          business requirements.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold">
            Request Custom Solution
          </button>

          <button className="border border-white px-8 py-3 rounded-lg">
            Schedule Consultation
          </button>

        </div>

      </section>


    </div>
  );
}



























