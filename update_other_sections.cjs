const fs = require('fs');
const path = require('path');

const PRODUCTS = {
  OurProducts: {
    features: { title: "Our Product", highlight: "Impact", desc: "Scaling businesses with top-tier application solutions." },
    overview: { badge: "📊 Product Overview", title: "Snapshot of", highlight: "Our Products", badge2: "Active Users", badge2val: "1M+" },
    proscons: { badge: "⚖️ Product Evaluation", title: "Pros & Cons of Application", highlight: "Solutions", bgGrad: "from-fuchsia-900 via-purple-900 to-gray-900" }
  },
  PrimeProducts: {
    features: { title: "Prime Solution", highlight: "Metrics", desc: "Delivering unparalleled value to our prime clients globally." },
    overview: { badge: "📈 Prime Insights", title: "Overview of", highlight: "Prime Products", badge2: "Global Deployments", badge2val: "10,000+" },
    proscons: { badge: "⚖️ Strategic Assessment", title: "Pros & Cons of Prime", highlight: "Systems", bgGrad: "from-blue-900 via-indigo-900 to-gray-900" }
  },
  OthersProducts: {
    features: { title: "Niche Market", highlight: "Growth", desc: "Empowering specialized sectors with custom software." },
    overview: { badge: "🎯 Niche Insights", title: "Exploring", highlight: "Specialized Products", badge2: "Niche Platforms", badge2val: "1,000+" },
    proscons: { badge: "⚖️ Niche Perspectives", title: "Pros & Cons of Specialized", highlight: "Solutions", bgGrad: "from-emerald-900 via-teal-900 to-gray-900" }
  },
  GamingProducts: {
    features: { title: "Gaming Player", highlight: "Metrics", desc: "Driving player engagement with robust platforms." },
    overview: { badge: "🎲 Gaming Insights", title: "Inside Our", highlight: "Gaming Platforms", badge2: "Daily Active Players", badge2val: "500K+" },
    proscons: { badge: "⚖️ Market Analysis", title: "Pros & Cons of Gaming", highlight: "Ventures", bgGrad: "from-red-900 via-orange-900 to-gray-900" }
  },
  EnterpriseProducts: {
    features: { title: "Enterprise", highlight: "Metrics", desc: "Streamlining global operations with specialized software." },
    overview: { badge: "📊 Enterprise Insights", title: "Overview of", highlight: "Enterprise Solutions", badge2: "Enterprise Partners", badge2val: "5,000+" },
    proscons: { badge: "⚖️ Enterprise Assessment", title: "Pros & Cons of Enterprise", highlight: "Software", bgGrad: "from-rose-900 via-pink-900 to-gray-900" }
  }
};

const PRODUCTS_DIR = path.join(__dirname, 'src/pages/Footer/Products');

Object.keys(PRODUCTS).forEach(prod => {
  const data = PRODUCTS[prod];

  // Features
  const featPath = path.join(PRODUCTS_DIR, prod, 'sections', 'FeaturesSection.jsx');
  let feat = fs.readFileSync(featPath, 'utf8');
  feat = feat.replace(/title = "Our Impact in"/, `title = "${data.features.title}"`);
  feat = feat.replace(/highlight = "Numbers"/, `highlight = "${data.features.highlight}"`);
  feat = feat.replace(/description = ".*?"/, `description = "${data.features.desc}"`);
  fs.writeFileSync(featPath, feat);

  // Overview
  const overPath = path.join(PRODUCTS_DIR, prod, 'sections', 'OverviewSection.jsx');
  let over = fs.readFileSync(overPath, 'utf8');
  over = over.replace(/badge = ".*?"/, `badge = "${data.overview.badge}"`);
  over = over.replace(/title = "A Snapshot of"/, `title = "${data.overview.title}"`);
  over = over.replace(/highlight = "Start-ups"/, `highlight = "${data.overview.highlight}"`);
  over = over.replace(/badge2 = "Active Start-ups"/, `badge2 = "${data.overview.badge2}"`);
  over = over.replace(/badge2Val = "50,000\+"/, `badge2Val = "${data.overview.badge2val}"`);
  fs.writeFileSync(overPath, over);

  // ProsCons
  const prosPath = path.join(PRODUCTS_DIR, prod, 'sections', 'ProsConsSection.jsx');
  let pros = fs.readFileSync(prosPath, 'utf8');
  pros = pros.replace(/badge = ".*?"/, `badge = "${data.proscons.badge}"`);
  pros = pros.replace(/title = "Pros & Cons of"/, `title = "${data.proscons.title}"`);
  pros = pros.replace(/highlight = "Start-ups"/, `highlight = "${data.proscons.highlight}"`);
  pros = pros.replace(/from-gray-900 via-purple-900 to-gray-900/, data.proscons.bgGrad);
  fs.writeFileSync(prosPath, pros);
});

console.log("Done updating Features, Overview, ProsCons texts directly into the isolated files.");
