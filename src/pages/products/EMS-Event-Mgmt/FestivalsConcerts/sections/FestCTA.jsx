import React from "react";
import { ArrowRight } from "lucide-react";

const FestCTA = () => {
    return (
        <section className="relative py-28 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #4a044e 0%, #7c3aed 40%, #be185d 80%, #db2777 100%)" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, #f9a8d4, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, #fbbf24, transparent 70%)" }} />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
                <span className="inline-block text-pink-200 font-bold text-sm uppercase tracking-widest">
                    Go Live Today
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Make Your Next Festival{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #f9a8d4, #fbbf24)" }}>
                        Unforgettable
                    </span>
                </h2>
                <p className="text-pink-100 text-lg max-w-2xl mx-auto leading-relaxed">
                    Thousands of festival organizers trust our platform to deliver flawless experiences from the first ticket sale to the last encore. See it in action.
                </p>
                <div className="pt-4">
                    <a
                        href="https://preview.codecanyon.net/item/event-and-human-resource-management-system/full_screen_preview/32286548"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: "linear-gradient(90deg, #ec4899, #f59e0b)", boxShadow: "0 8px 40px rgba(236,72,153,0.5)" }}
                    >
                        Live Demo
                        <ArrowRight size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FestCTA;
