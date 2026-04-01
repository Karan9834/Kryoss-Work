import React from "react";
import ios from "@/assets/homeservice-tutor-img/iOS.webp"
import android from "@/assets/homeservice-tutor-img/android.webp"
import googlemaps from "@/assets/homeservice-tutor-img/googlemaps.webp"
import androidstudio from "@/assets/homeservice-tutor-img/androidstudio.webp"
import flutter from "@/assets/homeservice-tutor-img/flutter.webp"
import digitalocean from "@/assets/homeservice-tutor-img/digitalocean.svg"
import bitbucket from "@/assets/homeservice-tutor-img/bitbucket.webp"
import swift from "@/assets/homeservice-tutor-img/swift.webp"
import laravel from "@/assets/homeservice-tutor-img/laravel.webp"
import php from "@/assets/homeservice-tutor-img/php.webp"
import firebase from "@/assets/homeservice-tutor-img/firebase.webp"
import ms100 from "@/assets/homeservice-tutor-img/ms100.svg"
import aws from "@/assets/homeservice-tutor-img/aws.svg"
import java from "@/assets/homeservice-tutor-img/java.webp"
import mysql from "@/assets/homeservice-tutor-img/mysql.webp"
import bootstrap from "@/assets/homeservice-tutor-img/bootstrap.webp"
import css3 from "@/assets/homeservice-tutor-img/css3.webp"
import html5 from "@/assets/homeservice-tutor-img/html5.webp"

const techStack = [
    { name: "iOS", img: ios },
    { name: "Android", img: android },
    { name: "Google Maps", img: googlemaps },
    { name: "Android Studio", img: androidstudio },
    { name: "Flutter", img: flutter },
    { name: "Digital Ocean", img: digitalocean },
    { name: "Bitbucket", img: bitbucket },
    { name: "Swift", img: swift },
    { name: "Laravel", img: laravel },
    { name: "PHP", img: php },
    { name: "Firebase", img: firebase },
    { name: "100 MS", img: ms100 },
    { name: "AWS", img: aws },
    { name: "Java", img: java },
    { name: "MySQL", img: mysql },
    { name: "Bootstrap", img: bootstrap },
    { name: "CSS 3", img: css3 },
    { name: "HTML 5", img: html5 },
];

const SmartHMSTechStack = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-r from-slate-900 to-teal-900 relative">
            <div className="max-w-7xl mx-auto px-6 text-center text-white">

                <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border border-teal-500/40 text-xs font-bold uppercase tracking-widest bg-white/5">
                    <span className="w-2 h-2 rounded-full bg-teal-400"></span>
                    Advanced Technology
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-tight">
                    Reliable Infrastructure for Healthcare Scale
                </h2>

                <p className="max-w-2xl sm:max-w-4xl mx-auto text-slate-300 mb-12 lg:mb-16 text-sm sm:text-lg tracking-tight font-medium px-4">
                    We use modern, secure, and highly scalable technologies to build high-performance
                    medical software. Smart HMS is engineered for peak data loads
                    and absolute HIPAA compliance.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {techStack.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-slate-900/60 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/5 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                            />
                            <span className="text-white font-black text-xs sm:text-sm whitespace-nowrap uppercase tracking-tighter">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SmartHMSTechStack;
