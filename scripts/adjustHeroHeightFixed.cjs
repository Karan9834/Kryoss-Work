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
  
  // Replace the hero section base classes to include the explicit 550/600px height requirements
  content = content.replace(
    /className="relative w-full overflow-hidden (bg-gradient-[^"]*)"/g,
    'className="relative w-full min-h-[550px] lg:min-h-[600px] flex md:items-center overflow-hidden $1"'
  );
  
  fs.writeFileSync(file, content);
  console.log('Updated ' + file);
});
