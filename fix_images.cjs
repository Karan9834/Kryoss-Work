const fs = require('fs');
const path = require('path');

const dir = 'd:\\kryoss\\Kryoss-Work\\src\\pages\\Works\\Application Works';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
    const filePath = path.join(dir, f);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // The exact string to find
    const findStr = "item.img?.startsWith('http') ? item.img : `https://kryosssoftech.org/${item.img}`";
    
    content = content.split(findStr).join("item.img");
    
    // Handle cases where the item.img might just have been concatenated
    // e.g. "https://kryosssoftech.org/" + item.img
    // Just in case.

    fs.writeFileSync(filePath, content, 'utf8');
});
console.log('Fixed JSX components!');
