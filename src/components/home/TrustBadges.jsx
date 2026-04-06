const badges = [
  {
    name: "Top Fastest Growing Web Development Company in India",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1740115302/abservetech-next/homepage/webDevelopement_flmlw4.webp",
    // fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Clutch_logo.svg/320px-Clutch_logo.svg.png",
    // href: "https://clutch.co",
    label: ""
  },
  {
    name: "Top Mobile App Development Company in India",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1740115316/abservetech-next/homepage/mobileDevelopement_eer77m.webp",
    // fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/320px-Trustpilot_Logo_%282022%29.svg.png",
    // href: "https://trustpilot.com",
    label: ""
  },
  {
    name: "Best User Engagement in 2025",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1742804172/Abservetech-User-Engagement-2025.webp",
    // fallback: "https://www.goodfirms.co/images/goodfirms-logo.png",
    // href: "https://goodfirms.co",
    label: ""
  },
  {
    name: "Top 10 PHP Development Company in India",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1740115335/abservetech-next/homepage/phpDevelopement_mlz1qv.webp",
    // fallback: "https://www.designrush.com/images/designrush-logo.png",
    // href: "https://designrush.com",
    label: "Top 10 PHP Development Company in India"
  },
  {
    name: "The Champions – Zen Suggest",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1740115266/abservetech-next/homepage/champions_gi8djc.webp",
    fallback: "",
    // href: "https://designrush.com",
    label: ""
  },
  {
    name: "Best Value software Foodstar in 2022",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1740115354/abservetech-next/homepage/bestValueSoftware_kvhblv.webp",
    fallback: "",
    // href: "https://designrush.com",
    label: ""
  },
  {
    name: "Easy Implementation 2024",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1742804172/Abservetech-Easy-Implementation-2024.webp",
    fallback: "",
    // href: "https://designrush.com",
    label: ""
  },
  {
    name: "Highest Satisfaction 2024",
    image: "https://res.cloudinary.com/abserve-tech/image/upload/v1742804172/Abservetech-Highest-Satisfaction-2024.webp",
    fallback: "",
    // href: "https://designrush.com",
    label: ""
  }


];


export default function TrustBadges() {
  return (
    <section id="awards" className="py-16 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">

          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">
            Awards & Recognition
          </p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            Recognized Excellence in{" "}
            <span className="text-primary italic">App Development</span> & IT Solutions
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b) =>
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-white border border-border rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all">

              <img
                src={b.image}
                alt={b.name}
                className="h-22 object-contain"
                onError={(e) => {
                  if (!e.currentTarget.dataset.error) {
                    e.currentTarget.dataset.error = "true";
                    e.currentTarget.src = b.fallback;
                  }
                }} />

              <div className="text-center mt-auto">
                <p className="text-sm font-semibold text-gray-900 leading-tight mb-1">{b.name}</p>
                {b.label && <p className="text-xs text-gray-500">{b.label}</p>}
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}