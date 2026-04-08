const fs = require('fs');
const path = require('path');

const mappings = [
    {
        hero: 'src/components/Food_delivery/FoodHero.jsx',
        target: 'src/components/Food_delivery/ProductSection.jsx',
        text: 'Explore Now',
        id: 'explore-food'
    },
    {
        hero: 'src/components/Doctor-Health-App/DoctorHealthHero.jsx',
        target: 'src/components/Doctor-Health-App/Products.jsx',
        text: 'Explore Services',
        id: 'explore-health'
    },
    {
        hero: 'src/components/Hotel-Management/HotelHero.jsx',
        target: 'src/components/Hotel-Management/ProductDetail.jsx',
        text: 'Explore Products',
        id: 'explore-hotel-products'
    },
    {
        hero: 'src/components/OTT-Landing/OTTHero.jsx',
        target: 'src/components/OTT-Landing/OTTCardSection.jsx',
        text: 'Explore Our Products',
        id: 'explore-ott'
    },
    {
        hero: 'src/components/Job-Portals/JobPortal.jsx',   
        target: 'src/components/Job-Portals/ProductsSection.jsx',
        text: 'Explore Product',
        id: 'explore-job'
    },
    {
        hero: 'src/components/Busiuness-Directory/BusiunessHero.jsx',
        target: 'src/components/Busiuness-Directory/ProductsSection.jsx',
        text: 'Explore Products',
        id: 'explore-business'
    },
    {
        hero: 'src/components/New-Management/NewsManagementHero.jsx',
        target: 'src/components/New-Management/ProductsSection.jsx',
        text: 'Explore Products',
        id: 'explore-news'
    },
    {
        hero: 'src/components/HMS-Hotel/HotelHero.jsx',
        target: 'src/components/HMS-Hotel/HotelProducts.jsx',
        text: 'Explore Solutions',
        id: 'explore-hotel-solutions'
    },
    {
        hero: 'src/components/enterprise-erp/ErpHero.jsx',
        target: 'src/components/enterprise-erp/ErpCardSection.jsx',
        text: 'Explore Solutions',
        id: 'explore-erp'
    },
    {
        hero: 'src/components/enterprise-lms/LmsHero.jsx',
        target: 'src/components/enterprise-lms/LmsCardSection.jsx',
        text: 'Explore Products',
        id: 'explore-lms'
    }
];

// Helper to escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

mappings.forEach(map => {
    try {
        const basePath = path.join(__dirname, '..');
        const heroPath = path.join(basePath, map.hero);
        const targetPath = path.join(basePath, map.target);

        // Update target
        if (fs.existsSync(targetPath)) {
            let targetContent = fs.readFileSync(targetPath, 'utf8');
            let originalContent = targetContent;
            
            if (!targetContent.includes(`id="${map.id}"`)) {
                // Add id to first container in return
                targetContent = targetContent.replace(/(return\s*\(\s*)(<[a-zA-Z0-9_\.-]+)/s, `$1$2 id="${map.id}"`);
                if (targetContent === originalContent) {
                   targetContent = targetContent.replace(/(<(?:section|div)\b)/i, `$1 id="${map.id}"`);
                }
                
                if (targetContent !== originalContent) {
                    fs.writeFileSync(targetPath, targetContent, 'utf8');
                    console.log(`✅ Target Updated: ${map.target} (ID: ${map.id})`);
                } else {
                    console.log(`⚠️ Target NOT Updated (Regex Miss): ${map.target}`);
                }
            } else {
                console.log(`ℹ️ Target already has ID: ${map.target}`);
            }
        } else {
            console.log(`❌ Target not found: ${map.target}`);
        }

        // Update hero
        if (fs.existsSync(heroPath)) {
            let heroContent = fs.readFileSync(heroPath, 'utf8');
            let originalContent = heroContent;
            
            const regex = new RegExp(`(<(button|motion\\.button|a|Link)\\b([^>]*?))>([\\s\\S]*?${escapeRegExp(map.text)}[\\s\\S]*?<\\/\\2>)`, 'i');
            heroContent = heroContent.replace(regex, (match, fullStartTag, tagName, attributes, innerContent) => {
                if (tagName === 'button' || tagName === 'motion.button') {
                    if (attributes.includes('onClick=')) return match;
                    return `${fullStartTag} onClick={() => document.getElementById('${map.id}')?.scrollIntoView({ behavior: 'smooth' })}>${innerContent}`;
                } else if (tagName === 'a') {
                    if (attributes.includes('href=')) {
                        let newAttrs = attributes.replace(/href=(['"])[^'"]*\1/, `href="#${map.id}"`);
                        return `<a ${newAttrs}>${innerContent}`;
                    }
                    return `<a href="#${map.id}" ${attributes}>${innerContent}`;
                } else if (tagName === 'Link') {
                    if (attributes.includes('to=')) {
                        let newAttrs = attributes.replace(/to=(['"])[^'"]*\1/, `to="#${map.id}"`);
                        return `<Link ${newAttrs}>${innerContent}`;
                    }
                    return `<Link to="#${map.id}" ${attributes}>${innerContent}`;
                }
                return match;
            });
            
            if (heroContent !== originalContent) {
                fs.writeFileSync(heroPath, heroContent, 'utf8');
                console.log(`✅ Hero Updated: ${map.hero} (Linked to ${map.id})`);
            } else {
                 // Might be because it's wrapped in something else or regex missed
                 // Let's try replacing button generally
                 const fallbackRegex = new RegExp(`(<(button|motion\\.button)[^>]*>)([\\s\\S]*?${escapeRegExp(map.text)}[\\s\\S]*?<\\/\\w+>)`, 'i');
                 heroContent = originalContent.replace(fallbackRegex, (match, p1, p2, p3) => {
                     if (p1.includes('onClick=')) return match;
                     return `${p1.replace('>', ` onClick={() => document.getElementById('${map.id}')?.scrollIntoView({ behavior: 'smooth' })}>`)}${p3}`;
                 });
                 if (heroContent !== originalContent) {
                     fs.writeFileSync(heroPath, heroContent, 'utf8');
                     console.log(`✅ Hero Updated (Fallback): ${map.hero} (Linked to ${map.id})`);
                 } else {
                     console.log(`⚠️ Hero NOT Updated (Regex Miss or already updated): ${map.hero}`);
                 }
            }
        } else {
            console.log(`❌ Hero not found: ${map.hero}`);
        }
    } catch (e) {
        console.error(`Error processing ${map.hero}:`, e.message);
    }
});
