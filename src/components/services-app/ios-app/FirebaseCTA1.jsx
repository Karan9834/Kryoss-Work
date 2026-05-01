import cta1 from "../../../assets/IosApp/cta1.webp";

export default function FirebaseCTA1() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative bg-gradient-to-r from-[#0f172a] via-[#312e81] to-[#6d28d9] rounded-[40px] overflow-hidden shadow-2xl">

          <div className="grid md:grid-cols-2 items-center">

            {/* LEFT CONTENT */}

            <div className="p-12 text-white">

              <h2 className="text-4xl font-semibold leading-snug mb-6">
                Partner With a Powerful
                <br />
                <span className="text-purple-200">
                  Firebase App Development Team
                </span>
                <br />
                to Grow Your Business
              </h2>

              <p className="text-gray-200 mb-8 max-w-lg">
                Launch scalable mobile applications faster with our Firebase
                development expertise. We help startups and agencies build
                high-performance apps that scale with your growth.
              </p>

              <button className="bg-white text-purple-700 px-7 py-3 rounded-full font-medium hover:scale-105 transition">
                Start Your Project
              </button>

            </div>


            {/* RIGHT IMAGE */}

            <div className="relative flex justify-center md:justify-end pr-10">

              {/* YOU WILL ADD IMAGE */}
              <img
                src={cta1}
                alt="developer"
                className="max-h-[380px] object-contain relative z-10"
              />

              {/* Floating Card */}

              <div className="absolute bottom-6 left-10 bg-white/90 text-purple-800 px-6 py-4 rounded-2xl shadow-xl font-semibold backdrop-blur">
                Let's Build
                <br />
                Your App
              </div>

            </div>

          </div>

          {/* Background Glow Effects */}

          <div className="absolute -top-20 right-10 w-72 h-72 bg-purple-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500 opacity-20 blur-3xl"></div>

        </div>

      </div>

    </section>
  );
}