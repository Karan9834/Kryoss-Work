import React, { useState, useRef } from "react";
import { MoveRight } from "lucide-react";

const HomeCleaningOffer = () => {
  const [active, setActive] = useState(0);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const slides = [
    {
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-customer-app.webp",
      title: "Customer App",
      desc: "We provide a ready-to-use Uber for House Cleaning App for users, ensuring a seamless experience on both iOS and Android platforms. Whether it's scheduling a cleaning service or tracking bookings in real time, our solution is designed to make home cleaning services easily accessible. Fully customizable and scalable, the app ensures you business can reach a broader audience while delivering a user-friendly experience.",
      btn1: "Customer Android App",
      btn2: "Customer iOS App",
    },
    {
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-provider-app.webp",
      title: "Provider App",
      desc: "Empower your cleaning professionals with our Uber for House Cleaning Service App, available on both iOS and Android. The app is tailored to help service providers manage fully customizable, it equips cleaners with the tools needed to deliver exceptional service and improve operational efficiency. ",
      btn1: "Provider Android App",
      btn2: "Provider iOS App",
    },
    {
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/fox-home-cleaning-admin-panel.webp",
      title: "Super Web Admin Panel",
      desc: "Manage your business operations with ease using our powerful and feature-rich web admin panel. From overseeing bookings and tracking provider performance to managing payments and user data, the admin panel gives you complete control over your operations. Built to be user-friendly and efficient, the web panel ensures you can optimize your business and drive growth.",
      btn1: "Super Web Admin Panel",
      btn2: "Provider Web Panel",
      btn3: "Billing account"
    },
  ];

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  /* ===== Swipe Handlers ===== */

  const handleStart = (clientX) => {
    startX.current = clientX;
    isDragging.current = true;
  };

  const handleEnd = (clientX) => {
    if (!isDragging.current) return;

    const diff = startX.current - clientX;

    if (diff > 50) {
      nextSlide(); // swipe left
    } else if (diff < -50) {
      prevSlide(); // swipe right
    }

    isDragging.current = false;
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">


 <div className="text-center max-w-6xl mx-auto mb-16">

          
          <div className="inline-flex items-center gap-2 bg-[#eaf4fd] px-4 py-1.5 rounded-full border border-[#b7d4f6] text-sm text-gray-700 mb-6">
          <span className="w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
         What we Offer
        </div>

          <h3 className="text-lg sm:text-4xl font-bold text-gray-700 mb-6">
           <span className="text-[#1d79c6]">  Our Uber for House Cleaning App</span>  Solution for All Platforms
          </h3>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our Uber for House Cleaning App ensures a seamless experience for users, providers, and admins on all platforms.
          </p>

        </div>


        <div
          className="relative h-[520px] md:h-[580px] cursor-grab active:cursor-grabbing"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >

          {slides.map((slide, index) => {
            const position =
              (index - active + slides.length) % slides.length;

            return (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out
                ${
                  position === 0
                    ? "z-30 translate-x-0 scale-100 opacity-100"
                    : position === 1
                    ? "z-20 translate-x-16 scale-95 opacity-90"
                    : "z-10 translate-x-32 scale-90 opacity-80"
                }`}
              >
                <div className="w-full h-full rounded-[40px] bg-gradient-to-r from-[#0E7C94] to-[#0B5F73] p-8 md:p-14 flex flex-col lg:flex-row items-center gap-10 shadow-2xl">

                  {/* LEFT IMAGE */}
                  <div className="flex-1 flex justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="max-h-[420px] object-contain"
                    />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="flex-1 text-white space-y-6">

                    {/* Platform Icons */}
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl"></div>
                      <div className="w-12 h-12 bg-white/20 rounded-xl"></div>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-semibold">
                      {slide.title}
                    </h3>

                    <p className="text-white/90 max-w-lg">
                      {slide.desc}
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="px-6 py-3 rounded-full bg-white text-[#0B5F73] font-medium">
                        {slide.btn1}
                      </button>
                      <button className="px-6 py-3 rounded-full bg-white text-[#0B5F73] font-medium">
                        {slide.btn2}
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

          {/* FLOATING SWIPE HINT BUTTON */}
          <div className="absolute bottom-6 right-6 
                          flex items-center gap-2
                          bg-white text-[#0B5F73]
                          px-5 py-3 rounded-full shadow-xl
                          animate-pulse">

            <span className="text-sm font-medium">
              Swipe
            </span>

            <MoveRight size={18} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeCleaningOffer;