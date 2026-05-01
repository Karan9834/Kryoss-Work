import React from "react";
import qsrAboutImg from "../../../../../assets/qsrfastcasualrms-img/qsrfastcasualrmsabout1.jpeg";
import { CheckCircle } from "lucide-react";

const QsrAbout = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Single Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative w-full h-[420px] rounded-[2.5rem] overflow-hidden shadow-xl">
                            <img src={qsrAboutImg} alt="About QSR" className="w-full h-full object-cover" />
                        </div>
                        
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-8 order-1 lg:order-2">
                        <div className="space-y-3">
                            <span className="inline-block text-orange-600 font-bold text-sm uppercase tracking-widest">
                                About the Platform
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                                Engineered for{" "}
                                <span className="text-transparent bg-clip-text"
                                    style={{ backgroundImage: "linear-gradient(90deg, #ea580c, #d97706)" }}>
                                    High-Speed Service
                                </span>
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                QSRs and fast casual brands live and die by throughput speed. Our platform is designed from the ground up for rapid order processing, kiosk self-service, drive-thru synchronization, and franchise-wide visibility — all delivered with zero operational drag.
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                Whether you're running a single location or 500-outlet franchise, every module scales seamlessly and reports back to a single headquarters dashboard.
                            </p>
                        </div>

                        <div className="space-y-3">
                            {[
                                "Touchscreen kiosk ordering with upsell engine baked in",
                                "Drive-thru display integration with kitchen order sequencing",
                                "Digital menu board management across all locations",
                                "Franchise HQ dashboard with per-location analytics",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QsrAbout;
