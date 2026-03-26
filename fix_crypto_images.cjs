const fs = require('fs');
const path = require('path');

const dirs = [
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Works\\Crypto Works',
    'd:\\kryoss\\Kryoss-Work\\src\\pages\\Works\\Gaming&Crypto'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
    
    files.forEach(f => {
        const filePath = path.join(dir, f);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // The most common pattern
        content = content.split("item.img?.startsWith('http') ? item.img : `https://kryosssoftech.org/${item.img}`").join("item.img");
        
        // Also check if there's any case of asset instead of img
        content = content.split("item.asset?.startsWith('http') ? item.asset : `https://kryosssoftech.org/${item.asset}`").join("item.asset");
        content = content.split("`https://kryosssoftech.org${item.img}`").join("item.img");

        fs.writeFileSync(filePath, content, 'utf8');
    });
});

console.log('Fixed Crypto/Gaming components!');
