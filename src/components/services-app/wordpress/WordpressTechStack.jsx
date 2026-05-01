import React from "react";

import html from "../../../assets/services-laravel-img/html5.svg";
import css from "../../../assets/services-laravel-img/css3.svg";
import bootstrap from "../../../assets/services-laravel-img/bootstrap.svg";
import tailwind from "../../../assets/services-laravel-img/tailwindcss.svg";
import react from "../../../assets/services-laravel-img/reactjs.svg";
import vue from "../../../assets/services-laravel-img/vuejs.svg";

import livewire from "../../../assets/services-laravel-img/livewire.svg";
import inertia from "../../../assets/services-laravel-img/inertiajs.svg";
import graphql from "../../../assets/services-laravel-img/graphql.svg";
import mysql from "../../../assets/services-laravel-img/mysql.svg";
import postgres from "../../../assets/services-laravel-img/postgresql.svg";
import mongo from "../../../assets/services-laravel-img/mongodb.svg";

import redis from "../../../assets/services-laravel-img/redis.svg";
import nginx from "../../../assets/services-laravel-img/nginx.svg";
import docker from "../../../assets/services-laravel-img/docker.svg";
import aws from "../../../assets/services-laravel-img/aws1.svg";
import digitalocean from "../../../assets/services-laravel-img/digitalocean2.svg";
import github from "../../../assets/services-laravel-img/git&github.svg";

const techStack = [
    { name: "HTML5", img: html },
    { name: "CSS3", img: css },
    { name: "Bootstrap", img: bootstrap },
    { name: "Tailwind CSS", img: tailwind },
    { name: "React.js", img: react },
    { name: "Vue.js", img: vue },

    { name: "Livewire", img: livewire },
    { name: "Inertia.js", img: inertia },
    { name: "GraphQL", img: graphql },
    { name: "MySQL", img: mysql },
    { name: "PostgreSQL", img: postgres },
    { name: "MongoDB", img: mongo },

    { name: "Redis", img: redis },
    { name: "Nginx", img: nginx },
    { name: "Docker", img: docker },
    { name: "AWS", img: aws },
    { name: "DigitalOcean", img: digitalocean },
    { name: "Git & GitHub", img: github },
];

const TechnologyStack = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#2a0703] to-[#6b140b] text-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">

                    <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1 text-sm mb-5">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        Our Tech Stack
                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Technologies We Use to   <span className="text-orange-400">  Build WordPress Solutions</span>
                    </h2>

                    <p className="text-white/80 max-w-3xl mx-auto leading-relaxed">
                        We don't just install WordPress and hand it over. Every project is built using a carefully selected WordPress tech stack - chosen for performance, scalability, security, and long-term maintainability.
                    </p>

                </div>

                {/* Technology Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                    {techStack.map((tech, index) => (

                        <div
                            key={index}
                            className="group border border-white/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-white hover:bg-white/5"
                        >

                            <img
                                src={tech.img}
                                alt={tech.name}
                                className="w-12 h-12 mb-4 object-contain"
                            />

                            <p className="text-sm font-medium">
                                {tech.name}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default TechnologyStack;