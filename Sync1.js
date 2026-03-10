const fs = require('fs');

// Synchronous file read
try {
    const data = fs.readFileSync('hashir.txt', 'utf8');
    console.log('File content:', data);
} catch (err) {
    console.error('Error reading file:', err);
}


console.log('This will be logged after the file content is printed.');