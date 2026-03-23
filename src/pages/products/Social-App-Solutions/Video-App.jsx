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

/* =========================
   PART 1 DATA
========================= */

const featureList = [
  {
    icon: <User size={20} />,
    title: "User-friendly Interface",
    desc: "Appealing design that ensures seamless navigation, making TikTok-like app development effortless for users of all levels.",
  },
  {
    icon: <User size={20} />,
    title: "Profile Management",
    desc: "Let users fill out all the details such as name, bio, preferences and other relevant info for creating and managing profiles.",
  },
  {
    icon: <Video size={20} />,
    title: "Video Posting",
    desc: "Let users post videos with catchy hashtags, captions etc. Location and person can also be tagged while posting videos.",
  },
  {
    icon: <MessageCircle size={20} />,
    title: "Social Features",
    desc: "Make the most out of interactive social features such as like, share and comment to boost video engagement.",
  },
  {
    icon: <Video size={20} />,
    title: "Video Creation Tools",
    desc: "Leverage advanced editing tools like filters, effects, texts, and AR filters to enhance videos.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Geolocation Tagging",
    desc: "Users are allowed to tag videos with accurate location connecting users with local content.",
  },
  {
    icon: <Bell size={20} />,
    title: "Push Notification",
    desc: "Enable users to stay connected with followers whenever new content or videos are posted.",
  },
  {
    icon: <Video size={20} />,
    title: "Create Your Channel",
    desc: "Users can create and manage their unique channel among their friends and followers.",
  },
  {
    icon: <Globe size={20} />,
    title: "GoLive",
    desc: "Users can go live and instantly notify their followers and friends about their activities.",
  },
  {
    icon: <Music size={20} />,
    title: "Song / Audio Selection",
    desc: "Choose favorite tracks or upload audio to make the video posting experience personalized.",
  },
  {
    icon: <Heart size={20} />,
    title: "Like / Comment on Videos",
    desc: "Users can like and comment on videos from other creators they find interesting.",
  },
  {
    icon: <Settings size={20} />,
    title: "Other Important Settings",
    desc: "Allow users to block people, manage privacy settings, and customize their experience.",
  },
];

/* =========================
   PART 2 DATA
========================= */

const adminFeatures = [
  {
    icon: <LayoutDashboard size={22} />,
    title: "Centralized Dashboard",
    desc: "Our TikTok like app comes with an interactive dashboard that helps you manage and monitor all the operations seamlessly.",
  },
  {
    icon: <Users size={22} />,
    title: "User Management",
    desc: "Enable admins to manage users, keep eyes on their profiles, and take the necessary actions when required.",
  },
  {
    icon: <Settings size={22} />,
    title: "General Settings",
    desc: "Let Admin change the general settings, from features to payment settings to app layout, languages, and other settings.",
  },
];

/* =========================
   PART 3 DATA
========================= */

const platforms = [
  {
    icon: <Globe size={22} />,
    title: "Web",
    desc: "Give your users a branded web platform to access all the features they are looking for in the seamless browsing experience.",
  },
  {
    icon: <Smartphone size={22} />,
    title: "Android App",
    desc: "Make the most out of our TikTok clone app for the Android platform, and enjoy all the features from a single window.",
  },
  {
    icon: <Apple size={22} />,
    title: "iOS App",
    desc: "Leverage a separate iOS app, allow users to go live and connect with their followers while delivering a great video-sharing experience.",
  },
];

/* =========================
   PART 4 DATA
========================= */

const monetization = [
  {
    icon: <ShoppingCart size={24} />,
    title: "In-app Purchase",
    desc: "Boost your revenue with in-app purchases. Offer exclusive features for a fee to enhance user experience.",
    dark: true,
  },
  {
    icon: <Users size={24} />,
    title: "Venture Capital",
    desc: "Share your business idea with potential investors & connect with them to invest in your TikTok-like app.",
    dark: true,
  },
  {
    icon: <Handshake size={24} />,
    title: "Sponsored Post",
    desc: "Allow users to get maximum engagement on their videos and earn through sponsored content.",
    dark: true,
  },
  {
    icon: <Megaphone size={24} />,
    title: "Advertising",
    desc: "Make the most out of advertising by promoting services and generating revenue.",
    dark: false,
  },
];

const steps = [
  {
    title: "Gathering Requirements",
    image: "/Video-App/process1.png",
  },
  {
    title: "Design & Development",
    image: "/Video-App/process1.png",
  },
  {
    title: "Collect Third-Party Accounts",
    image: "/Video-App/process1.png",
  },
  {
    title: "Test and Launch",
    image: "/Video-App/process1.png",
  },
];

const features = [
  {
    icon: <BadgeCheck size={28} />,
    title: "Your Brand Name & Logo",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Android, iOS & Web",
  },
  {
    icon: <Rocket size={28} />,
    title: "Ready To Launch",
  },
  {
    icon: <Globe size={28} />,
    title: "Multi Language & Currency",
  },
  {
    icon: <Headphones size={28} />,
    title: "Tech Support",
  },
];

const testimonials = [
  {
    name: "David",
    image: "/Video-App/client1.webp",
    text: "Mr. David highly praised our team for superb, engaging great satisfaction with our service and eagerness for future successful collaboration.",
  },
  {
    name: "Aman",
    image: "/Video-App/client2.webp",
    text: "Mr. Aman expressed his excitement and satisfaction with the project, highlighting the exceptional work accomplished by the team.",
  },
  {
    name: "Nora",
    image: "/Video-App/client3.webp",
    text: "I am very happy and satisfied with work done over our project and the outcomes as well, highly recommend the team’s dedication.",
  },
  {
    name: "George",
    image: "/Video-App/client4.webp",
    text: "Mr. George Nkwocha praised our professionalism and plans future collaboration after a successful Fox-task app purchase.",
  },
];

const apps = [
  { title: "Gojek Clone App", image: "/Video-App/app1.webp" },
  { title: "Uber Clone App", image: "/Video-App/app2.webp" },
  { title: "Food Delivery App", image: "/Video-App/app3.webp" },
  { title: "Medicine Delivery App", image: "/Video-App/app4.webp" },
  { title: "Handyman Service App", image: "/Video-App/app5.webp" },
  { title: "Carpool Ride App", image: "/Video-App/app6.webp" },
  { title: "Indrive Clone App", image: "/Video-App/app7.webp" },
  { title: "Delivery Anything App", image: "/Video-App/app8.webp" },
];

const recognitionPlatforms = [
  { name: "Trustpilot", rating: "4.4", logo: "/Video-App/trustpilot.jpg" },
  { name: "Google", rating: "4.9", logo: "/Video-App/google.jpg" },
  { name: "Clutch", rating: "5.0", logo: "/Video-App/clutch.jpg" },
  { name: "GoodFirms", rating: "4.9", logo: "/Video-App/goodfirms.jpg" },
];

const faqs = [
  {
    question: "What is a TikTok Clone App, and how does it work?",
    answer:
      "A TikTok clone app is a ready-made platform that allows businesses to launch a short-video sharing app similar to TikTok with features like video uploads, filters, likes, comments, and sharing.",
  },
  {
    question: "How does the real-time video sharing feature work?",
    answer:
      "The real-time video sharing feature allows users to upload and share videos instantly while interacting with others through comments, likes, and live engagement.",
  },
  {
    question: "How long does it take to launch my own TikTok Clone App?",
    answer:
      "With our ready-made solution, your TikTok clone app can be launched within 5 working days depending on customization requirements.",
  },
  {
    question:
      "What are the essential features included in the TikTok Clone App?",
    answer:
      "Essential features include video uploading, live streaming, video editing tools, notifications, profile management, monetization tools, and analytics.",
  },
  {
    question: "Is the TikTok Clone App customizable for my brand?",
    answer:
      "Yes, you can customize branding elements such as logo, colors, features, and additional integrations according to your business requirements.",
  },
  {
    question: "How secure is the TikTok Clone App for users and creators?",
    answer:
      "Our platform uses secure authentication, data protection, and content moderation features to ensure a safe experience.",
  },
  {
    question: "Can I monetize my TikTok Clone App?",
    answer:
      "Yes, monetization options include ads, subscriptions, sponsored content, and in-app purchases.",
  },
  {
    question: "Can I integrate third-party services into the TikTok Clone App?",
    answer:
      "Yes, third-party integrations like payment gateways, analytics tools, and social login can be added.",
  },
  {
    question:
      "Does the TikTok Clone App support both Android and iOS platforms?",
    answer:
      "Yes, our TikTok clone app supports Android, iOS, and web platforms.",
  },
  {
    question: "Will I get support after launching the TikTok Clone App?",
    answer:
      "Yes, we provide post-launch support, maintenance, and upgrades for your platform.",
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
      <section className="w-full bg-black py-20 flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div className="text-white space-y-6 max-w-xl">
            {/* Logo Badge */}
            <div className="flex items-center gap-3 mb-6">
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl
      bg-gradient-to-br from-pink-500 to-purple-500
      shadow-[0_0_16px_rgba(236,72,153,0.9)]"
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Build Your Own{" "}
              <span className="text-pink-500">TikTok Clone App</span> for the
              Entertainment Business
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed">
              Launch your own TikTok-like app with ease! Our customizable TikTok
              clone lets users create and share videos, helping your business
              tap into the booming entertainment market. Get started in just 5
              days and scale your app globally.
            </p>

            <a
              href="https://preview.codecanyon.net/item/streamit-ott-streaming-flutter-app-addon/full_screen_preview/56035814"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full font-semibold transition duration-300 inline-block w-fit"
            >
              Live Demo →
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/Video-App/hero-image.webp"
              alt="TikTok Clone App"
              className="w-[650px] md:w-[750px] lg:w-[800px] max-w-none"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="w-full bg-white py-32 flex items-center">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center gap-20 px-10">
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/Video-App/tik-tok-clone-about-us.webp"
              alt="TikTok Clone App"
              className="w-[520px] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <span className="text-sm bg-gray-100 px-5 py-1 rounded-full text-pink-600 font-medium">
              About TikTok Clone
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
              What is a <span className="text-pink-600">TikTok Clone App?</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              A TikTok clone app is a ready-to-launch, white-label platform that
              allows entrepreneurs and businesses to create their own
              short-video sharing app, similar to TikTok, without writing a
              single line of code.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              Our solution comes with advanced tools like real-time video
              sharing, unlimited filters, interactive audio customization, and
              more.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              With scalable and customizable features, you can adjust the app to
              suit changing market demands and user preferences.
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
              TikTok Clone App Works
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-8 leading-tight">
              How the{" "}
              <span className="text-pink-400">TikTok Clone App Works</span>
            </h2>

            <p className="text-gray-200 mb-10 text-lg max-w-xl">
              Our TikTok clone app is designed to provide an easy experience for
              users and business owners to create, share and manage videos.
            </p>

            {/* STEP 1 */}
            <div className="flex gap-5 mb-8">
              <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">
                4
              </div>

              <div>
                <h4 className="font-semibold text-lg">Personalized Feed</h4>
                <p className="text-gray-300">
                  The app creates a personalized feed for each user based on
                  interests and interactions.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex gap-5 mb-8">
              <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">
                5
              </div>

              <div>
                <h4 className="font-semibold text-lg">Monetization Options</h4>
                <p className="text-gray-300">
                  Creators can monetize through ads, sponsored content, or
                  direct support.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex gap-5">
              <div className="w-12 h-12 border border-white rounded flex items-center justify-center text-lg">
                6
              </div>

              <div>
                <h4 className="font-semibold text-lg">
                  Admin Control & Analytics
                </h4>
                <p className="text-gray-300">
                  Admin panel helps track performance and manage users
                  efficiently.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
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
              Ready to Launch Your Own TikTok-Like App?
            </h2>

            <p className="text-gray-200 mb-8 max-w-lg">
              Don’t wait to start your entertainment business! With our
              customizable TikTok clone app, you can launch in just 5 days and
              begin capturing the attention of millions.
            </p>

            <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-[#0b2d63] transition">
              Request a Demo
            </button>
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
            Features
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Key Features of{" "}
            <span className="text-red-500">Our TikTok Clone App</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Unlock your entertainment platform’s potential with our TikTok clone
            app. Enjoy real-time video sharing, unlimited filters, and seamless
            customization for a unique user experience.
          </p>
        </div>

        {/* Illustration */}
        <div className="flex justify-center mb-24">
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
                <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-red-500 text-white shrink-0">
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
            Admin Panel
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Control Your App with a{" "}
            <span className="text-red-500">Powerful Admin Panel</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            Manage your TikTok clone app effortlessly with our intuitive admin
            panel. Designed for ease of use, it gives you full control over user
            management, content moderation, and performance tracking.
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
                <div className="w-14 h-14 flex items-center justify-center rounded-full border border-red-400 text-red-500 shrink-0">
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
          <div className="bg-[#4b0009] rounded-3xl p-14 flex justify-center">
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
            What We Provide
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            Cross-Platform Availability{" "}
            <span className="text-red-500">
              Android, iOS, and Web Admin Panel
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            Our TikTok clone app is designed to provide an exceptional
            experience across multiple platforms.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-12 px-10">
          {platforms.map((item, index) => (
            <div
              key={index}
              className="relative border border-red-400 rounded-2xl p-10 text-left hover:shadow-xl transition"
            >
              <div className="absolute -top-7 left-10 w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg">
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
            Monetization
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-tight">
            <span className="text-pink-400">Multiple Ways to Monetize</span>{" "}
            Your TikTok Clone App
          </h2>

          <p className="text-gray-300 mt-6 text-lg">
            Maximize your revenue potential with various monetization
            strategies.
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

      <section className="w-full py-32 flex items-center justify-center bg-gray-100">
        <div
          className="relative w-[92%] max-w-[1400px] py-20 rounded-3xl 
  bg-gradient-to-r from-[#3c2b7a] via-[#c43b3b] to-[#f3a01b] 
  flex items-center px-12 md:px-20 overflow-hidden"
        >
          <div className="text-white max-w-xl z-10">
            <h2 className="text-5xl font-semibold leading-tight mb-8">
              Take the First Step Towards Your TikTok Clone App
            </h2>

            <p className="text-gray-200 text-lg mb-10">
              Ready to make your mark in the entertainment industry? With our
              TikTok clone app, you can launch your business in just 5 days.
            </p>

            <button className="border border-white px-8 py-4 rounded-full text-lg hover:bg-white hover:text-black transition">
              Launch Your Platform
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
            Development Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
            Our Seamless{" "}
            <span className="text-red-500">
              TikTok Clone App Development Process
            </span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg">
            We follow a structured and efficient process to bring your TikTok
            clone app to life, ensuring the highest quality and fast deployment.
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

                <div className="bg-white rounded-2xl p-8 flex justify-center">
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
          <div className="flex justify-center">
            <img
              src="/Video-App/team-laptop.webp"
              alt="Team discussion"
              className="w-[520px] object-contain"
            />
          </div>

          <div>
            <span className="text-sm border border-pink-400 px-5 py-1 rounded-full">
              Get Your Digital Footprint
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-6 mb-8 leading-tight">
              Launch Your TikTok Clone{" "}
              <span className="text-pink-400">App in Just 5 Days</span>
            </h2>

            <p className="text-gray-300 mb-5 text-lg">
              Get your TikTok clone app up and running in just 5 working days
              with our fast, easy-to-deploy solution.
            </p>

            <p className="text-gray-300 mb-5 text-lg">
              Our ready-made TikTok clone includes all essential features to
              keep users engaged.
            </p>

            <p className="text-gray-300 text-lg">
              Focus on growing your platform while we handle fast deployment.
            </p>
          </div>
        </div>

        {/* Why Choose */}
        <div className="text-center max-w-5xl mx-auto px-6 mt-32">
          <span className="text-sm border border-pink-400 text-pink-300 px-5 py-1 rounded-full">
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6">
            Why Choose{" "}
            <span className="text-pink-400">Our TikTok Clone App?</span>
          </h2>

          <p className="text-gray-300 mt-5 text-lg">
            Our TikTok Clone App is the ideal solution for quickly launching
            your short-video sharing platform with minimal effort.
          </p>
        </div>

        {/* Middle Image */}
        <div className="flex justify-center mt-16 px-6">
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
              Launch your TikTok-like app in just 5 working days, not weeks, so
              you can start engaging users immediately.
            </li>

            <li>
              Tailor the app to fit your unique business needs, services, and
              branding, creating a personalized experience.
            </li>

            <li>
              Enjoy a simple and intuitive interface that ensures a smooth
              experience for users watching or creating videos.
            </li>
          </ul>

          <ul className="space-y-5 list-disc pl-6">
            <li>
              Designed to grow with your business with top-tier security
              features to protect user data and ensure reliability.
            </li>

            <li>
              Keep users informed in real time with notifications about uploads,
              interactions, and updates.
            </li>

            <li>
              Expand your reach effortlessly with built-in multi-currency and
              multi-language options.
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 8 TESTIMONIALS */}
      <section className="w-full py-32 bg-gradient-to-r from-[#d7e4f2] via-[#d7e7d8] to-[#f4e3c9]">
        <div className="max-w-[1400px] mx-auto px-10 text-center">
          <span className="text-sm border px-5 py-1 rounded-full border-red-300 text-red-500">
            People Love Our Platform
          </span>

          <h2 className="text-4xl font-semibold mt-6 mb-16">
            Let's Check{" "}
            <span className="text-red-500">
              What Our Clients Love to Share!
            </span>
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="relative w-28 h-28 mx-auto mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full rounded-xl object-cover"
                  />

                  <div
                    className="absolute bottom-[-10px] left-1/2 -translate-x-1/2
            w-9 h-9 bg-red-500 text-white rounded-full flex items-center justify-center"
                  >
                    <Play size={16} />
                  </div>
                </div>

                <h4 className="font-semibold text-lg">{item.name}</h4>

                <p className="text-sm text-gray-600 mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 APPS */}
      <section className="w-full bg-gray-50 py-32">
        <div className="text-center mb-20 px-6">
          <span className="text-sm border border-red-300 px-5 py-1 rounded-full text-red-500">
            Product Showcase
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6">
            Explore Our{" "}
            <span className="text-red-500">On-Demand App Solutions</span>
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

      {/* SECTION 10 RECOGNITION */}
      <section className="w-full py-32 bg-[#4b0009]">
        <div className="max-w-[1400px] mx-auto px-10 text-center">
          <span className="text-sm border border-pink-400 text-pink-300 px-5 py-1 rounded-full">
            Awards & Recognition
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mt-6">
            Recognized by{" "}
            <span className="text-pink-400">
              Global Review Platforms & Industry Leaders
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16">
            {recognitionPlatforms.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl py-8 px-6 flex flex-col items-center shadow-md hover:shadow-lg transition"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 mb-4 object-contain"
                />

                <div className="flex gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <span className="text-sm text-gray-500">({item.rating})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 FAQ */}
      <section className="w-full bg-white py-32">
        <div className="text-center mb-20">
          <span className="text-sm border border-red-300 text-red-500 px-5 py-1 rounded-full">
            FAQ's
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold mt-6 text-red-500">
            Frequently Asked Questions
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
    </div>
  );
};

export default TikTokClonePage;
