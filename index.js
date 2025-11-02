const fs = require('fs');
const path = require('path');

const analyzeCode = (code) => {
    // Placeholder function for analyzing code
    console.log(`Analyzing the following code:
${code}
`);
    // Analysis logic goes here
};

const readFilesRecursively = (directory) => {
    const files = fs.readdirSync(directory);
    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (fs.statSync(filePath).isDirectory()) {
            readFilesRecursively(filePath);
        } else if (file.endsWith('.js')) {
            const code = fs.readFileSync(filePath, 'utf-8');
            analyzeCode(code);
        }
    });
};

const main = (args) => {
    if (args.length !== 2) {
        console.error('Usage: node index.js path/to/your/code');
        process.exit(1);
    }
    const codebasePath = args[1];
    readFilesRecursively(codebasePath);
};

main(process.argv);