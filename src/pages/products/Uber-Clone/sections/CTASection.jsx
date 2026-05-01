import React from "react";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Launch Your Uber Clone Platform Today
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Start your ride-hailing business with our ready-to-launch Uber Clone solution.
          Get powerful rider, driver, and admin apps designed for real-world mobility businesses.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          {/* Request Demo */}
          <button className="px-7 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
            Request Demo
          </button>

          {/* Live Demo */}
          <a
            href="https://preview.codecanyon.net/item/gocab-grab-uber-clone-taxi-booking-cab-rental-bidding-parcel/full_screen_preview/61391802"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
          >
            Live Demo
          </a>

          <a
            href="/company/contact"
            className="px-7 py-3 bg-white/10 text-white border border-white/20 font-semibold rounded-lg hover:bg-white/20 transition flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Let's Discuss
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTASection;