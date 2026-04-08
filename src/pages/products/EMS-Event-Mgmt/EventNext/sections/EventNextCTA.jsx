import React from "react";
import { ArrowRight } from "lucide-react";

const EventNextCTA = () => {
    return (
        <section className="relative py-28 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 40%, #1d4ed8 80%, #2563eb 100%)" }}>
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-20%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, #60a5fa, transparent 70%)" }} />
                <div className="absolute bottom-[-20%] left-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
                    style={{ background: "radial-gradient(circle, #fbbf24, transparent 70%)" }} />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-8">
                <span className="inline-block text-blue-200 font-bold text-sm uppercase tracking-widest">
                    Go Live Today
                </span>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                    Make Your Next Event{" "}
                    <span className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #60a5fa, #fbbf24)" }}>
                        Revolutionary
                    </span>
                </h2>
                <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
                    Thousands of event organizers trust Event Next to deliver flawless multivendor experiences from the first ticket sale to the last automated payout. See it in action.
                </p>
                <div className="pt-4">
                    <a
                        href="https://preview.codecanyon.net/item/eventnext-revolutionizing-multivendor-event-management-and-ticketing/full_screen_preview/55771342"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                        style={{ background: "linear-gradient(90deg, #2563eb, #fbbf24)", boxShadow: "0 8px 40px rgba(37,99,235,0.5)" }}
                    >
                        Live Demo
                        <ArrowRight size={22} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EventNextCTA;
