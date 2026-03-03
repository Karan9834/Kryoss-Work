import React from "react";
import { Monitor } from "lucide-react";
import platform1 from "../../assets/homeservice-tutor-img/platform1.webp";
import platform2 from "../../assets/homeservice-tutor-img/platform2.webp";

const AndroidIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9997.9993-.9997.5511 0 .9997.4486.9997.9997 0 .5511-.4486.9997-.9997.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997 0-.5511.4482-.9997.9993-.9997.5511 0 .9997.4486.9997.9997 0 .5511-.4486.9997-.9997.9997m11.4045-6.0206l1.9973-3.4592c.1132-.1964.0463-.4473-.1505-.5605-.1969-.1132-.4482-.0463-.5614.15l-2.0223 3.5028c-1.5836-.7232-3.3514-1.1345-5.1446-1.1345-1.7932 0-3.5606.4113-5.1442 1.1345L4.828 5.4514c-.1132-.1964-.3645-.2632-.5609-.15-.1969.1132-.2641.3641-.1509.5605l1.9973 3.4592C2.6886 11.1843.4382 14.3916 0 18.0414h24c-.4382-3.6498-2.6886-6.8571-6.1185-8.7206" />
    </svg>
);

const AppleIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.05 20.28c-.96.95-2.23 1.52-3.62 1.52-1.39 0-2.66-.57-3.62-1.52A5.122 5.122 0 018.3 16.66c0-2.82 2.3-5.12 5.13-5.12 2.83 0 5.13 2.3 5.13 5.12a5.122 5.122 0 01-1.51 3.62zm-3.62-10.23c-.31 0-.62.03-.92.09-.59-1.28-1.92-2.18-3.45-2.18-2.1 0-3.8 1.7-3.8 3.8 0 .58.13 1.13.36 1.62-.25-.03-.5-.04-.75-.04-2.83 0-5.13 2.3-5.13 5.13s2.3 5.13 5.13 5.13c1.39 0 2.66-.57 3.62-1.52.54.54 1.2.94 1.94 1.18-.18-.54-.28-1.11-.28-1.7 0-3.11 2.53-5.63 5.63-5.63.15 0 .29.01.44.02.26-1.52 1.58-2.67 3.19-2.67.65 0 1.26.19 1.77.52-.37-1.15-1.44-1.97-2.7-1.97-.26 0-.51.04-.75.11-.64-1.74-2.31-3-4.28-3-2.52 0-4.57 2.05-4.57 4.57 0 .15.01.29.02.44z" />
    </svg>
);

const PlatformsSection = () => {
    return (
        <section className="w-full bg-white pt-20 pb-0">
            <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">

                {/* BADGE */}
                <div className="mb-4 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border px-4 py-1 text-sm text-gray-700">
                        <span className="h-2 w-2 rounded-full bg-orange-500" />
                        Uber For Tutor Clone for Various Platforms
                    </span>
                </div>

                {/* HEADING */}
                <h2 className="mb-4 text-center text-[28px] font-semibold text-gray-800 sm:text-[36px]">
                    Unlock Your <span className="text-orange-500">Business Potential</span>{" "}
                    Across All Platforms with Uber For Tutor Clone Script
                </h2>

                {/* SUBTEXT */}
                <p className="mx-auto mb-14 max-w-[900px] text-center text-gray-600">
                    Our feature-rich Uber for tutor clone is designed to work seamlessly across multiple platforms.
                </p>

                {/* PLATFORM CARDS */}
                <div className="grid gap-8 lg:grid-cols-2">

                    {/* iOS & ANDROID */}
                    <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#2b2232,#1b1622)] px-8 pt-10 pb-0 text-white flex flex-col h-full">

                        {/* ICONS */}
                        <div className="mb-6 flex gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                <AndroidIcon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                <AppleIcon className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        <h3 className="mb-4 text-2xl font-semibold">
                            iOS and Android
                        </h3>

                        <p className="mb-10 text-white/80 leading-relaxed">
                            We offer a ready-to-use on-demand tutor app like uber that allows you
                            to provide your services seamlessly across both iOS and Android
                            platforms. Our solution is fully customizable, scalable, and optimized,
                            helping you reach a wider audience and scale your business effortlessly.
                        </p>

                        {/* IMAGE */}
                        <img
                            src={platform1}
                            alt="Mobile App"
                            className="block mx-auto w-full max-w-[420px] object-contain object-bottom mt-auto"
                        />
                    </div>

                    {/* WEB */}
                    <div className="relative overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#2b2232,#1b1622)] px-8 pt-10 pb-0 text-white flex flex-col h-full">

                        {/* ICON */}
                        <div className="mb-6 flex">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                <Monitor className="h-6 w-6 text-white" />
                            </div>
                        </div>

                        <h3 className="mb-4 text-2xl font-semibold">
                            Feature-Rich Web Solution
                        </h3>

                        <p className="mb-10 text-white/80 leading-relaxed">
                            With our Uber for tutor clone app, you can offer a smooth and efficient
                            experience to both users and service providers across various web
                            browsers. Packed with all the essential features, it’s designed to drive
                            success and enhance the overall user experience.
                        </p>

                        {/* IMAGE */}
                        <img
                            src={platform2}
                            alt="Web Dashboard"
                            className="block mx-auto w-full max-w-[520px] object-contain object-bottom mt-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlatformsSection;