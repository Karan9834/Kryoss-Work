const fs = require('fs');

const p = 'src/pages/solutions/Application Solutions/';

const map = {
  'BusinessDirectoryApp.jsx': "import ProductsSection from '../../../components/Busiuness-Directory/ProductsSection';",
  'FoodDeliveryApp.jsx': "import ProductSection from '../../../components/Food_delivery/ProductSection';",
  'HomeServiceApp.jsx': "import ProductSection from '../../../components/Home-Services/ProductSection';",
  'ECommerceApp.jsx': "import Products from '../../../components/E-Commerce-App/Products';",
  'GroceryDeliveryApp.jsx': "import GroceryCardSection from '../../../components/Grocery-Landing/GroceryCardSection';",
  'RealEstateApp.jsx': "import RealEstateCardSection from '../../../components/RealEstate-Landing/RealEstateCardSection';",
  'SalonBeautyApp.jsx': "import SalonCardSection from '../../../components/Salon-Beauty-Landing/SalonCardSection';",
  'TaxiBookingApp.jsx': "import TaxiCardSection from '../../../components/Taxi-Landing/TaxiCardSection';",
  'MatrimonyApp.jsx': "import DatingCardSection from '../../../components/Dating-Matrimony-Landing/DatingCardSection';",
  'OttAppDevelopment.jsx': "import OTTCardSection from '../../../components/OTT-Landing/OTTCardSection';",
  'DatingAppDevelopment.jsx': "import DatingCardSection from '../../../components/Dating-Matrimony-Landing/DatingCardSection';"
};

for (const [file, importStr] of Object.entries(map)) {
  const filePath = p + file;
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes(importStr.split(' from')[0])) {
     console.log('Skipping ' + file + ' - already imported');
     continue;
  }
  
  const contactUsMatch = "import ContactUs from '../../../components/Common/ContactUs';";
  if (content.includes(contactUsMatch)) {
     content = content.replace(contactUsMatch, contactUsMatch + '\\n' + importStr);
     // Because \n escapes
     content = content.replace('\\\\n', '\\n'); // cleanup just in case
     
     // actually let's just do a plain string replace with literal newline
     let lines = content.split(contactUsMatch);
     if (lines.length === 2) {
         content = lines[0] + contactUsMatch + "\\n" + importStr + lines[1];
     }
     
     content = content.replace("\\n", "\n");
     fs.writeFileSync(filePath, content);
     console.log('Added import to', file);
  } else {
     console.log('Could not find ContactUs import in', file);
  }
}
