import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Star, School } from 'lucide-react';
import heroimg from "@/assets/smslanding-img/smslandinghero1.jpg";

const SMSHero = () => {
    const scrollToProducts = () => {
        const element = document.getElementById('sms-cards');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-800 to-emerald-500 text-white">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-400/20 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge - Updated: text-[12px] font-medium tracking-[0.05em] uppercase */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-[12px] font-medium tracking-[0.05em] uppercase backdrop-blur-md shadow-lg">
                            <Star size={14} className="text-yellow-300" />
                            <span>Empowering Education Everywhere</span>
                        </div>

                        {/* H1 */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Streamline Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-emerald-200">
                                Educational Institution
                            </span> <br />
                            <span className="text-white"> With Smart SMS</span>
                        </h1>

                        {/* Description - Updated: text-[16px] md:text-[18px] font-normal leading-[1.6] */}
                        <p className="text-blue-50 text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-xl mx-auto lg:mx-0">
                            A comprehensive ecosystem for modern schools and universities. From admissions and attendance to exams and grading—everything managed seamlessly in one place.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                            <button
                                onClick={scrollToProducts}
                                className="px-10 py-4 bg-white text-indigo-800 font-semibold rounded-2xl hover:bg-emerald-400 hover:text-white hover:scale-105 transition-all duration-300 shadow-xl shadow-indigo-900/30 flex items-center gap-3 text-[16px] tracking-[0.01em]"
                            >
                                Explore Our Products <ArrowRight size={20} />
                            </button>
                        </div>

                        {/* Feature Badges - Updated: text-[12px] font-semibold uppercase tracking-[0.05em] */}
                        <div className="pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-90">
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <GraduationCap className="text-blue-300" size={18} /> Student Lifecycle
                            </div>
                            <div className="flex items-center gap-2 text-white font-semibold text-[12px] uppercase tracking-[0.05em] border-r border-white/20 pr-8 last:border-0 last:pr-0">
                                <BookOpen className="text-emerald-300" size={18} /> LMS Integrated
                            </div>
                        </div>
                    </div>

                    {/* Right: Actual Hero Image PlaceHolder */}
                    <div className="relative group block scale-90 md:scale-100">
                        <div className="relative -inset-4 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-[4rem] blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
                        <div className="relative bg-white/10 mt-[-70px] h-[400px] md:h-[500px] backdrop-blur-xl rounded-[4rem] border border-white/30 overflow-hidden shadow-2xl flex items-center justify-center">
                            <img
                                src={heroimg}
                                alt="School Management Dashboard"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent pointer-events-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SMSHero;