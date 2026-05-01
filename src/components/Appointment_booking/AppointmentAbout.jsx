import React from "react";
import about from "@/assets/Appointment/about.jpg"
const DoctorAboutSection = () => {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 border px-4 py-1 rounded-full text-sm">
            Overview of Our Medical App
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          On-Demand Medical App –{" "}
          <span className="text-blue-600">
            Intelligent Healthcare Scheduling
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
              Our on-demand doctor solution provides an extensive and secure framework
              to reserve medical appointments seamlessly. Users can locate
              physicians, book virtual or clinic visits, and handle their health
              records using a few clicks. The system functions flawlessly across
              iOS and Android ecosystems.
            </p>

            <p>
              Amidst fast-paced innovations in health technology, digital solutions take
              front stage in upgrading the delivery of clinical care. Ranging
              from telehealth software to automated booking portals, contemporary
              applications are revolutionizing the medical landscape, rendering treatments
              much quicker and readily available.
            </p>

            <p>
              This medical scheduling software empowers individuals to effortlessly
              search specialists, pick open time slots, and verify health
              checkups in moments. Practitioners can systematically arrange their
              routines, oversee patient interactions, and concentrate heavily on
              providing exceptional medical treatments.
            </p>

            <p>
              Our infrastructure is structured to eliminate distance between clinical
              practitioners and individuals. Whether you operate as a healthcare
              expert aiming to modernize your clinic or an individual demanding
              effortless medical support, our architecture ensures a flawless, dependable
              user journey.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default DoctorAboutSection;