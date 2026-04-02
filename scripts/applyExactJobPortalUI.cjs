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
  
  const themeMatch = content.match(/<Testimonial theme="([a-z]+)"/);
  const theme = themeMatch ? themeMatch[1] : 'orange';

  // Inject useEffect and useRef right after activeFeatureTab
  if (!content.includes('const [leftHeight, setLeftHeight] = React.useState(0);')) {
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

  // Find the app name for subheading mapping
  let appName = "Application";
  if (file.includes("Taxi")) appName = "Taxi Booking";
  if (file.includes("Matrimony")) appName = "Matrimony";
  if (file.includes("Dating")) appName = "Dating Apps";
  if (file.includes("HomeService")) appName = "Home Services";
  if (file.includes("ECommerce")) appName = "E-Commerce";

  const newSectionMatch = `            {/* 3. Must Have Features (Tabs Layout) */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-${theme}-50/40 py-20 px-6">
                <div className="absolute inset-0 opacity-30 pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-${theme}-200/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
                            <span className="bg-gradient-to-r from-${theme}-600 to-slate-800 bg-clip-text text-transparent">
                                Must-Have
                            </span>{" "}
                            Features for ${appName}
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Complete solutions with dedicated panels ensuring flawless operations
                        </p>
                        <div className="w-20 h-1 bg-gradient-to-r from-${theme}-500 to-slate-500 rounded-full mx-auto mt-4"></div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center gap-3 md:gap-4 mb-12 flex-wrap">
                        {Object.keys(panelFeatures).map((key) => {
                            const isActive = activeTab === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveTab(key)}
                                    className={\`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-semibold rounded-full transition-all duration-300 \${isActive
                                        ? \`bg-gradient-to-r from-${theme}-600 to-slate-700 text-white shadow-lg shadow-${theme}-200 scale-105\`
                                        : \`bg-white text-slate-600 hover:text-${theme}-600 hover:bg-${theme}-50 border-2 border-${theme}-200 hover:border-${theme}-400\`
                                        }\`}
                                >
                                    {key.toUpperCase()}
                                </button>
                            );
                        })}
                    </div>

                    {/* Layout - Simple image, no box */}
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
                        
                        {/* LEFT COLUMN */}
                        <div ref={leftRef} className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(0, 2).map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className="group bg-white p-3 rounded-xl border-2 border-${theme}-200 hover:border-${theme}-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-${theme}-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Integrated module for seamless functionality
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(2, 4).map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className="group bg-white p-3 rounded-xl border-2 border-${theme}-200 hover:border-${theme}-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-${theme}-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Advanced workflow logic optimization
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
                                src={panelFeatures[activeTab].image}
                                alt={\`\${activeTab} panel\`}
                                className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl"
                                style={{ height: leftHeight > 0 ? \`\${leftHeight}px\` : 'auto' }}
                                onError={(e) => { e.target.src = '/SolAps/FallbackEcom.png'; }}
                            />
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="grid grid-cols-2 gap-3 min-h-[400px]">
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(4, 6).map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className="group bg-white p-3 rounded-xl border-2 border-${theme}-200 hover:border-${theme}-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-${theme}-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Robust tool implementation structure
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-3">
                                {panelFeatures[activeTab].features.slice(6, 8).map((item, idx) => (
                                    <div 
                                        key={idx} 
                                        className="group bg-white p-3 rounded-xl border-2 border-${theme}-200 hover:border-${theme}-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        <div className="flex gap-2">
                                            <span className="text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 text-${theme}-500 mt-0.5" />
                                            </span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800 group-hover:text-${theme}-600 transition-colors">
                                                    {item}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                                                    Enhanced ecosystem control features
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
`;

  content = content.replace(
    /\{\/\* 3\. Must Have Features \(Tabs Layout\) \*\/\}[\s\S]*?(?=\{\/\* (4|5)\. Features Grid )/,
    newSectionMatch + "\n            "
  );

  fs.writeFileSync(file, content);
  console.log('Replaced to Exact UI: ' + file);
});
