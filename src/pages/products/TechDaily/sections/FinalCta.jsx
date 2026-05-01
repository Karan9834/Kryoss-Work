import React from "react";
import { ArrowRight, Play, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  const handleLiveDemo = () => {
    window.open(
      "https://preview.codecanyon.net/item/news-flutter-news-full-app/full_screen_preview/32062835",
      "_blank"
    );
  };

  const handleStartReading = () => {
    // Add your own "Start Reading" logic (e.g., navigate to signup)
    console.log("Start Reading clicked");
  };

  return (
    <section className="relative bg-[#0a0a0f] px-6 md:px-16 py-20 md:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
          Ready to Stay Ahead with{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">
            Real-Time News?
          </span>
        </h2>

        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of readers who trust our platform for fast, reliable, and insightful news updates.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* SECONDARY — Live Demo */}
          <button
            onClick={handleLiveDemo}
            className="group flex items-center justify-center gap-2 border border-orange-500/30 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition duration-300"
          >
            <Play className="text-orange-400 group-hover:text-orange-300" />
            Live Demo
          </button>
          {/* Let's Discuss */}
          <a
            href="/company/contact"
            className="group flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition duration-300"
          >
            <MessageCircle size={18} className="text-orange-400" />
            Let's Discuss
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          No signup required • Free access • Instant updates
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;