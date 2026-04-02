const fs = require('fs');

const files = [
  'src/pages/solutions/Application Solutions/ECommerceApp.jsx',
  'src/pages/solutions/Application Solutions/MatrimonyApp.jsx',
  'src/pages/solutions/Application Solutions/DatingAppDevelopment.jsx',
  'src/pages/solutions/Application Solutions/HomeServiceApp.jsx',
  'src/pages/solutions/Application Solutions/TaxiBookingApp.jsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Skip if we already injected leftHeight
  if (!content.includes('const [leftHeight, setLeftHeight]')) {
    content = content.replace(
      /const \[activeFeatureTab, setActiveFeatureTab\] = useState\("Common"\);/g,
      `const [activeFeatureTab, setActiveFeatureTab] = useState("Common");
    const [leftHeight, setLeftHeight] = React.useState(0);
    const leftRef = React.useRef(null);

    React.useEffect(() => {
        if (leftRef.current) {
            setLeftHeight(leftRef.current.offsetHeight);
        }
    }, [activeTab]);`
    );
  }

  // Find theme color
  const themeMatch = content.match(/<Testimonial theme="([a-z]+)"/);
  const theme = themeMatch ? themeMatch[1] : 'orange';

  // Build new section
  const newSection = `            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="py-24 bg-[#FFFBF2] relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                            Comprehensive <span className="text-${theme}-500 relative inline-block">
                                Panels
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-${theme}-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </span>
                        </h2>
                        <p className="text-gray-600 text-lg font-light">
                            Explore dedicated features tailored for every stakeholder in the ecosystem.
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
                        {Object.keys(panelFeatures).map((key) => {
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={\`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 \${isActive
                                        ? "bg-gray-900 text-white shadow-lg shadow-${theme}-200 scale-105"
                                        : "bg-white text-slate-600 hover:text-${theme}-600 hover:bg-${theme}-50 border-2 border-${theme}-200 hover:border-${theme}-400"
                                        }\`}
                                >
                                    {key}
                                </button>
                            );
                        })}
                    </div>

                    {/* Layout Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start max-w-7xl mx-auto"
                        >
                            {/* LEFT COLUMN */}
                            <div ref={leftRef} className="grid grid-cols-2 gap-3">
                                <div className="space-y-3">
                                    {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                        <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-${theme}-100 hover:border-${theme}-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                            <div className="flex gap-2">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-${theme}-50 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-${theme}-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors leading-tight">{item}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                        <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-${theme}-100 hover:border-${theme}-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                            <div className="flex gap-2">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-${theme}-50 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-${theme}-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors leading-tight">{item}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* CENTER IMAGE */}
                            <div className="flex justify-center items-start pt-4 lg:pt-0">
                                <img
                                    src={panelFeatures[activeTab].image}
                                    alt={activeTab}
                                    className="w-full max-w-[280px] object-contain drop-shadow-2xl"
                                    style={{ height: leftHeight > 0 ? \`\${leftHeight}px\` : 'auto' }}
                                    onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
                                />
                            </div>

                            {/* RIGHT COLUMN */}
                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-3">
                                    {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                        <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-${theme}-100 hover:border-${theme}-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                            <div className="flex gap-2">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-${theme}-50 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-${theme}-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors leading-tight">{item}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-3">
                                    {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                        <div key={idx} className="group bg-white p-3 rounded-xl border-2 border-${theme}-100 hover:border-${theme}-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer">
                                            <div className="flex gap-2">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-${theme}-50 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-3 h-3 text-${theme}-500" />
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors leading-tight">{item}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
`;

  // Regular expression to find the entire features section and replace it
  // Look for "{/* 3. Must Have Features (Tabs Layout) */}" up to just before "{/* " (the next section)
  content = content.replace(
    /\{\/\* (3|4)\. Must Have Features \(Tabs Layout\) \*\/\}[\s\S]*?(?=\{\/\* (4|5)\. Features Grid )/,
    newSection + "\n            "
  );

  fs.writeFileSync(file, content);
  console.log('Replaced layout for ' + file);
});
