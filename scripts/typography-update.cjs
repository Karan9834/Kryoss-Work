const fs = require('fs');
const path = require('path');

const targetDirs = [
    "src/pages/solutions"
];

function getFiles(dir, filesList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            getFiles(fullPath, filesList);
        } else if (fullPath.endsWith('.jsx')) {
            filesList.push(fullPath);
        }
    }
    return filesList;
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // --- Hero Section ---
    
    // 1. Headline (H1):
    content = content.replace(/className="text-3xl md:text-5xl font-bold mb-6 leading-tight (.*?)"/g, `className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6 $1"`);
    
    // 2. Hero Description: `text-base ... font-semibold`
    content = content.replace(/className="text-base (.*?) mb-6 max-w-lg mx-auto lg:mx-0 font-semibold"/g, `className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto lg:mx-0 mb-6 $1"`);
    
    // 3. Hero Button Text:
    content = content.replace(/className="group px-8 py-4 bg-gray-900 text-white rounded-full font-semibold (.*?) transition-all duration-300 flex items-center justify-center gap-2"/g, `className="text-[16px] font-semibold tracking-[0.01em] normal-case group px-8 py-4 bg-gray-900 text-white rounded-full $1 transition-all duration-300 flex items-center justify-center gap-2"`);

    // --- Other Sections ---
    
    // 4. Section Heading (H2):
    content = content.replace(/className="text-3xl md:text-5xl font-bold (text-[a-zA-Z0-9\[\]\-]+) mb-6 leading-tight"/g, `className="text-[30px] lg:text-[36px] font-bold leading-[1.2] $1 mb-6"`);
    
    content = content.replace(/className="text-4xl md:text-5xl lg:text-6xl font-bold (text-[a-zA-Z0-9\[\]\-]+) mb-6 leading-tight"/g, `className="text-[30px] lg:text-[36px] font-bold leading-[1.2] $1 mb-6"`);

    content = content.replace(/className="text-3xl md:text-4xl lg:text-5xl font-extrabold (text-[a-zA-Z0-9\[\]\-]+)"/g, `className="text-[30px] lg:text-[36px] font-bold leading-[1.2] $1"`);

    content = content.replace(/className="text-3xl md:text-5xl font-bold (text-[a-zA-Z0-9\[\]\-]+) mb-6 font-display"/g, `className="text-[30px] lg:text-[36px] font-bold leading-[1.2] $1 mb-6 font-display"`);

    // Highlighted Text - some places have `bg-gradient-to-... bg-clip-text text-transparent`
    content = content.replace(/className="text-transparent bg-clip-text bg-gradient-to-(.*?)"/g, `className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-$1"`);

    // Wait, the highlighted gradient text in other sections should be `text-[30px] lg:text-[36px]`. Since it's ambiguous which is hero vs other sections by exact match, I'll restrict it. Actually, H1 already holds the size. If we apply the size to the inline span, it might break responsive behavior if it conflicts. I'll rely on inheritance where possible but also match exactly `text-transparent bg-clip-text` if it's explicitly styled.
    
    // Let's remove the size styles if present in gradients, and just apply exactly what is needed for the gradient text in other sections.
    content = content.replace(/className="bg-gradient-to-r from-(.*?) to-(.*?) bg-clip-text text-transparent"/g, `className="text-[30px] lg:text-[36px] font-bold leading-[1.2] bg-gradient-to-r from-$1 to-$2 bg-clip-text text-transparent"`);

    // 5. Badge Text
    content = content.replace(/className="inline-block px-4 py-1.5 (bg-[a-zA-Z0-9\[\]\-]+) (text-[a-zA-Z0-9\[\]\-]+) rounded-full text-sm font-semibold tracking-wide mb-4"/g, `className="text-[12px] font-medium tracking-[0.05em] uppercase inline-block px-4 py-1.5 $1 $2 rounded-full mb-4"`);

    // 6. Section H2 Description Text
    content = content.replace(/className="(text-[a-zA-Z0-9\[\]\-]+) mb-6 text-base font-semibold leading-relaxed max-w-lg"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 mb-6 max-w-lg"`);
    
    content = content.replace(/className="(text-[a-zA-Z0-9\[\]\-]+) mt-4 max-w-2xl mx-auto"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 mt-4 max-w-2xl mx-auto"`);
    
    content = content.replace(/className="(text-[a-zA-Z0-9\[\]\-]+) text-lg md:text-xl max-w-2xl mx-auto"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 max-w-2xl mx-auto"`);

    // 7. Feature List Items & descriptions
    content = content.replace(/className="text-sm font-semibold (text-[a-zA-Z0-9\[\]\-]+) (group-hover:text-[a-zA-Z0-9\[\]\-]+) transition-colors leading-tight"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 $2 transition-colors"`);

    content = content.replace(/className="text-xs (text-[a-zA-Z0-9\[\]\-]+) mt-0.5 leading-relaxed"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 mt-0.5"`);
    
    content = content.replace(/className="(text-[a-zA-Z0-9\[\]\-]+) font-medium leading-relaxed"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1"`);
    
    content = content.replace(/className="(text-[a-zA-Z0-9\[\]\-]+) text-sm leading-relaxed"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1"`);

    content = content.replace(/className="font-bold (text-[a-zA-Z0-9\[\]\-]+) text-lg mb-2"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 mb-2"`);

    content = content.replace(/className="text-xl font-bold (text-[a-zA-Z0-9\[\]\-]+) mb-3"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 mb-3"`);

    fs.writeFileSync(filePath, content, 'utf-8');
}

const allFiles = [];
for(const dir of targetDirs) {
    getFiles(path.join(process.cwd(), dir), allFiles);
}

for(const file of allFiles) {
    processFile(file);
}

console.log("Updated", allFiles.length, "files.");
