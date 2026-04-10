import React from 'react'
import aboutImage from "../../assets/Doctor-Health-App/doctorhealthabout.png"

const AboutUs = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 L30 55 M5 30 L55 30' stroke='%2310B981' stroke-width='1' fill='none' /%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Content - Text */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            {/* Section label - Updated Typography */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-emerald-600 font-semibold text-[14px] tracking-wider uppercase">About Us</span>
              <div className="w-8 h-px bg-emerald-200"></div>
            </div>

            {/* Section Heading H2 - Updated: 30px mobile, 36px desktop, weight 700, line-height 1.2 */}
            <h2 className="text-[30px] md:text-[36px] font-bold leading-[1.2] mb-6">
              <span className="block text-gray-900">Providing Quality</span>
              <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                Healthcare Solutions
              </span>
            </h2>

            {/* Description - Updated: 14px mobile, 16px desktop, weight 400, line-height 1.6 */}
            <div className="space-y-4 text-gray-600">
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6]">
                At Vyom Health, we believe that quality healthcare should be accessible to everyone. Our platform connects patients with trusted medical professionals, making healthcare simpler, faster, and more convenient.
              </p>
              <p className="text-[14px] md:text-[16px] font-normal leading-[1.6]">
                With a network of 500+ verified specialists across multiple disciplines, we ensure that you and your family receive the best medical care whenever you need it.
              </p>
            </div>

            {/* Simple quote/note - Updated Typography */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-[14px] font-normal leading-[1.6] text-gray-400 italic">
                "Your health is our mission, your trust is our reward."
              </p>
            </div>
          </div>

          {/* Right Content - Image (same height as content) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-full">
              {/* Simple decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-100 rounded-full opacity-50"></div>
              
              {/* Image container - full height to match content */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden h-full min-h-[400px] md:min-h-[450px]">
                <img 
                  src={aboutImage}
                  alt="About Vyom Health"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Simple badge */}
              <div className="absolute -bottom-3 -right-3 bg-white rounded-lg shadow-lg px-4 py-2">
                <span className="text-[14px] font-medium text-gray-700">Trusted Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs