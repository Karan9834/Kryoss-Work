import React from 'react';
import { Smartphone, Globe, Layers, Database, Cloud, Shield } from 'lucide-react';

const techStack = [
    { name: "Android App", tech: "Kotlin / Java", icon: Smartphone },
    { name: "iOS App", tech: "Swift / Objective-C", icon: Smartphone },
    { name: "Cross-Platform", tech: "Flutter / React Native", icon: Layers },
    { name: "Backend", tech: "Laravel / Node.js", icon: Globe },
    { name: "Database", tech: "MySQL / MongoDB", icon: Database },
    { name: "Cloud Hosting", tech: "AWS / Google Cloud", icon: Cloud },
    { name: "Real-time", tech: "Socket.io / Firebase", icon: Shield },
    { name: "Maps", tech: "Google Maps API", icon: Globe }
];

const UberTechStack = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-10 lg:px-20 text-center">
                <div className="max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-primary">Reliable Technology</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900">
                        Our Robust <span className="text-primary">Tech Stack</span>
                    </h3>
                    <p className="text-lg text-gray-600">
                        We use the latest and most secure technologies to ensure your Uber clone app is scalable, fast, and secure.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {techStack.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all group">
                            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                <item.icon className="h-8 w-8" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                            <p className="text-sm text-gray-500">{item.tech}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-12 bg-white rounded-[3rem] border border-gray-100 shadow-sm">
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder for actual logos mentioned: Laravel, Flutter, etc. */}
                        <div className="text-2xl font-black text-gray-400">FLUTTER</div>
                        <div className="text-2xl font-black text-gray-400">LARAVEL</div>
                        <div className="text-2xl font-black text-gray-400">AWS</div>
                        <div className="text-2xl font-black text-gray-400">MYSQL</div>
                        <div className="text-2xl font-black text-gray-400">FIREBASE</div>
                        <div className="text-2xl font-black text-gray-400">NODEJS</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UberTechStack;
