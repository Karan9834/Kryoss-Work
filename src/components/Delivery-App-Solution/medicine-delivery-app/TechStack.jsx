import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
    const techs = [
        { name: "iOS", icon: "https://whitelabelfox.com/assets/images/technology/ios.svg" },
        { name: "Android", icon: "https://whitelabelfox.com/assets/images/technology/android.svg" },
        { name: "Google Maps", icon: "https://whitelabelfox.com/assets/images/technology/google-map.svg" },
        { name: "Android Studio", icon: "https://whitelabelfox.com/assets/images/technology/android-studio.svg" },
        { name: "Flutter", icon: "https://whitelabelfox.com/assets/images/technology/flutter.svg" },
        { name: "Digital Ocean", icon: "https://whitelabelfox.com/assets/images/technology/digital-ocean.svg" },
        { name: "BitBucket", icon: "https://whitelabelfox.com/assets/images/technology/bitbucket.svg" },
        { name: "Swift", icon: "https://whitelabelfox.com/assets/images/technology/swift.svg" },
        { name: "Laravel", icon: "https://whitelabelfox.com/assets/images/technology/laravel.svg" },
        { name: "PHP", icon: "https://whitelabelfox.com/assets/images/technology/php.svg" },
        { name: "Firebase", icon: "https://whitelabelfox.com/assets/images/technology/firebase.svg" },
        { name: "100ms", icon: "https://whitelabelfox.com/assets/images/technology/100ms.svg" },
        { name: "AWS", icon: "https://whitelabelfox.com/assets/images/technology/aws.svg" },
        { name: "Java", icon: "https://whitelabelfox.com/assets/images/technology/java.svg" },
        { name: "MySQL", icon: "https://whitelabelfox.com/assets/images/technology/mysql.svg" },
        { name: "Bootstrap", icon: "https://whitelabelfox.com/assets/images/technology/bootstrap.svg" },
        { name: "CSS 3", icon: "https://whitelabelfox.com/assets/images/technology/css.svg" },
        { name: "HTML 5", icon: "https://whitelabelfox.com/assets/images/technology/html.svg" }
    ];

    return (
        <section className="py-20 relative overflow-hidden"
            style={{ background: 'linear-gradient(100deg, #002B2C 0%, #001515 100%)' }}>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl lg:text-4xl font-black text-white mb-4 font-nunito leading-tight"
                    >
                        Technologies We Use to Build{' '}
                        <span className="text-teal-400">Scalable Digital Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-base text-gray-400 font-ibm-plex"
                    >
                        We use modern, scalable, and secure technologies to develop high-performance mobile applications, web platforms, and backend systems.
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
                    {techs.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.03 }}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <div className="w-16 h-16 bg-white/10 border border-white/10 rounded-2xl p-3 flex items-center justify-center group-hover:bg-white/20 group-hover:-translate-y-1 transition-all backdrop-blur-sm">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="max-w-full max-h-full object-contain"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.innerHTML = `<span class="text-xl text-white/50">📱</span>`;
                                    }}
                                />
                            </div>
                            <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors font-ibm-plex">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
