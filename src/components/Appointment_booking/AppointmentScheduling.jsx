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
              Seamless Doctor Appointments
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-semibold mt-6 mb-6">
              Simplify Appointment Scheduling with Our{" "}
              <span className="text-blue-600">
                Uber For Doctors App
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-gray-600 text-[15px] leading-relaxed">

              <p>
                Booking doctor appointments has never been easier with our
                On-Demand Doctor App solution. Patients can schedule
                consultations in just a few taps through an intuitive and
                user-friendly interface.
              </p>

              <p>
                Doctors get a powerful dashboard to manage appointments,
                schedules and patient details. Real-time notifications and
                reminders help ensure that no consultation is missed.
              </p>

              <p>
                Patients can browse doctors, check availability, and book
                appointments conveniently from their mobile devices, improving
                the overall healthcare experience.
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
                    Perfect for health startups looking to launch a doctor
                    appointment booking platform quickly.
                  </p>
                </div>

              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl p-6 flex gap-4 items-start">

                <Hospital className="text-blue-600"/>

                <div>
                  <h4 className="font-semibold text-lg">Clinic</h4>
                  <p className="text-sm text-gray-600">
                    Clinics can manage doctor availability and appointments
                    easily using our powerful scheduling tools.
                  </p>
                </div>

              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl p-6 flex gap-4 items-start">

                <User className="text-blue-600"/>

                <div>
                  <h4 className="font-semibold text-lg">Doctor</h4>
                  <p className="text-sm text-gray-600">
                    Doctors can manage their schedules, track appointments
                    and view patient information in one place.
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