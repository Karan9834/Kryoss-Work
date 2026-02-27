const badges = [
  {
    name: "Clutch",
    image: "/whitelabel-assets/assets/images/awards/clutch.png",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Clutch_logo.svg/320px-Clutch_logo.svg.png",
    href: "https://clutch.co",
    label: "Top App Developer"
  },
  {
    name: "Trustpilot",
    image: "/whitelabel-assets/assets/images/awards/trustpilot.png",
    fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/320px-Trustpilot_Logo_%282022%29.svg.png",
    href: "https://trustpilot.com",
    label: "Excellent Rating"
  },
  {
    name: "GoodFirms",
    image: "/whitelabel-assets/assets/images/awards/goodfirms.png",
    fallback: "https://www.goodfirms.co/images/goodfirms-logo.png",
    href: "https://goodfirms.co",
    label: "Top IT Company"
  },
  {
    name: "DesignRush",
    image: "/whitelabel-assets/assets/images/awards/designrush.png",
    fallback: "https://www.designrush.com/images/designrush-logo.png",
    href: "https://designrush.com",
    label: "Best App Agency"
  }];


export default function TrustBadges() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Awards & Recognition
          </p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-foreground">
            Recognized Excellence in{" "}
            <span className="text-primary">App Development</span> & IT Solutions
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
                className="h-12 object-contain"
                onError={(e) => {
                  if (!e.currentTarget.dataset.error) {
                    e.currentTarget.dataset.error = "true";
                    e.currentTarget.src = b.fallback;
                  }
                }} />

              <div className="text-center">
                <p className="font-bold text-sm text-foreground">{b.name}</p>
                <p className="text-xs text-muted-foreground">{b.label}</p>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}