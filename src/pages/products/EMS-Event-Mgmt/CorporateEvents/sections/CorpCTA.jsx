import React from "react";
import { ArrowRight } from "lucide-react";

const CorpCTA = () => {
    return (
        <section className="relative py-28 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 40%, #312e81 100%)" }}>
            {/* bg orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #818cf8, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-20"
                    style={{ background: "radial-gradient(circle, #06b6d4, transparent 70%)" }} />
                <div className="absolute inset-0 opacity-[0.04]"
                    style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
                <span className="inline-block text-indigo-300 font-bold text-sm uppercase tracking-widest">
                    Ready to Scale?
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Transform Your Next Corporate Event{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #a5b4fc, #67e8f9)" }}>
                        With Our Platform
                    </span>
                </h2>
                <p className="text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
                    Join hundreds of enterprise teams who've replaced fragmented tools with our unified corporate event platform. See it in action today.
                </p>
                <div className="pt-4">
                    <a
                        href="https://preview.codecanyon.net/item/event-and-human-resource-management-system/full_screen_preview/32286548"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4)", boxShadow: "0 8px 40px rgba(99,102,241,0.5)" }}
                    >
                        Live Demo
                        <ArrowRight size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CorpCTA;
