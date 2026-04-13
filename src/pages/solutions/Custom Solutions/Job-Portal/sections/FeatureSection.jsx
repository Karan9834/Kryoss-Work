import React, { useState, useRef, useEffect } from "react";
import feature1 from "../../../../../assets/jobs/features1.png";
import feature2 from "../../../../../assets/jobs/feature2.png";
import feature3 from "../../../../../assets/jobs/feature3.png";

const FeatureSection = () => {
  const [active, setActive] = useState("jobseekers");
  const [leftHeight, setLeftHeight] = useState(0);
  const leftRef = useRef(null);

  const featuresData = {
    jobseekers: {
      image: feature1,
      leftPoints: [
        {
          title: "OTP Login",
          description: "Quick and secure login with one-time password",
          icon: "🔐",
        },
        {
          title: "Social Media Login",
          description: "Login using Google, Facebook, or LinkedIn",
          icon: "🌐",
        },
        {
          title: "Geo Location",
          description: "Find jobs based on your current location",
          icon: "📍",
        },
        {
          title: "Job Search Options",
          description: "Advanced filters to find perfect matches",
          icon: "🔍",
        },
        {
          title: "Apply Jobs",
          description: "One-click application to multiple jobs",
          icon: "📤",
        },
        {
          title: "Applied through Linkedin",
          description: "Import and apply with LinkedIn profile",
          icon: "💼",
        },
        {
          title: "Applied Jobs",
          description: "Track all your job applications in one place",
          icon: "📋",
        },
        {
          title: "Manage Job Alert",
          description: "Set and customize job alerts notifications",
          icon: "🔔",
        },
      ],
      rightPoints: [
        {
          title: "Upload a Resume",
          description: "Upload multiple resumes for different roles",
          icon: "📄",
        },
        {
          title: "Manage Experience",
          description: "Add and update your work experience",
          icon: "⭐",
        },
        {
          title: "Declaration",
          description: "Submit declarations for compliance",
          icon: "✅",
        },
        {
          title: "Favourite Job",
          description: "Save jobs for later application",
          icon: "❤️",
        },
        {
          title: "Manage Education",
          description: "Add your educational qualifications",
          icon: "🎓",
        },
        {
          title: "Multi Language",
          description: "Switch between multiple languages",
          icon: "🌍",
        },
        {
          title: "View Recruiters",
          description: "Browse company profiles and recruiters",
          icon: "👥",
        },
        {
          title: "Mail History",
          description: "Track all email communications",
          icon: "📧",
        },
      ],
    },
    recruiters: {
      image: feature2,
      leftPoints: [
        {
          title: "Registration",
          description: "Easy signup for recruiters with verification",
          icon: "📝",
        },
        {
          title: "OverViews",
          description: "Dashboard with key hiring metrics",
          icon: "📊",
        },
        {
          title: "Post a Job",
          description: "Create and publish job listings easily",
          icon: "📌",
        },
        {
          title: "Search Candidates",
          description: "Find matching candidates from database",
          icon: "🔎",
        },
        {
          title: "Payment History",
          description: "Track all payment transactions",
          icon: "💰",
        },
        {
          title: "Mail History",
          description: "View all sent and received emails",
          icon: "📨",
        },
        {
          title: "ERP Report",
          description: "Generate detailed recruitment reports",
          icon: "📈",
        },
        {
          title: "Resume Data Access",
          description: "Access candidate resumes database",
          icon: "📑",
        },
      ],
      rightPoints: [
        {
          title: "Referral Solutions",
          description: "Manage employee referral programs",
          icon: "🤝",
        },
        {
          title: "Candidate Filtering",
          description: "Advanced filters to find best candidates",
          icon: "⚙️",
        },
        {
          title: "Bulk Emails",
          description: "Send bulk emails to candidates",
          icon: "📧",
        },
        {
          title: "Interview Scheduler",
          description: "Schedule interviews with calendar",
          icon: "📅",
        },
        {
          title: "Offer Letters",
          description: "Generate and send offer letters",
          icon: "📄",
        },
        {
          title: "Company Branding",
          description: "Customize company profile page",
          icon: "🏷️",
        },
        {
          title: "Analytics Dashboard",
          description: "Track hiring metrics and insights",
          icon: "📊",
        },
        {
          title: "Mobile App Access",
          description: "Manage recruitment on the go",
          icon: "📱",
        },
      ],
    },
    employers: {
      image: feature3,
      leftPoints: [
        {
          title: "Dashboard",
          description: "Complete admin control panel overview",
          icon: "📊",
        },
        {
          title: "Manage Job Seekers",
          description: "View and manage all job seekers",
          icon: "👨‍💼",
        },
        {
          title: "Manage Employees",
          description: "Handle employee records and roles",
          icon: "👥",
        },
        {
          title: "Manage Jobs",
          description: "Approve, edit, or delete job listings",
          icon: "💼",
        },
        {
          title: "Manage Employers",
          description: "Manage all employer accounts",
          icon: "🏢",
        },
        {
          title: "Payment Gateways",
          description: "Configure payment methods",
          icon: "💳",
        },
        {
          title: "RTL Support",
          description: "Right-to-left language support",
          icon: "🔄",
        },
        {
          title: "Email Management",
          description: "Manage email templates and campaigns",
          icon: "✉️",
        },
      ],
      rightPoints: [
        {
          title: "User Analytics",
          description: "Track user activity and engagement",
          icon: "📈",
        },
        {
          title: "Content Management",
          description: "Manage website content and pages",
          icon: "📝",
        },
        {
          title: "SEO Settings",
          description: "Optimize platform for search engines",
          icon: "🔍",
        },
        {
          title: "Security Controls",
          description: "Manage security and permissions",
          icon: "🔒",
        },
        {
          title: "Backup & Restore",
          description: "Automated backup and restore options",
          icon: "💾",
        },
        {
          title: "System Settings",
          description: "Configure system-wide settings",
          icon: "⚙️",
        },
        {
          title: "Report Generator",
          description: "Generate custom reports and exports",
          icon: "📑",
        },
        {
          title: "Support Tickets",
          description: "Manage support requests and tickets",
          icon: "🎫",
        },
      ],
    },
  };

  const current = featuresData[active];

  const leftMid = Math.ceil(current.leftPoints.length / 2);
  const leftCol1 = current.leftPoints.slice(0, leftMid);
  const leftCol2 = current.leftPoints.slice(leftMid);

  const rightMid = Math.ceil(current.rightPoints.length / 2);
  const rightCol1 = current.rightPoints.slice(0, rightMid);
  const rightCol2 = current.rightPoints.slice(rightMid);

  useEffect(() => {
    if (leftRef.current) {
      setLeftHeight(leftRef.current.offsetHeight);
    }
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40 py-20 px-6">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900">
            <span className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Must-Have
            </span>{" "}
            Features for Job Portal
          </h2>
          <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-4 max-w-2xl mx-auto">
            Complete job portal solution with user, recruiter and admin panels
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
          {[
            { id: "jobseekers", name: "USER PANEL" },
            { id: "recruiters", name: "RECRUITER PANEL" },
            { id: "employers", name: "ADMIN PANEL" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                active === tab.id
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-200 scale-105"
                  : "bg-white text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 border-2 border-indigo-200 hover:border-indigo-400"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Layout - Simple image, no box */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {/* LEFT COLUMN */}
          <div ref={leftRef} className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              {leftCol1.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-3 rounded-xl border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-[80px] flex"
                >
                  <div className="flex gap-2 w-full">
                    <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {leftCol2.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-3 rounded-xl border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-[80px] flex"
                >
                  <div className="flex gap-2 w-full">
                    <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CENTER - Just the image, no frame, no box */}
          <div className="flex justify-center">
            <img
              src={current.image}
              alt={`${active} panel`}
              className="w-full max-w-[300px] h-auto object-contain"
              style={{ height: leftHeight > 0 ? `${leftHeight}px` : "auto" }}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              {rightCol1.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-3 rounded-xl border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-[80px] flex"
                >
                  <div className="flex gap-2 w-full">
                    <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {rightCol2.map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-3 rounded-xl border-2 border-indigo-200 hover:border-indigo-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer h-[80px] flex"
                >
                  <div className="flex gap-2 w-full">
                    <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-800 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[14px] lg:text-[16px] font-normal leading-[1.6] text-slate-500 mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
