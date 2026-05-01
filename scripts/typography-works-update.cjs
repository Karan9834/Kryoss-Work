const fs = require('fs');
const path = require('path');

const targetDirs = [
    "src/pages/Works"
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
    content = content.replace(/className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"/g, `className="text-[30px] md:text-[48px] lg:text-[60px] font-bold leading-[1.2] tracking-[-0.02em] mb-6"`);
    
    // 2. Hero Description:
    content = content.replace(/className="text-lg md:text-2xl (text-[a-zA-Z0-9\-]+) max-w-3xl mx-auto font-light leading-relaxed"/g, `className="text-[16px] md:text-[18px] font-normal leading-[1.6] max-w-[29rem] mx-auto $1"`);
    
    // --- Other Sections ---
    
    // 3. Section Heading (H2):
    content = content.replace(/className="text-3xl md:text-4xl font-bold (text-[a-zA-Z0-9\-]+) mb-4"/g, `className="text-[30px] lg:text-[36px] font-bold leading-[1.2] $1 mb-4"`);
    
    // 4. Project Titles (H3 treated as Section Heading size):
    content = content.replace(/className="text-3xl md:text-4xl font-black (text-[a-zA-Z0-9\-]+) mb-6 leading-tight tracking-tight"/g, `className="text-[30px] lg:text-[36px] font-bold leading-[1.2] $1 mb-6"`);
    
    // 5. Project Description (Description Text):
    content = content.replace(/className="text-lg (text-[a-zA-Z0-9\-]+) leading-relaxed mb-10 font-light"/g, `className="text-[14px] lg:text-[16px] font-normal leading-[1.6] $1 mb-10"`);

    // 6. Badges (Tags):
    content = content.replace(/className="px-5 py-2 rounded-xl bg-white border border-gray-100 text-\[10px\] font-black uppercase tracking-widest text-gray-500 shadow-sm"/g, `className="px-5 py-2 rounded-xl bg-white border border-gray-100 text-[12px] font-medium tracking-[0.05em] uppercase text-gray-500 shadow-sm"`);

    fs.writeFileSync(filePath, content, 'utf-8');
}

const allFiles = [];
for(const dir of targetDirs) {
    if(fs.existsSync(path.join(process.cwd(), dir))) {
        getFiles(path.join(process.cwd(), dir), allFiles);
    }
}

for(const file of allFiles) {
    processFile(file);
}

console.log("Updated", allFiles.length, "files in Works.");
