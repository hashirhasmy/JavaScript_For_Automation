const fs = require('fs');

fs.readFile('hashir.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

console.log('This will be logged immediately, before the file content is printed.');