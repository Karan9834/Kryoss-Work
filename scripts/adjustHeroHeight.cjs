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

  // 1. Replace section height classes
  // We want to replace `relative min-h-[90vh] flex items-center justify-center overflow-hidden`
  // with `relative w-full overflow-hidden`
  content = content.replace(
    /className="relative min-h-\[90vh\] flex items-center justify-center overflow-hidden/g,
    'className="relative w-full overflow-hidden'
  );

  // 2. Replace container padding
  // We want to replace `container mx-auto px-4 lg:px-8 relative z-10 pt-20`
  // with `container mx-auto px-4 lg:px-8 relative z-10 py-16`
  content = content.replace(
    /container mx-auto px-4 lg:px-8 relative z-10 pt-20/g,
    'container mx-auto px-4 lg:px-8 relative z-10 py-16'
  );

  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
