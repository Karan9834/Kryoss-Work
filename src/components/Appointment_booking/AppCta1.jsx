import doctorCTA from "../../assets/Appointment/cta1.webp"

export default function DoctorAppCTA() {
  return (
    <section className="py-16 bg-gray-100 flex justify-center">

      <div className="relative max-w-6xl w-full rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-12 flex items-center justify-between overflow-hidden">

        {/* LEFT CONTENT */}
        <div className="max-w-xl z-10">

          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Deploy Your Custom Medical Scheduling Platform Now
          </h2>

          <p className="text-white/90 mb-6">
            Revolutionize clinical provisions utilizing an advanced medical
            reservation architecture. Allow individuals to secure visits
            effortlessly whilst practitioners organize daily rosters flawlessly
            using an integrated digital framework.
          </p>

          <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-orange-600 transition">
            Start Your Digital Project
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block absolute right-0 bottom-0">

          <img
            src={doctorCTA}
            alt="Doctor App"
            className="h-[320px] object-contain"
          />

        </div>

      </div>

    </section>
  );
}