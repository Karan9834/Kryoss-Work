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

  // Safely wipe any React.useEffect block concerning leftRef
  content = content.replace(/React\.useEffect\(\(\) => \{\s*if \(leftRef\.current\) \{\s*setLeftHeight\(leftRef\.current\.offsetHeight\);\s*\}\s*\}, \[activeTab\]\);/g, '');

  fs.writeFileSync(file, content);
  console.log('Cleaned up React.useEffect blocks from: ' + file);
});
