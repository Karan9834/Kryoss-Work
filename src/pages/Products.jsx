import React, { useState } from "react";

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

const createProducts = () => {
  let id = 1;
  const list = [];

  categories.forEach((cat) => {
    for (let i = 1; i <= 10; i++) {
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
        desc: `Scalable ${cat.toLowerCase()} solution designed for startups and enterprises to launch faster and grow efficiently.`,
        image: "https://via.placeholder.com/500x300",
        features: [
          "Admin dashboard",
          "Analytics & reports",
          "Secure payment integration",
        ],
        tech: ["React", "Node.js", "MongoDB"],
      });
    }
  });

  return list;
};

const products = createProducts();

export default function Products() {
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
            <h1 className="text-5xl font-bold mb-6">
              Explore Our Digital Product Solutions
            </h1>

            <p className="text-lg mb-8">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((cat, i) => (
              <a
                key={i}
                href={`#${cat.replace(/\\s+/g, "-")}`}
                className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center font-semibold hover:bg-indigo-50 transition border"
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

          <div className="flex flex-wrap gap-3">
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
                className={`px-5 py-2 rounded-full border transition ${
                  filter === f
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
            id={category.replace(/\\s+/g, "-")}
            className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} py-24`}
          >
            <div className="max-w-7xl mx-auto px-6">

              {/* CATEGORY TITLE */}

              <div className="mb-14 text-center">
                <h2 className="text-4xl font-extrabold text-indigo-600 mb-3">
                  {category}
                </h2>

                <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
              </div>

              {/* PRODUCTS GRID */}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {categoryProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow hover:shadow-xl transition overflow-hidden border"
                  >
                    <img src={product.image} alt="" />

                    <div className="p-6">

                      <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded">
                        {product.badge}
                      </span>

                      <h3 className="font-semibold text-lg mt-3">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-600 mt-2">
                        {product.desc}
                      </p>

                      <ul className="text-sm mt-3 space-y-1">
                        {product.features.map((f, i) => (
                          <li key={i}>• {f}</li>
                        ))}
                      </ul>

                      <div className="flex gap-2 mt-5">

                        <button className="border px-3 py-2 rounded text-sm hover:bg-gray-100">
                          Live Demo
                        </button>

                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="bg-indigo-600 text-white px-3 py-2 rounded text-sm"
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
