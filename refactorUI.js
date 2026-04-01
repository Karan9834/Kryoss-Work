const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'pages', 'solutions', 'Application Solutions');
const taxiPath = path.join(srcDir, 'TaxiBookingApp.jsx');

if (!fs.existsSync(taxiPath)) {
  console.error("TaxiBookingApp.jsx not found.");
  process.exit(1);
}

const taxiContent = fs.readFileSync(taxiPath, 'utf8');

// Extract the return block of TaxiBookingApp.jsx
// We need everything from `return (` until ```` \n    );\n};````
const returnStart = taxiContent.indexOf('return (');
const returnEnd = taxiContent.lastIndexOf(';');
if (returnStart === -1 || returnEnd === -1) {
  console.error("Could not find the bounds of the return statement in TaxiBookingApp.jsx");
  process.exit(1);
}

// Extract imports from TaxiBookingApp.jsx 
// Specifically the lucide-react imports and common components.
const commonImportsRegex = /import Testimonial[\s\S]*?ContactUs.*?;/m;
const commonCompMatch = taxiContent.match(commonImportsRegex);
const commonImports = commonCompMatch ? commonCompMatch[0] : `import Testimonial from '../../../components/Common/Testimonial';\nimport Industries from '../../../components/Common/Industries';\nimport OurWork from '../../../components/Common/OurWork';\nimport ContactUs from '../../../components/Common/ContactUs';`;

// Now let's just do manual rewrites, it's safer. Actually, mapping the data correctly from each file to the Taxi layout is complex.
