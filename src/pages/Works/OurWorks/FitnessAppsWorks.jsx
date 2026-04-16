import React, { useState } from 'react';
import {
    Briefcase,
    MapPin,
    ChevronRight,
    Globe,
    ArrowRight,
    CheckCircle,
    Star,
    Users,
    Mail,
    Phone,
    MessageSquare,
    Play,
    Apple
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Import Components
// Import Project Images (Fitness Apps)
import appImg from '../../../assets/fitnessimg/app.png';
import truemedImg from '../../../assets/fitnessimg/truemed.png';
import fitifyImg from '../../../assets/fitnessimg/fitify.png';
import nhImg from '../../../assets/fitnessimg/nh.png';
import amwellImg from '../../../assets/fitnessimg/amwell.png';

import Testimonial from '../../../components/Common/Testimonial';
import Industries from '../../../components/Common/Industries';
import OurWork from '../../../components/Common/OurWork';
import ContactUs from '../../../components/Common/ContactUs';
const FitnessAppsWorks = () => {
    const projects = [
        {
            title: 'Pedometer Pacer - Fitness That Fits Your Life',
            description: '“Walking & Running Pedometer for Health & Weight” syncs steps & calories w/ MyFitnessPal and Fitbit! Track your step, walking & weight loss with this free health counter. Lose weight and track walk distance and calories burned using 24/7 step counting from our pedometer, step counter & health tracker app.',
            tags: ['Pedometer', 'Health Tracker', 'Weight Loss'],
            image: appImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=cc.pacer.androidapp', type: 'playstore' },
                { href: 'https://apps.apple.com/us/app/pacer-pedometer-step-tracker/id600446812', type: 'appstore' }
            ]
        },
        {
            title: 'myUpchar - Leading online doctor consultation app',
            description: 'Get 24x7 online consultation from 50,000+ experienced doctors on myUpchar. Consult experts in 30+ specialties through chat consultation or tele consultation. No more long queues or waiting times, connect with trusted doctors within 10 minutes. myUpchar offers safe and secure calls and online chat with doctors.',
            tags: ['Online Consultation', 'Doctors', 'Telemedicine'],
            image: appImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.myupchar.user', type: 'playstore' }
            ]
        },
        {
            title: 'Truemeds - Trusted Dawa Delivery App',
            description: 'Truemeds is India\'s 1st e-Pharmacy that guarantees to reduce your medicine costs up to 72%. We only supply medicines from India\'s top 50 medicine makers, to guarantee our users the best quality. All of our orders go through the most rigid checks to ensure that the correct medicines are supplied to our users. Our proprietary Triple Check (TC) flow makes sure every order is checked by a Doctor, Pharmacist & our proprietary AI-based Algorithm.',
            tags: ['Pharmacy Delivery', 'Medicine', 'Healthcare'],
            image: truemedImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.intellihealth.truemedsp', type: 'playstore' }
            ]
        },
        {
            title: 'Fitify: Workout Routines & Training Plans',
            description: 'Who needs a gym? Get in shape at home with Workouts & Plans from Fitify. Fitify is your ultimate full body workout app to lose weight, burn fat, build muscle & strength. With over 900 exercises in the work out app, your daily workout routines are always fresh, fun & effective! Work out anywhere, anytime using any fit tool. No equipment required, but if you have one - take advantage of it!',
            tags: ['Home Workout', 'Fitness Plans', 'Health'],
            image: fitifyImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.fitifyworkouts.bodyweight.workoutapp', type: 'playstore' },
                { href: 'https://apps.apple.com/us/app/fitify-fitness-home-workout/id1463386686', type: 'appstore' }
            ]
        },
        {
            title: 'NH Care-Video Consult or Book Appointment online',
            description: 'NH Care app to book appointments for video consultations as well as in-hospital consultations. Find a doctor by using different search criteria, like specialty, symptom, or hospital, and book appointments for self or for family members. Book appointment for the same day or a future date as per your convenience. Book online appointment via video call or in-hospital booking from the comfort of your home. NH Care also allows you to attach reports and other documents that you want to show to the doctor before consultation.',
            tags: ['Video Consultation', 'Hospital Booking', 'Medical Care'],
            image: nhImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=org.narayanahealth.nhcare', type: 'playstore' }
            ]
        },
        {
            title: 'Amwell: Doctor Visits 24/7',
            description: 'Amwell is the best way to see a doctor from home or on-the-go. Our telehealth app connects you to board-certified, experienced medical providers. High-quality healthcare is now available, 24/7, with on-demand service or scheduled appointments, often with next-day availability. Amwell brings healthcare home through the power of telemedicine so you can feel better faster. No more driving to the doctor or sitting in waiting rooms. With Amwell, quality medical providers are available 24/7, to help you feel better faster.',
            tags: ['Telehealth', 'Doctor Visits', 'Medical Providers'],
            image: amwellImg,
            links: [
                { href: 'https://play.google.com/store/apps/details?id=com.americanwell.android.member.amwell&hl=en', type: 'playstore' },
                { href: 'https://apps.apple.com/us/app/amwell-doctor-visits-24-7/id655783752', type: 'appstore' }
            ]
        }
    ];

    const stats = [
        { value: '750', label: 'Project Delivered', icon: <CheckCircle className="text-orange-500" /> },
        { value: '150', label: 'Development Staff', icon: <Briefcase className="text-orange-500" /> },
        { value: '5', label: 'Years of Experience', icon: <Star className="text-orange-500" /> },
        { value: '450', label: 'Satisfied Clients', icon: <CheckCircle className="text-orange-500" /> }
    ];

    return (
        <div className="w-full bg-white relative font-sans overflow-hidden">
            {/* 1. Hero Section */}
            <section
                className="relative pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-center items-center text-center text-white"
                style={{
                    backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url('https://kryosssoftech.org/icons/banner/heath-and-care.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 container mx-auto px-4"
                >
                    <h1 className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6">Health & Fitness <span className="text-orange-500">Apps</span></h1>
                    <p className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto text-gray-200">
                        Discover top-tier mobile health, fitness, and telemedicine solutions that we have developed, empowering a healthier world through technology.
                    </p>
                </motion.div>
            </section>

            {/* 2. Breadcrumb Sticky Section */}
            <section className="bg-gray-100/80 py-4 border-b border-gray-200 backdrop-blur-md sticky top-0 z-40 shadow-sm">
                <div className="container mx-auto px-4 flex flex-wrap items-center text-sm md:text-base font-semibold text-gray-600">
                    <a href="/" className="hover:text-orange-500 transition-colors duration-300">Home</a>
                    <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
                    <span className="text-orange-500">Health & Fitness Apps</span>
                </div>
            </section>

            {/* 3. Projects Section */}
            <section className="pt-16 md:pt-24 bg-white relative z-10 w-full mb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center mb-12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[30px] lg:text-[36px] font-bold leading-[1.2] text-black mb-4"
                        >
                            Our <span className="text-orange-500">Health & Fitness</span> Applications
                        </motion.h2>
                        <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                    </div>
                </div>

                <div className="w-full mt-8">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <div key={idx} className={`w-full py-16 lg:py-24 ${isEven ? 'bg-white' : 'bg-orange-50'}`}>
                                <div className={`container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Image Box */}
                                    <div className="w-full lg:w-1/2 flex justify-center items-center relative drop-shadow-2xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[85%] xl:w-[75%] max-h-[580px] object-contain"
                                        />
                                    </div>

                                    {/* Content Box */}
                                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                        <div className="flex items-center gap-3 mb-6">
                                            <span className="h-px w-8 bg-orange-500"></span>
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-orange-500">Project 0{idx + 1}</span>
                                        </div>

                                        <h3 className="text-[30px] lg:text-[36px] font-medium leading-[1.2] text-gray-950 mb-6">
                                            {project.title}
                                        </h3>

                                        <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-gray-600 mb-10">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tags?.map((tag) => (
                                                <span key={tag} className="px-5 py-2 rounded-xl bg-white border border-gray-100 text-[12px] font-medium tracking-[0.05em] uppercase text-gray-500 shadow-sm">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {project.links && project.links.length > 0 && (
                                            <div className="flex flex-wrap gap-4 mb-10">
                                                {project.links.map((link, lIdx) => (
                                                    <a
                                                        key={lIdx}
                                                        href={link.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-3 bg-gray-800 text-white px-5 py-2.5 rounded-xl hover:bg-orange-500 hover:shadow-lg transition-all duration-300 group/btn"
                                                    >
                                                        {link.type === 'playstore' && (
                                                            <>
                                                                <div className="w-6 h-6 flex items-center justify-center">
                                                                    <Play className="w-5 h-5 text-gray-400 group-hover/btn:text-white" />
                                                                </div>
                                                                <div className="flex flex-col items-start leading-tight">
                                                                    <span className="text-[9px] uppercase font-bold text-gray-400 group-hover/btn:text-orange-100 italic">Get it on</span>
                                                                    <span className="text-sm font-black tracking-tight">Google Play</span>
                                                                </div>
                                                            </>
                                                        )}
                                                        {link.type === 'appstore' && (
                                                            <>
                                                                <div className="w-6 h-6 flex items-center justify-center">
                                                                    <Apple className="w-5 h-5 text-gray-400 group-hover/btn:text-white" />
                                                                </div>
                                                                <div className="flex flex-col items-start leading-tight">
                                                                    <span className="text-[9px] uppercase font-bold text-gray-400 group-hover/btn:text-orange-100 italic">Download on the</span>
                                                                    <span className="text-sm font-black tracking-tight">App Store</span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* 4. Stats Counter Section */}
            <section className="py-20 bg-gray-900 text-white relative overflow-hidden" style={{ backgroundImage: "url('https://kryosssoftech.org/assets/images/indexImg/Counter.png')", backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-black/80"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-700/50">
                        {stats.map((stat, index) => (
                            <div key={index} className="p-4">
                                <h3 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">{stat.value}+</h3>
                                <p className="text-gray-300 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* New Added Sections */}
            <Testimonial theme="orange" />
            <Industries theme={{ bg: "bg-[#fff3eb]", primary: "text-orange-500", iconBg: "bg-orange-100", iconColor: "text-orange-500" }} />
            <OurWork theme={{ primary: "text-orange-500", accent: "bg-orange-500" }} />
            <ContactUs theme="orange" />

        </div>
    );
};

export default FitnessAppsWorks;
