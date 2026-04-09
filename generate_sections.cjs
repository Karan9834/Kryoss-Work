const fs = require('fs');
const path = require('path');

const PRODUCTS = {
  OurProducts: {
    hero: {
      title: "Our", highlight: "Products",
      badge: "✨ Powerful Applications",
      bgFrom: "from-slate-900", bgVia: "via-purple-900", bgTo: "to-slate-900",
      btnFrom: "from-purple-500", btnTo: "to-indigo-600",
      glowColor: "bg-purple-500/20"
    },
    services: [
      {icon: "ShoppingCart", title: "E-Commerce App", route: "/products/our/e-commerce"},
      {icon: "Utensils", title: "Food Delivery Apps", route: "/products/our/food-delivery"},
      {icon: "ShoppingBag", title: "Grocery Delivery Apps", route: "/products/our/grocery"},
      {icon: "Stethoscope", title: "Doctor & Healthcare App", route: "/products/our/doctor"},
      {icon: "Hotel", title: "Hotel Booking App", route: "/products/our/hotel"},
      {icon: "PlaySquare", title: "OTT & Video Streaming", route: "/products/our/ott"},
      {icon: "Car", title: "Taxi App Solutions", route: "/products/our/taxi"},
      {icon: "GraduationCap", title: "Education App", route: "/products/our/education"},
      {icon: "Heart", title: "Matrimony & Dating App", route: "/products/our/matrimony"},
      {icon: "Share2", title: "Social Media App", route: "/products/our/social-media"},
      {icon: "Wrench", title: "Home Service App", route: "/products/our/home-service"},
      {icon: "Scissors", title: "Salon & Beauty App", route: "/products/our/salon"}
    ]
  },
  PrimeProducts: {
    hero: {
      title: "Prime", highlight: "Products",
      badge: "🌟 Premium Solutions",
      bgFrom: "from-slate-900", bgVia: "via-blue-900", bgTo: "to-slate-900",
      btnFrom: "from-blue-500", btnTo: "to-cyan-600",
      glowColor: "bg-blue-500/20"
    },
    services: [
      {icon: "Plane", title: "Tour & Travel", route: "/products/prime/tour-travel"},
      {icon: "Building", title: "Real Estate", route: "/products/prime/real-estate"},
      {icon: "Briefcase", title: "Job Portals", route: "/products/prime/job-portals"},
      {icon: "List", title: "Business Directory", route: "/products/prime/business-directory"},
      {icon: "Coins", title: "Crypto & Exchange", route: "/products/prime/crypto"},
      {icon: "CreditCard", title: "POS Billing", route: "/products/prime/pos"},
      {icon: "Cloud", title: "SAAS Products", route: "/products/prime/saas"},
      {icon: "Calculator", title: "Account & ERP", route: "/products/prime/erp"},
      {icon: "Truck", title: "Transport & Logistics", route: "/products/prime/transport"},
      {icon: "Video", title: "Video Conference", route: "/products/prime/video"},
      {icon: "Newspaper", title: "News & Magazine", route: "/products/prime/news"},
      {icon: "Landmark", title: "BFSI & Finance", route: "/products/prime/finance"}
    ]
  },
  OthersProducts: {
    hero: {
      title: "Other", highlight: "Products",
      badge: "🚀 Specialized Systems",
      bgFrom: "from-slate-900", bgVia: "via-emerald-900", bgTo: "to-slate-900",
      btnFrom: "from-emerald-500", btnTo: "to-teal-600",
      glowColor: "bg-emerald-500/20"
    },
    services: [
      {icon: "Sparkles", title: "NFT Products", route: "/products/others/nft"},
      {icon: "Dices", title: "Betting Apps", route: "/products/others/betting"},
      {icon: "Network", title: "MLM Products", route: "/products/others/mlm"}
    ]
  },
  GamingProducts: {
    hero: {
      title: "Gaming", highlight: "Products",
      badge: "🎮 Interactive Entertainment",
      bgFrom: "from-slate-900", bgVia: "via-red-900", bgTo: "to-slate-900",
      btnFrom: "from-red-500", btnTo: "to-orange-600",
      glowColor: "bg-red-500/20"
    },
    services: [
      {icon: "Gamepad2", title: "Casino Games", route: "/products/gaming/casino"},
      {icon: "Trophy", title: "Fantasy Sports", route: "/products/gaming/fantasy"}
    ]
  },
  EnterpriseProducts: {
    hero: {
      title: "Enterprise", highlight: "Products",
      badge: "🏢 Corporate Solutions",
      bgFrom: "from-slate-900", bgVia: "via-rose-900", bgTo: "to-slate-900",
      btnFrom: "from-rose-500", btnTo: "to-pink-600",
      glowColor: "bg-rose-500/20"
    },
    services: [
      {icon: "Users", title: "HRM", route: "/products/enterprise/hrm"},
      {icon: "Handshake", title: "CRM", route: "/products/enterprise/crm"},
      {icon: "Newspaper", title: "NMS – News Management", route: "/products/enterprise/nms"},
      {icon: "Hotel", title: "HMS – Hotel Management", route: "/products/enterprise/hms-hotel"},
      {icon: "Boxes", title: "IMS – Inventory Mgmt", route: "/products/enterprise/ims"},
      {icon: "Settings", title: "ERP", route: "/products/enterprise/erp"},
      {icon: "Activity", title: "HMS – Hospital Mgmt", route: "/products/enterprise/hms-hospital"},
      {icon: "GraduationCap", title: "SMS – School Mgmt", route: "/products/enterprise/sms"},
      {icon: "BookOpen", title: "LMS – Learning Mgmt", route: "/products/enterprise/lms"},
      {icon: "PlusSquare", title: "PMS – Pharmacy Mgmt", route: "/products/enterprise/pms"},
      {icon: "Calendar", title: "EMS – Event Mgmt", route: "/products/enterprise/ems"},
      {icon: "Utensils", title: "RMS – Restaurant Mgmt", route: "/products/enterprise/rms"}
    ]
  }
};

const BASE_SECTIONS = path.join(__dirname, 'src/pages/Footer/Solutions/Application-Solutions/sections');
const PRODUCTS_DIR = path.join(__dirname, 'src/pages/Footer/Products');

function updateHero(name, heroData) {
  const heroPath = path.join(PRODUCTS_DIR, name, 'sections', 'Hero.jsx');
  let content = fs.readFileSync(heroPath, 'utf8');
  content = content.replace(/title = "Application"/, `title = "${heroData.title}"`);
  content = content.replace(/highlight = "Solutions"/, `highlight = "${heroData.highlight}"`);
  content = content.replace(/badge = "✨ Trusted by 5000\+ Businesses"/, `badge = "${heroData.badge}"`);
  // update bg
  content = content.replace(/from-slate-900 via-purple-900 to-slate-900/g, `${heroData.bgFrom} ${heroData.bgVia} ${heroData.bgTo}`);
  // update btn
  content = content.replace(/from-cyan-500 to-blue-600/g, `${heroData.btnFrom} ${heroData.btnTo}`);
  // update glow
  content = content.replace(/bg-cyan-500\/20/g, heroData.glowColor);
  fs.writeFileSync(heroPath, content);
}

function updateServices(name, servicesData) {
  const svcPath = path.join(PRODUCTS_DIR, name, 'sections', 'ServicesSection.jsx');
  let content = fs.readFileSync(path.join(BASE_SECTIONS, 'ServicesSection.jsx'), 'utf8'); // Fresh copy from base

  const imports = servicesData.map(s => s.icon).join(', ');
  content = content.replace(/import\s+\{[\s\S]*?\}\s+from\s+['"]lucide-react['"];/s, `import { useNavigate } from 'react-router-dom';\nimport { ${imports} } from 'lucide-react';`);

  let servicesStr = servicesData.map((s, idx) => {
    return `{ id: ${idx+1}, icon: <${s.icon} />, title: "${s.title}", description: "Tailored ${s.title} solution", color: "from-blue-500 to-purple-500", bgColor: "bg-blue-50", borderColor: "border-blue-200", route: "${s.route}" }`;
  }).join(',\n  ');

  content = content.replace(/const services = \[.*?\];/s, `const services = [\n  ${servicesStr}\n];`);

  content = content.replace(/Application <span[^>]*>Solutions<\/span>/, `${name.replace('Products', '')} <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Products</span>`);

  fs.writeFileSync(svcPath, content);
}

Object.keys(PRODUCTS).forEach(prod => {
  console.log('Generating for ', prod);
  updateHero(prod, PRODUCTS[prod].hero);
  updateServices(prod, PRODUCTS[prod].services);
});

console.log("Done generating files.");
