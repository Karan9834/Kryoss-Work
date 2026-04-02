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

const AcadifyEduERPTechStack = () => {
    return (
        <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 text-center text-white relative z-10">

                <div className="inline-flex items-center gap-2 px-6 py-2 mb-8 rounded-full border border-blue-400/40 text-[10px] font-bold uppercase tracking-[0.25em] bg-white/5 backdrop-blur-sm">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    Acadify Tech-Stack
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 leading-tight tracking-tight  px-4">
                    Built for <span className="text-cyan-400 font-bold">Reliability</span> & <span className="text-blue-400 font-bold">Global Scale</span>
                </h2>

                <p className="max-w-2xl sm:max-w-4xl mx-auto text-blue-100/70 mb-12 lg:mb-16 text-sm sm:text-lg tracking-tight font-medium leading-relaxed px-4">
                    AcadifyEdu is built on modern, secure, and highly scalable technologies to ensure 100% data 
                    integrity and zero-latency campus operations, even with thousands of concurrent users.
                </p>

                <div className="flex flex-wrap justify-center gap-6">
                    {techStack.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-8 h-8 sm:w-10 sm:h-10 object-contain relative z-10"
                            />
                            <span className="text-white font-black text-xs sm:text-sm whitespace-nowrap uppercase tracking-tighter relative z-10">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-0" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -z-0" />
        </section>
    );
};

export default AcadifyEduERPTechStack;
