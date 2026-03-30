import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import card1 from "../../assets/Doctor-Health-App/product1.jpg"
import card2 from "../../assets/Doctor-Health-App/product2.jpg"
const Products = () => {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      image: card1,
      title: "Doctor Appointment",
      description: "Book consultations with top specialists instantly",
      points: [
        "Instant booking with 500+ specialists",
        "Choose between video or in-clinic visits",
        "Get reminders and digital prescriptions"
      ],
      buttonText: "View Details",
      buttonLink: "/products/social/appointment-booking",
      color: "emerald"
    },
    {
      id: 2,
      image: card2,
      title: "Pharmacy Delivery",
      description: "Medicines delivered to your doorstep",
      points: [
        "Prescription upload and verification",
        "Real-time order tracking",
        "Free delivery on orders above ₹499"
      ],
      buttonText: "View Details",
      buttonLink: "/products/delivery/medicine-delivery",
      color: "amber"
    }
  ]

  const handleButtonClick = (link) => {
    navigate(link)
  }

  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white py-16 md:py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #10B981 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-px bg-emerald-300"></div>
            <span className="text-emerald-600 font-semibold text-sm tracking-wider uppercase">
              Our Products
            </span>
            <div className="w-8 h-px bg-amber-300"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Healthcare Solutions{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h2>

          <p className="text-lg text-gray-600">
            Discover our range of products designed to make healthcare accessible, affordable, and convenient for you and your family.
          </p>
        </div>

        {/* Products grid - 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${product.color}-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-${product.color}-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500`}></div>

              {/* Image section - make it clickable too */}
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => handleButtonClick(product.buttonLink)}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />

                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Product badge */}
                <div className={`absolute top-4 right-4 bg-${product.color}-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                  New
                </div>

                {/* Image overlay text on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm">
                    Click to view {product.title}
                  </span>
                </div>
              </div>

              {/* Content section */}
              <div className="relative p-8">
                {/* Title and description */}
                <h3 className={`text-3xl font-bold text-gray-900 mb-3 group-hover:text-${product.color}-600 transition-colors duration-300 text-center`}>
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {product.description}
                </p>

                {/* Points list - centered but text left-aligned for readability */}
                <div className="flex justify-center mb-8">
                  <ul className="space-y-4 text-left">
                    {product.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 group/point">
                        <span className={`inline-flex mt-1 w-5 h-5 rounded-full bg-${product.color}-100 text-${product.color}-600 items-center justify-center text-xs group-hover/point:scale-110 transition-transform duration-300`}>
                          ✓
                        </span>
                        <span className="text-gray-700 group-hover/point:text-gray-900 transition-colors duration-300">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details button - centered */}
                <div className="flex justify-center">
                  <button
                    onClick={() => handleButtonClick(product.buttonLink)}
                    className={`group/btn relative px-8 py-4 bg-gradient-to-r from-${product.color}-500 to-${product.color}-600 text-white font-semibold rounded-xl text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 overflow-hidden cursor-pointer min-w-[200px]`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {product.buttonText}
                      <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className={`absolute inset-0 bg-gradient-to-r from-${product.color}-600 to-${product.color}-700 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300`}></div>
                  </button>
                </div>

                {/* Decorative elements */}
                <div className={`absolute bottom-8 left-8 w-16 h-16 bg-${product.color}-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                <div className={`absolute top-8 right-8 w-12 h-12 border-2 border-${product.color}-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <p className="text-sm text-gray-400">
            ✦ More products coming soon ✦
          </p>
        </div>
      </div>
    </section>
  )
}

export default Products