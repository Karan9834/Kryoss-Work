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

const RevPTCTechStack = () => {
    return (
        <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
            <div className="max-w-7xl mx-auto px-6 text-center text-white">

                {/* top pill */}
                <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 rounded-full border border-white/40 text-sm">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    Tech-Stack
                </div>

                {/* heading */}
                <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                    Technologies Ensuring Flawless Network Stability
                </h2>

                {/* paragraph */}
                <p className="max-w-4xl mx-auto text-white/90 mb-12 text-sm md:text-base">
                    We deploy robust and concurrent environments capable of tracking infinite downline branches seamlessly.
                    Ledgers distribute highly transactional logic efficiently without freezing servers.
                </p>

                {/* capsules */}
                <div className="flex flex-wrap justify-center gap-4">
                    {techStack.map((item, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md cursor-pointer"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="w-8 h-8 object-contain"
                            />
                            <span className="text-gray-800 font-medium text-sm whitespace-nowrap">
                                {item.name}
                            </span>

                            {/* hover popup */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform duration-200">

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default RevPTCTechStack;
