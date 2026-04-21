import { Link } from 'react-router-dom';

import React, { useState } from "react";
import {
  User,
  Video,
  Bell,
  Music,
  Heart,
  Globe,
  MapPin,
  Settings,
  MessageCircle,
  LayoutDashboard,
  Users,
  Smartphone,
  Apple,
  ShoppingCart,
  Handshake,
  Megaphone,
  BadgeCheck,
  Rocket,
  Headphones,
  Play,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import TeamMoments from '../../../components/Common/TeamMoments';
import Testimonial from '../../../components/Common/Testimonial';
import ContactUs from '../../../components/Common/ContactUs';

/* =========================
   PART 1 DATA
========================= */

const featureList = [
  {
    icon: <User size={20} />,
    title: "User-Friendly Design",
    desc: "Attractive layout that guarantees smooth navigation, making the creation of a custom short-video app simple for all users.",
  },
  {
    icon: <User size={20} />,
    title: "Account Management",
    desc: "Enable individuals to provide details like their name, bio, interests, and other vital data to build and maintain their accounts.",
  },
  {
    icon: <Video size={20} />,
    title: "Video Uploading",
    desc: "Allow creators to publish clips using engaging hashtags, descriptions, etc. People and places can be mentioned while uploading clips.",
  },
  {
    icon: <MessageCircle size={20} />,
    title: "Community Features",
    desc: "Utilize dynamic networking tools like liking, sharing, and commenting to maximize video interactions and audience reach.",
  },
  {
    icon: <Video size={20} />,
    title: "Advanced Creation Tools",
    desc: "Utilize powerful editing options like color filters, visual effects, text overlays, and AR elements to elevate visual quality.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Location Tagging",
    desc: "Creators are permitted to pinpoint clips with precise geospatial data, linking audiences with relevant regional entertainment.",
  },
  {
    icon: <Bell size={20} />,
    title: "Real-Time Alerts",
    desc: "Allow audiences to remain engaged with favorite creators whenever fresh updates or brand-new clips are published online.",
  },
  {
    icon: <Video size={20} />,
    title: "Channel Creation",
    desc: "Creators can easily build and supervise their distinct profile spaces to interact with companions and their fan base.",
  },
  {
    icon: <Globe size={20} />,
    title: "Live Streaming",
    desc: "Broadcasters can initiate live sessions and promptly alert their audience and peers regarding their current broadcasting sessions.",
  },
  {
    icon: <Music size={20} />,
    title: "Soundtrack Integration",
    desc: "Select preferred music or import personal audio files to ensure the clip sharing journey is highly customized and engaging.",
  },
  {
    icon: <Heart size={20} />,
    title: "Engage with Content",
    desc: "Audiences can express appreciation and leave remarks on clips from various publishers they consider entertaining or useful.",
  },
  {
    icon: <Settings size={20} />,
    title: "Additional Preferences",
    desc: "Permit individuals to restrict users, adjust visibility options, and tailor their overall platform journey as they see fit.",
  },
];

/* =========================
   PART 2 DATA
========================= */

const adminFeatures = [
  {
    icon: <LayoutDashboard size={22} />,
    title: "Unified Administration",
    desc: "Our short-video platform features a comprehensive control panel that assists you in supervising and directing all activities effortlessly.",
  },
  {
    icon: <Users size={22} />,
    title: "Audience Supervision",
    desc: "Permit administrators to oversee accounts, monitor individual details, and execute required interventions whenever necessary.",
  },
  {
    icon: <Settings size={22} />,
    title: "System Configurations",
    desc: "Allow operators to adjust primary configurations, ranging from modules to billing setups, interface design, dialects, and beyond.",
  },
];

/* =========================
   PART 3 DATA
========================= */

const platforms = [
  {
    icon: <Globe size={22} />,
    title: "Web Portal",
    desc: "Provide your audience with a customized browser platform to utilize all desired modules in a highly fluid navigation journey.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Android Application",
    desc: "Maximize the potential of our customized video platform for the Android ecosystem, accessing every module from one unified screen.",
  },
  {
    icon: <Apple size={22} />,
    title: "iOS Application",
    desc: "Utilize a dedicated iOS software, enabling individuals to stream live and interact with fans while providing excellent video sharing.",
  },
];

/* =========================
   PART 4 DATA
========================= */

const monetization = [
  {
    icon: <ShoppingCart size={24} />,
    title: "Premium Upgrades",
    desc: "Increase your income with internal transactions. Provide special modules for a charge to elevate the overall audience journey.",
    dark: true,
  },
  {
    icon: <Users size={24} />,
    title: "Angel Investments",
    desc: "Present your enterprise concept to interested funders and engage with them to secure capital for your short-video platform.",
    dark: true,
  },
  {
    icon: <Handshake size={24} />,
    title: "Promoted Content",
    desc: "Permit creators to secure optimal interaction on their clips and generate income through partnerships and backed materials.",
    dark: true,
  },
  {
    icon: <Megaphone size={24} />,
    title: "Brand Advertising",
    desc: "Maximize the potential of commercial placements by highlighting external products and establishing steady streams of income.",
    dark: false,
  },
];

const steps = [
  {
    title: "Requirement Analysis",
    image: "/Video-App/process1.png",
  },
  {
    title: "UI/UX & Engineering",
    image: "/Video-App/process1.png",
  },
  {
    title: "Third-Party Integration",
    image: "/Video-App/process1.png",
  },
  {
    title: "Quality Assurance",
    image: "/Video-App/process1.png",
  },
];

const features = [
  {
    icon: <BadgeCheck size={28} />,
    title: "Custom Brand Identity",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Cross-Platform Access",
  },
  {
    icon: <Rocket size={28} />,
    title: "Quick Deployment",
  },
  {
    icon: <Globe size={28} />,
    title: "Global Localization",
  },
  {
    icon: <Headphones size={28} />,
    title: "Dedicated Assistance",
  },
];

const testimonials = [
  {
    name: "David",
    image: "/Video-App/client1.webp",
    text: "Mr. David heavily commended our crew for excellent, captivating results and great contentment with our assistance and readiness for future success.",
  },
  {
    name: "Aman",
    image: "/Video-App/client2.webp",
    text: "Mr. Aman conveyed his enthusiasm and contentment regarding the delivery, emphasizing the outstanding execution achieved by the development team.",
  },
  {
    name: "Nora",
    image: "/Video-App/client3.webp",
    text: "I am extremely pleased and content with the effort invested in our initiative and the results as well, strongly suggesting the staff's commitment.",
  },
  {
    name: "George",
    image: "/Video-App/client4.webp",
    text: "Mr. George Nkwocha commended our expertise and envisions upcoming partnerships following a highly effective digital application acquisition.",
  },
];

const apps = [
  { title: "Gojek Alternative App", image: "/Video-App/app1.webp" },
  { title: "Uber Alternative App", image: "/Video-App/app2.webp" },
  { title: "Food Dispatch App", image: "/Video-App/app3.webp" },
  { title: "Pharmacy Delivery App", image: "/Video-App/app4.webp" },
  { title: "Handyman Booking App", image: "/Video-App/app5.webp" },
  { title: "Ride Sharing App", image: "/Video-App/app6.webp" },
  { title: "Indrive Alternative App", image: "/Video-App/app7.webp" },
  { title: "Universal Delivery App", image: "/Video-App/app8.webp" },
];

const recognitionPlatforms = [
  { name: "Trustpilot", rating: "4.4", logo: "/Video-App/trustpilot.jpg" },
  { name: "Google", rating: "4.9", logo: "/Video-App/google.jpg" },
  { name: "Clutch", rating: "5.0", logo: "/Video-App/clutch.jpg" },
  { name: "GoodFirms", rating: "4.9", logo: "/Video-App/goodfirms.jpg" },
];

const faqs = [
  {
    question: "What exactly is a Short-Video Clone App, and how does it function?",
    answer:
      "A short-video clone app is a pre-built system that permits enterprises to release a video-centric platform akin to popular networks with modules like publishing, effects, appreciation, remarks, and distribution.",
  },
  {
    question: "In what way does the instant video distribution module operate?",
    answer:
      "The instant video distribution module permits individuals to publish and distribute clips promptly while engaging with peers via remarks, appreciation, and live interactions.",
  },
  {
    question: "What is the timeframe for releasing my personal Short-Video App?",
    answer:
      "Utilizing our pre-built framework, your personalized short-video application can be deployed within five business days contingent on specific modification needs.",
  },
  {
    question:
      "Which core modules are integrated into this Short-Video Platform?",
    answer:
      "Core modules encompass video publishing, live broadcasting, visual drafting utilities, alerts, account administration, profit-generation integrations, and reporting.",
  },
  {
    question: "Can this Short-Video App be tailored for my corporate identity?",
    answer:
      "Indeed, you may tailor corporate elements including logos, palettes, tools, and extra connections in accordance with your explicit organizational necessities.",
  },
  {
    question: "How safe is the platform for active audiences and publishers?",
    answer:
      "Our system employs robust verification, information privacy, and material review mechanisms to guarantee a secure environment for all participants.",
  },
  {
    question: "Am I able to generate revenue from my Short-Video App?",
    answer:
      "Certainly, revenue generation methods comprise advertisements, premium memberships, promoted materials, and internal virtual transactions.",
  },
  {
    question: "Is it possible to attach external integrations into the App?",
    answer:
      "Absolutely, external connections such as billing processors, reporting dashboards, and external network authentications can be seamlessly incorporated.",
  },
  {
    question:
      "Is the Short-Video application compatible with Android and iOS ecosystems?",
    answer:
      "Yes, our provided short-video framework is fully compatible with Android, iOS, and browser-based administrative ecosystems.",
  },
  {
    question: "Do you offer technical maintenance following the App rollout?",
    answer:
      "We certainly deliver complete post-deployment maintenance, troubleshooting, and system enhancements for your digital ecosystem.",
  },
];

const TikTokClonePage = () => {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full min-h-[90vh] bg-black py-12 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 max-w-xl">
            {/* Logo Badge */}
            <div className="flex items-center gap-3 mb-6">
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-gradient-to-br from-pink-500 to-purple-500
      shadow-[0_0_16px_rgba(236,72,153,0.9)] flex-wrap gap-4"
              >
                <span className="text-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]">
                  🎬
                </span>
              </div>

              {/* Brand */}
              <span className="text-lg font-semibold tracking-wide uppercase">
                <span
                  className="text-pink-500 
            drop-shadow-[0_0_6px_rgba(236,72,153,0.8)]"
                >
                  VYOM
                </span>

                <span className="text-white ml-1">VIDEO</span>
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Launch Your Very Own{" "}
              <span className="text-pink-500">Short-Video Platform</span>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Introduce your proprietary video-sharing platform effortlessly! Our highly adaptable short-video framework allows audiences to generate and distribute clips, aiding your enterprise in entering the thriving digital media sector. Initiate operations in just 5 days and expand your audience worldwide.
            </p>

            <a
              href="https://preview.codecanyon.net/item/streamit-ott-streaming-flutter-app-addon/full_screen_preview/56035814"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full font-semibold transition duration-300 inline-block w-fit"
            >
              View Live Demo →
            </a>
            <a href="/company/contact" className="group inline-flex items-center gap-2 px-8 py-3 bg-white/20 text-white border border-white/30 rounded-xl font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 backdrop-blur-md">
              <MessageCircle size={18} />
              Talk to Us
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end flex-wrap gap-4">
            <img
              src="/Video-App/hero-image1.jpg"
              alt="TikTok Clone App"
              className="w-[350px] md:w-[450px] lg:w-[550px] rounded-3xl shadow-lg max-w-none"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="w-full bg-white py-32 flex items-center">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-20 px-10">
          {/* LEFT IMAGE */}
          <div className="flex justify-center flex-wrap gap-4 order-2 lg:order-1">
            <img
              src="/Video-App/tik-tok-clone-about-us1.png"
              alt="TikTok Clone App"
              className="w-[520px] rounded-3xl shadow-lg object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="order-1 lg:order-2">
            <span className="text-sm bg-gray-100 px-5 py-1 rounded-full text-pink-600 font-medium">
              Platform Overview
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
              Exactly What is a <span className="text-pink-600">Short-Video Application?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              A short-video application is a fully prepared, white-label framework that permits visionaries and enterprises to construct their personalized quick-video sharing application, similar to trending apps, without coding from scratch.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Our framework is equipped with sophisticated utilities such as instant video distribution, boundless visual effects, engaging sound modifications, and far more.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Featuring adaptable and expandable attributes, you may tweak the platform to align with fluctuating industry patterns and audience expectations.
            </p>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS SECTION ================= */}
      <section className="w-full bg-gradient-to-r from-[#5a0009] to-[#720012] py-32 flex items-center">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-20 px-10">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="text-sm border border-white px-4 py-1 rounded-full">
              Operation Mechanism
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
              How the{" "}
              <span className="text-pink-400">Short-Video Platform Operates</span>
            </h2>

            <p className="text-gray-200 mb-10 text-lg max-w-xl">
              Our short-video application is crafted to deliver a seamless journey for audiences and enterprise leaders to generate, distribute, and supervise multimedia content.
            </p>

            {/* STEP 1 */}
            <div className="flex gap-5 mb-8">
              <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg flex-wrap gap-4">
                4
              </div>

              <div>
                <h4 className="font-semibold text-lg">Tailored Content Stream</h4>
                <p className="text-gray-300">
                  The system assembles a tailored content stream for every individual relying on personal preferences and activities.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-5 mb-8">
              <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg flex-wrap gap-4">
                5
              </div>

              <div>
                <h4 className="font-semibold text-lg">Revenue Opportunities</h4>
                <p className="text-gray-300">
                  Broadcasters can generate income via commercials, backed materials, or immediate follower contributions.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg flex-wrap gap-4">
                6
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Administrative Governance
                </h4>
                <p className="text-gray-300">
                  The control dashboard aids in monitoring metrics and administrating active profiles with optimal efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center flex-wrap gap-4">
            <img
              src="/Video-App/tiktok-clone-work.webp"
              alt="TikTok Clone Work"
              className="w-[580px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full py-24 flex items-center justify-end bg-gray-100">
        <div className="relative w-[95%] md:w-[90%] max-w-7xl py-16 bg-[#0b2d63] rounded-l-[40px] md:rounded-l-[200px] flex items-center pl-8 md:pl-24 overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="w-1/2 text-white z-10">
            <h2 className="text-4xl font-semibold leading-snug mb-6">
              Prepared to Release Your Custom Video-Sharing Software?
            </h2>

            <p className="text-gray-200 mb-8 max-w-lg">
              Do not delay launching your digital media venture! Utilizing our adaptable video-sharing framework, you may deploy in merely 5 days and start attracting the focus of millions.
            </p>

            <Link to="/company/contact" className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0b2d63] transition">
              Get a Free Estimate
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 flex justify-end items-end">
            <img
              src="/Video-App/girl-phone.webp"
              alt="TikTok App"
              className="h-[420px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= PART 1 ================= */}

      <section className="w-full bg-gray-50 py-32">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-24 px-4">
          <span className="text-xs border px-4 py-1 rounded-full text-red-500 border-red-200">
            System Capabilities
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Primary Attributes of{" "}
            <span className="text-red-500">Our Video Sharing System</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Maximize your media framework’s capabilities utilizing our video-sharing solution. Experience instant media distribution, boundless visual effects, and flawless adaptability for an exceptional audience journey.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-24 flex-wrap gap-4">
          <img
            src="/Video-App/tiktok-features.webp"
            alt="TikTok features illustration"
            className="w-[650px] md:w-[750px] object-contain"
          />
        </div>

        {/* Feature Cards */}
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-12">
            {featureList.map((item, index) => (
              <div
                key={index}
                className="flex gap-6 p-10 rounded-2xl border border-red-300 bg-white hover:shadow-xl hover:-translate-y-1 transition duration-300 min-h-[160px]"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-500 text-white shrink-0 flex-wrap gap-4">
                  {item.icon}
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold text-red-500 text-xl mb-3">
                    {item.title}
                  </h4>

                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PART 2 ================= */}

      <section className="w-full bg-gray-50 py-32">
        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto px-6 mb-20">
          <span className="text-sm border border-red-300 text-red-500 px-5 py-1 rounded-full">
            Control Dashboard
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Supervise Your Platform via a{" "}
            <span className="text-red-500">Robust Command Center</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Direct your video-streaming platform easily using our user-friendly dashboard. Crafted for maximum convenience, it grants complete authority regarding profile administration, media screening, and metrics evaluation.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 items-center px-10">
          {/* Left Features */}
          <div className="space-y-8">
            {adminFeatures.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg flex gap-5 hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-red-400 text-red-500 shrink-0 flex-wrap gap-4">
                  {item.icon}
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-red-500 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="bg-[#4b0009] rounded-3xl p-14 flex justify-center flex-wrap gap-4">
            <img
              src="/Video-App/admin-panel.webp"
              alt="Admin Panel"
              className="w-[520px] md:w-[600px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= PART 3 ================= */}

      <section className="w-full bg-white py-32">
        <div className="text-center max-w-5xl mx-auto px-6 mb-20">
          <span className="text-sm border border-red-300 text-red-500 px-5 py-1 rounded-full">
            Our Offerings
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Multi-Environment Accessibility{" "}
            <span className="text-red-500">
              Android, iOS, and Browser Dashboard
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Our video-sharing software is optimized to deliver an outstanding journey across various digital environments.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12 px-10">
          {platforms.map((item, index) => (
            <div
              key={index}
              className="relative border border-red-400 rounded-2xl p-10 text-left hover:shadow-xl transition"
            >
              <div className="absolute -top-7 left-10 w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg flex-wrap gap-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-red-500 mt-6 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PART 4 ================= */}

      <section className="w-full py-32 text-white bg-gradient-to-r from-[#3b0006] via-[#0a1b22] to-[#02242b]">
        <div className="text-center max-w-5xl mx-auto px-6 mb-20">
          <span className="text-sm border border-white px-5 py-1 rounded-full">
            Revenue Generation
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            <span className="text-pink-400">Diverse Methods to Profit</span>{" "}
            From Your Platform
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            Optimize your commercial opportunities employing distinct revenue-generating methodologies.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-4 gap-10 px-10">
          {monetization.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-10 border hover:shadow-xl transition ${item.dark
                ? "bg-white/5 border-white/20"
                : "bg-white text-gray-800 border-pink-400"
                }`}
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full mb-6 ${item.dark
                  ? "bg-white/10 text-pink-400"
                  : "bg-pink-500 text-white"
                  }`}
              >
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>

              <p
                className={`text-base ${item.dark ? "text-gray-300" : "text-gray-600"}`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PART 5 ================= */}

      <section className="w-full py-32 flex items-center justify-center bg-gray-100 flex-wrap gap-4">
        <div
          className="relative w-[92%] max-w-[1400px] py-20 rounded-3xl 
  bg-gradient-to-r from-[#3c2b7a] via-[#c43b3b] to-[#f3a01b] 
  flex items-center px-12 md:px-20 overflow-hidden"
        >
          <div className="text-white max-w-xl z-10">
            <h2 className="text-5xl font-semibold leading-tight mb-8">
              Initiate the First Move Toward Your Custom Media App
            </h2>

            <p className="text-gray-200 text-lg mb-10">
              Prepared to establish your presence within the digital media sector? Utilizing our short-video network software, you may initiate your operations within just 5 days.
            </p>

            <button className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition">
              Deploy Your System
            </button>
          </div>

          <div className="absolute right-16 bottom-[-60px]">
            <img
              src="/Video-App/tiktok-phone-girl.webp"
              alt="TikTok Clone"
              className="h-[520px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* SECTION 1 DEVELOPMENT PROCESS */}
      <section className="w-full bg-white py-32">
        <div className="text-center max-w-5xl mx-auto mb-20 px-6">
          <span className="text-sm border px-5 py-1 rounded-full border-red-200 text-red-500">
            Engineering Workflow
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Our Fluid{" "}
            <span className="text-red-500">
              Application Construction Procedure
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            We employ an organized and agile approach to materialize your short-video network, guaranteeing premium standards and accelerated release times.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-[#f6d9dd] rounded-3xl p-10 text-center shadow-md"
              >
                <h3 className="text-2xl font-semibold text-pink-600 mb-8">
                  {step.title}
                </h3>

                <div className="bg-white rounded-2xl p-8 flex justify-center flex-wrap gap-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-[420px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 LAUNCH APP */}
      <section className="w-full bg-[#4b0009] text-white py-32">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center px-10">
          <div className="flex justify-center flex-wrap gap-4">
            <img
              src="/Video-App/team-laptop.webp"
              alt="Team discussion"
              className="w-[520px] object-contain"
            />
          </div>

          <div>
            <span className="text-sm border border-pink-400 px-5 py-1 rounded-full">
              Establish Your Presence
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-6 mb-8 leading-tight">
              Deploy Your Digital Network{" "}
              <span className="text-pink-400">in Merely 5 Days</span>
            </h2>

            <p className="text-gray-300 mb-5 text-lg">
              Get your custom video platform fully operational within 5 business days utilizing our rapid, simple-to-implement architecture.
            </p>

            <p className="text-gray-300 mb-5 text-lg">
              Our pre-configured framework incorporates all necessary modules to ensure audiences remain deeply involved.
            </p>

            <p className="text-gray-300 text-lg">
              Concentrate on expanding your network while we manage the rapid technical implementation.
            </p>
          </div>
        </div>

        {/* Why Choose */}
        <div className="text-center max-w-5xl mx-auto px-6 mt-32">
          <span className="text-sm border border-pink-400 text-pink-300 px-5 py-1 rounded-full">
            Why Pick Us
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6">
            Why Select{" "}
            <span className="text-pink-400">Our Video Network Solution?</span>
          </h2>

          <p className="text-gray-300 mt-5 text-lg">
            Our digital framework forms the perfect methodology for rapidly deploying your brief-video broadcasting network with very minimal friction.
          </p>
        </div>

        {/* Middle Image */}
        <div className="flex justify-center mt-16 px-6 flex-wrap gap-4">
          <img
            src="/Video-App/why-choose.webp"
            alt="Why Choose TikTok Clone"
            className="max-w-6xl w-full object-contain"
          />
        </div>

        {/* Bullet Points */}
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 mt-16 px-10 text-base text-gray-200">
          <ul className="space-y-5 list-disc pl-6">
            <li>
              Deploy your media-centric application in merely 5 business days, instead of months, ensuring you start captivating audiences right away.
            </li>

            <li>
              Customize the software to match your specific corporate requirements, offerings, and visual identity, establishing a bespoke atmosphere.
            </li>

            <li>
              Experience a streamlined and user-friendly interface that guarantees a frictionless journey for audiences viewing or publishing media.
            </li>
          </ul>

          <ul className="space-y-5 list-disc pl-6">
            <li>
              Architected to expand alongside your enterprise utilizing premium protective security to safeguard client information and ensure uptime.
            </li>

            <li>
              Ensure audiences stay updated instantaneously via prompt alerts regarding fresh content, social engagements, and system enhancements.
            </li>

            <li>
              Broaden your demographic effortlessly utilizing integrated multi-currency logic and comprehensive language translation parameters.
            </li>
          </ul>
        </div>
      </section>

      <Testimonial/>

      {/* SECTION 9 APPS */}
      <section className="w-full bg-gray-50 py-32">
        <div className="text-center mb-20 px-6">
          <span className="text-sm border border-red-300 px-5 py-1 rounded-full text-red-500">
            Catalogue Display
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6">
            Examine Our{" "}
            <span className="text-red-500">On-Demand Software Offerings</span>
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-10">
            {apps.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />

                <div className="p-5 text-center">
                  <h4 className="text-base font-semibold">{app.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactUs/>

      {/* SECTION 11 FAQ */}
      <section className="w-full bg-white py-32">
        <div className="text-center mb-20">
          <span className="text-sm border border-red-300 text-red-500 px-5 py-1 rounded-full">
            Inquiries
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 text-red-500">
            Commonly Raised Questions
          </h2>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-x-20 px-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-6">
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium"
              >
                {faq.question}

                {active === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>

              {active === index && (
                <p className="text-gray-600 text-base mt-4 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
      <TeamMoments/>
    </div>
  );
};

export default TikTokClonePage;
