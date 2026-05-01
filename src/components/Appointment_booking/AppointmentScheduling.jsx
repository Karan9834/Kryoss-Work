import React from "react";
import { Stethoscope, Hospital, User } from "lucide-react";

export default function AppointmentScheduling() {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <span className="border px-4 py-1 rounded-full text-sm">
              Effortless Health Bookings
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-6">
              Streamline Medical Timetables via Our{" "}
              <span className="text-blue-600">
                Healthcare Scheduling App
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">

              <p>
                Reserving clinical visits remains exceptionally uncomplex using our
                sophisticated medical reservation system. Individuals secure virtual
                or physical sessions swiftly via a highly accessible
                frontend interface.
              </p>

              <p>
                Physicians receive a robust control panel to oversee their roster,
                availability, alongside health records. Live alerts plus automated
                prompts guarantee absolutely zero missed checkups.
              </p>

              <p>
                Users rapidly navigate specialist directories, verify open slots,
                and confirm appointments purely from smartphones, significantly
                elevating the holistic clinical patient journey.
              </p>

            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="relative">

            {/* Background gradient card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-900 rounded-3xl p-8 space-y-6">

              {/* Card 1 */}
              <div className="bg-white rounded-xl p-6 flex gap-4 items-start">

                <Stethoscope className="text-blue-600"/>

                <div>
                  <h4 className="font-semibold text-lg">Startup</h4>
                  <p className="text-sm text-gray-600">
                    Ideal for clinical enterprises wanting to deploy a digital health
                    scheduling network efficiently.
                  </p>
                </div>

              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 flex gap-4 items-start">

                <Hospital className="text-blue-600"/>

                <div>
                  <h4 className="font-semibold text-lg">Clinic</h4>
                  <p className="text-sm text-gray-600">
                    Hospitals oversee practitioner timetables alongside
                    visit queues effortlessly via our comprehensive backend mechanisms.
                  </p>
                </div>

              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 flex gap-4 items-start">

                <User className="text-blue-600"/>

                <div>
                  <h4 className="font-semibold text-lg">Doctor</h4>
                  <p className="text-sm text-gray-600">
                    Specialists direct their daily planners, monitor upcoming
                    visits, and review health histories centrally.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}