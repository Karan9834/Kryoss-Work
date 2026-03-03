import React, { useState } from "react";

const HomeCleaningUniqueFeatures = () => {
  const [active, setActive] = useState(0);

  const slides = [
    {
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/home-cleaning-unique-feature-1.webp",
      title: "Easy To Login",
      points: [
        "Our app prioritizes user convenience with a straightforward login process. Customers can easily access their accounts with minimal effort.",
        "The login interface is clean and simple, with clear instructions and minimal input fields. Users have the option to log in through social media accounts like Google or Facebook, eliminating the need to create new accounts.",
        "Alternatively, they can simply log in by entering their phone number. This feature minimizes authentication hassle, providing users with a     seamless and faster login experience. By leveraging modern login  methods, it enhances customer convenience and ensures a smoother entry into the app. ",
      ],
    },
    {
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/home-cleaning-unique-feature-2.webp",
      title: "Check Provider Availability",
      points: [
        "Customers can easily check the availability of cleaning service providers for their desired date and time directly within the app.",
        "Users simply select their preferred date and time slot from the app’s available options, and the system matches them with available providers, eliminating back-and-forth communication.",
        "This streamlines the scheduling process, enhancing user experience by making booking straightforward, hassle-free, and efficient.  ",
      ],
    },
    {
      image:
        "https://whitelabelfox.com/assets/images/uber-house-cleaning-app/home-cleaning-unique-feature-3.webp",
      title: "Booking per hour & square feet",
      points: [
        "Our flexible booking feature allows customers to choose their cleaning service based on service duration (hours) and area size (square feet).",
        "The app automatically calculates the service cost based on these inputs, ensuring transparent and accurate pricing. ",
        "Customers have full control over their cleaning experience, allowing them to adjust services to match their needs and budget.",
      ],
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="bg-gradient-to-r from-[#062B33] to-[#0E6B78] 
                        rounded-[40px] 
                        px-6 md:px-16 
                        py-14 md:py-20 
                        text-white relative">

          {/* ===== FIXED TOP CONTENT ===== */}
          <div className="text-center max-w-4xl mx-auto mb-14">

            <div className="inline-flex items-center gap-2 
                            border border-white/30 
                            px-4 py-1.5 
                            rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Unique App Features
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Our Distinctive{" "}
              <span className="text-[#55D7FF]">
                Features of Our App
              </span>
            </h2>

            <p className="text-white/80">
              Discover the standout features of our Uber for House Cleaning App that make cleaning services easier, faster, and more reliable. Our app is designed to deliver a seamless experience for both users and service providers.
            </p>

          </div>

          {/* ===== SLIDE CONTENT ===== */}
          <div className="relative">

            <div className="flex flex-col lg:flex-row items-center gap-12 transition-all duration-700">

              {/* LEFT IMAGE */}
              <div className="flex-1 flex justify-center">
                <img
                  src={slides[active].image}
                  alt={slides[active].title}
                  className="max-h-[380px] md:max-h-[420px] object-contain"
                />
              </div>

              {/* RIGHT CONTENT */}
              <div className="flex-1 space-y-6">

                <h3 className="text-2xl md:text-3xl font-semibold text-[#55D7FF]">
                  {slides[active].title}
                </h3>

                <ul className="space-y-4 text-white/90">
                  {slides[active].points.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 w-2 h-2 bg-[#55D7FF] rounded-full"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>

            {/* ===== PROGRESS LINES ===== */}
            <div className="flex justify-center gap-4 mt-12">

              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1 rounded-full transition-all duration-300
                    ${active === index
                      ? "w-14 bg-white"
                      : "w-8 bg-white/40"
                    }`}
                />
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeCleaningUniqueFeatures;