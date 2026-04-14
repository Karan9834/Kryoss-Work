import React from "react";
import about from "@/assets/Appointment/about.jpg"
const DoctorAboutSection = () => {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            About Doctor Booking App
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Uber for Doctors App –{" "}
          <span className="text-blue-600">
            Smart Doctor Appointment Booking
          </span>
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE (You will replace it) */}
          <div className="flex justify-center">

            <img
              src={about}
              alt="doctor booking app"
              className="max-h-[420px] rounded-xl object-contain"
            />

          </div>

          {/* RIGHT TEXT */}
          <div className="text-gray-600 space-y-5 leading-relaxed">

            <p>
              Our Uber for Doctors app offers a powerful and reliable platform
              for booking doctor appointments effortlessly. Patients can
              discover doctors, schedule consultations, and manage their health
              appointments with just a few taps. The platform works smoothly on
              both Android and iOS devices.
            </p>

            <p>
              With rapid advancements in digital healthcare, technology plays a
              major role in improving how medical services are delivered. From
              telemedicine solutions to appointment scheduling systems, modern
              apps are transforming the healthcare ecosystem by making services
              faster and more accessible.
            </p>

            <p>
              This doctor appointment application allows patients to easily
              browse doctors, choose available slots, and confirm appointments
              within seconds. Doctors can efficiently organize their schedules,
              manage patient visits, and focus more on delivering quality care.
            </p>

            <p>
              The platform is designed to bridge the gap between healthcare
              providers and patients. Whether you're a medical professional
              looking to digitize your practice or a patient seeking convenient
              healthcare access, this solution delivers a seamless and reliable
              experience.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DoctorAboutSection;